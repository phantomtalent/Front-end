import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITaskLogs } from '@utils/interfaces';
import { TaskLogs } from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';

@Component({
  selector: 'app-tasklogs-details',
  templateUrl: './tasklogs-details.component.html',
  styleUrls: ['./tasklogs-details.component.scss']
})
export class TaskLogsDetailsComponent implements OnInit {

  tasklogs: ITaskLogs = new TaskLogs();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Task Logs', slug: '/panel/tasklogs' }, { name: 'Details' }]);
    const tasklogs = this.route.snapshot.data['tasklogs'];

    if (!tasklogs) {
      this.router.navigate(['panel', 'tasklogs']);
    }

    this.tasklogs = tasklogs;
  }

}
