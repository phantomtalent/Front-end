import { Component, OnInit } from '@angular/core';
import { ResellerService } from '../../service/reseller.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { Router } from '@angular/router';
import { Reseller } from '@utils/models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';

import { MerchantService } from '../../service/merchant.service';
import { MerchantList } from '../../domain/merchant-list';
import {SelectSearch} from '@utils/models/select-search.model';

@Component({
  selector: 'app-reseller-new',
  templateUrl: './reseller-new.component.html',
  styleUrls: ['./reseller-new.component.scss']
})
export class ResellerNewComponent extends FormBaseComponent implements OnInit {

  reseller: Reseller = new Reseller();
  merchants: MerchantList[];
  merchantselectsdata: SelectSearch[] = [];
  nameValueExists = false;

  formGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    admin_id: new FormControl('', [Validators.required]),
    domain: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    enabled: new FormControl(false),
  });

  constructor(private resellerService: ResellerService,
    private merchantService: MerchantService,
    private router: Router,
    private breadcrumbService: BreadcrumbService) {
    super();
  }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/resellers' }, { name: 'Resellers', slug: '/panel/resellers' }, { name: 'New' }]);
    this.merchantService.getMerchantsList()
      .subscribe(value => {
        if (value != null) {
          this.merchants = value;
          this.merchants.forEach(merchant => this.merchantselectsdata.push(new SelectSearch(merchant.id, merchant.name)));
        }
      });
  }

  clear() {
    this.formGroup.get('name').reset(null);
    this.formGroup.get('admin_id').reset('');
    this.formGroup.get('domain').reset(null);
    this.formGroup.get('enabled').reset(null);
  }

  selectTnx(controlName: string) {
    this.formGroup.get(controlName).setValue(!this.formGroup.get(controlName).value);
  }

  submit() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.reseller.name = this.formGroup.get('name').value;
      this.reseller.admin_id = this.formGroup.get('admin_id').value;
      this.reseller.domain = this.formGroup.get('domain').value;
      this.reseller.enabled = this.formGroup.get('enabled').value;

      this.resellerService.save(this.reseller).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'resellers']);
      }, error => this.handleError(error.error));
    }
  }

  handleError(error: string) {
    this.formGroup.enable();
    if (error === 'RESELLER_EXISTS') {
      this.nameValueExists = true;
    }
  }
}
