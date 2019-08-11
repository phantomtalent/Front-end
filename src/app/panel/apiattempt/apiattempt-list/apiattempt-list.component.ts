import {Component, OnInit} from '@angular/core';
import {ApiAttemptService} from '../../service/apiattempt.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import {IPagination, IApiAttempt} from '@utils/interfaces';
import {Pagination} from '@utils/models';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {IPagedResult} from '@app/panel/common/paged-result';

@Component({
  selector: 'app-apiattempt-list',
  templateUrl: './apiattempt-list.component.html',
  styleUrls: ['./apiattempt-list.component.scss']
})
export class ApiAttemptListComponent implements OnInit {

  pagination: IPagination = new Pagination();

  formGroup = new FormGroup({
    id: new FormControl(null, [Validators.maxLength(255)]),
    name: new FormControl(null, [Validators.maxLength(255)]),
    from: new FormControl(null),
    to: new FormControl(null)
  });

  apiattempts: IApiAttempt[];

  constructor(private apiAttemptService: ApiAttemptService,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Api Attempts list' }]);
    const pagedResult: IPagedResult<IApiAttempt> = (<IPagedResult<IApiAttempt>>this.route.snapshot.data['pagedResult']);

    if (pagedResult) {
      this.apiattempts = pagedResult.content;
      this.pagination.total = pagedResult.totalPages;
    }
  }

  search() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.apiAttemptService.search(this.pagination, this.formGroup.value)
        .subscribe(result => {
          this.formGroup.enable();
          this.apiattempts = result.content;
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
    this.apiAttemptService.export().subscribe(data => {
      const a = document.createElement('a');

      a.href = window.URL.createObjectURL(data);
      a.download = 'export.xls';
      a.click();
    });
  }

}
