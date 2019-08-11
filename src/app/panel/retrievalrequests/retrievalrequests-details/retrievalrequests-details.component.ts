import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRetrievalRequest } from '@utils/interfaces';
import { RetrievalRequest } from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { filter, take, switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-retrievalrequests-details',
  templateUrl: './retrievalrequests-details.component.html',
  styleUrls: ['./retrievalrequests-details.component.scss']
})
export class RetrievalRequestsDetailsComponent implements OnInit, OnDestroy {

  retrievalrequest: IRetrievalRequest = new RetrievalRequest();
  additionalRetrievalRequests: IRetrievalRequest[] = [];
  _destroy: Subject<void> = new Subject<void>();
  @Input()
  config = {
    useInput: false,
    showHeader: true,
    showDetails: true,
    retrievalrequest: null,
    notes: null,
    additionalTransactions: null
  };

  constructor(private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit() {
    if (this.config.useInput) {
      this.init(
        this.config.retrievalrequest,
        this.config.additionalTransactions
      );
    } else {
      this.init(
        this.route.snapshot.data['retrievalrequest'],
        this.route.snapshot.data['additionalRetrievalRequests']
      );
    }
  }

  init(retrievalrequest, additionalRetrievalRequests) {
    if (!retrievalrequest) {
      this.router.navigate(['panel', 'retrievalrequest']);
    }
    this.breadcrumbService.setItems([{ name: 'Retrieval Requests', slug: '/panel/retrievalrequest' }, { name: 'RetrievalRequest' }]);
    this.route.params
      .pipe(takeUntil(this._destroy))
      .subscribe(() => {
        this.additionalRetrievalRequests = additionalRetrievalRequests;

        this.retrievalrequest = new RetrievalRequest(retrievalrequest);
      });
  }

  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
  }
}
