import { Component, OnInit } from '@angular/core';
import { AcquirerService } from '../../service/acquirer.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { Router } from '@angular/router';
import { IAcquirer } from '@utils/interfaces';
import { Acquirer } from '@utils/models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';
import { AcquirerCountryList } from '@app/panel/domain/acquirer-country-list';
import { AcquirerTimezoneList } from '@app/panel/domain/acquirer-timezone-list';
import {SelectSearch} from '@utils/models/select-search.model';

@Component({
  selector: 'app-acquirer-new',
  templateUrl: './acquirer-new.component.html',
  styleUrls: ['./acquirer-new.component.scss']
})
export class AcquirerNewComponent extends FormBaseComponent implements OnInit {
  acquirer: IAcquirer = new Acquirer();
  countries: AcquirerCountryList[];
  timezones: AcquirerTimezoneList[];
  countryselectdata: SelectSearch[] = [];
  timezoneselectdata: SelectSearch[] = [];
  nameValueExists = false;

  formGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    country_code: new FormControl('', [Validators.required]),
    timezone: new FormControl('', [Validators.required]),
  });

  constructor(private acquirerService: AcquirerService,
    private router: Router,
    private breadcrumbService: BreadcrumbService) {
    super();
  }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/resellers' }, { name: 'Acquirers', slug: '/panel/acquirers' }, { name: 'New' }]);
    this.acquirerService.getCountryList()
      .subscribe(value => {
        if (value != null) {
          this.countries = value;
          this.countries.forEach(country => this.countryselectdata.push(new SelectSearch(country.code, country.country + ' - ' + country.code)));
        }
      });
    this.acquirerService.getTimezoneList()
      .subscribe(value => {
        if (value != null) {
          this.timezones = value;
          this.timezones.forEach(timezone => this.timezoneselectdata.push(new SelectSearch(timezone.timezone, timezone.timezone)));
        }
      });
  }

  clear() {
    this.formGroup.get('name').reset(null);
    this.formGroup.get('country_code').reset('');
    this.formGroup.get('timezone').reset('');
  }

  submit() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.acquirer.name = this.formGroup.get('name').value;
      this.acquirer.country_code = this.formGroup.get('country_code').value;
      this.acquirer.timezone = this.formGroup.get('timezone').value;

      this.acquirerService.save(this.acquirer).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'acquirers']);
      }, error => this.handleError(error.error));
    }
  }

  handleError(error: string) {
    this.formGroup.enable();
    if (error === 'ACQUIRER_EXISTS') {
      this.nameValueExists = true;
    }
  }

}
