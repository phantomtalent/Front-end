import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEventLogs } from '@utils/interfaces';
import { EventLogs } from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';

@Component({
  selector: 'app-eventlogs-details',
  templateUrl: './eventlogs-details.component.html',
  styleUrls: ['./eventlogs-details.component.scss']
})
export class EventLogsDetailsComponent implements OnInit {

  eventlogs: IEventLogs = new EventLogs();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Event Logs', slug: '/panel/eventlogs' }, { name: 'Details' }]);
    const eventlogs = this.route.snapshot.data['eventlogs'];

    if (!eventlogs) {
      this.router.navigate(['panel', 'eventlogs']);
    }

    this.eventlogs = eventlogs;
  }

}
