import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MerchantService } from '../../service/merchant.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Company, MerchantCompanies, Merchant, MerchantUser, Contract, ContractsTerminals} from '@utils/models';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { MerchantStateType, MerchantStateType2LabelMapping } from '@app/panel/domain/merchant-state-type';
import {INotificationUrls, INotificationUrlType} from '@utils/interfaces';
import {BsModalService} from 'ngx-bootstrap';
import {NotificationUrlsService} from '@app/panel/service/notification-urls.service';
import {forkJoin} from 'rxjs';
import { R3TargetBinder } from '@angular/compiler';
import { BrowserStack } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-merchant-edit',
  templateUrl: './merchant-edit.component.html',
  styleUrls: ['./merchant-edit.component.scss']
})
export class MerchantEditComponent extends FormBaseComponent implements OnInit {

  merchant: Merchant = new Merchant();
  valueExists = false;

  public MerchantStateType2LabelMapping = MerchantStateType2LabelMapping;

  public stateTypes = Object.values(MerchantStateType).filter(value => typeof value === 'number');

  notificationUrlsList: INotificationUrls[] = [];
  notificationTypesList: INotificationUrlType[] = [];

  successMsg: string;
  errorMsg: string;
  company: string;
  companiesList: MerchantCompanies[] = [];
  companies: Company[] = [];

  successMerchantUserMsg: string;
  errorMerchantUserMsg: string;
  merchantUser: string;
  merchantUserList: MerchantUser[] = [];
  merchantUsers: MerchantUser[] = [];

  formGroup;
  notificationForm = new FormGroup({
    id: new FormControl(''),
    url_type: new FormControl('', [Validators.required]),
    url: new FormControl(null, [
      Validators.required,
      Validators.maxLength(255),
      Validators.pattern(/^((https?:\/\/|ftp:\/\/|www\.|[^\s:=]+@www\.).*?[a-z_\/0-9\-\#=&])(?=(\.|,|;|\?|\!)?("|'|«|»|\[|\s|\r|\n|$))$/i)
    ]),
    enabled: new FormControl(false)
  });

  notificationDialog;
  notificationServerError: 'NOTIFICATION_URL_EXISTS' = null;

  constructor(private merchantService: MerchantService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private dialogService: BsModalService,
    private notificationUrlsService: NotificationUrlsService) {
    super();
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      login: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
      pwd: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
      street_address: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      zip_code: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      address_state: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      allowed_domains: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      allowed_ip_address: new FormControl(null, [Validators.required]),
      state_raw: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      supports_api: new FormControl(this.merchant.supports_api),
    });
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/resellers' }, { name: 'Merchants', slug: '/panel/merchants' }, { name: 'Edit' }]);
    const merchant = this.route.snapshot.data['merchant'];

    if (!merchant) {
      this.router.navigate(['panel', 'merchants']);
    }

    merchant.allowed_ip_address = merchant.allowed_ip_address.split(",");
    this.merchant = merchant;
    this.formGroup.patchValue(this.merchant);

    forkJoin(
      this.merchantService.getCompaniesList(),
      this.merchantService.getCompanies(this.merchant.id)
    ).subscribe(([merchants, merchantsCompanies]) => {
      if (merchants) {
        merchants.forEach((element) => {
          this.companies.push(new Company(element));
        });
        if (merchantsCompanies) {
          merchantsCompanies.forEach((element) => {
            const merchantCompanies = new MerchantCompanies(element);
            const company = this.companies.find((ct) => ct.id === merchantCompanies.company_id);
            merchantCompanies.name = company.name;
            this.companiesList.push(merchantCompanies);
          });
        }
      }
    });

    forkJoin(
      this.merchantService.getMerchantUsersList(),
      this.merchantService.getMerchantUsers(this.merchant.id)
    ).subscribe(([merchants, merchantsUsers]) => {
      if (merchants) {
        merchants.forEach((element) => {
          this.merchantUsers.push(new MerchantUser(element));
        });
        if (merchantsUsers) {
          merchantsUsers.forEach((element) => {
            const user = new MerchantUser(element);
            const merchantUser = this.merchantUsers.find((ct) => ct.id === user.id);
            user.login = merchantUser.login;
            this.merchantUserList.push(user);
          });
        }
      }
    });

    this.notificationUrlsService.getNotificationTypesList()
      .subscribe(value => {
        this.notificationTypesList = value;
      });

    this.loadNotificationsList();
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
    this.formGroup.get('state_raw').reset(null);
    this.formGroup.get('supports_api').reset(null);
  }

  submit() {
    if(!this.isValidateIp()){
      return;
    }
    else if (this.formGroup.valid) {
      this.formGroup.disable();
      this.merchant.name = this.formGroup.get('name').value;
      this.merchant.login = this.formGroup.get('login').value;
      this.merchant.pwd = this.formGroup.get('pwd').value;
      this.merchant.street_address = this.formGroup.get('street_address').value;
      this.merchant.zip_code = this.formGroup.get('zip_code').value;
      this.merchant.address_state = this.formGroup.get('address_state').value;
      this.merchant.allowed_ip_address = this.formGroup.get('allowed_ip_address').value.toString(); // value is array
      this.merchant.allowed_domains = this.formGroup.get('allowed_domains').value;
      this.merchant.state_raw = this.formGroup.get('state_raw').value;
      this.merchant.supports_api = this.formGroup.get('supports_api').value;
      this.merchantService.persist(this.merchant).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'merchants', this.merchant.id]);
      }, (error) => {
        this.formGroup.enable();
      });
    }
  }

  handleError(error: string) {
    if (error === 'MERCHANT_EXISTS') {
      this.valueExists = true;
    }
  }

  public createNotification(elementRef): void {
    this.notificationDialog = this.dialogService.show(elementRef, {backdrop: 'static'});
    this.notificationForm.controls.url.markAsPristine();
    this.notificationForm.controls.url_type.markAsPristine();
  }

  public editNotification(notification: INotificationUrls, elementRef): void {
    this.notificationDialog = this.dialogService.show(elementRef, {backdrop: 'static'});
    this.notificationForm.patchValue(notification);
    this.notificationForm.controls.url.markAsPristine();
    this.notificationForm.controls.url_type.markAsPristine();
  }

  public async createNotificationClosed(result: boolean): Promise<void> {
    this.notificationServerError = null;
    if (!result) {
      this.notificationDialog.hide();
      this.notificationForm.reset({
        url_type: '',
        enabled: false
      });
      return;
    }
    if (this.notificationForm.invalid) {
      this.notificationForm.controls.url.markAsDirty();
      this.notificationForm.controls.url_type.markAsDirty();
      return;
    }
    try {
      this.notificationForm.disable();
      const data = this.notificationForm.getRawValue() as INotificationUrls;
      data.notification_url_owner_id = this.merchant.id;
      data.notification_url_owner_type = 'merchant';
      if (data.id) {
        await this.notificationUrlsService.persist(data).toPromise();
      } else {
        await this.notificationUrlsService.create(data).toPromise();
      }
      await this.loadNotificationsList();
      this.notificationDialog.hide();
      this.notificationForm.reset({
        url_type: '',
        enabled: false
      });
    } catch (e) {
      this.notificationServerError = e.error;
    } finally {
      this.notificationForm.enable();
    }
  }

  public async removeNotification(elementRef, notification: INotificationUrls): Promise<void> {
    this.notificationDialog = this.dialogService.show(elementRef);
    this.notificationDialog.notification = notification;
  }

  public async confirmDeleteNotification(result: boolean) {
    if (!result) {
      this.notificationDialog.hide();
      return;
    }
    const notification = this.notificationDialog.notification as INotificationUrls;
    try {
      await this.notificationUrlsService.delete(notification.id).toPromise();
      const idx = this.notificationUrlsList.indexOf(notification);
      this.notificationDialog.hide();
      if (idx >= 0) {
        this.notificationUrlsList.splice(idx, 1);
      }
    } catch (e) {
    }
  }

  private async loadNotificationsList(): Promise<void> {
    try {
      this.notificationUrlsList = await this.notificationUrlsService.getList(this.merchant.id).toPromise();
    } catch (e) {
      this.notificationUrlsList = [];
    }
  }

  addCompany() {
    const companyId = parseInt(this.company, 10);
    if (!this.company) {
      this.successMsg = null;
      this.errorMsg = 'Please select a Company';
      this.resetMsg();
    } else {
      const selectedCompany = this.companies.find((element) => element.id === companyId);
      if (!selectedCompany) {
        return;
      }
      const currentCompany = this.companiesList.find((element) => element.company_id === companyId);
      if (!currentCompany) {
        const newCompany = new MerchantCompanies();
        newCompany.business_owner_id = this.merchant.id;
        newCompany.company_id = companyId;
        newCompany.name = selectedCompany.name;
        this.merchantService.addCompany(newCompany).subscribe((result) => {
          newCompany.id = result.id;
          this.companiesList.push(newCompany);
          this.errorMsg = null;
          this.successMsg = 'Company assigned successfully';
          this.resetMsg();
        });
      } else {
        this.successMsg = null;
        this.errorMsg = 'Company has already been taken: ' + selectedCompany.name;
        this.resetMsg();
      }
    }
  }

  removeAction($event) {
    if ($event && $event.id) {
      this.merchantService.removeCompany($event.id).subscribe(() => {
        this.errorMsg = null;
        this.successMsg = 'Company deleted successfully';
        this.resetMsg();
      });
    }
  }

  resetMsg() {
    setTimeout(() => {
      this.successMsg = null;
      this.errorMsg = null;
    }, 2000);
  }

  addMerchantUser() {
    const merchantUserId = parseInt(this.merchantUser, 10);
    if (!this.merchantUser) {
      this.successMerchantUserMsg = null;
      this.errorMerchantUserMsg = 'Please select a Merchant User';
      this.resetMsg();
    } else {
      const selectedMerchantUser = this.merchantUsers.find((element) => element.id === merchantUserId);
      if (!selectedMerchantUser) {
        return;
      }
      const currentMerchantUser = this.merchantUserList.find((element) => element.id === merchantUserId);
      if (!currentMerchantUser) {
        const newMerchantUser = new MerchantUser();
        newMerchantUser.owner_id = this.merchant.id;
        newMerchantUser.id = merchantUserId;
        newMerchantUser.login = selectedMerchantUser.login;
        this.merchantService.addMerchantUser(newMerchantUser).subscribe((result) => {
          newMerchantUser.id = result.id;
          this.merchantUserList.push(newMerchantUser);
          this.errorMerchantUserMsg = null;
          this.successMerchantUserMsg = 'Merchant User assigned successfully';
          this.resetMerchantUserMsg();
        });
      } else {
        this.successMerchantUserMsg = null;
        this.errorMerchantUserMsg = 'Merchant User has already been taken: ' + selectedMerchantUser.login;
        this.resetMerchantUserMsg();
      }
    }
  }

  removeMerchantUserAction($event) {
    if ($event && $event.id) {
      this.merchantService.removeMerchantUser($event.id).subscribe(() => {
        this.errorMsg = null;
        this.successMsg = 'Merchant User deleted successfully';
        this.resetMerchantUserMsg();
      });
    }
  }

  resetMerchantUserMsg() {
    setTimeout(() => {
      this.successMerchantUserMsg = null;
      this.errorMerchantUserMsg = null;
    }, 2000);
  }

  generatePassword = () => {
    let length = 40;
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for(let i = length; i > 0; i--){
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    this.formGroup.get('pwd').reset(result);
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
    this.formGroup.get('allowed_ip_address').reset($event);
  }
  errorIpClass(){
    if(!this.isValidateIp)
      return {
        'has-errors': true,
        'has-danger': true
      };
  }

  // url = '';
  // onSelectFile(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     reader.readAsDataURL(event.target.files[0]); // read file as data url

  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       this.url = event.target.result;
  //     }
  //   }
  // }
}
