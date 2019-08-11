import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IMerchantUser} from '@utils/interfaces';
import {MerchantUser} from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';

@Component({
  selector: 'app-merchant-user-details',
  templateUrl: './merchant-user-details.component.html',
  styleUrls: ['./merchant-user-details.component.scss']
})
export class MerchantUserDetailsComponent implements OnInit {

  merchantuser: IMerchantUser = new MerchantUser();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Merchant Users', slug: '/panel/merchantusers' }, { name: 'Details' }]);
    const merchantuser = this.route.snapshot.data['merchantuser'];

    if (!merchantuser) {
      this.router.navigate(['panel', 'merchantusers']);
    }

    this.merchantuser = merchantuser;
  }

}
