import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IResellerUser} from '@utils/interfaces';
import {ResellerUser} from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';

@Component({
  selector: 'app-reseller-user-details',
  templateUrl: './reseller-user-details.component.html',
  styleUrls: ['./reseller-user-details.component.scss']
})
export class ResellerUserDetailsComponent implements OnInit {

  user: IResellerUser = new ResellerUser();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Resellers', slug: '/panel/resellerusers' }, { name: 'Details' }]);
    const user = this.route.snapshot.data['reselleruser'];

    if (!user) {
      this.router.navigate(['panel', 'resellerusers']);
    }

    this.user = user;
  }

}
