import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BarChartComponent } from './dashboard/bar-chart/bar-chart.component';
import { LinearChartComponent } from './dashboard/linear-chart/linear-chart.component';
import { TopContractComponent } from './dashboard/top-contract/top-contract.component';
import { TopMerchantComponent } from './dashboard/top-merchant/top-merchant.component';
import { TopTerminalComponent } from './dashboard/top-terminal/top-terminal.component';

import { AcquirerComponent } from './acquirer/acquirer.component';
import { AcquirerNewComponent } from './acquirer/acquirer-new/acquirer-new.component';
import { AcquirerListComponent } from './acquirer/acquirer-list/acquirer-list.component';
import { AcquirerDetailsComponent } from './acquirer/acquirer-details/acquirer-details.component';
import { AcquirerEditComponent } from './acquirer/acquirer-edit/acquirer-edit.component';

import { CompanyComponent } from './company/company.component';
import { CompanyNewComponent } from './company/company-new/company-new.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';

import { ResellerComponent } from './reseller/reseller.component';
import { ResellerNewComponent } from './reseller/reseller-new/reseller-new.component';
import { ResellerListComponent } from './reseller/reseller-list/reseller-list.component';
import { ResellerDetailsComponent } from './reseller/reseller-details/reseller-details.component';
import { ResellerEditComponent } from './reseller/reseller-edit/reseller-edit.component';

import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { MerchantUserComponent } from './merchant-user/merchant-user.component';
import { MerchantUserNewComponent } from './merchant-user/merchant-user-new/merchant-user-new.component';
import { MerchantUserListComponent } from './merchant-user/merchant-user-list/merchant-user-list.component';
import { MerchantUserDetailsComponent } from './merchant-user/merchant-user-details/merchant-user-details.component';
import { MerchantUserEditComponent } from './merchant-user/merchant-user-edit/merchant-user-edit.component';

import { ResellerUserComponent } from './reseller-user/reseller-user.component';
import { ResellerUserNewComponent } from './reseller-user/reseller-user-new/reseller-user-new.component';
import { ResellerUserListComponent } from './reseller-user/reseller-user-list/reseller-user-list.component';
import { ResellerUserDetailsComponent } from './reseller-user/reseller-user-details/reseller-user-details.component';
import { ResellerUserEditComponent } from './reseller-user/reseller-user-edit/reseller-user-edit.component';

import { TransactionNotesComponent } from './transaction_notes/transaction_notes.component';
import { TransactionNotesNewComponent } from './transaction_notes/transaction_notes-new/transaction_notes-new.component';
import { TransactionNotesListComponent } from './transaction_notes/transaction_notes-list/transaction_notes-list.component';
import { TransactionNotesDetailsComponent } from './transaction_notes/transaction_notes-details/transaction_notes-details.component';
import { TransactionNotesEditComponent } from './transaction_notes/transaction_notes-edit/transaction_notes-edit.component';
import {
  TransactionNotesDetailsListComponent
} from './transaction_notes/transaction-notes-details-list/transaction-notes-details-list.component';
import {
  TransactionNotesDetailsTableComponent
} from './transaction_notes/transaction-notes-details-table/transaction-notes-details-table.component';

import { BlacklistComponent } from './blacklist/blacklist.component';
import { BlacklistNewComponent } from './blacklist/blacklist-new/blacklist-new.component';
import { BlacklistListComponent } from './blacklist/blacklist-list/blacklist-list.component';
import { BlacklistDetailsComponent } from './blacklist/blacklist-details/blacklist-details.component';
import { BlacklistEditComponent } from './blacklist/blacklist-edit/blacklist-edit.component';

import { TerminalComponent } from './terminal/terminal.component';
import { TerminalNewComponent } from './terminal/terminal-new/terminal-new.component';
import { TerminalListComponent } from './terminal/terminal-list/terminal-list.component';
import { TerminalDetailsComponent } from './terminal/terminal-details/terminal-details.component';
import { TerminalEditComponent } from './terminal/terminal-edit/terminal-edit.component';
import { TerminalRiskFilterListComponent } from './terminal/terminal-risk-filter-list/terminal-risk-filter-list.component';
import { TerminalRiskFilterEditComponent } from './terminal/terminal-risk-filter-edit/terminal-risk-filter-edit.component';
import { TerminalRiskFilterNewComponent } from './terminal/terminal-risk-filter-new/terminal-risk-filter-new.component';
import { TerminalRiskFilterCopyComponent } from './terminal/terminal-risk-filter-copy/terminal-risk-filter-copy.component';
import { TerminalRiskDetailsComponent } from './terminal/terminal-risk-details/terminal-risk-details.component';

import { MerchantComponent } from './merchant/merchant.component';
import { MerchantNewComponent } from './merchant/merchant-new/merchant-new.component';
import { MerchantListComponent } from './merchant/merchant-list/merchant-list.component';
import { MerchantDetailsComponent } from './merchant/merchant-details/merchant-details.component';
import { MerchantEditComponent } from './merchant/merchant-edit/merchant-edit.component';

import { ContractComponent } from './contract/contract.component';
import { ContractNewComponent } from './contract/contract-new/contract-new.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractDetailsComponent } from './contract/contract-details/contract-details.component';
import { ContractEditComponent } from './contract/contract-edit/contract-edit.component';

import { TransactionComponent } from './transaction/transaction.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { TransactionDetailsComponent } from './transaction/transaction-details/transaction-details.component';
import { TransactionFullDetailsComponent } from './transaction/transaction-full-details/transaction-full-details.component';
import { TransactionLogsComponent } from './transaction/transaction-logs/transaction-logs.component';
import { TransactionBillingAddressDetailsComponent } from './transaction/transaction-billing-address/transaction-billing-address.component';
import { TransactionShippingAddressDetailsComponent } from './transaction/transaction-shipping-address/transaction-shipping-address.component';
import {
  TransactionAdditionalAttributesComponent
} from './transaction/transaction-additional-attributes/transaction-additional-attributes.component';
import { AdditionalTransactionsComponent } from './transaction/additional-transactions/additional-transactions.component';
import { CreateTransactrionNoteComponent } from './transaction/create-transactrion-note/create-transactrion-note.component';
import { TransactionNotificationComponent } from './transaction/transaction-notification/transaction-notification.component';

import { ProcessedTransactionComponent } from './processed_transaction/processed-transaction.component';
import { ProcessedTransactionListComponent } from './processed_transaction/processed-transaction-list/processed-transaction-list.component';
import { ProcessedTransactionDetailsComponent } from './processed_transaction/processed-transaction-details/processed-transaction-details.component';
import { ProcessedTransactionFullDetailsComponent } from './processed_transaction/processed-transaction-full-details/processed-transaction-full-details.component';
import { AdditionalProcessedTransactionComponent } from './processed_transaction/additional-processed-transactions/additional-processed-transactions.component';

import { ChargebackComponent } from './chargebacks/chargeback.component';
import { ChargebackListComponent } from './chargebacks/chargeback-list/chargeback-list.component';
import { ChargebackDetailsComponent } from './chargebacks/chargeback-details/chargeback-details.component';
import { AdditionalChargebacksComponent } from './chargebacks/additional-chargeback/additional-chargeback.component';
import { ChargebackFullDetailsComponent } from './chargebacks/chargeback-full-details/chargeback-full-details.component';

import { VisaFraudReportComponent } from './visa-fraud-report/visa-fraud-report.component';
import { VisaFraudReportListComponent } from './visa-fraud-report/visa-fraud-report-list/visa-fraud-report-list.component';
import { VisaFraudReportDetailsComponent } from './visa-fraud-report/visa-fraud-report-details/visa-fraud-report-details.component';
import { AdditionalVisaFraudReportComponent } from './visa-fraud-report/additional-visa-fraud-report/additional-visa-fraud-report.component';
import { VisaFraudReportFullDetailsComponent } from './visa-fraud-report/visa-fraud-report-full-details/visa-fraud-report-full-details.component';

import { MastercardFraudReportComponent } from './mastercard-fraud-report/mastercard-fraud-report.component';
import { MastercardFraudReportListComponent } from './mastercard-fraud-report/mastercard-fraud-report-list/mastercard-fraud-report-list.component';
import { MastercardFraudReportDetailsComponent } from './mastercard-fraud-report/mastercard-fraud-report-details/mastercard-fraud-report-details.component';
import { AdditionalMastercardFraudReportComponent } from './mastercard-fraud-report/additional-mastercard-fraud-report/additional-mastercard-fraud-report.component';
import { MastercardFraudReportFullDetailsComponent } from './mastercard-fraud-report/mastercard-fraud-report-full-details/mastercard-fraud-report-full-details.component';

import { RetrievalRequestsComponent } from './retrievalrequests/retrievalrequests.component';
import { RetrievalRequestsListComponent } from './retrievalrequests/retrievalrequests-list/retrievalrequests-list.component';
import { RetrievalRequestsDetailsComponent } from './retrievalrequests/retrievalrequests-details/retrievalrequests-details.component';
import { AdditionalRetrievalRequestsComponent } from './retrievalrequests/additional-retrievalrequests/additional-retrievalrequests.component';
import { RetrievalRequestsFullDetailsComponent } from './retrievalrequests/retrievalrequests-full-details/retrievalrequests-full-details.component';

import { ProcessingLogsComponent } from './processinglogs/processinglogs.component';
import { ProcessingLogsListComponent } from './processinglogs/processinglogs-list/processinglogs-list.component';
import { ProcessingLogsDetailsComponent } from './processinglogs/processinglogs-details/processinglogs-details.component';

import { TaskLogsComponent } from './tasklogs/tasklogs.component';
import { TaskLogsListComponent } from './tasklogs/tasklogs-list/tasklogs-list.component';
import { TaskLogsDetailsComponent } from './tasklogs/tasklogs-details/tasklogs-details.component';

import { EventLogsComponent } from './eventlogs/eventlogs.component';
import { EventLogsListComponent } from './eventlogs/eventlogs-list/eventlogs-list.component';
import { EventLogsDetailsComponent } from './eventlogs/eventlogs-details/eventlogs-details.component';

import { WpfPaymentsComponent } from './wpf_payments/wpf_payments.component';
import { WpfPaymentsListComponent } from './wpf_payments/wpf_payments-list/wpf_payments-list.component';
import { WpfPaymentsDetailsComponent } from './wpf_payments/wpf_payments-details/wpf_payments-details.component';
import { WpfPaymentsShippingDetailsComponent } from './wpf_payments/wpf_payments-shipping-details/wpf_payments-shipping-details.component';
import { WpfPaymentsBillingDetailsComponent } from './wpf_payments/wpf_payments-billing-details/wpf_payments-billing-details.component';
import { WpfPaymentNotificationComponent } from './wpf_payments/wpf_payments-notification/wpf_payment-notification.component';
import { WpfPaymentFullDetailsComponent } from './wpf_payments/wpf_payment-full-details/wpf_payment-full-details.component';

import { VirtualTerminalComponent } from './virtual_terminal/virtual-terminal.component';
import { VirtualTerminalListComponent } from './virtual_terminal/virtual-terminal-list/virtual-terminal-list.component';
import { VirtualTerminalDetailsComponent } from './virtual_terminal/virtual-terminal-details/virtual-terminal-details.component';

import { ApiAttemptComponent } from './apiattempt/apiattempt.component';
import { ApiAttemptListComponent } from './apiattempt/apiattempt-list/apiattempt-list.component';
import { ApiAttemptDetailsComponent } from './apiattempt/apiattempt-details/apiattempt-details.component';

import { NotificationComponent } from './notification/notification.component';
import { NotificationListComponent } from './notification/notification-list/notification-list.component';
import { NotificationDetailsComponent } from './notification/notification-details/notification-details.component';

import { DownloadComponent } from './downloads/download.component';
import { AccordionModule, PaginationModule } from 'ngx-bootstrap';
import { PanelRoutingModule } from './panel-routing.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormatTypePipe } from './common/format-type.pipe';
import { PanelComponent } from './panel.component';
import { SharedModule } from '@shared/shared.module';

import { UserResolver } from '@app/panel/resolvers/user.resolver';
import { UserListResolver } from '@app/panel/resolvers/user-list.resolver';

import { MerchantUserResolver } from '@app/panel/resolvers/merchant-user.resolver';
import { MerchantUserListResolver } from '@app/panel/resolvers/merchant-user-list.resolver';

import { ResellerUserResolver } from '@app/panel/resolvers/reseller-user.resolver';
import { ResellerUserListResolver } from '@app/panel/resolvers/reseller-user-list.resolver';

import { TransactionResolver } from '@app/panel/resolvers/transaction.resolver';
import { TransactionListResolver } from '@app/panel/resolvers/transaction-list.resolver';
import { AdditionalTransactionsByTransactionIdResolver } from './resolvers/additional-transactions-by-transaction-id.resolver';

import { ProcessedTransactionResolver } from '@app/panel/resolvers/processed-transaction.resolver';
import { ProcessedTransactionListResolver } from '@app/panel/resolvers/processed-transaction-list.resolver';
import { AdditionalProcessedTransactionsByProcessedTransactionIdResolver } from './resolvers/additional-processedtransactions-by-processedtransaction-id.resolver';

import { ChargebackResolver } from '@app/panel/resolvers/chargeback.resolver';
import { ChargebackListResolver } from '@app/panel/resolvers/chargeback-list.resolver';
import { AdditionalChargebacksByChargebackIdResolver } from './resolvers/additional-chargebacks-by-chargeback-id.resolver';

import { VisaFraudReportResolver } from '@app/panel/resolvers/visa-fraud-report.resolver';
import { VisaFraudReportListResolver } from '@app/panel/resolvers/visa-fraud-report-list.resolver';
import { AdditionalVisaFraudReportsByVisaFraudReportIdResolver } from './resolvers/additional-visa-fraud-reports-by-visa-fraud-report-id.resolver';

import { MastercardFraudReportResolver } from '@app/panel/resolvers/mastercard-fraud-report.resolver';
import { MastercardFraudReportListResolver } from '@app/panel/resolvers/mastercard-fraud-report-list.resolver';
import { AdditionalMastercardFraudReportsByMastercardFraudReportIdResolver } from './resolvers/additional-mastercard-fraud-reports-by-mastercard-fraud-report-id.resolver';

import { RetrievalRequestResolver } from '@app/panel/resolvers/retrievalrequest.resolver';
import { RetrievalRequestListResolver } from '@app/panel/resolvers/retrievalrequest-list.resolver';
import { AdditionalRetrievalRequestsByetrievalRequestIdResolver } from './resolvers/additional-retrievalrequests-by-retrievalrequest-id.resolver';

import { TerminalResolver } from '@app/panel/resolvers/terminal.resolver';
import { TerminalListResolver } from '@app/panel/resolvers/terminal-list.resolver';
import { TerminalPagedListResolver } from '@app/panel/resolvers/terminal-paged-list.resolver';
import { TerminalRiskFilterResolver } from '@app/panel/resolvers/terminal-risk-filter.resolver';
import { TerminalRiskFiltersByTerminalIdResolver } from './resolvers/terminal-risk-filters-by-terminal-id.resolver';

import { ResellerResolver } from '@app/panel/resolvers/reseller.resolver';
import { ResellerListResolver } from '@app/panel/resolvers/reseller-list.resolver';

import { ProcessingLogsResolver } from '@app/panel/resolvers/processinglogs.resolver';
import { ProcessingLogsListResolver } from '@app/panel/resolvers/processinglogs-list.resolver';

import { NotificationResolver } from '@app/panel/resolvers/notification.resolver';
import { NotificationListResolver } from '@app/panel/resolvers/notification-list.resolver';

import { MerchantResolver } from '@app/panel/resolvers/merchant.resolver';
import { MerchantListResolver } from '@app/panel/resolvers/merchant-list.resolver';

import { ContractResolver } from '@app/panel/resolvers/contract.resolver';
import { ContractListResolver } from '@app/panel/resolvers/contract-list.resolver';

import { AcquirerResolver } from '@app/panel/resolvers/acquirer.resolver';
import { AcquirerListResolver } from '@app/panel/resolvers/acquirer-list.resolver';

import { CompanyResolver } from '@app/panel/resolvers/company.resolver';
import { CompanyListResolver } from '@app/panel/resolvers/company-list.resolver';

import { ApiAttemptResolver } from '@app/panel/resolvers/apiattempt.resolver';
import { ApiAttemptListResolver } from '@app/panel/resolvers/apiattempt-list.resolver';

import { TransactionNotesResolver } from '@app/panel/resolvers/transaction_notes.resolver';
import { TransactionNotesListResolver } from '@app/panel/resolvers/transaction_notes-list.resolver';
import { TransactionNotesByTransactionIdResolver } from './resolvers/transaction-notes-by-transaction-id.resolver';

import { WpfPaymentsResolver } from '@app/panel/resolvers/wpf_payments.resolver';
import {
  WpfPaymentsAdditionalTransactionsComponent
} from './wpf_payments/wpf_payments-additional-transactions/wpf_payments-additional-transactions.component';
import {
  WpfTransactionTransactionLogsComponent
} from './wpf_payments/wpf_payments-transaction-logs/wpf_transaction-transaction-logs.component';
import { WpfPaymentsListResolver } from '@app/panel/resolvers/wpf_payments-list.resolver';

import { BlacklistResolver } from '@app/panel/resolvers/blacklist.resolver';
import { BlacklistListResolver } from '@app/panel/resolvers/blacklist-list.resolver';

import { TaskLogsResolver } from '@app/panel/resolvers/tasklogs-resolver.service';
import { TaskLogsListResolver } from '@app/panel/resolvers/tasklogs-list.resolver';

import { EventLogsResolver } from '@app/panel/resolvers/eventlogs-resolver.service';
import { EventLogsListResolver } from '@app/panel/resolvers/eventlogs-list.resolver';

import { ChartModule } from 'angular2-chartjs';
import { TransactionViewReceiptComponent } from './transaction/transaction-view-receipt/transaction-view-receipt.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ResetPasswordComponent } from './preferences/reset-password/reset-password.component';
import { VirtualTerminalService } from './service/virtual-terminal.service';
import { NgHighlightModule } from 'ngx-text-highlight';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    AccordionModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    PaginationModule.forRoot(),
    NgHighlightModule
  ],
  declarations: [
    DashboardComponent,
    BarChartComponent,
    LinearChartComponent,
    TopContractComponent,
    TopMerchantComponent,
    TopTerminalComponent,

    AcquirerComponent,
    AcquirerNewComponent,
    AcquirerListComponent,
    AcquirerDetailsComponent,
    AcquirerEditComponent,

    CompanyComponent,
    CompanyNewComponent,
    CompanyListComponent,
    CompanyDetailsComponent,
    CompanyEditComponent,

    ResellerComponent,
    ResellerNewComponent,
    ResellerListComponent,
    ResellerDetailsComponent,
    ResellerEditComponent,

    UserComponent,
    UserNewComponent,
    UserListComponent,
    UserDetailsComponent,
    UserEditComponent,

    MerchantUserComponent,
    MerchantUserNewComponent,
    MerchantUserListComponent,
    MerchantUserDetailsComponent,
    MerchantUserEditComponent,

    ResellerUserComponent,
    ResellerUserNewComponent,
    ResellerUserListComponent,
    ResellerUserDetailsComponent,
    ResellerUserEditComponent,

    TransactionNotesComponent,
    TransactionNotesNewComponent,
    TransactionNotesListComponent,
    TransactionNotesDetailsComponent,
    TransactionNotesEditComponent,
    TransactionNotesDetailsListComponent,
    TransactionNotesDetailsTableComponent,

    WpfPaymentsComponent,
    WpfPaymentsListComponent,
    WpfPaymentsAdditionalTransactionsComponent,
    WpfTransactionTransactionLogsComponent,
    WpfPaymentsDetailsComponent,
    WpfPaymentsShippingDetailsComponent,
    WpfPaymentsBillingDetailsComponent,
    WpfPaymentNotificationComponent,
    WpfPaymentFullDetailsComponent,

    VirtualTerminalComponent,
    VirtualTerminalListComponent,
    VirtualTerminalDetailsComponent,

    BlacklistComponent,
    BlacklistNewComponent,
    BlacklistListComponent,
    BlacklistDetailsComponent,
    BlacklistEditComponent,

    TerminalComponent,
    TerminalNewComponent,
    TerminalListComponent,
    TerminalDetailsComponent,
    TerminalEditComponent,
    TerminalRiskFilterListComponent,
    TerminalRiskFilterEditComponent,
    TerminalRiskFilterNewComponent,
    TerminalRiskFilterCopyComponent,
    TerminalRiskDetailsComponent,

    MerchantComponent,
    MerchantNewComponent,
    MerchantListComponent,
    MerchantDetailsComponent,
    MerchantEditComponent,

    ContractComponent,
    ContractNewComponent,
    ContractListComponent,
    ContractDetailsComponent,
    ContractEditComponent,

    TransactionComponent,
    TransactionDetailsComponent,
    TransactionListComponent,
    TransactionFullDetailsComponent,
    TransactionLogsComponent,
    TransactionBillingAddressDetailsComponent,
    TransactionShippingAddressDetailsComponent,
    TransactionAdditionalAttributesComponent,
    AdditionalTransactionsComponent,
    CreateTransactrionNoteComponent,
    TransactionNotificationComponent,

    ProcessedTransactionComponent,
    ProcessedTransactionListComponent,
    ProcessedTransactionDetailsComponent,
    ProcessedTransactionFullDetailsComponent,
    AdditionalProcessedTransactionComponent,

    ChargebackComponent,
    ChargebackListComponent,
    ChargebackDetailsComponent,
    AdditionalChargebacksComponent,
    ChargebackFullDetailsComponent,

    VisaFraudReportComponent,
    VisaFraudReportListComponent,
    VisaFraudReportDetailsComponent,
    AdditionalVisaFraudReportComponent,
    VisaFraudReportFullDetailsComponent,

    MastercardFraudReportComponent,
    MastercardFraudReportListComponent,
    MastercardFraudReportDetailsComponent,
    AdditionalMastercardFraudReportComponent,
    MastercardFraudReportFullDetailsComponent,

    RetrievalRequestsComponent,
    RetrievalRequestsListComponent,
    RetrievalRequestsDetailsComponent,
    AdditionalRetrievalRequestsComponent,
    RetrievalRequestsFullDetailsComponent,

    NotificationComponent,
    NotificationListComponent,
    NotificationDetailsComponent,

    ProcessingLogsComponent,
    ProcessingLogsListComponent,
    ProcessingLogsDetailsComponent,

    TaskLogsComponent,
    TaskLogsListComponent,
    TaskLogsDetailsComponent,

    EventLogsComponent,
    EventLogsListComponent,
    EventLogsDetailsComponent,

    ApiAttemptComponent,
    ApiAttemptListComponent,
    ApiAttemptDetailsComponent,

    FormatTypePipe,
    DownloadComponent,
    PanelComponent,
    TransactionViewReceiptComponent,

    PreferencesComponent,
    ResetPasswordComponent,
  ],
  exports: [
    PanelRoutingModule,
    FormatTypePipe,
    NgHighlightModule
  ],
  providers: [
    UserResolver,
    UserListResolver,
    MerchantUserResolver,
    MerchantUserListResolver,
    ResellerUserResolver,
    ResellerUserListResolver,
    AdditionalTransactionsByTransactionIdResolver,
    TransactionResolver,
    TransactionListResolver,
    ProcessedTransactionResolver,
    ProcessedTransactionListResolver,
    AdditionalProcessedTransactionsByProcessedTransactionIdResolver,
    ChargebackResolver,
    ChargebackListResolver,
    AdditionalChargebacksByChargebackIdResolver,
    VisaFraudReportResolver,
    VisaFraudReportListResolver,
    AdditionalVisaFraudReportsByVisaFraudReportIdResolver,
    MastercardFraudReportResolver,
    MastercardFraudReportListResolver,
    AdditionalMastercardFraudReportsByMastercardFraudReportIdResolver,
    RetrievalRequestResolver,
    RetrievalRequestListResolver,
    AdditionalRetrievalRequestsByetrievalRequestIdResolver,
    TerminalResolver,
    TerminalListResolver,
    TerminalPagedListResolver,
    TerminalRiskFilterResolver,
    TerminalRiskFiltersByTerminalIdResolver,
    ResellerResolver,
    ResellerListResolver,
    ProcessingLogsResolver,
    ProcessingLogsListResolver,
    NotificationResolver,
    NotificationListResolver,
    MerchantResolver,
    MerchantListResolver,
    ContractResolver,
    ContractListResolver,
    AcquirerResolver,
    AcquirerListResolver,
    CompanyResolver,
    CompanyListResolver,
    ApiAttemptResolver,
    ApiAttemptListResolver,
    TransactionNotesResolver,
    TransactionNotesByTransactionIdResolver,
    TransactionNotesListResolver,
    WpfPaymentsResolver,
    WpfPaymentsListResolver,
    BlacklistResolver,
    BlacklistListResolver,
    TaskLogsResolver,
    TaskLogsListResolver,
    EventLogsResolver,
    EventLogsListResolver,
    VirtualTerminalService
  ]
})
export class PanelModule {
}
