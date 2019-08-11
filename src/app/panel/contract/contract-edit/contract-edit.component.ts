import { Component, OnInit, TemplateRef } from '@angular/core';
import { ContractService } from '../../service/contract.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { TerminalService } from '../../service/terminal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract, Currency, CardBrands } from '@utils/models';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MerchantList } from '@app/panel/domain/merchant-list';
import { ResellerList } from '@app/panel/domain/reseller-list';
import { AcquirerList } from '@app/panel/domain/acquirer-list';
import { ContractGatewaysList } from '@app/panel/domain/contract-gateways';
import { MerchantService } from '@app/panel/service/merchant.service';
import { ResellerService } from '@app/panel/service/reseller.service';
import { AcquirerService } from '@app/panel/service/acquirer.service';
import { AcquirerCountryList } from '@app/panel/domain/acquirer-country-list';
import { ContractMccList } from '@app/panel/domain/contract-mcc';
import { CurrenciesList } from '@app/panel/domain/currencies-list';
import { CardBrandsList } from '@app/panel/domain/card-brands-list';
import { ContractRefundTimeframeList } from '@app/panel/domain/contract-refund-timeframe';
import { ContractAuthorizeTimeframeList } from '@app/panel/domain/contract-authorize-timeframe';
import { SelectSearch } from '@utils/models/select-search.model';
import { BsModalService } from 'ngx-bootstrap';
import { NotificationUrlsService } from '@app/panel/service/notification-urls.service';
import { INotificationUrls, INotificationUrlType } from '@utils/interfaces';
import {MpiGatewaysList} from '@app/panel/domain/mpi-gateways';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.scss']
})
export class ContractEditComponent extends FormBaseComponent implements OnInit {

  contract: Contract = new Contract();
  valueExists = false;

  merchants: MerchantList[];
  resellers: ResellerList[];
  acquirers: AcquirerList[];
  countries: AcquirerCountryList[];
  gateways: ContractGatewaysList[];
  mpigateways: MpiGatewaysList[];
  merchant_category_codes: ContractMccList[];
  refund_timeframes: ContractRefundTimeframeList[];
  authorize_timeframes: ContractAuthorizeTimeframeList[];
  currencies: CurrenciesList[];
  card_brands: CardBrandsList[];
  successMsgCurrency: string;
  successMsgCardBrand: string;
  errorMsgCurrency: string;
  errorMsgCardBrand: string;
  currency: string;
  card_brand: string;
  currencyList: Currency[] = [];
  cardBrandsList: CardBrands[] = [];

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
    enabled: new FormControl(this.contract.enabled),
    tnx_authorize: new FormControl(this.contract.tnx_authorize),
    tnx_authorize3d: new FormControl(this.contract.tnx_authorize3d),
    tnx_sale: new FormControl(this.contract.tnx_sale),
    tnx_sale3d: new FormControl(this.contract.tnx_sale3d),
    tnx_capture: new FormControl(this.contract.tnx_capture),
    tnx_refund: new FormControl(this.contract.tnx_refund),
    tnx_void: new FormControl(this.contract.tnx_void),
    tnx_init_recurring_sale: new FormControl(this.contract.tnx_init_recurring_sale),
    tnx_init_recurring_sale3d: new FormControl(this.contract.tnx_init_recurring_sale3d),
    tnx_recurring_sale: new FormControl(this.contract.tnx_recurring_sale),
    tnx_account_verification: new FormControl(this.contract.tnx_account_verification),
    tnx_credit: new FormControl(this.contract.tnx_credit)
  });

  constructor(private contractService: ContractService,
    private merchantService: MerchantService,
    private resellerService: ResellerService,
    private acquirerService: AcquirerService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private terminalService: TerminalService
  ) {
    super();
  }

  ngOnInit() {
    this.breadcrumbService.setItems([
      {
        name: 'Configuration',
        slug: '/panel/resellers'
      },
      {
        name: 'Contracts',
        slug: '/panel/contracts'
      },
      {name: 'Edit'}
    ]);
    const contract = this.route.snapshot.data['contract'];

    if (!contract) {
      this.router.navigate(['panel', 'contracts']);
    }

    this.contract = contract;
    this.formGroup.patchValue(this.contract);

    this.merchantService.getMerchantsList()
      .subscribe(value => {
        if (value != null) {
          this.merchants = value;
          this.merchantselectdata = this.merchants.map(merchant => new SelectSearch(merchant.id, merchant.name));
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
          this.acquirerselectdata = this.acquirers.map(acquirer => new SelectSearch(acquirer.id, acquirer.name));
        }
      });

    this.acquirerService.getCountryList()
      .subscribe(value => {
        if (value != null) {
          this.countries = value;
          this.countryselectdata = this.countries.map(country => new SelectSearch(country.code, country.country));
        }
      });

    this.contractService.getContractGatewaysList()
      .subscribe(value => {
        if (value != null) {
          this.gateways = value;
          this.gatewayselectdata = this.gateways.map(gateway => new SelectSearch(gateway.name));
        }
      });

    this.contractService.getMpiGatewaysList()
      .subscribe(value => {
        if (value != null) {
          this.mpigateways = value;
          this.mpiselectdata = this.mpigateways.map(mpi => new SelectSearch(mpi.name));
        }
      });

    this.contractService.getContractMccsList()
      .subscribe(value => {
        if (value != null) {
          this.merchant_category_codes = value;
          this.mccselectdata = this.merchant_category_codes.map(mcc => new SelectSearch(mcc.id, mcc.name));
        }
      });

    this.contractService.getContractRefundTimeframeList()
      .subscribe(value => {
        if (value != null) {
          this.refund_timeframes = value;
          this.refundtimeframeselectdata = this.refund_timeframes.map(refund_timeframe =>
            new SelectSearch(refund_timeframe.id, refund_timeframe.name));
        }
      });

    this.contractService.getContractAuthorizeTimeframeList()
      .subscribe(value => {
        if (value != null) {
          this.authorize_timeframes = value;
          this.authorize_timeframeselectdata = this.authorize_timeframes.map(authorize_timeframe =>
            new SelectSearch(authorize_timeframe.id, authorize_timeframe.name));
        }
      });

    this.terminalService.getCurrenciesList()
      .subscribe(value => {
        if (value != null) {
          this.currencies = value;
        }
      });

    this.contractService.getCurrencies(this.contract.id)
      .subscribe(value => {
        if (value) {
          value.forEach((element) => {
            this.currencyList.push(new Currency(element));
          });
        }
      });

    this.contractService.getCardBrandsList()
      .subscribe(value => {
        if (value != null) {
          this.card_brands = value;
        }
      });

    this.contractService.getCardBrands(this.contract.id)
      .subscribe(value => {
        if (value) {
          value.forEach((element) => {
            this.cardBrandsList.push(new CardBrands(element));
          });
        }
      });
  }

  addCurrency() {
    if (!this.currency) {
      this.successMsgCurrency = null;
      this.errorMsgCurrency = 'Please select a currency';
      this.resetMsgCurrency();
    } else {
      const currentCurrency = this.currencyList.find((element) => element.code === this.currency);
      if (!currentCurrency) {
        const newCurrency = new Currency();
        newCurrency.contract_id = this.contract.id;
        newCurrency.code = this.currency;
        this.contractService.addCurrency(newCurrency).subscribe((result) => {
          this.currencyList.push(result);
          this.errorMsgCurrency = null;
          this.successMsgCurrency = 'Currency assigned successfully';
          this.resetMsgCurrency();
        });
      } else {
        this.successMsgCurrency = null;
        this.errorMsgCurrency = 'Code has already been taken: ' + this.currency;
        this.resetMsgCurrency();
      }
    }
  }

  removeCurrencyAction($event) {
    if ($event && $event.id) {
      this.contractService.removeCurrency($event.id).subscribe(() => {
        this.errorMsgCurrency = null;
        this.successMsgCurrency = 'Currency deleted successfully';
        this.resetMsgCurrency();
      });
    }
  }

  resetMsgCurrency() {
    setTimeout(() => {
      this.successMsgCurrency = null;
      this.errorMsgCurrency = null;
    }, 2000);
  }

  addCardBrands() {
    if (!this.card_brand) {
      this.successMsgCardBrand = null;
      this.errorMsgCardBrand = 'Please select a card brand';
      this.resetMsgCardBrand();
    } else {
      const currentCardBrand = this.cardBrandsList.find((element) => element.card_brand === this.card_brand);
      if (!currentCardBrand) {
        const newCardBrand = new CardBrands();
        newCardBrand.contract_id = this.contract.id;
        newCardBrand.card_brand = this.card_brand;
        this.contractService.addCardBrands(newCardBrand).subscribe((result) => {
          this.cardBrandsList.push(result);
          this.errorMsgCardBrand = null;
          this.successMsgCardBrand = 'Card Brand assigned successfully';
          this.resetMsgCardBrand();
        });
      } else {
        this.successMsgCardBrand = null;
        this.errorMsgCardBrand = 'Card Brand has already been taken: ' + this.card_brand;
        this.resetMsgCardBrand();
      }
    }
  }

  removeCardBrandsAction($event) {
    if ($event && $event.id) {
      this.contractService.removeCardBrands($event.id).subscribe(() => {
        this.errorMsgCardBrand = null;
        this.successMsgCardBrand = 'Card Brand deleted successfully';
        this.resetMsgCardBrand();
      });
    }
  }

  resetMsgCardBrand() {
    setTimeout(() => {
      this.successMsgCardBrand = null;
      this.errorMsgCardBrand = null;
    }, 2000);
  }

  selectTnx(controlName: string) {
    this.formGroup.get(controlName).setValue(!this.formGroup.get(controlName).value);
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
    this.formGroup.get('reseller_id').reset(null);
    this.formGroup.get('merchant_id').reset(null);
    this.formGroup.get('acquirer_id').reset(null);
    this.formGroup.get('gateway').reset(null);
    this.formGroup.get('refund_timeframe').reset(null);
    this.formGroup.get('authorize_timeframe').reset(null);
    this.formGroup.get('expires_at').reset(null);
    this.formGroup.get('merchant_category_code').reset(null);
    this.formGroup.get('merchant_country_code').reset(null);
    this.formGroup.get('enabled').reset(null);
    this.formGroup.get('tnx_authorize').reset(null);
    this.formGroup.get('tnx_authorize3d').reset(null);
    this.formGroup.get('tnx_sale').reset(null);
    this.formGroup.get('tnx_sale3d').reset(null);
    this.formGroup.get('tnx_capture').reset(null);
    this.formGroup.get('tnx_refund').reset(null);
    this.formGroup.get('tnx_void').reset(null);
    this.formGroup.get('tnx_init_recurring_sale').reset(null);
    this.formGroup.get('tnx_init_recurring_sale3d').reset(null);
    this.formGroup.get('tnx_recurring_sale').reset(null);
    this.formGroup.get('tnx_account_verification').reset(null);
    this.formGroup.get('tnx_credit').reset(null);
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
      this.contract.tnx_init_recurring_sale3d = this.formGroup.get('tnx_init_recurring_sale3d').value;
      this.contract.tnx_recurring_sale = this.formGroup.get('tnx_recurring_sale').value;
      this.contract.tnx_account_verification = this.formGroup.get('tnx_account_verification').value;
      this.contract.tnx_credit = this.formGroup.get('tnx_credit').value;

      this.contractService.persist(this.contract).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'contracts', this.contract.id]);
      }, (error) => {
        this.formGroup.enable();
      });
    }
  }

  handleError(error: string) {
    if (error === 'CONTRACT_EXISTS') {
      this.valueExists = true;
    }
  }
}

