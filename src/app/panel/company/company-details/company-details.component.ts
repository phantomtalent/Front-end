import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICompany} from '@utils/interfaces';
import {Company} from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  company: ICompany = new Company();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/companies' }, { name: 'Companies', slug: '/panel/companies' }, { name: 'Details' }]);
    const company = this.route.snapshot.data['company'];

    if (!company) {
      this.router.navigate(['panel', 'companies']);
    }

    this.company = company;
  }

}
