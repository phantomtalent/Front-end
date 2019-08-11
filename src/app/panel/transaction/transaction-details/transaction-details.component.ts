import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITransaction, ITransactionNotes, INotification, IAddresses } from '@utils/interfaces';
import { Notification, Transaction, TransactionNotes, Addresses } from '@utils/models';
import { ProcessingLogsService } from '@app/panel/service/processinglogs.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { filter, take, switchMap, takeUntil } from 'rxjs/operators';
import { ProcessingLogsList } from '@app/panel/domain/processinglogs-list';
import { TransactionNotesService } from '@app/panel/service/transaction_notes.service';
import { Subject, Subscription } from 'rxjs';
import { TransactionService } from '@app/panel/service/transaction.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit, OnDestroy {

  transaction: ITransaction = new Transaction();
  additionalTransactions: ITransaction[] = [];
  logs: ProcessingLogsList[] = [];
  billingAddress: IAddresses = new Addresses();
  shippingAddress: IAddresses = new Addresses();
  notes: ITransactionNotes[] = [];
  _destroy: Subject<void> = new Subject<void>();
  notification: INotification;

  @Input()
  config = {
    useInput: false,
    showHeader: true,
    showDetails: true,
    transaction: null,
    notes: null,
    additionalTransactions: null
  };

  refreshAdditionals: Subscription;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private processingLogsService: ProcessingLogsService,
    private transactionNotesService: TransactionNotesService,
    private transactionService: TransactionService,
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit() {
    if (this.config.useInput) {
      this.init(
        this.config.transaction,
        this.config.notes,
        this.config.additionalTransactions
      );
    } else {
      this.init(
        this.route.snapshot.data['transaction'],
        this.route.snapshot.data['notes'],
        this.route.snapshot.data['additionalTransactions']
      );
    }

    this.refreshAdditionals = this.transactionService.refresh$
      .subscribe(() => {
        this.initialize();
      });

    this.transactionService.getTransactionNotification(this.transaction.id)
      .pipe().subscribe(value => {
        if (value != null) {
          this.notification = value;
        }
      });

    this.getBillingAddress();
    this.getShippingAddress();
  }

  init(transaction, notes, additionalTransactions) {
    if (!transaction) {
      this.router.navigate(['panel', 'transactions']);
    }
    this.breadcrumbService.setItems([{ name: 'Payment Transactions', slug: '/panel/transactions' }, { name: 'Transaction' }]);
    this.route.params
      .pipe(takeUntil(this._destroy))
      .subscribe(() => {
        this.notes = notes;
        this.additionalTransactions = additionalTransactions;

        this.transaction = new Transaction(transaction);
        this.getProcessingLogs();
      });
  }

  initialize() {
    this.transactionService.additionalTransactions(this.transaction.id).subscribe((result) => {
      this.additionalTransactions = result;
    });
    this.getProcessingLogs();
  }

  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
    this.refreshAdditionals.unsubscribe;
  }

  getProcessingLogs() {
    this.processingLogsService.getProcessingLogsList(this.transaction.unique_id)
      .pipe(
        take(1),
        filter(logs => logs !== null)
      )
      .subscribe(logs => {
        this.logs = logs;
      });
  }

  getBillingAddress() {
    this.transactionService.getBillingAddress(this.transaction.id)
      .pipe(
        take(1),
        filter(billingAddress => billingAddress !== null)
      )
      .subscribe(billingAddress => {
        this.billingAddress = billingAddress;
      });
  }

  getShippingAddress() {
    this.transactionService.getShippingAddress(this.transaction.id)
      .pipe(
        take(1),
        filter(shippingAddress => shippingAddress !== null)
      )
      .subscribe(shippingAddress => {
        this.shippingAddress = shippingAddress;
      });
  }

  createTransactionNote(transactionNote: ITransactionNotes) {
    if (this.transaction && this.transaction.id) {
      const note = new TransactionNotes(transactionNote);
      note.payment_transaction_id = this.transaction.id;
      note.merchant_id = this.transaction.merchant_id;
      this.transactionNotesService.add(note)
        .pipe(
          switchMap(() => this.transactionNotesService.list(this.transaction.id))
        )
        .subscribe(notes => {
          this.notes = notes;
        });
    }
  }

  deleteNote(note: ITransactionNotes) {
    this.transactionNotesService.delete(note.id)
      .pipe(
        switchMap(() => this.transactionNotesService.list(this.transaction.id))
      )
      .subscribe(notes => {
        this.notes = notes;
      });
  }

  reviewNote(note: ITransactionNotes) {
    this.transactionNotesService.persist(note)
      .pipe(
        switchMap(() => this.transactionNotesService.list(this.transaction.id))
      )
      .subscribe(notes => {
        this.notes = notes;
      });
  }

  viewReceipt() {
    this.router.navigate([`/panel/transactions/${this.transaction.id}/view-receipt`]);
  }

}
