import {Component, OnInit} from '@angular/core';
import {AcquirerService} from '../../service/acquirer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IAcquirer} from '@utils/interfaces';
import {Acquirer} from '@utils/models';
import {FormBaseComponent} from '@shared/components/form-base/form-base.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AcquirerCountryList} from "@app/panel/domain/acquirer-country-list";
import {AcquirerTimezoneList} from "@app/panel/domain/acquirer-timezone-list";
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import {SelectSearch} from '@utils/models/select-search.model';

@Component({
  selector: 'app-acquirer-edit',
  templateUrl: './acquirer-edit.component.html',
  styleUrls: ['./acquirer-edit.component.scss']
})
export class AcquirerEditComponent extends FormBaseComponent implements OnInit {

  acquirer: IAcquirer = new Acquirer();
  countries: AcquirerCountryList[];
  timezones: AcquirerTimezoneList[];
  countryselectdata: SelectSearch[] = [];
  timezoneselectdata: SelectSearch[] = [];
  valueExists = false;

  formGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    country_code: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    timezone: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
  });

  constructor(private acquirerService: AcquirerService,
              private router: Router,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) {
    super();
  }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/resellers' }, { name: 'Acquirers', slug: '/panel/acquirers' }, { name: 'Edit' }]);
    const acquirer = this.route.snapshot.data['acquirer'];

    if (!acquirer) {
      this.router.navigate(['panel', 'acquirers']);
    }

    this.acquirer = acquirer;
    this.formGroup.patchValue(this.acquirer);

    this.acquirerService.getCountryList()
      .subscribe(value => {
        if (value != null) {
          this.countries = value;
          this.countryselectdata = this.countries.map(country => new SelectSearch(country.code, country.country + ' - ' + country.code));
        }
      });

    this.acquirerService.getTimezoneList()
      .subscribe(value => {
        if (value != null) {
          this.timezones = value;
          this.timezoneselectdata = this.timezones.map(timezone => new SelectSearch(timezone.timezone, timezone.timezone));
        }
      });
  }

  clear() {
    this.formGroup.get('name').reset(null);
    this.formGroup.get('country_code').reset(null);
    this.formGroup.get('timezone').reset(null);
  }

  submit() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.acquirer.name = this.formGroup.get('name').value;
      this.acquirer.country_code = this.formGroup.get('country_code').value;
      this.acquirer.timezone = this.formGroup.get('timezone').value;

      this.acquirerService.persist(this.acquirer).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'acquirers', this.acquirer.id]);
      }, (error) => {
        this.formGroup.enable();
      });
    }
  }

  handleError(error: string) {
    if (error === 'ACQUIRER_EXISTS') {
      this.valueExists = true;
    }
  }
}
