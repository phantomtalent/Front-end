import { Component, OnInit } from '@angular/core';
import { MerchantUserService } from '../../service/merchantuser.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MerchantUser } from '@utils/models';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRoleType, UserRoleType2LabelMapping } from '@app/panel/domain/user-role-type';
import {MerchantList} from "@app/panel/domain/merchant-list";
import {SelectSearch} from "@utils/models/select-search.model";
import {MerchantService} from "@app/panel/service/merchant.service";

@Component({
  selector: 'app-merchant-user-edit',
  templateUrl: './merchant-user-edit.component.html',
  styleUrls: ['./merchant-user-edit.component.scss']
})
export class MerchantUserEditComponent extends FormBaseComponent implements OnInit {

  public UserRoleType2LabelMapping = UserRoleType2LabelMapping;

  public roleTypes = Object.values(UserRoleType).filter(value => typeof value === 'string');

  merchantUser: MerchantUser = new MerchantUser();
  valueExists = false;

  merchants: MerchantList[];
  merchantselectdata: SelectSearch[] = [];

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

  constructor(private merchantUserService: MerchantUserService,
              private merchantService: MerchantService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
    super();
  }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Merchant Users', slug: '/panel/merchantusers' }, { name: 'Edit' }]);
    const merchantUser = this.route.snapshot.data['merchantuser'];

    if (!merchantUser) {
      this.router.navigate(['panel', 'merchantusers']);
    }

    this.merchantUser = merchantUser;
    this.formGroup.patchValue(this.merchantUser);

    this.merchantService.getMerchantsList()
      .subscribe(value => {
        if (value != null) {
          this.merchants = value;
          this.merchantselectdata = this.merchants.map(merchant => new SelectSearch(merchant.id, merchant.name));
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
      this.merchantUser.login = this.formGroup.get('login').value;
      this.merchantUser.email = this.formGroup.get('email').value;
      this.merchantUser.first_name = this.formGroup.get('first_name').value;
      this.merchantUser.last_name = this.formGroup.get('last_name').value;
      this.merchantUser.role = this.formGroup.get('role').value;
      this.merchantUser.owner_id = this.formGroup.get('owner_id').value;
      this.merchantUser.enabled = this.formGroup.get('enabled').value;
      this.merchantUser.tnx_authorize = this.formGroup.get('tnx_authorize').value;
      this.merchantUser.tnx_authorize3d = this.formGroup.get('tnx_authorize3d').value;
      this.merchantUser.tnx_sale = this.formGroup.get('tnx_sale').value;
      this.merchantUser.tnx_sale3d = this.formGroup.get('tnx_sale3d').value;
      this.merchantUser.tnx_capture = this.formGroup.get('tnx_capture').value;
      this.merchantUser.tnx_refund = this.formGroup.get('tnx_refund').value;
      this.merchantUser.tnx_void = this.formGroup.get('tnx_void').value;
      this.merchantUser.tnx_init_recurring_sale = this.formGroup.get('tnx_init_recurring_sale').value;
      this.merchantUser.tnx_recurring_sale = this.formGroup.get('tnx_recurring_sale').value;
      this.merchantUser.tnx_account_verification = this.formGroup.get('tnx_account_verification').value;

      this.merchantUserService.persist(this.merchantUser).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'merchantusers', this.merchantUser.id]);
      }, (error) => {
        this.formGroup.enable();
      });
    }
  }

  handleError(error: string) {
    if (error === 'MERCHANT_USER_EXISTS') {
      this.valueExists = true;
    }
  }
}
