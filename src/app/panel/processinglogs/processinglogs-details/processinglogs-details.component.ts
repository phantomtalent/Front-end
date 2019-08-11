import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IProcessingLogs} from '@utils/interfaces';
import {ProcessingLogs} from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';

@Component({
  selector: 'app-processinglogs-details',
  templateUrl: './processinglogs-details.component.html',
  styleUrls: ['./processinglogs-details.component.scss']
})
export class ProcessingLogsDetailsComponent implements OnInit {

  processinglog: IProcessingLogs = new ProcessingLogs();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Processing Logs', slug: '/panel/processinglogs' }, { name: 'Details' }]);
    const processinglog = this.route.snapshot.data['processinglog'];

    if (!processinglog) {
      this.router.navigate(['panel', 'processinglogs']);
    }

    this.processinglog = processinglog;
  }

}
