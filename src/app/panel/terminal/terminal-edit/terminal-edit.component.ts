import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { forkJoin } from 'rxjs';

import { TerminalService } from '../../service/terminal.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';
import { MerchantList } from '@app/panel/domain/merchant-list';
import { ResellerList } from '@app/panel/domain/reseller-list';
import { CurrenciesList } from '@app/panel/domain/currencies-list';
import { ResellerService } from '@app/panel/service/reseller.service';
import { MerchantService } from '@app/panel/service/merchant.service';
import { ContractsTerminals, Terminal, Contract } from '@utils/models';
import { TerminalModeType, TerminalModeType2LabelMapping } from '@app/panel/domain/terminal-mode-type';
import { TrafficShaperClassList } from '@app/panel/domain/traffic-shaper-class-list';
import { DescriptorTypeList } from '@app/panel/domain/descriptor-type-list';
import { INotificationUrls, INotificationUrlType } from '@utils/interfaces';
import { BsModalService } from 'ngx-bootstrap';
import { NotificationUrlsService } from '@app/panel/service/notification-urls.service';
import { ITerminalRiskFilter } from '@utils/interfaces';

@Component({
  selector: 'app-terminal-edit',
  templateUrl: './terminal-edit.component.html',
  styleUrls: ['./terminal-edit.component.scss']
})
export class TerminalEditComponent extends FormBaseComponent implements OnInit {

  public TerminalModeType2LabelMapping = TerminalModeType2LabelMapping;

  public modeTypes = Object.values(TerminalModeType).filter(value => typeof value === 'number');

  merchants: MerchantList[];
  resellers: ResellerList[];
  contracts: Contract[] = [];
  currencies: CurrenciesList[];
  shapers: TrafficShaperClassList[];
  descriptor_types: DescriptorTypeList[];

  terminal: Terminal = new Terminal();
  terminalRiskFilters: ITerminalRiskFilter[] = [];
  valueExists = false;

  successMsg: string;
  errorMsg: string;
  contract: string;
  contractList: ContractsTerminals[] = [];
  notificationUrlsList: INotificationUrls[] = [];
  notificationTypesList: INotificationUrlType[] = [];

  formGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    reseller_id: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    merchant_id: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    currency: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    traffic_shaper_class: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    mode: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    descriptor_type: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    expires_at: new FormControl(null, [Validators.maxLength(255)]),
    enabled: new FormControl(this.terminal.enabled),
    tnx_authorize: new FormControl(this.terminal.tnx_authorize),
    tnx_authorize3d: new FormControl(this.terminal.tnx_authorize3d),
    tnx_sale: new FormControl(this.terminal.tnx_sale),
    tnx_sale3d: new FormControl(this.terminal.tnx_sale3d),
    tnx_capture: new FormControl(this.terminal.tnx_capture),
    tnx_refund: new FormControl(this.terminal.tnx_refund),
    tnx_void: new FormControl(this.terminal.tnx_void),
    tnx_init_recurring_sale: new FormControl(this.terminal.tnx_init_recurring_sale),
    tnx_init_recurring_sale3d: new FormControl(this.terminal.tnx_init_recurring_sale3d),
    tnx_recurring_sale: new FormControl(this.terminal.tnx_recurring_sale),
    tnx_account_verification: new FormControl(this.terminal.tnx_account_verification),
    tnx_credit: new FormControl(this.terminal.tnx_credit),
  });

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

  constructor(private terminalService: TerminalService,
    private resellerService: ResellerService,
    private merchantService: MerchantService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private dialogService: BsModalService,
    private notificationUrlsService: NotificationUrlsService) {
    super();
  }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/resellers' }, { name: 'Terminals', slug: '/panel/terminals' }, { name: 'Edit' }]);
    const terminal = this.route.snapshot.data['terminal'];

    if (!terminal) {
      this.router.navigate(['panel', 'terminals']);
    }

    this.terminal = terminal;
    this.terminalRiskFilters = this.route.snapshot.data['terminalRiskFilters'];
    this.formGroup.patchValue(this.terminal);

    this.merchantService.getMerchantsList()
      .subscribe(value => {
        if (value != null) {
          this.merchants = value;
        }
      });

    this.resellerService.getResellersList()
      .subscribe(value => {
        if (value != null) {
          this.resellers = value;
        }
      });

    this.terminalService.getCurrenciesList()
      .subscribe(value => {
        if (value != null) {
          this.currencies = value;
        }
      });

    this.terminalService.getTrafficShaperList()
      .subscribe(value => {
        if (value != null) {
          this.shapers = value;
        }
      });

    this.terminalService.getDescriptorTypeList()
      .subscribe(value => {
        if (value != null) {
          this.descriptor_types = value;
        }
      });

    this.notificationUrlsService.getNotificationTypesList()
      .subscribe(value => {
        this.notificationTypesList = value;
      });

    this.loadNotificationsList();

    forkJoin(
      this.terminalService.getContractsList(),
      this.terminalService.getContracts(this.terminal.id)
    ).subscribe(([contracts, terminalContracts]) => {
      if (contracts) {
        contracts.forEach((element) => {
          this.contracts.push(new Contract(element));
        });
        if (terminalContracts) {
          terminalContracts.forEach((element) => {
            const contractsTerminals = new ContractsTerminals(element);
            const contract = this.contracts.find((ct) => ct.id === contractsTerminals.contract_id);
            contractsTerminals.name = contract.name;
            this.contractList.push(contractsTerminals);
          });
        }
      }
    });
  }

  addContract() {
    const contractId = parseInt(this.contract, 10);
    if (!this.contract) {
      this.successMsg = null;
      this.errorMsg = 'Please select a contract';
      this.resetMsg();
    } else {
      const selectedContract = this.contracts.find((element) => element.id === contractId);
      if (!selectedContract) {
        return;
      }
      const currentContract = this.contractList.find((element) => element.contract_id === contractId);
      if (!currentContract) {
        const newContract = new ContractsTerminals();
        newContract.terminal_id = this.terminal.id;
        newContract.contract_id = contractId;
        newContract.name = selectedContract.name;
        this.terminalService.addContract(newContract).subscribe((result) => {
          newContract.id = result.id;
          this.contractList.push(newContract);
          this.errorMsg = null;
          this.successMsg = 'Contract assigned successfully';
          this.resetMsg();
        });
      } else {
        this.successMsg = null;
        this.errorMsg = 'Code has already been taken: ' + selectedContract.name;
        this.resetMsg();
      }
    }
  }

  removeAction($event) {
    if ($event && $event.id) {
      this.terminalService.removeContract($event.id).subscribe(() => {
        this.errorMsg = null;
        this.successMsg = 'Contract deleted successfully';
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

  selectTnx(controlName: string) {
    this.formGroup.get(controlName).setValue(!this.formGroup.get(controlName).value);
  }

  clear() {
    this.formGroup.get('name').reset(null);
    this.formGroup.get('reseller_id').reset(null);
    this.formGroup.get('merchant_id').reset(null);
    this.formGroup.get('currency').reset(null);
    this.formGroup.get('traffic_shaper_class').reset(null);
    this.formGroup.get('mode').reset(null);
    this.formGroup.get('descriptor_type').reset(null);
    this.formGroup.get('expires_at').reset(null);
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
      this.terminal.name = this.formGroup.get('name').value;
      this.terminal.reseller_id = this.formGroup.get('reseller_id').value;
      this.terminal.merchant_id = this.formGroup.get('merchant_id').value;
      this.terminal.currency = this.formGroup.get('currency').value;
      this.terminal.traffic_shaper_class = this.formGroup.get('traffic_shaper_class').value;
      this.terminal.mode = this.formGroup.get('mode').value;
      this.terminal.descriptor_type = this.formGroup.get('descriptor_type').value;
      this.terminal.expires_at = this.formGroup.get('expires_at').value;
      this.terminal.enabled = this.formGroup.get('enabled').value;
      this.terminal.tnx_authorize = this.formGroup.get('tnx_authorize').value;
      this.terminal.tnx_authorize3d = this.formGroup.get('tnx_authorize3d').value;
      this.terminal.tnx_sale = this.formGroup.get('tnx_sale').value;
      this.terminal.tnx_sale3d = this.formGroup.get('tnx_sale3d').value;
      this.terminal.tnx_capture = this.formGroup.get('tnx_capture').value;
      this.terminal.tnx_refund = this.formGroup.get('tnx_refund').value;
      this.terminal.tnx_void = this.formGroup.get('tnx_void').value;
      this.terminal.tnx_init_recurring_sale = this.formGroup.get('tnx_init_recurring_sale').value;
      this.terminal.tnx_init_recurring_sale3d = this.formGroup.get('tnx_init_recurring_sale3d').value;
      this.terminal.tnx_recurring_sale = this.formGroup.get('tnx_recurring_sale').value;
      this.terminal.tnx_account_verification = this.formGroup.get('tnx_account_verification').value;
      this.terminal.tnx_credit = this.formGroup.get('tnx_credit').value;

      this.terminalService.persist(this.terminal).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'terminals', this.terminal.id]);
      }, (error) => {
        this.formGroup.enable();
      });
    }
  }

  handleError(error: string) {
    if (error === 'TERMINAL_EXISTS') {
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
      data.notification_url_owner_id = this.terminal.id;
      data.notification_url_owner_type = 'terminal';
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
      this.notificationUrlsList = await this.notificationUrlsService.getList(this.terminal.id).toPromise();
    } catch (e) {
      this.notificationUrlsList = [];
    }
  }
}
