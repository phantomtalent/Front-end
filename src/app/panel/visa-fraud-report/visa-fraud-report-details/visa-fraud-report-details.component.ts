import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IVisaFraudReport } from '@utils/interfaces';
import { VisaFraudReport } from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { filter, take, switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-visa-fraud-report-details',
  templateUrl: './visa-fraud-report-details.component.html',
  styleUrls: ['./visa-fraud-report-details.component.scss']
})
export class VisaFraudReportDetailsComponent implements OnInit, OnDestroy {

  visafraudreport: IVisaFraudReport = new VisaFraudReport();
  additionalVisafraudreport: IVisaFraudReport[] = [];
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
        this.route.snapshot.data['visafraudreport'],
        this.route.snapshot.data['additionalVisafraudreport']
      );
    }
  }

  init(transaction, additionalTransactions) {
    if (!transaction) {
      this.router.navigate(['panel', 'visafraudreports']);
    }
    this.breadcrumbService.setItems([{ name: 'Visa Fraud Reports', slug: '/panel/visafraudreports' }, { name: 'Visa Fraud Report' }]);
    this.route.params
      .pipe(takeUntil(this._destroy))
      .subscribe(() => {
        this.additionalVisafraudreport = additionalTransactions;

        this.visafraudreport = new VisaFraudReport(transaction);
      });
  }

  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
  }
}
