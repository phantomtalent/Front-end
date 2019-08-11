import {Component, OnInit} from '@angular/core';
import {BlacklistService} from '../../service/blacklist.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IBlacklist} from '@utils/interfaces';
import {Blacklist} from '@utils/models';
import {FormBaseComponent} from '@shared/components/form-base/form-base.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MerchantList} from "@app/panel/domain/merchant-list";
import {MerchantService} from "@app/panel/service/merchant.service";
import {SelectSearch} from '@utils/models/select-search.model';

@Component({
  selector: 'app-blacklist-edit',
  templateUrl: './blacklist-edit.component.html',
  styleUrls: ['./blacklist-edit.component.scss']
})
export class BlacklistEditComponent extends FormBaseComponent implements OnInit {

  blacklist: Blacklist = new Blacklist();
  merchants: MerchantList[];
  valueExists = false;
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
              private router: Router,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) {
    super();
  }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Blacklists', slug: '/panel/blacklists' }, { name: 'Edit' }]);
    const blacklist = this.route.snapshot.data['blacklist'];

    if (!blacklist) {
      this.router.navigate(['panel', 'blacklists']);
    }

    this.blacklist = blacklist;
    this.formGroup.patchValue(this.blacklist);

    this.merchantService.getMerchantsList()
      .subscribe(value => {
        if (value != null) {
          this.merchants = value;
          this.values.push(new SelectSearch(null, 'Merchant'));
          this.data = this.values.map(val => new SelectSearch(val.id, val.label));
          this.merchants.forEach(merchant => this.data.push(new SelectSearch(merchant.id, merchant.name)));
          this.data.push(new SelectSearch(null, 'City'));
          this.merchants.forEach(merchant => this.data.push(new SelectSearch(merchant.id, merchant.name)));
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
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.blacklist.name = this.formGroup.get('name').value;
      this.blacklist.value = this.formGroup.get('value').value;
      this.blacklist.comment = this.formGroup.get('comment').value;
      this.blacklist.blacklist_owner_id = this.formGroup.get('blacklist_owner_id').value;

      this.blacklistService.persist(this.blacklist).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'blacklists', this.blacklist.id]);
      }, (error) => {
        this.formGroup.enable();
      });
    }
  }

  handleError(error: string) {
    if (error === 'BLACKLIST_EXISTS') {
      this.valueExists = true;
    }
  }
}
