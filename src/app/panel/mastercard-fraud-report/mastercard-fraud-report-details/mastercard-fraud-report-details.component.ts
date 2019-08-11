import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMastercardFraudReport } from '@utils/interfaces';
import { MastercardFraudReport } from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { filter, take, switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-mastercard-fraud-report-details',
  templateUrl: './mastercard-fraud-report-details.component.html',
  styleUrls: ['./mastercard-fraud-report-details.component.scss']
})
export class MastercardFraudReportDetailsComponent implements OnInit, OnDestroy {

  mastercardfraudreport: IMastercardFraudReport = new MastercardFraudReport();
  additionalMastercardfraudreport: IMastercardFraudReport[] = [];
  _destroy: Subject<void> = new Subject<void>();
  @Input()
  config = {
    useInput: false,
    showHeader: true,
    showDetails: true,
    transaction: null,
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
        this.config.transaction,
        this.config.additionalTransactions
      );
    } else {
      this.init(
        this.route.snapshot.data['mastercardfraudreport'],
        this.route.snapshot.data['additionalMastercardfraudreport']
      );
    }
  }

  init(transaction, additionalTransactions) {
    if (!transaction) {
      this.router.navigate(['panel', 'mastercardfraudreports']);
    }
    this.breadcrumbService.setItems([{ name: 'Payment Transactions', slug: '/panel/mastercardfraudreports' }, { name: 'Mastercard Fraud Report' }]);
    this.route.params
      .pipe(takeUntil(this._destroy))
      .subscribe(() => {
        this.additionalMastercardfraudreport = additionalTransactions;

        this.mastercardfraudreport = new MastercardFraudReport(transaction);
      });
  }

  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
  }
}
