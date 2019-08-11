import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IAcquirer} from '@utils/interfaces';
import {Acquirer} from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';

@Component({
  selector: 'app-acquirer-details',
  templateUrl: './acquirer-details.component.html',
  styleUrls: ['./acquirer-details.component.scss']
})
export class AcquirerDetailsComponent implements OnInit {

  acquirer: IAcquirer = new Acquirer();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/resellers' }, { name: 'Acquirers', slug: '/panel/acquirers' }, { name: 'Details' }]);
    const acquirer = this.route.snapshot.data['acquirer'];

    if (!acquirer) {
      this.router.navigate(['panel', 'acquirers']);
    }

    this.acquirer = acquirer;
  }

}
