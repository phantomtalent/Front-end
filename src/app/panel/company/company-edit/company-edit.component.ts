import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../service/company.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ICompany} from '@utils/interfaces';
import {Company} from '@utils/models';
import {FormBaseComponent} from '@shared/components/form-base/form-base.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent extends FormBaseComponent implements OnInit {

  company: ICompany = new Company();
  valueExists = false;

  formGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
  });

  constructor(private companyService: CompanyService,
              private router: Router,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) {
    super();
  }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/companies' }, { name: 'Companies', slug: '/panel/companies' }, { name: 'Edit' }]);
    const company = this.route.snapshot.data['company'];

    if (!company) {
      this.router.navigate(['panel', 'companies']);
    }

    this.company = company;
    this.formGroup.patchValue(this.company);
  }

  clear() {
    this.formGroup.get('name').reset(null);
  }

  submit() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.company.name = this.formGroup.get('name').value;

      this.companyService.persist(this.company).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'companies', this.company.id]);
      }, (error) => {
        this.formGroup.enable();
      });
    }
  }

  handleError(error: string) {
    if (error === 'COMPANY_EXISTS') {
      this.valueExists = true;
    }
  }
}
