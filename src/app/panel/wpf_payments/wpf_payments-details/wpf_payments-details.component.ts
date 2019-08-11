import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {IWpfAddresses, INotification, ITransaction, IWpfPayments} from '@utils/interfaces';
import {WpfAddresses, Transaction, WpfPayments} from '@utils/models';
import { ProcessingLogsList } from '@app/panel/domain/processinglogs-list';
import { ProcessingLogsService } from '@app/panel/service/processinglogs.service';
import { WpfPaymentsService } from '@app/panel/service/wpf_payments.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { filter, take } from 'rxjs/operators';
import {TransactionService} from '@app/panel/service/transaction.service';

@Component({
  selector: 'app-wpf-payments-details',
  templateUrl: './wpf_payments-details.component.html',
  styleUrls: ['./wpf_payments-details.component.scss']
})
export class WpfPaymentsDetailsComponent implements OnInit {

  transaction: ITransaction = new Transaction();
  wpfPayment: IWpfPayments = new WpfPayments();
  wpfPayments: IWpfPayments[] = [];
  additionalTransactions: ITransaction[] = [];
  logs: ProcessingLogsList[] = [];
  billingAddress: IWpfAddresses = new WpfAddresses();
  shippingAddress: IWpfAddresses = new WpfAddresses();
  notification: INotification;
  isempty = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private wpfPaymentsService: WpfPaymentsService,
    private processingLogsService: ProcessingLogsService,
    private transactionService: TransactionService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'WPF Payments', slug: '/panel/wpf_payments' }, { name: 'Details' }]);
    this.route.params
      .subscribe(() => {
        const wpfPayment = this.route.snapshot.data['wpfPayment'];

        if (!wpfPayment) {
          this.router.navigate(['panel', 'wpfPayments']);
        }
        this.wpfPayment = new WpfPayments(wpfPayment);
        this.wpfPaymentsService.getTransactions(this.wpfPayment.id).subscribe((data) => {
          this.wpfPayments = data;
        });
        this.wpfPaymentsService.getReferenceTransactions(this.wpfPayment.id).subscribe((data) => {
          this.additionalTransactions = data;
        });
        this.getProcessingLogs();
      });

    this.wpfPaymentsService.getWpfPaymentNotification(this.wpfPayment.id)
      .pipe().subscribe(value => {
      if (value != null) {
        this.notification = value;
      }
    });
  }

  getProcessingLogs() {
    this.processingLogsService.getWpfPaymentlogsList(this.wpfPayment.unique_id)
      .pipe(
        take(1),
        filter(logs => logs !== null)
      )
      .subscribe(logs => {
        this.logs = logs;
      });
  }

  getBillingAddress() {
    this.wpfPaymentsService.getBillingAddress(this.wpfPayment.id)
      .pipe(
        take(1),
        filter(billingAddress => billingAddress !== null)
      )
      .subscribe(billingAddress => {
        this.billingAddress = billingAddress;
      });
  }

  getShippingAddress() {
    this.wpfPaymentsService.getShippingAddress(this.wpfPayment.id)
      .pipe(
        take(1),
        filter(shippingAddress => shippingAddress !== null)
      )
      .subscribe(shippingAddress => {
        this.shippingAddress = shippingAddress;
      });
  }
}
