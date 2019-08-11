import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {INotification} from '@utils/interfaces';
import {Notification} from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.scss']
})
export class NotificationDetailsComponent implements OnInit {

  notification: Notification = new Notification();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Notifications list', slug: '/panel/notifications' }, { name: 'Details' }]);
    const notification = this.route.snapshot.data['notification'];

    if (!notification) {
      this.router.navigate(['panel', 'notifications']);
    }

    this.notification = notification;
  }

}
