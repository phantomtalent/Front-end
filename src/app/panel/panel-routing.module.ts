import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRoleType } from '@app/panel/domain/user-role-type';

import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserResolver } from '@app/panel/resolvers/user.resolver';
import { UserListResolver } from '@app/panel/resolvers/user-list.resolver';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { MerchantUserComponent } from './merchant-user/merchant-user.component';
import { MerchantUserNewComponent } from './merchant-user/merchant-user-new/merchant-user-new.component';
import { MerchantUserResolver } from '@app/panel/resolvers/merchant-user.resolver';
import { MerchantUserListResolver } from '@app/panel/resolvers/merchant-user-list.resolver';
import { MerchantUserListComponent } from './merchant-user/merchant-user-list/merchant-user-list.component';
import { MerchantUserDetailsComponent } from './merchant-user/merchant-user-details/merchant-user-details.component';
import { MerchantUserEditComponent } from './merchant-user/merchant-user-edit/merchant-user-edit.component';

import { ResellerUserComponent } from './reseller-user/reseller-user.component';
import { ResellerUserNewComponent } from './reseller-user/reseller-user-new/reseller-user-new.component';
import { ResellerUserResolver } from '@app/panel/resolvers/reseller-user.resolver';
import { ResellerUserListResolver } from '@app/panel/resolvers/reseller-user-list.resolver';
import { ResellerUserListComponent } from './reseller-user/reseller-user-list/reseller-user-list.component';
import { ResellerUserDetailsComponent } from './reseller-user/reseller-user-details/reseller-user-details.component';
import { ResellerUserEditComponent } from './reseller-user/reseller-user-edit/reseller-user-edit.component';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { TopContractComponent } from './dashboard/top-contract/top-contract.component';
import { TopMerchantComponent } from './dashboard/top-merchant/top-merchant.component';
import { TopTerminalComponent } from './dashboard/top-terminal/top-terminal.component';

import { DownloadComponent } from './downloads/download.component';
import { PanelComponent } from '@app/panel/panel.component';

import { TransactionComponent } from './transaction/transaction.component';
import { TransactionResolver } from '@app/panel/resolvers/transaction.resolver';
import { TransactionListResolver } from '@app/panel/resolvers/transaction-list.resolver';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { TransactionDetailsComponent } from './transaction/transaction-details/transaction-details.component';
import { AdditionalTransactionsByTransactionIdResolver } from './resolvers/additional-transactions-by-transaction-id.resolver';

import { ProcessedTransactionComponent } from './processed_transaction/processed-transaction.component';
import { ProcessedTransactionListComponent } from './processed_transaction/processed-transaction-list/processed-transaction-list.component';
import { ProcessedTransactionDetailsComponent } from './processed_transaction/processed-transaction-details/processed-transaction-details.component';
import { ProcessedTransactionFullDetailsComponent } from './processed_transaction/processed-transaction-full-details/processed-transaction-full-details.component';
import { AdditionalProcessedTransactionComponent } from './processed_transaction/additional-processed-transactions/additional-processed-transactions.component';
import { ProcessedTransactionResolver } from '@app/panel/resolvers/processed-transaction.resolver';
import { ProcessedTransactionListResolver } from '@app/panel/resolvers/processed-transaction-list.resolver';
import { AdditionalProcessedTransactionsByProcessedTransactionIdResolver } from './resolvers/additional-processedtransactions-by-processedtransaction-id.resolver';

import { ChargebackComponent } from './chargebacks/chargeback.component';
import { ChargebackResolver } from '@app/panel/resolvers/chargeback.resolver';
import { ChargebackListResolver } from '@app/panel/resolvers/chargeback-list.resolver';
import { ChargebackListComponent } from './chargebacks/chargeback-list/chargeback-list.component';
import { ChargebackDetailsComponent } from './chargebacks/chargeback-details/chargeback-details.component';
import { AdditionalChargebacksByChargebackIdResolver } from './resolvers/additional-chargebacks-by-chargeback-id.resolver';

import { VisaFraudReportComponent } from './visa-fraud-report/visa-fraud-report.component';
import { VisaFraudReportResolver } from '@app/panel/resolvers/visa-fraud-report.resolver';
import { VisaFraudReportListResolver } from '@app/panel/resolvers/visa-fraud-report-list.resolver';
import { VisaFraudReportListComponent } from './visa-fraud-report/visa-fraud-report-list/visa-fraud-report-list.component';
import { VisaFraudReportDetailsComponent } from './visa-fraud-report/visa-fraud-report-details/visa-fraud-report-details.component';
import { AdditionalVisaFraudReportsByVisaFraudReportIdResolver } from './resolvers/additional-visa-fraud-reports-by-visa-fraud-report-id.resolver';

import { MastercardFraudReportComponent } from './mastercard-fraud-report/mastercard-fraud-report.component';
import { MastercardFraudReportResolver } from '@app/panel/resolvers/mastercard-fraud-report.resolver';
import { MastercardFraudReportListResolver } from '@app/panel/resolvers/mastercard-fraud-report-list.resolver';
import { MastercardFraudReportListComponent } from './mastercard-fraud-report/mastercard-fraud-report-list/mastercard-fraud-report-list.component';
import { MastercardFraudReportDetailsComponent } from './mastercard-fraud-report/mastercard-fraud-report-details/mastercard-fraud-report-details.component';
import { AdditionalMastercardFraudReportsByMastercardFraudReportIdResolver } from './resolvers/additional-mastercard-fraud-reports-by-mastercard-fraud-report-id.resolver';

import { RetrievalRequestsComponent } from './retrievalrequests/retrievalrequests.component';
import { RetrievalRequestResolver } from '@app/panel/resolvers/retrievalrequest.resolver';
import { RetrievalRequestListResolver } from '@app/panel/resolvers/retrievalrequest-list.resolver';
import { RetrievalRequestsListComponent } from './retrievalrequests/retrievalrequests-list/retrievalrequests-list.component';
import { RetrievalRequestsDetailsComponent } from './retrievalrequests/retrievalrequests-details/retrievalrequests-details.component';
import { AdditionalRetrievalRequestsByetrievalRequestIdResolver } from './resolvers/additional-retrievalrequests-by-retrievalrequest-id.resolver';

import { TerminalComponent } from './terminal/terminal.component';
import { TerminalNewComponent } from './terminal/terminal-new/terminal-new.component';
import { TerminalResolver } from '@app/panel/resolvers/terminal.resolver';
import { TerminalListResolver } from '@app/panel/resolvers/terminal-list.resolver';
import { TerminalPagedListResolver } from '@app/panel/resolvers/terminal-paged-list.resolver';
import { TerminalListComponent } from './terminal/terminal-list/terminal-list.component';
import { TerminalDetailsComponent } from './terminal/terminal-details/terminal-details.component';
import { TerminalEditComponent } from './terminal/terminal-edit/terminal-edit.component';
import { TerminalRiskFilterResolver } from '@app/panel/resolvers/terminal-risk-filter.resolver';
import { TerminalRiskFiltersByTerminalIdResolver } from '@app/panel/resolvers/terminal-risk-filters-by-terminal-id.resolver';
import { TerminalRiskFilterEditComponent } from '@app/panel/terminal/terminal-risk-filter-edit/terminal-risk-filter-edit.component';
import { TerminalRiskFilterNewComponent } from '@app/panel/terminal/terminal-risk-filter-new/terminal-risk-filter-new.component';
import { TerminalRiskFilterCopyComponent } from '@app/panel/terminal/terminal-risk-filter-copy/terminal-risk-filter-copy.component';

import { TransactionNotesComponent } from './transaction_notes/transaction_notes.component';
import { TransactionNotesNewComponent } from './transaction_notes/transaction_notes-new/transaction_notes-new.component';
import { TransactionNotesResolver } from '@app/panel/resolvers/transaction_notes.resolver';
import { TransactionNotesListResolver } from '@app/panel/resolvers/transaction_notes-list.resolver';
import { TransactionNotesByTransactionIdResolver } from './resolvers/transaction-notes-by-transaction-id.resolver';
import { TransactionNotesListComponent } from './transaction_notes/transaction_notes-list/transaction_notes-list.component';
import { TransactionNotesDetailsComponent } from './transaction_notes/transaction_notes-details/transaction_notes-details.component';
import { TransactionNotesEditComponent } from './transaction_notes/transaction_notes-edit/transaction_notes-edit.component';

import { ResellerComponent } from './reseller/reseller.component';
import { ResellerNewComponent } from './reseller/reseller-new/reseller-new.component';
import { ResellerResolver } from '@app/panel/resolvers/reseller.resolver';
import { ResellerListResolver } from '@app/panel/resolvers/reseller-list.resolver';
import { ResellerListComponent } from './reseller/reseller-list/reseller-list.component';
import { ResellerDetailsComponent } from './reseller/reseller-details/reseller-details.component';
import { ResellerEditComponent } from './reseller/reseller-edit/reseller-edit.component';

import { ProcessingLogsComponent } from './processinglogs/processinglogs.component';
import { ProcessingLogsResolver } from '@app/panel/resolvers/processinglogs.resolver';
import { ProcessingLogsListResolver } from '@app/panel/resolvers/processinglogs-list.resolver';
import { ProcessingLogsListComponent } from './processinglogs/processinglogs-list/processinglogs-list.component';
import { ProcessingLogsDetailsComponent } from './processinglogs/processinglogs-details/processinglogs-details.component';

import { NotificationComponent } from './notification/notification.component';
import { NotificationListComponent } from './notification/notification-list/notification-list.component';
import { NotificationDetailsComponent } from './notification/notification-details/notification-details.component';
import { NotificationResolver } from '@app/panel/resolvers/notification.resolver';
import { NotificationListResolver } from '@app/panel/resolvers/notification-list.resolver';

import { MerchantComponent } from './merchant/merchant.component';
import { MerchantNewComponent } from './merchant/merchant-new/merchant-new.component';
import { MerchantResolver } from '@app/panel/resolvers/merchant.resolver';
import { MerchantListResolver } from '@app/panel/resolvers/merchant-list.resolver';
import { MerchantListComponent } from './merchant/merchant-list/merchant-list.component';
import { MerchantDetailsComponent } from './merchant/merchant-details/merchant-details.component';
import { MerchantEditComponent } from './merchant/merchant-edit/merchant-edit.component';

import { ContractComponent } from './contract/contract.component';
import { ContractNewComponent } from './contract/contract-new/contract-new.component';
import { ContractResolver } from '@app/panel/resolvers/contract.resolver';
import { ContractListResolver } from '@app/panel/resolvers/contract-list.resolver';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractDetailsComponent } from './contract/contract-details/contract-details.component';
import { ContractEditComponent } from './contract/contract-edit/contract-edit.component';

import { AcquirerComponent } from './acquirer/acquirer.component';
import { AcquirerNewComponent } from './acquirer/acquirer-new/acquirer-new.component';
import { AcquirerResolver } from '@app/panel/resolvers/acquirer.resolver';
import { AcquirerListResolver } from '@app/panel/resolvers/acquirer-list.resolver';
import { AcquirerListComponent } from './acquirer/acquirer-list/acquirer-list.component';
import { AcquirerDetailsComponent } from './acquirer/acquirer-details/acquirer-details.component';
import { AcquirerEditComponent } from './acquirer/acquirer-edit/acquirer-edit.component';

import { CompanyComponent } from './company/company.component';
import { CompanyNewComponent } from './company/company-new/company-new.component';
import { CompanyResolver } from '@app/panel/resolvers/company.resolver';
import { CompanyListResolver } from '@app/panel/resolvers/company-list.resolver';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';

import { ApiAttemptComponent } from './apiattempt/apiattempt.component';
import { ApiAttemptListComponent } from './apiattempt/apiattempt-list/apiattempt-list.component';
import { ApiAttemptResolver } from '@app/panel/resolvers/apiattempt.resolver';
import { ApiAttemptListResolver } from '@app/panel/resolvers/apiattempt-list.resolver';
import { ApiAttemptDetailsComponent } from './apiattempt/apiattempt-details/apiattempt-details.component';

import { WpfPaymentsComponent } from './wpf_payments/wpf_payments.component';
import { WpfPaymentsListComponent } from './wpf_payments/wpf_payments-list/wpf_payments-list.component';
import { WpfPaymentsResolver } from '@app/panel/resolvers/wpf_payments.resolver';
import { WpfPaymentsListResolver } from '@app/panel/resolvers/wpf_payments-list.resolver';
import { WpfPaymentsDetailsComponent } from './wpf_payments/wpf_payments-details/wpf_payments-details.component';

import { VirtualTerminalComponent } from './virtual_terminal/virtual-terminal.component';
import { VirtualTerminalListComponent } from './virtual_terminal/virtual-terminal-list/virtual-terminal-list.component';
import { VirtualTerminalDetailsComponent } from './virtual_terminal/virtual-terminal-details/virtual-terminal-details.component';

import { BlacklistComponent } from './blacklist/blacklist.component';
import { BlacklistNewComponent } from './blacklist/blacklist-new/blacklist-new.component';
import { BlacklistListComponent } from './blacklist/blacklist-list/blacklist-list.component';
import { BlacklistResolver } from '@app/panel/resolvers/blacklist.resolver';
import { BlacklistListResolver } from '@app/panel/resolvers/blacklist-list.resolver';
import { BlacklistDetailsComponent } from './blacklist/blacklist-details/blacklist-details.component';
import { BlacklistEditComponent } from './blacklist/blacklist-edit/blacklist-edit.component';

import { TaskLogsComponent } from './tasklogs/tasklogs.component';
import { TaskLogsListComponent } from './tasklogs/tasklogs-list/tasklogs-list.component';
import { TaskLogsResolver } from '@app/panel/resolvers/tasklogs-resolver.service';
import { TaskLogsListResolver } from '@app/panel/resolvers/tasklogs-list.resolver';
import { TaskLogsDetailsComponent } from './tasklogs/tasklogs-details/tasklogs-details.component';

import { EventLogsComponent } from './eventlogs/eventlogs.component';
import { EventLogsListComponent } from './eventlogs/eventlogs-list/eventlogs-list.component';
import { EventLogsResolver } from '@app/panel/resolvers/eventlogs-resolver.service';
import { EventLogsListResolver } from '@app/panel/resolvers/eventlogs-list.resolver';
import { EventLogsDetailsComponent } from './eventlogs/eventlogs-details/eventlogs-details.component';

import { ErrorsComponent } from '../errors';
import { TransactionViewReceiptComponent } from '@app/panel/transaction/transaction-view-receipt/transaction-view-receipt.component';

import { PreferencesComponent } from '@app/panel/preferences/preferences.component';
import { ResetPasswordComponent } from '@app/panel/preferences/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: '',
        redirectTo: 'transactions',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full'
      },
      {
        path: 'top_contract',
        component: TopContractComponent,
        pathMatch: 'full'
      },
      {
        path: 'top_merchant',
        component: TopMerchantComponent,
        pathMatch: 'full'
      },
      {
        path: 'top_terminal',
        component: TopTerminalComponent,
        pathMatch: 'full'
      },
      {
        path: 'virtual_terminal',
        component: VirtualTerminalComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: VirtualTerminalListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            }
          },
          {
            path: ':transactionType',
            component: VirtualTerminalDetailsComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            }
          },
          {
            path: ':transactionType/:refTransactionId',
            component: VirtualTerminalDetailsComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            }
          }
        ]
      },
      {
        path: 'transactions',
        component: TransactionComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: TransactionListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: TransactionListResolver
            }
          },
          {
            path: ':id/view-receipt',
            component: TransactionViewReceiptComponent,
            pathMatch: 'full'
          },
          {
            path: ':id',
            component: TransactionDetailsComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              transaction: TransactionResolver,
              notes: TransactionNotesByTransactionIdResolver,
              additionalTransactions: AdditionalTransactionsByTransactionIdResolver
            },
            runGuardsAndResolvers: 'paramsChange',
          }
        ]
      },
      {
        path: 'processed_transactions',
        component: ProcessedTransactionComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: ProcessedTransactionListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: ProcessedTransactionListResolver
            }
          },
          {
            path: ':id',
            component: ProcessedTransactionDetailsComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              processedTransaction: ProcessedTransactionResolver,
              additionalProcessedTransactions: AdditionalProcessedTransactionsByProcessedTransactionIdResolver
            },
            runGuardsAndResolvers: 'paramsChange',
          }
        ]
      },
      {
        path: 'chargebacks',
        component: ChargebackComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: ChargebackListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: ChargebackListResolver
            }
          },
          {
            path: ':id',
            component: ChargebackDetailsComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              chargeback: ChargebackResolver,
              additionalChargebacks: AdditionalChargebacksByChargebackIdResolver
            },
            runGuardsAndResolvers: 'paramsChange',
          }
        ]
      },
      {
        path: 'visafraudreports',
        component: VisaFraudReportComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: VisaFraudReportListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: VisaFraudReportListResolver
            }
          },
          {
            path: ':id',
            component: VisaFraudReportDetailsComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              visafraudreport: VisaFraudReportResolver,
              additionalVisafraudreport: AdditionalVisaFraudReportsByVisaFraudReportIdResolver
            },
            runGuardsAndResolvers: 'paramsChange',
          }
        ]
      },
      {
        path: 'mastercardfraudreports',
        component: MastercardFraudReportComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: MastercardFraudReportListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: MastercardFraudReportListResolver
            }
          },
          {
            path: ':id',
            component: MastercardFraudReportDetailsComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              mastercardfraudreport: MastercardFraudReportResolver,
              additionalMastercardfraudreport: AdditionalMastercardFraudReportsByMastercardFraudReportIdResolver
            },
            runGuardsAndResolvers: 'paramsChange',
          }
        ]
      },
      {
        path: 'retrievalrequests',
        component: RetrievalRequestsComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: RetrievalRequestsListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: RetrievalRequestListResolver
            }
          },
          {
            path: ':id',
            component: RetrievalRequestsDetailsComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              retrievalrequest: RetrievalRequestResolver,
              additionalRetrievalRequests: AdditionalRetrievalRequestsByetrievalRequestIdResolver
            },
            runGuardsAndResolvers: 'paramsChange',
          }
        ]
      },
      {
        path: 'transaction_notes',
        component: TransactionNotesComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: TransactionNotesListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: TransactionNotesListResolver
            }
          },
          {
            path: 'new',
            component: TransactionNotesNewComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            }
          },
          {
            path: 'edit/:id',
            component: TransactionNotesEditComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              transaction_note: TransactionNotesResolver
            }
          },
          {
            path: ':id',
            component: TransactionNotesDetailsComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              transaction_note: TransactionNotesResolver
            }
          },
        ]
      },
      {
        path: 'wpf_payments',
        component: WpfPaymentsComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: WpfPaymentsListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: WpfPaymentsListResolver
            }
          },
          {
            path: ':id',
            component: WpfPaymentsDetailsComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              wpfPayment: WpfPaymentsResolver
            }
          },
        ]
      },
      {
        path: 'blacklists',
        component: BlacklistComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: BlacklistListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: BlacklistListResolver
            }
          },
          {
            path: 'new',
            component: BlacklistNewComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            }
          },
          {
            path: 'edit/:id',
            component: BlacklistEditComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              blacklist: BlacklistResolver
            }
          },
          {
            path: ':id',
            component: BlacklistDetailsComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              blacklist: BlacklistResolver
            }
          },
        ]
      },
      {
        path: 'resellers',
        component: ResellerComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: ResellerListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: ResellerListResolver
            }
          },
          {
            path: 'new',
            component: ResellerNewComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            }
          },
          {
            path: 'edit/:id',
            component: ResellerEditComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              reseller: ResellerResolver
            }
          },
          {
            path: ':id',
            component: ResellerDetailsComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              reseller: ResellerResolver
            }
          },
        ]
      },
      {
        path: 'merchants',
        component: MerchantComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: MerchantListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: MerchantListResolver
            }
          },
          {
            path: 'new',
            component: MerchantNewComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            }
          },
          {
            path: 'edit/:id',
            component: MerchantEditComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              merchant: MerchantResolver
            }
          },
          {
            path: ':id',
            component: MerchantDetailsComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              merchant: MerchantResolver
            }
          },
        ]
      },
      {
        path: 'contracts',
        component: ContractComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: ContractListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: ContractListResolver
            }
          },
          {
            path: 'new',
            component: ContractNewComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            }
          },
          {
            path: 'edit/:id',
            component: ContractEditComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              contract: ContractResolver
            }
          },
          {
            path: ':id',
            component: ContractDetailsComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              contract: ContractResolver
            }
          },
        ]
      },
      {
        path: 'terminals',
        component: TerminalComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: TerminalListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: TerminalPagedListResolver
            }
          },
          {
            path: 'new',
            component: TerminalNewComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            }
          },
          {
            path: 'edit/:id',
            component: TerminalEditComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              terminal: TerminalResolver,
              terminalRiskFilters: TerminalRiskFiltersByTerminalIdResolver
            }
          },
          {
            path: ':id',
            component: TerminalDetailsComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              terminal: TerminalResolver,
              terminalRiskFilters: TerminalRiskFiltersByTerminalIdResolver
            }
          },
          {
            path: 'edit/:terminalId/filters/new',
            component: TerminalRiskFilterNewComponent,
            pathMatch: 'full',
            data: {
              requiredRole: UserRoleType.admin
            }
          },
          {
            path: 'edit/:terminalId/filters/edit/:id',
            component: TerminalRiskFilterEditComponent,
            pathMatch: 'full',
            data: {
              requiredRole: UserRoleType.admin
            },
            resolve: {
              filter: TerminalRiskFilterResolver
            }
          },
          {
            path: 'edit/:terminalId/filters/copy/:id',
            component: TerminalRiskFilterCopyComponent,
            pathMatch: 'full',
            data: {
              requiredRole: UserRoleType.admin
            },
            resolve: {
              terminals: TerminalListResolver
            }
          },
        ]
      },
      {
        path: 'acquirers',
        component: AcquirerComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: AcquirerListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: AcquirerListResolver
            }
          },
          {
            path: 'new',
            component: AcquirerNewComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            }
          },
          {
            path: 'edit/:id',
            component: AcquirerEditComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              acquirer: AcquirerResolver
            }
          },
          {
            path: ':id',
            component: AcquirerDetailsComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              acquirer: AcquirerResolver
            }
          },
        ]
      },
      {
        path: 'companies',
        component: CompanyComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: CompanyListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: CompanyListResolver
            }
          },
          {
            path: 'new',
            component: CompanyNewComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            }
          },
          {
            path: 'edit/:id',
            component: CompanyEditComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              company: CompanyResolver
            }
          },
          {
            path: ':id',
            component: CompanyDetailsComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              company: CompanyResolver
            }
          },
        ]
      },
      {
        path: 'users',
        component: UserComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: UserListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: UserListResolver
            }
          },
          {
            path: 'new',
            component: UserNewComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            }
          },
          {
            path: 'edit/:id',
            component: UserEditComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              user: UserResolver
            }
          },
          {
            path: ':id',
            component: UserDetailsComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              user: UserResolver
            }
          },
        ]
      },
      {
        path: 'merchantusers',
        component: MerchantUserComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: MerchantUserListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: MerchantUserListResolver
            }
          },
          {
            path: 'new',
            component: MerchantUserNewComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            }
          },
          {
            path: 'edit/:id',
            component: MerchantUserEditComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              merchantuser: MerchantUserResolver
            }
          },
          {
            path: ':id',
            component: MerchantUserDetailsComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              merchantuser: MerchantUserResolver
            }
          },
        ]
      },
      {
        path: 'resellerusers',
        component: ResellerUserComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: ResellerUserListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: ResellerUserListResolver
            }
          },
          {
            path: 'new',
            component: ResellerUserNewComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            }
          },
          {
            path: 'edit/:id',
            component: ResellerUserEditComponent,
            pathMatch: 'full',
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              reselleruser: ResellerUserResolver
            }
          },
          {
            path: ':id',
            component: ResellerUserDetailsComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              reselleruser: ResellerUserResolver
            }
          },
        ]
      },
      {
        path: 'apiattempts',
        component: ApiAttemptComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: ApiAttemptListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: ApiAttemptListResolver
            }
          },
          {
            path: ':id',
            component: ApiAttemptDetailsComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              apiattempt: ApiAttemptResolver
            }
          },
        ]
      },
      {
        path: 'notifications',
        component: NotificationComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: NotificationListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: NotificationListResolver
            }
          },
          {
            path: ':id',
            component: NotificationDetailsComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              notification: NotificationResolver
            }
          },
        ]
      },
      {
        path: 'processinglogs',
        component: ProcessingLogsComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: ProcessingLogsListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: ProcessingLogsListResolver
            }
          },
          {
            path: ':id',
            component: ProcessingLogsDetailsComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              processinglog: ProcessingLogsResolver
            }
          },
        ]
      },
      {
        path: 'tasklogs',
        component: TaskLogsComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: TaskLogsListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: TaskLogsListResolver
            }
          },
          {
            path: ':id',
            component: TaskLogsDetailsComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              tasklogs: TaskLogsResolver
            }
          },
        ]
      },
      {
        path: 'eventlogs',
        component: EventLogsComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: '',
            component: EventLogsListComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              pagedResult: EventLogsListResolver
            }
          },
          {
            path: ':id',
            component: EventLogsDetailsComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            },
            resolve: {
              eventlogs: EventLogsResolver
            }
          },
        ]
      },
      {
        path: 'preferences',
        component: PreferencesComponent,
        data: {
          requiredRole: 'ROLE_ADMIN'
        },
        children: [
          {
            path: 'reset-password',
            component: ResetPasswordComponent,
            data: {
              requiredRole: 'ROLE_ADMIN'
            }
          }
        ]
      },
      // {
      //   path: 'downloads/doc',
      //   component: DownloadComponent,
      //   pathMatch: 'full',
      //   data: {
      //     requiredRole: 'ROLE_ADMIN'
      //   }
      // },

      { path: 'error', component: ErrorsComponent },
      { path: '**', component: ErrorsComponent, data: { error: 404 } }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PanelRoutingModule { }
