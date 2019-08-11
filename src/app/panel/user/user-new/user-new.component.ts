import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { Router } from '@angular/router';
import { User } from '@utils/models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';

import { UserRoleType, UserRoleType2LabelMapping } from '../../domain/user-role-type';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent extends FormBaseComponent implements OnInit {

  public UserRoleType2LabelMapping = UserRoleType2LabelMapping;

  public roleTypes = Object.values(UserRoleType).filter(value => typeof value === 'string');

  user: User = new User();
  loginValueExists = false;
  emailValueExists = false;

  formGroup = new FormGroup({
    login: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    email: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    first_name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    last_name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    role: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    enabled: new FormControl(false),
  });

  constructor(private userService: UserService,
    private router: Router,
    private breadcrumbService: BreadcrumbService) {
    super();
  }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: ' Admin Users', slug: '/panel/users' }, { name: 'New' }]);
  }

  clear() {
    this.formGroup.get('login').reset(null);
    this.formGroup.get('email').reset(null);
    this.formGroup.get('first_name').reset(null);
    this.formGroup.get('last_name').reset(null);
    this.formGroup.get('last_name').reset(null);
    this.formGroup.get('role').reset('');
    this.formGroup.get('enabled').reset(null);
  }

  submit() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.user.login = this.formGroup.get('login').value;
      this.user.email = this.formGroup.get('email').value;
      this.user.first_name = this.formGroup.get('first_name').value;
      this.user.last_name = this.formGroup.get('last_name').value;
      this.user.role = this.formGroup.get('role').value;
      this.user.enabled = this.formGroup.get('enabled').value;

      this.userService.save(this.user).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'users']);
      }, error => this.handleError(error.error));
    }
  }

  handleError(error: string) {
    this.formGroup.enable();
    if (error === 'USER_EXISTS') {
      this.loginValueExists = true;
    }
    if (error === 'EMAIL_EXISTS') {
      this.emailValueExists = true;
    }
  }
}
