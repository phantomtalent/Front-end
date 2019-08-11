import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../../service/merchant.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { Router } from '@angular/router';
import { Merchant } from '@utils/models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';
import { MerchantStateType, MerchantStateType2LabelMapping } from '../../domain/merchant-state-type';
import { IdGenerator } from '@utils/id.generator';

@Component({
  selector: 'app-merchant-new',
  templateUrl: './merchant-new.component.html',
  styleUrls: ['./merchant-new.component.scss']
})
export class MerchantNewComponent extends FormBaseComponent implements OnInit {

  merchant: Merchant = new Merchant();
  loginValueExists = false;
  emailValueExists = false;

  public MerchantStateType2LabelMapping = MerchantStateType2LabelMapping;

  public stateTypes = Object.values(MerchantStateType).filter(value => typeof value === 'number');

  formGroup;
  isAdded = false;
  isIpValid = false;

  constructor(private merchantService: MerchantService,
    private router: Router,
    private breadcrumbService: BreadcrumbService) {
    super();
  }

  ngOnInit() {
    this.isAdded = false;
    this.formGroup = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      login: new FormControl(IdGenerator.randomString(), [Validators.required, Validators.maxLength(40)]),
      pwd: new FormControl(IdGenerator.randomString(), [Validators.required, Validators.maxLength(40)]),
      street_address: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      zip_code: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      address_state: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      allowed_ip_address: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      allowed_domains: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      state_raw: new FormControl('', [Validators.required]),
      supports_api: new FormControl(false),
    });
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/resellers' }, { name: 'Merchants', slug: '/panel/merchants' }, { name: 'New' }]);
  }

  clear() {
    this.formGroup.get('name').reset(null);
    this.formGroup.get('login').reset(null);
    this.formGroup.get('pwd').reset(null);
    this.formGroup.get('street_address').reset(null);
    this.formGroup.get('zip_code').reset(null);
    this.formGroup.get('address_state').reset(null);
    this.formGroup.get('allowed_ip_address').reset(null);
    this.formGroup.get('allowed_domains').reset(null);
    this.formGroup.get('state_raw').reset('');
    this.formGroup.get('supports_api').reset('');
  }

  submit() {
    this.isAdded = true;
    if(!this.isIpValid){
      return;
    }
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.merchant.name = this.formGroup.get('name').value;
      this.merchant.login = this.formGroup.get('login').value;
      this.merchant.pwd = this.formGroup.get('pwd').value;
      this.merchant.street_address = this.formGroup.get('street_address').value;
      this.merchant.zip_code = this.formGroup.get('zip_code').value;
      this.merchant.address_state = this.formGroup.get('address_state').value;
      this.merchant.allowed_ip_address = this.formGroup.get('allowed_ip_address').value;
      this.merchant.allowed_domains = this.formGroup.get('allowed_domains').value;
      this.merchant.state_raw = this.formGroup.get('state_raw').value;
      this.merchant.supports_api = this.formGroup.get('supports_api').value;

      this.merchantService.save(this.merchant).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'merchants']);
      },
        error => this.handleError(error.error));
    }
  }

  handleError(error: string) {
    this.formGroup.enable();
    if (error === 'MERCHANT_EXISTS') {
      this.loginValueExists = true;
    }
    if (error === 'EMAIL_EXISTS') {
      this.emailValueExists = true;
    }
  }

  isValidateIp = () => {
    let val = this.formGroup.get('allowed_ip_address').value;
    let ipPattern = new RegExp('^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^\\*$');
    if(!Array.isArray(val)) val = [val];
    let isValid = true;
    if(val.length <= 0) isValid = false;
    for(let ip of val){
      if(!ipPattern.test(ip)) {
        isValid = false;
        break;
      }
    }
    return isValid;
  }

  onChange = ($event) => {
    this.isAdded = true;
    this.isIpValid = this.isValidateIp();
    this.formGroup.get('allowed_ip_address').reset($event);
  }
}
