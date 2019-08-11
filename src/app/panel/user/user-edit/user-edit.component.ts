import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@utils/models';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRoleType, UserRoleType2LabelMapping } from '@app/panel/domain/user-role-type';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent extends FormBaseComponent implements OnInit {

  public UserRoleType2LabelMapping = UserRoleType2LabelMapping;

  public roleTypes = Object.values(UserRoleType).filter(value => typeof value === 'string');

  user: User = new User();
  valueExists = false;

  formGroup = new FormGroup({
    // id: new FormControl({value: null, disabled: true}, [Validators.maxLength(255)]),
    login: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    email: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    first_name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    last_name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    role: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    enabled: new FormControl(false),
  });

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
    super();
  }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Admin Users', slug: '/panel/users' }, { name: 'Edit' }]);
    const user = this.route.snapshot.data['user'];

    if (!user) {
      this.router.navigate(['panel', 'users']);
    }

    this.user = user;
    this.formGroup.patchValue(this.user);
  }

  clear() {
    this.formGroup.get('login').reset(null);
    this.formGroup.get('email').reset(null);
    this.formGroup.get('first_name').reset(null);
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

      this.userService.persist(this.user).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'users', this.user.id]);
      }, (error) => {
        this.formGroup.enable();
      });
    }
  }

  handleError(error: string) {
    if (error === 'USER_EXISTS') {
      this.valueExists = true;
    }
  }
}
