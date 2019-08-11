import { Component, OnInit } from '@angular/core';
import { TerminalService } from '../../service/terminal.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { Router } from '@angular/router';
import { Terminal } from '@utils/models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';

import { MerchantService } from '../../service/merchant.service';
import { MerchantList } from '../../domain/merchant-list';
import { ResellerService } from '../../service/reseller.service';
import { CurrenciesList } from '../../domain/currencies-list';
import { TrafficShaperClassList } from '../../domain/traffic-shaper-class-list';
import { DescriptorTypeList } from '../../domain/descriptor-type-list';
import { ResellerList } from '../../domain/reseller-list';
import { IdGenerator } from '@utils/id.generator';

import { TerminalModeType, TerminalModeType2LabelMapping } from '../../domain/terminal-mode-type';
import {SelectSearch} from '@utils/models/select-search.model';

@Component({
  selector: 'app-terminal-new',
  templateUrl: './terminal-new.component.html',
  styleUrls: ['./terminal-new.component.scss']
})
export class TerminalNewComponent extends FormBaseComponent implements OnInit {

  public TerminalModeType2LabelMapping = TerminalModeType2LabelMapping;

  public modeTypes = Object.values(TerminalModeType).filter(value => typeof value === 'number');

  merchants: MerchantList[];
  resellers: ResellerList[];
  currencies: CurrenciesList[];
  shapers: TrafficShaperClassList[];
  descriptor_types: DescriptorTypeList[];

  merchantselectsdata: SelectSearch[] = [];
  currencyselectsdata: SelectSearch[] = [];

  terminal: Terminal = new Terminal();
  nameValueExists = false;

  formGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    reseller_id: new FormControl('', [Validators.required]),
    merchant_id: new FormControl('', [Validators.required]),
    currency: new FormControl('', [Validators.required]),
    reseller_id_demo: new FormControl(2),
    merchant_id_demo: new FormControl(1),
    currency_demo: new FormControl('USD'),
    traffic_shaper_class: new FormControl('', [Validators.required]),
    mode: new FormControl('', [Validators.required]),
    descriptor_type: new FormControl('', [Validators.required]),
    expires_at: new FormControl(null, [Validators.maxLength(255)]),
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

  constructor(private terminalService: TerminalService,
    private resellerService: ResellerService,
    private merchantService: MerchantService,
    private router: Router,
    private breadcrumbService: BreadcrumbService) {
    super();
  }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/resellers' }, { name: 'Terminals', slug: '/panel/terminals' }, { name: 'New' }]);
    this.merchantService.getMerchantsList()
      .subscribe(value => {
        if (value != null) {
          this.merchants = value;
          this.merchants.forEach(merchant => this.merchantselectsdata.push(new SelectSearch(merchant.id, merchant.name)));
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
          this.currencies.forEach(currency => this.currencyselectsdata.push(new SelectSearch(currency.currency, currency.currency + ' - ' + currency.country)));
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
  }

  selectTnx(controlName: string) {
    this.formGroup.get(controlName).setValue(!this.formGroup.get(controlName).value);
  }

  clear() {
    this.formGroup.get('name').reset(null);
    this.formGroup.get('reseller_id').reset('');
    this.formGroup.get('merchant_id').reset('');
    this.formGroup.get('currency').reset('');
    this.formGroup.get('traffic_shaper_class').reset('');
    this.formGroup.get('mode').reset('');
    this.formGroup.get('descriptor_type').reset('');
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
      this.terminal.token = IdGenerator.randomString();
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
      this.terminal.tnx_recurring_sale = this.formGroup.get('tnx_recurring_sale').value;
      this.terminal.tnx_account_verification = this.formGroup.get('tnx_account_verification').value;

      this.terminalService.save(this.terminal).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'terminals']);
      }, error => this.handleError(error.error));
    }
  }

  handleError(error: string) {
    this.formGroup.enable();
    if (error === 'TERMINAL_EXISTS') {
      this.nameValueExists = true;
    }
  }
}
