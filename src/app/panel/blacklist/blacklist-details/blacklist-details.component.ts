import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IBlacklist} from '@utils/interfaces';
import {Blacklist} from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';

@Component({
  selector: 'app-blacklist-details',
  templateUrl: './blacklist-details.component.html',
  styleUrls: ['./blacklist-details.component.scss']
})
export class BlacklistDetailsComponent implements OnInit {

  blacklist: IBlacklist = new Blacklist();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Blacklists', slug: '/panel/blacklists' }, { name: 'Details' }]);
    const blacklist = this.route.snapshot.data['blacklist'];

    if (!blacklist) {
      this.router.navigate(['panel', 'blacklists']);
    }

    this.blacklist = blacklist;
  }

}
