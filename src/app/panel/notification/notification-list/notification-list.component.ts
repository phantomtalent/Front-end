import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../service/notification.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { IPagination, INotification } from '@utils/interfaces';
import { Pagination } from '@utils/models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IPagedResult } from '@app/panel/common/paged-result';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

  pagination: IPagination = new Pagination();

  formGroup = new FormGroup({
    id: new FormControl(null, [Validators.maxLength(255)]),
    name: new FormControl(null, [Validators.maxLength(255)]),
    from: new FormControl(null),
    to: new FormControl(null)
  });

  notifications: INotification[];

  constructor(private notificationService: NotificationService,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Notifications list' }]);
    const pagedResult: IPagedResult<INotification> = (<IPagedResult<INotification>>this.route.snapshot.data['pagedResult']);

    if (pagedResult) {
      this.notifications = pagedResult.content;
      this.pagination.total = pagedResult.totalPages;
    }
  }

  search() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.notificationService.search(this.pagination, this.formGroup.value)
        .subscribe(result => {
          this.formGroup.enable();
          this.notifications = result.content;
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
    this.notificationService.export().subscribe(data => {
      const a = document.createElement('a');

      a.href = window.URL.createObjectURL(data);
      a.download = 'export.xls';
      a.click();
    });
  }

}
