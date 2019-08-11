import {Component, OnInit} from '@angular/core';
import {BlacklistService} from '../../service/blacklist.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import {IPagination, IBlacklist} from '@utils/interfaces';
import {Pagination} from '@utils/models';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {IPagedResult} from '@app/panel/common/paged-result';

@Component({
  selector: 'app-blacklist-list',
  templateUrl: './blacklist-list.component.html',
  styleUrls: ['./blacklist-list.component.scss']
})
export class BlacklistListComponent implements OnInit {

  pagination: IPagination = new Pagination();

  formGroup = new FormGroup({
    id: new FormControl(null, [Validators.maxLength(255)]),
    name: new FormControl(null, [Validators.maxLength(255)]),
    from: new FormControl(null),
    to: new FormControl(null)
  });

  blacklists: IBlacklist[];

  constructor(private blacklistService: BlacklistService,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Blacklists' }]);
    const pagedResult: IPagedResult<IBlacklist> = (<IPagedResult<IBlacklist>>this.route.snapshot.data['pagedResult']);

    if (pagedResult) {
      this.blacklists = pagedResult.content;
      this.pagination.total = pagedResult.totalPages;
    }
  }

  search() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.blacklistService.search(this.pagination, this.formGroup.value)
        .subscribe(result => {
          this.formGroup.enable();
          this.blacklists = result.content;
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
    this.blacklistService.export().subscribe(data => {
      const a = document.createElement('a');

      a.href = window.URL.createObjectURL(data);
      a.download = 'export.xls';
      a.click();
    });
  }

}
