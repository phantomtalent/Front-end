import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IApiAttempt} from '@utils/interfaces';
import {ApiAttempt} from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';

@Component({
  selector: 'app-apiattempt-details',
  templateUrl: './apiattempt-details.component.html',
  styleUrls: ['./apiattempt-details.component.scss']
})
export class ApiAttemptDetailsComponent implements OnInit {

  apiattempt: ApiAttempt = new ApiAttempt();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Api Attempts list', slug: '/panel/apiattempts' }, { name: 'Details' }]);
    const apiattempt = this.route.snapshot.data['apiattempt'];

    if (!apiattempt) {
      this.router.navigate(['panel', 'apiattempts']);
    }

    this.apiattempt = apiattempt;
  }

}
