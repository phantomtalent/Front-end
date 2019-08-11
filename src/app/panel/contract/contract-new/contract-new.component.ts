import { Component, OnInit } from '@angular/core';
import { ContractService } from '../../service/contract.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { Router } from '@angular/router';
import { Contract } from '@utils/models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';

import { MerchantService } from '../../service/merchant.service';
import { MerchantList } from '../../domain/merchant-list';
import { ResellerService } from '../../service/reseller.service';
import { ResellerList } from '../../domain/reseller-list';
import { AcquirerService } from '../../service/acquirer.service';
import { AcquirerList } from '../../domain/acquirer-list';
import { ContractGatewaysList } from '../../domain/contract-gateways';
import { MpiGatewaysList } from '../../domain/mpi-gateways';
import { ContractMccList } from '../../domain/contract-mcc';
import { ContractRefundTimeframeList } from '@app/panel/domain/contract-refund-timeframe';
import { ContractAuthorizeTimeframeList } from '@app/panel/domain/contract-authorize-timeframe';
import { AcquirerCountryList } from '@app/panel/domain/acquirer-country-list';
import {SelectSearch} from '@utils/models/select-search.model';

@Component({
  selector: 'app-contract-new',
  templateUrl: './contract-new.component.html',
  styleUrls: ['./contract-new.component.scss']
})
export class ContractNewComponent extends FormBaseComponent implements OnInit {

  contract: Contract = new Contract();
  nameValueExists = false;

  merchants: MerchantList[];
  resellers: ResellerList[];
  acquirers: AcquirerList[];
  countries: AcquirerCountryList[];
  gateways: ContractGatewaysList[];
  mpigateways: MpiGatewaysList[];
  merchant_category_codes: ContractMccList[];
  refund_timeframes: ContractRefundTimeframeList[];
  authorize_timeframes: ContractAuthorizeTimeframeList[];

  merchantselectdata: SelectSearch[] = [];
  countryselectdata: SelectSearch[] = [];
  acquirerselectdata: SelectSearch[] = [];
  mccselectdata: SelectSearch[] = [];
  gatewayselectdata: SelectSearch[] = [];
  mpiselectdata: SelectSearch[] = [];
  refundtimeframeselectdata: SelectSearch[] = [];
  authorize_timeframeselectdata: SelectSearch[] = [];

  formGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    terminal_token: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    descriptor: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    credential1: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    credential2: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    login: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    pwd: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    merchant_number: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    merchant_city: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    reseller_id: new FormControl('', [Validators.required]),
    merchant_id: new FormControl('', [Validators.required]),
    acquirer_id: new FormControl('', [Validators.required]),
    gateway: new FormControl('', [Validators.required]),
    refund_timeframe: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    authorize_timeframe: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    expires_at: new FormControl(null, [Validators.maxLength(255)]),
    merchant_category_code: new FormControl('', [Validators.required]),
    merchant_country_code: new FormControl('', [Validators.required]),
    mpi_timeout_seconds: new FormControl(''),
    mpi: new FormControl(''),
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

  constructor(private contractService: ContractService,
    private merchantService: MerchantService,
    private resellerService: ResellerService,
    private acquirerService: AcquirerService,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    super();
  }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/resellers' }, { name: 'Contracts', slug: '/panel/contracts' }, { name: 'New' }]);
    this.merchantService.getMerchantsList()
      .subscribe(value => {
        if (value != null) {
          this.merchants = value;
          this.merchants.forEach(merchant => this.merchantselectdata.push(new SelectSearch(merchant.id, merchant.name)));
        }
      });

    this.resellerService.getResellersList()
      .subscribe(value => {
        if (value != null) {
          this.resellers = value;
        }
      });

    this.acquirerService.getAcquirersList()
      .subscribe(value => {
        if (value != null) {
          this.acquirers = value;
          this.acquirers.forEach(acquirer => this.acquirerselectdata.push(new SelectSearch(acquirer.id, acquirer.name)));
        }
      });

    this.acquirerService.getCountryList()
      .subscribe(value => {
        if (value != null) {
          this.countries = value;
          this.countries.forEach(country => this.countryselectdata.push(new SelectSearch(country.code, country.country)));
        }
      });

    this.contractService.getContractGatewaysList()
      .subscribe(value => {
        if (value != null) {
          this.gateways = value;
          this.gateways.forEach(gateway => this.gatewayselectdata.push(new SelectSearch(gateway.name)));
        }
      });

    this.contractService.getMpiGatewaysList()
      .subscribe(value => {
        if (value != null) {
          this.mpigateways = value;
          this.mpigateways.forEach(mpi => this.mpiselectdata.push(new SelectSearch(mpi.name)));
        }
      });

    this.contractService.getContractMccsList()
      .subscribe(value => {
        if (value != null) {
          this.merchant_category_codes = value;
          this.merchant_category_codes.forEach(mcc => this.mccselectdata.push(new SelectSearch(mcc.id, mcc.name)));
        }
      });

    this.contractService.getContractRefundTimeframeList()
      .subscribe(value => {
        if (value != null) {
          this.refund_timeframes = value;
          this.refund_timeframes.forEach(refund_timeframe => this.refundtimeframeselectdata.push(
            new SelectSearch(refund_timeframe.id, refund_timeframe.name)));
        }
      });

    this.contractService.getContractAuthorizeTimeframeList()
      .subscribe(value => {
        if (value != null) {
          this.authorize_timeframes = value;
          this.authorize_timeframes.forEach(authorize_timeframe => this.authorize_timeframeselectdata.push(
            new SelectSearch(authorize_timeframe.id, authorize_timeframe.name)));
        }
      });
  }

  clear() {
    this.formGroup.get('login').reset(null);
    this.formGroup.get('pwd').reset(null);
    this.formGroup.get('name').reset(null);
    this.formGroup.get('mpi_timeout_seconds').reset(null);
    this.formGroup.get('mpi').reset(null);
    this.formGroup.get('terminal_token').reset(null);
    this.formGroup.get('descriptor').reset(null);
    this.formGroup.get('credential1').reset(null);
    this.formGroup.get('credential2').reset(null);
    this.formGroup.get('merchant_number').reset(null);
    this.formGroup.get('merchant_city').reset(null);
    this.formGroup.get('reseller_id').reset('');
    this.formGroup.get('merchant_id').reset('');
    this.formGroup.get('acquirer_id').reset('');
    this.formGroup.get('gateway').reset('');
    this.formGroup.get('refund_timeframe').reset(null);
    this.formGroup.get('authorize_timeframe').reset(null);
    this.formGroup.get('expires_at').reset(null);
    this.formGroup.get('merchant_category_code').reset('');
    this.formGroup.get('merchant_country_code').reset('');
    this.formGroup.get('enabled').reset('');
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

  selectTnx(controlName: string) {
    this.formGroup.get(controlName).setValue(!this.formGroup.get(controlName).value);
  }

  submit() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.contract.name = this.formGroup.get('name').value;
      this.contract.login = this.formGroup.get('login').value;
      this.contract.pwd = this.formGroup.get('pwd').value;
      this.contract.merchant_id = this.formGroup.get('merchant_id').value;
      this.contract.acquirer_id = this.formGroup.get('acquirer_id').value;
      this.contract.gateway = this.formGroup.get('gateway').value;
      this.contract.merchant_country_code = this.formGroup.get('merchant_country_code').value;
      this.contract.merchant_city = this.formGroup.get('merchant_city').value;
      this.contract.mpi_timeout_seconds = this.formGroup.get('mpi_timeout_seconds').value;
      this.contract.mpi = this.formGroup.get('mpi').value;
      this.contract.terminal_token = this.formGroup.get('terminal_token').value;
      this.contract.descriptor = this.formGroup.get('descriptor').value;
      this.contract.credential1 = this.formGroup.get('credential1').value;
      this.contract.credential2 = this.formGroup.get('credential2').value;
      this.contract.refund_timeframe = this.formGroup.get('refund_timeframe').value;
      this.contract.authorize_timeframe = this.formGroup.get('authorize_timeframe').value;
      this.contract.merchant_number = this.formGroup.get('merchant_number').value;
      this.contract.merchant_category_code = this.formGroup.get('merchant_category_code').value;
      this.contract.enabled = this.formGroup.get('enabled').value;
      this.contract.tnx_authorize = this.formGroup.get('tnx_authorize').value;
      this.contract.tnx_authorize3d = this.formGroup.get('tnx_authorize3d').value;
      this.contract.tnx_sale = this.formGroup.get('tnx_sale').value;
      this.contract.tnx_sale3d = this.formGroup.get('tnx_sale3d').value;
      this.contract.tnx_capture = this.formGroup.get('tnx_capture').value;
      this.contract.tnx_refund = this.formGroup.get('tnx_refund').value;
      this.contract.tnx_void = this.formGroup.get('tnx_void').value;
      this.contract.tnx_init_recurring_sale = this.formGroup.get('tnx_init_recurring_sale').value;
      this.contract.tnx_recurring_sale = this.formGroup.get('tnx_recurring_sale').value;
      this.contract.tnx_account_verification = this.formGroup.get('tnx_account_verification').value;

      this.contractService.save(this.contract).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'contracts']);
      },
        error => this.handleError(error.error));
    }
  }

  handleError(error: string) {
    this.formGroup.enable();
    if (error === 'CONTRACT_EXISTS') {
      this.nameValueExists = true;
    }
  }
}
