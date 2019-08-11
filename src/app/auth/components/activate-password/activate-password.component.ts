import { Component, OnInit } from '@angular/core';
import {FormBaseComponent} from '@shared/components/form-base/form-base.component';
import {ActivatedRoute, Router} from '@angular/router';
import {IUserReset} from '@utils/interfaces';
import {UserReset} from '@utils/models';
import {PasswordResetService} from '@core/services/password-reset.service';
import {OauthTokenStorageService} from '@core/services/oauth/oauth-token-storage.service';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-password',
  templateUrl: './activate-password.component.html',
  styleUrls: ['./activate-password.component.scss']
})
export class ActivatePasswordComponent extends FormBaseComponent implements OnInit {
  user: IUserReset = new UserReset();

  loading = false;
  tokenExpired = false;
  serverException = false;
  invalidToken = false;
  success = false;

  formGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    confirmPassword: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    confirmation_token: new FormControl(null)
  }, {validators: [this.confirmPassword]});

  constructor(private route: ActivatedRoute,
              private router: Router,
              private resetService: PasswordResetService,
              private tokenStorage: OauthTokenStorageService) {
    super();
  }

  ngOnInit() {
    const token = this.route.snapshot.queryParams['token'];
    if (this.tokenStorage.isTokenValid(token)) {
      this.loading = true;
      this.formGroup.disable();
      this.formGroup.get('confirmation_token').setValue(token);
      this.resetService.sendConfirmationToken(this.formGroup.value)
        .subscribe((user) => {
            this.formGroup.patchValue(user);
            this.loading = false;
            this.formGroup.enable();
          },
          error => this.handleError(error));
    } else {
      this.tokenExpired = true;
      // setTimeout(() => {
      //   this.router.navigate(['auth']);
      // }, 3000);
    }
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.loading = true;
      this.formGroup.disable();
      this.resetService.resetConfirmationPassword(this.formGroup.value).subscribe(() => {
          this.loading = false;
          this.success = true;
          this.formGroup.enable();
          setTimeout(() => {
            this.router.navigate(['auth']);
          }, 3000);
        },
        error => this.handleError(error));
    }
  }

  confirmPassword(formGroup: FormGroup): ValidationErrors | null {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    if ((!password.value && !confirmPassword.value) || (password.value === confirmPassword.value)) {
      password.updateValueAndValidity({onlySelf: true});
      confirmPassword.updateValueAndValidity({onlySelf: true});
      return null;
    }

    password.setErrors({confirmPassword: true});
    confirmPassword.setErrors({confirmPassword: true});
    return {'confirmPassword': true};
  }

  handleError(error) {
    this.loading = false;
    if (this.formGroup) {
      this.formGroup.enable();
    }

    switch (error.status) {
      case 500:
        this.serverException = true;
        break;
      case 404:
        this.invalidToken = true;
        break;
    }
  }

}
