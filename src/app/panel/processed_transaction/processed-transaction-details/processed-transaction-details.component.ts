import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProcessedTransaction } from '@utils/interfaces';
import { ProcessedTransaction } from '@utils/models';
import { ProcessingLogsService } from '@app/panel/service/processinglogs.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { filter, take, switchMap, takeUntil } from 'rxjs/operators';
import { ProcessingLogsList } from '@app/panel/domain/processinglogs-list';
import { TransactionNotesService } from '@app/panel/service/transaction_notes.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-processed-transaction-details',
  templateUrl: './processed-transaction-details.component.html',
  styleUrls: ['./processed-transaction-details.component.scss']
})
export class ProcessedTransactionDetailsComponent implements OnInit, OnDestroy {

  processedTransaction: IProcessedTransaction = new ProcessedTransaction();
  additionalProcessedTransactions: IProcessedTransaction[] = [];
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
    private processingLogsService: ProcessingLogsService,
    private transactionNotesService: TransactionNotesService,
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
        this.route.snapshot.data['processedTransaction'],
        this.route.snapshot.data['additionalProcessedTransactions']
      );
    }
  }

  init(transaction, additionalProcessedTransactions) {
    if (!transaction) {
      this.router.navigate(['panel', 'processed_transactions']);
    }
    this.breadcrumbService.setItems([{ name: 'Processed Transactions', slug: '/panel/proccessed_transactions' }, { name: 'Processed Transaction' }]);
    this.route.params
      .pipe(takeUntil(this._destroy))
      .subscribe(() => {
        this.additionalProcessedTransactions = additionalProcessedTransactions;

        this.processedTransaction = new ProcessedTransaction(transaction);
      });
  }

  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
  }
}
