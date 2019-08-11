import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../service/company.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { Router } from '@angular/router';
import { ICompany } from '@utils/interfaces';
import { Company } from '@utils/models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';
import {SelectSearch} from '@utils/models/select-search.model';

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.scss']
})
export class CompanyNewComponent extends FormBaseComponent implements OnInit {
  company: ICompany = new Company();
  nameValueExists = false;

  formGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(255)])
  });

  constructor(private companyService: CompanyService,
    private router: Router,
    private breadcrumbService: BreadcrumbService) {
    super();
  }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/companies' }, { name: 'Companies', slug: '/panel/companies' }, { name: 'New' }]);
  }

  clear() {
    this.formGroup.get('name').reset(null);
  }

  submit() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.company.name = this.formGroup.get('name').value;

      this.companyService.save(this.company).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'companies']);
      }, error => this.handleError(error.error));
    }
  }

  handleError(error: string) {
    this.formGroup.enable();
    if (error === 'COMPANY_EXISTS') {
      this.nameValueExists = true;
    }
  }

}
