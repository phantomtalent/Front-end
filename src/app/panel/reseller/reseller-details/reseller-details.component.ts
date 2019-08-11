import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IReseller} from '@utils/interfaces';
import {ResellerUser, Reseller} from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import {forkJoin} from "rxjs";
import {ResellerService} from "@app/panel/service/reseller.service";

@Component({
  selector: 'app-reseller-details',
  templateUrl: './reseller-details.component.html',
  styleUrls: ['./reseller-details.component.scss']
})
export class ResellerDetailsComponent implements OnInit {

  reseller: IReseller = new Reseller();

  resellerUserList: ResellerUser[] = [];
  resellerUsers: ResellerUser[] = [];

  constructor(private resellerService: ResellerService,
              private router: Router,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/resellers' }, { name: 'Resellers', slug: '/panel/resellers' }, { name: 'Details' }]);
    const reseller = this.route.snapshot.data['reseller'];

    if (!reseller) {
      this.router.navigate(['panel', 'resellers']);
    }

    this.reseller = reseller;

    forkJoin(
      this.resellerService.getResellerUsersList(),
      this.resellerService.getResellerUsers(this.reseller.id)
    ).subscribe(([resellers, resellersUsers]) => {
      if (resellers) {
        resellers.forEach((element) => {
          this.resellerUsers.push(new ResellerUser(element));
        });
        if (resellersUsers) {
          resellersUsers.forEach((element) => {
            const user = new ResellerUser(element);
            const resellerUser = this.resellerUsers.find((ct) => ct.id === user.id);
            user.login = resellerUser.login;
            this.resellerUserList.push(user);
          });
        }
      }
    });
  }

}
