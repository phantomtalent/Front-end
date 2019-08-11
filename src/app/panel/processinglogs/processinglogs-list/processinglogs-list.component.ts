import { Component, OnInit } from '@angular/core';
import { ProcessingLogsService } from '../../service/processinglogs.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { IPagination } from '@utils/interfaces';
import { Pagination } from '@utils/models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IPagedResult } from '@app/panel/common/paged-result';
import { IProcessingLogs } from '@utils/interfaces';

@Component({
  selector: 'app-processinglogs-list',
  templateUrl: './processinglogs-list.component.html',
  styleUrls: ['./processinglogs-list.component.scss']
})
export class ProcessingLogsListComponent implements OnInit {

  pagination: IPagination = new Pagination();

  formGroup = new FormGroup({
    id: new FormControl(null, [Validators.maxLength(255)]),
    name: new FormControl(null, [Validators.maxLength(255)]),
    from: new FormControl(null),
    to: new FormControl(null)
  });

  processinglogs: IProcessingLogs[];

  constructor(private processinglogsService: ProcessingLogsService,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Processing Logs' }]);
    const pagedResult: IPagedResult<IProcessingLogs> = (<IPagedResult<IProcessingLogs>>this.route.snapshot.data['pagedResult']);

    if (pagedResult) {
      this.processinglogs = pagedResult.content;
      this.pagination.total = pagedResult.totalPages;
    }
  }

  search() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.processinglogsService.search(this.pagination, this.formGroup.value)
        .subscribe(result => {
          this.formGroup.enable();
          this.processinglogs = result.content;
          this.pagination.total = result.totalPages;
        }, (error) => {
          this.formGroup.enable();
        });
    }
  }

  changePage(event: number) {
    this.pagination.current = event;
    this.search();
  }

  clear() {
    this.formGroup.reset();
    this.search();
  }

  export() {
    this.processinglogsService.export().subscribe(data => {
      const a = document.createElement('a');

      a.href = window.URL.createObjectURL(data);
      a.download = 'export.xls';
      a.click();
    });
  }

}
