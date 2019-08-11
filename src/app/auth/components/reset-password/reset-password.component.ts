import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordResetService} from '@core/services/password-reset.service';
import {IUserReset} from '@utils/interfaces';
import {UserReset} from '@utils/models';
import {FormBaseComponent} from '@shared/components/form-base/form-base.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends FormBaseComponent implements OnInit {
  user: IUserReset = new UserReset();

  loading = false;

  nameEmailMismatch = false;
  invalidToken = false;
  notFound = false;
  serverException = false;
  success = false;

  formGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    email: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(255)])
  });

  constructor(private resetService: PasswordResetService,
              private router: Router,
              private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.loading = true;
      this.nameEmailMismatch = false;
      this.notFound = false;
      this.serverException = false;

      this.resetService.requestReset(this.formGroup.value).subscribe(user => {
          this.loading = false;
          this.formGroup.enable();
          this.success = true;
          setTimeout(() => {
            this.router.navigate(['auth']);
          }, 3000);
        },
        error => {
          this.loading = false;
          this.formGroup.enable();

          switch (error.status) {
            case 404:
              this.notFound = true;
              break;
            case 500:
              this.serverException = true;
              break;
          }
        });
    }
  }

  cancel(): void {
    this.router.navigate(['auth']);
  }

  send() {
    if (this.route.snapshot.queryParamMap.has('token')) {
      this.loading = true;
      this.user.reset_password_token = this.route.snapshot.queryParams['token'];
      this.resetService.sendResetPasswordToken(this.user)
        .subscribe((user) => {
            this.user = user;
            this.loading = false;
          },
          error => this.handleError(error));
    }
  }

  reset() {

    if (this.user.password !== this.user.confirmPassword) {
      return;
    }

    this.loading = true;
    this.resetService.resetPassword(this.user).subscribe(() => {
        this.loading = false;
      },
      error => this.handleError(error));
  }

  handleError(error) {
    this.loading = false;
    switch (error.error) {
      case 'INVALID_TOKEN':
        this.invalidToken = true;
        break;
      case 'NAME_AND_EMAIL_MISMATCH':
        this.nameEmailMismatch = true;
        break;
    }

    switch (error.status) {
      case 404:
        this.notFound = true;
        break;
    }

  }

}
