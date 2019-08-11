import { Component, OnInit } from '@angular/core';
import { ResellerUserService } from '../../service/reselleruser.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResellerUser } from '@utils/models';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRoleType, UserRoleType2LabelMapping } from '@app/panel/domain/user-role-type';
import {ResellerList} from '@app/panel/domain/reseller-list';
import {SelectSearch} from '@utils/models/select-search.model';
import {ResellerService} from '@app/panel/service/reseller.service';

@Component({
  selector: 'app-reseller-user-edit',
  templateUrl: './reseller-user-edit.component.html',
  styleUrls: ['./reseller-user-edit.component.scss']
})
export class ResellerUserEditComponent extends FormBaseComponent implements OnInit {

  public UserRoleType2LabelMapping = UserRoleType2LabelMapping;

  public roleTypes = Object.values(UserRoleType).filter(value => typeof value === 'string');

  resellerUser: ResellerUser = new ResellerUser();
  valueExists = false;

  resellers: ResellerList[];
  resellerselectdata: SelectSearch[] = [];

  formGroup = new FormGroup({
    // id: new FormControl({value: null, disabled: true}, [Validators.maxLength(255)]),
    login: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    email: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    first_name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    last_name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    role: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    owner_id: new FormControl('', [Validators.required]),
    enabled: new FormControl(false),
    tnx_authorize: new FormControl(false),
    tnx_authorize3d: new FormControl(false),
    tnx_sale: new FormControl(false),
    tnx_sale3d: new FormControl(false),
    tnx_capture: new FormControl(false),
    tnx_refund: new FormControl(false),
    tnx_void: new FormControl(false),
    tnx_init_recurring_sale: new FormControl(false),
    tnx_recurring_sale: new FormControl(false),
    tnx_account_verification: new FormControl(false),
  });

  constructor(private resellerUserService: ResellerUserService,
              private resellerService: ResellerService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
    super();
  }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Reseller User', slug: '/panel/resellerusers' }, { name: 'Edit' }]);
    const resellerUser = this.route.snapshot.data['reselleruser'];

    if (!resellerUser) {
      this.router.navigate(['panel', 'resellerusers']);
    }

    this.resellerUser = resellerUser;
    this.formGroup.patchValue(this.resellerUser);

    this.resellerService.getResellersList()
      .subscribe(value => {
        if (value != null) {
          this.resellers = value;
          this.resellerselectdata = this.resellers.map(reseller => new SelectSearch(reseller.id, reseller.name));
        }
      });
  }

  selectTnx(controlName: string) {
    this.formGroup.get(controlName).setValue(!this.formGroup.get(controlName).value);
  }

  clear() {
    this.formGroup.get('login').reset(null);
    this.formGroup.get('email').reset(null);
    this.formGroup.get('first_name').reset(null);
    this.formGroup.get('last_name').reset(null);
    this.formGroup.get('role').reset('');
    this.formGroup.get('owner_id').reset('');
    this.formGroup.get('enabled').reset(null);
    this.formGroup.get('tnx_authorize').reset(null);
    this.formGroup.get('tnx_authorize3d').reset(null);
    this.formGroup.get('tnx_sale').reset(null);
    this.formGroup.get('tnx_sale3d').reset(null);
    this.formGroup.get('tnx_capture').reset(null);
    this.formGroup.get('tnx_refund').reset(null);
    this.formGroup.get('tnx_void').reset(null);
    this.formGroup.get('tnx_init_recurring_sale').reset(null);
    this.formGroup.get('tnx_recurring_sale').reset(null);
    this.formGroup.get('tnx_account_verification').reset(null);
  }

  submit() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.resellerUser.login = this.formGroup.get('login').value;
      this.resellerUser.email = this.formGroup.get('email').value;
      this.resellerUser.first_name = this.formGroup.get('first_name').value;
      this.resellerUser.last_name = this.formGroup.get('last_name').value;
      this.resellerUser.role = this.formGroup.get('role').value;
      this.resellerUser.owner_id = this.formGroup.get('owner_id').value;
      this.resellerUser.enabled = this.formGroup.get('enabled').value;
      this.resellerUser.tnx_authorize = this.formGroup.get('tnx_authorize').value;
      this.resellerUser.tnx_authorize3d = this.formGroup.get('tnx_authorize3d').value;
      this.resellerUser.tnx_sale = this.formGroup.get('tnx_sale').value;
      this.resellerUser.tnx_sale3d = this.formGroup.get('tnx_sale3d').value;
      this.resellerUser.tnx_capture = this.formGroup.get('tnx_capture').value;
      this.resellerUser.tnx_refund = this.formGroup.get('tnx_refund').value;
      this.resellerUser.tnx_void = this.formGroup.get('tnx_void').value;
      this.resellerUser.tnx_init_recurring_sale = this.formGroup.get('tnx_init_recurring_sale').value;
      this.resellerUser.tnx_recurring_sale = this.formGroup.get('tnx_recurring_sale').value;
      this.resellerUser.tnx_account_verification = this.formGroup.get('tnx_account_verification').value;

      this.resellerUserService.persist(this.resellerUser).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'resellerusers', this.resellerUser.id]);
      }, (error) => {
        this.formGroup.enable();
      });
    }
  }

  handleError(error: string) {
    if (error === 'RESELLER_USER_EXISTS') {
      this.valueExists = true;
    }
  }
}
