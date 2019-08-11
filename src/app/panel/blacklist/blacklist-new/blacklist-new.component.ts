import { Component, OnInit } from '@angular/core';
import { BlacklistService } from '../../service/blacklist.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { Router } from '@angular/router';
import { Blacklist } from '@utils/models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';
import { MerchantService } from '@app/panel/service/merchant.service';
import { MerchantList } from '@app/panel/domain/merchant-list';
import { ITerminal } from '@utils/interfaces';
import { SelectSearch } from '@utils/models/select-search.model';
import { TerminalService } from '@app/panel/service/terminal.service';

@Component({
  selector: 'app-blacklist-new',
  templateUrl: './blacklist-new.component.html',
  styleUrls: ['./blacklist-new.component.scss']
})
export class BlacklistNewComponent extends FormBaseComponent implements OnInit {

  blacklist: Blacklist = new Blacklist();
  merchants: MerchantList[];
  terminals: ITerminal[];
  nameValueExists = false;
  data: Array<SelectSearch> = [];
  values: Array<SelectSearch> = [];
  formGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    value: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    comment: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    blacklist_owner_id: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
  });

  constructor(private blacklistService: BlacklistService,
    private merchantService: MerchantService,
    private terminalService: TerminalService,
    private router: Router,
    private breadcrumbService: BreadcrumbService) {
    super();
  }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Blacklists', slug: '/panel/blacklists' }, { name: 'New' }]);
    this.merchantService.getMerchantsList()
      .subscribe(value => {
        if (value != null) {
          this.merchants = value;
          this.values.push(new SelectSearch(null, 'Merchant'));
          this.values.forEach(val => this.data.push(new SelectSearch(val.id, val.label)));
          this.merchants.forEach(merchant => merchant.id ? this.data.push(new SelectSearch(merchant.id, merchant.name)) : '' );
        }
      });

    this.terminalService.getTerminalsList()
      .subscribe(value => {
        if (value != null) {
          this.terminals = value;
          this.values.push(new SelectSearch(null, 'Terminals'));
          this.values.forEach(val => this.data.push(new SelectSearch(val.id, val.label)));
          this.terminals.forEach(terminal => terminal.id ? this.data.push(new SelectSearch(terminal.id, terminal.name)) : '' );
        }
      });
  }

  clear() {
    this.formGroup.get('name').reset(null);
    this.formGroup.get('value').reset(null);
    this.formGroup.get('comment').reset(null);
    this.formGroup.get('blacklist_owner_id').reset(null);
  }

  submit() {
    console.log(this.formGroup.get('blacklist_owner_id').value);
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.blacklist.name = this.formGroup.get('name').value;
      this.blacklist.value = this.formGroup.get('value').value;
      this.blacklist.comment = this.formGroup.get('comment').value;
      this.blacklist.blacklist_owner_id = this.formGroup.get('blacklist_owner_id').value;
      this.blacklistService.save(this.blacklist).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'blacklists']);
      }, error => this.handleError(error.error));
    }
  }

  handleError(error: string) {
    this.formGroup.enable();
    if (error === 'BLACKLIST_EXISTS') {
      this.nameValueExists = true;
    }
  }
}
