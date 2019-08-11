export const environment = {
  production: false,
  config: {
    pageSize: 10
  },
  api: {
    keys: {
      auth: {
        clientId: 'web',
        secret: 'secret'
      }
    },
    urls: {
      auth: {
        token: '/api_admin/oauth/token'
      },
      dashboard: {
        get: (currency: string) => `/api_admin/dashboard/volumes/${currency}`,
        topTerminals: '/api_admin/dashboard/terminals',
        topMerchants: '/api_admin/dashboard/merchants',
        topContracts: '/api_admin/dashboard/contracts'
      },
      users: {
        requestReset: '/api_admin/users/request',
        confirmation_token: '/api_admin/users/confirmation_token',
        reset_token: '/api_admin/users/reset_token',
        reset_confirmation: '/api_admin/users/reset_confirmation',
        reset_password: '/api_admin/users/reset_password',
        reset_user_password: '/api_admin/users/reset_user_password',
        reset: '/api_admin/users/reset',
        base: '/api_admin/users/pages',
        find: '/api_admin/users/find',
        create: '/api_admin/users/create',
        get: (id: number) => `/api_admin/users/${id}`,
        persist: (id: number) => `/api_admin/users/${id}`,
        export: '/api_admin/users/export'
      },
      merchant_users: {
        base: '/api_admin/merchant_users/pages',
        find: '/api_admin/merchant_users/find',
        create: '/api_admin/merchant_users/create',
        get: (id: number) => `/api_admin/merchant_users/${id}`,
        persist: (id: number) => `/api_admin/merchant_users/${id}`,
        export: '/api_admin/merchant_users/export'
      },
      reseller_users: {
        base: '/api_admin/reseller_users/pages',
        find: '/api_admin/reseller_users/find',
        create: '/api_admin/reseller_users/create',
        get: (id: number) => `/api_admin/reseller_users/${id}`,
        persist: (id: number) => `/api_admin/reseller_users/${id}`,
        export: '/api_admin/reseller_users/export'
      },
      transactions: {
        base: '/api_admin/transactions/find',
        get: (id: number) => `/api_admin/transactions/${id}`,
        getReference_transaction_id: (id: number) => `/api_admin/transactions/reference_transactions/${id}`,
        getTransactionNotification: (id: number) => `/api_admin/transactions/notification/${id}`,
        persist: (id: number) => `/api_admin/transactions/${id}`,
        getTransactionStatusList: `/api_admin/transactions/transaction_status`,
        getTransactionTypesList: `/api_admin/transactions/transaction_types`,
        getBillingAddress: (id: number) => `/api_admin/transactions/billing_address/${id}`,
        getShippingAddress: (id: number) => `/api_admin/transactions/shipping_address/${id}`,
        reconcile: (id: number) => `/api_admin/transactions/reconcile/${id}`,
        export: '/api_admin/transactions/export'
      },
      processed_transactions: {
        base: '/api_admin/processed_transactions/find',
        get: (id: number) => `/api_admin/processed_transactions/${id}`,
        getReference_transaction_id: (id: number) => `/api_admin/processed_transactions/reference_transactions/${id}`,
        persist: (id: number) => `/api_admin/processed_transactions/${id}`,
        export: '/api_admin/processed_transactions/export'
      },
      chargebacks: {
        base: '/api_admin/chargebacks/find',
        get: (id: number) => `/api_admin/chargebacks/${id}`,
        getReference_transaction_id: (id: number) => `/api_admin/chargebacks/reference_transactions/${id}`,
        persist: (id: number) => `/api_admin/chargebacks/${id}`,
        getChargebackTypesList: `/api_admin/chargebacks/chargeback_types`,
        export: '/api_admin/chargebacks/export'
      },
      retrievalrequests: {
        base: '/api_admin/retrieval_requests/find',
        get: (id: number) => `/api_admin/retrieval_requests/${id}`,
        getReference_transaction_id: (id: number) => `/api_admin/retrieval_requests/reference_transactions/${id}`,
        persist: (id: number) => `/api_admin/retrieval_requests/${id}`,
        export: '/api_admin/retrieval_requests/export'
      },
      visafraudreports: {
        base: '/api_admin/visa_fraud_report/find',
        get: (id: number) => `/api_admin/visa_fraud_report/${id}`,
        getReference_transaction_id: (id: number) => `/api_admin/visa_fraud_report/reference_transactions/${id}`,
        persist: (id: number) => `/api_admin/visa_fraud_report/${id}`,
        export: '/api_admin/visa_fraud_report/export'
      },
      mastercardfraudreports: {
        base: '/api_admin/mastercard_fraud_report/find',
        get: (id: number) => `/api_admin/mastercard_fraud_report/${id}`,
        getReference_transaction_id: (id: number) => `/api_admin/mastercard_fraud_report/reference_transactions/${id}`,
        persist: (id: number) => `/api_admin/mastercard_fraud_report/${id}`,
        export: '/api_admin/mastercard_fraud_report/export'
      },
      transaction_notes: {
        save: '/api_admin/transaction_notes',
        base: '/api_admin/transaction_notes/pages',
        get: (id: number) => `/api_admin/transaction_notes/${id}`,
        persist: (id: number) => `/api_admin/transaction_notes/${id}`,
        list: (transactionId: number) => `/api_admin/transaction_notes/unique_id/${transactionId}`,
        delete: (id: number) => `/api_admin/transaction_notes/remove/${id}`,
        export: '/api_admin/transaction_notes/export'
      },
      virtual_terminals: {
        save: (type: string) => `/api_admin/virtual_terminal/process/${type}`,
        getTransaction: (uniqeId: string) => `/api_admin/virtual_terminal/transaction/${uniqeId}`
      },
      wpf_payments: {
        base: '/api_admin/wpf_payments/find',
        transactions: (id: number) => `/api_admin/wpf_payments/wpf_transactions/${id}`,
        referenceTransactions: (id: number) => `/api_admin/wpf_payments/wpf_reference_transactions/${id}`,
        getWpfPaymentNotification: (id: number) => `/api_admin/wpf_payments/notification/${id}`,
        get: (id: number) => `/api_admin/wpf_payments/${id}`,
        persist: (id: number) => `/api_admin/wpf_payments/${id}`,
        getBillingAddress: (id: number) => `/api_admin/wpf_payments/billing_address/${id}`,
        getShippingAddress: (id: number) => `/api_admin/wpf_payments/shipping_address/${id}`,
        export: '/api_admin/wpf_payments/export'
      },
      blacklists: {
        base: '/api_admin/blacklists/pages',
        create: '/api_admin/blacklists/create',
        get: (id: number) => `/api_admin/blacklists/${id}`,
        persist: (id: number) => `/api_admin/blacklists/${id}`,
        export: '/api_admin/blacklists/export'
      },
      merchants: {
        base: '/api_admin/merchants/pages',
        find: '/api_admin/merchants/find',
        create: '/api_admin/merchants/create',
        get: (id: number) => `/api_admin/merchants/${id}`,
        getMerchants: '/api_admin/merchants/list',
        persist: (id: number) => `/api_admin/merchants/${id}`,
        getCompaniesList: `/api_admin/merchants/merchant_company_list`,
        getCompanies: (id: number) => `/api_admin/merchants/merchant_company_list/${id}`,
        addCompany: '/api_admin/merchants/merchant_company_list/create',
        removeCompany: (id: number) => `/api_admin/merchants/merchant_company_list/remove/${id}`,
        getMerchantUsersList: `/api_admin/merchants/merchant_user_list`,
        getMerchantUsers: (id: number) => `/api_admin/merchants/merchant_user_list/${id}`,
        addMerchantUser: '/api_admin/merchants/merchant_user_list/create',
        removeMerchantUser: (id: number) => `/api_admin/merchants/merchant_user_list/remove/${id}`,
        export: '/api_admin/merchants/export'
      },
      terminals: {
        base: '/api_admin/terminals/pages',
        find: '/api_admin/terminals/find',
        create: '/api_admin/terminals/create',
        get: (id: number) => `/api_admin/terminals/${id}`,
        getTerminals: '/api_admin/terminals/list',
        getCurrenciesList: '/api_admin/terminals/currency',
        getTrafficShalperList: '/api_admin/terminals/traffic_shaper_class',
        getDescriptorTypeList: '/api_admin/terminals/descriptor_type',
        getTerminalDeclineReasonsList: (id: number) => `/api_admin/terminals/risk_details/${id}`,
        persist: (id: number) => `/api_admin/terminals/${id}`,
        getContracts: (id: number) => `/api_admin/terminals/contracts_terminals_list/${id}`,
        getContractsList: '/api_admin/terminals/contracts_list',
        addContract: '/api_admin/terminals/contracts_terminals/create',
        removeContract: (id: number) => `/api_admin/terminals/contracts_terminals/remove/${id}`,
        export: '/api_admin/terminals/export'
      },
      terminals_risk_filters: {
        list: (terminalId: number) => `/api_admin/terminals/terminals_risk_filters/${terminalId}`,
        get: (id: number) => `/api_admin/terminals/terminals_risk_filter/${id}`,
        save: (id: number) => `/api_admin/terminals/terminals_risk_filter/${id}`,
        create: `/api_admin/terminals/terminals_risk_filter/create`,
        delete: (id: number|number[]) => `/api_admin/terminals/terminals_risk_filter/${Array.isArray(id) ? id.join(',') : id}`,
        changeOrder: (terminalId: number) => `/api_admin/terminals/terminals_risk_filter/change_order/${terminalId}`,
        copyToTerminals: (id: number) => `/api_admin/terminals/terminals_risk_filter/copy_filter/${id}`,
      },
      contracts: {
        base: '/api_admin/contracts/pages',
        find: '/api_admin/contracts/find',
        create: '/api_admin/contracts/create',
        get: (id: number) => `/api_admin/contracts/${id}`,
        persist: (id: number) => `/api_admin/contracts/${id}`,
        getContractGateways: '/api_admin/contracts/gateways',
        getMpiGateways: '/api_admin/contracts/gateway_mpi',
        getContractMcc: '/api_admin/contracts/mcc',
        getContractRefundTimeframe: '/api_admin/contracts/refund_timeframe',
        getContractAuthorizeTimeframe: '/api_admin/contracts/authorize_timeframe',
        getCurrencies: (id: number) => `/api_admin/contracts/currencies_list/${id}`,
        addCurrency: '/api_admin/contracts/currency/create',
        removeCurrency: (id: number) => `/api_admin/contracts/currency/remove/${id}`,
        getCardBrandsList: `/api_admin/contracts/card_brand/list`,
        getCardBrands: (id: number) => `/api_admin/contracts/card_brand_list/${id}`,
        addCardBrands: '/api_admin/contracts/card_brand/create',
        removeCardBrands: (id: number) => `/api_admin/contracts/card_brand/remove/${id}`,
        export: '/api_admin/contracts/export'
      },
      apiattempts: {
        base: '/api_admin/apiattempts/pages',
        get: (id: number) => `/api_admin/apiattempts/${id}`,
        persist: (id: number) => `/api_admin/apiattempts/${id}`,
        export: '/api_admin/apiattempts/export'
      },
      notifications: {
        base: '/api_admin/notifications/pages',
        get: (id: number) => `/api_admin/notifications/${id}`,
        persist: (id: number) => `/api_admin/notifications/${id}`,
        export: '/api_admin/notifications/export'
      },
      notificationUrls: {
        base: (id: number) => `/api_admin/merchants/notification_urls/${id}`,
        get: (id: number) => `/api_admin/merchants/notification_url/${id}`,
        delete: (id: number) => `/api_admin/merchants/notification_url/remove/${id}`,
        persist: (id: number) => `/api_admin/merchants/notification_url/${id}`,
        create: '/api_admin/merchants/notification_url/create',
        notification_types: '/api_admin/merchants/notification_types'
      },
      acquirers: {
        base: '/api_admin/acquirers/pages',
        find: '/api_admin/acquirers/find',
        create: '/api_admin/acquirers/create',
        get: (id: number) => `/api_admin/acquirers/${id}`,
        getAcquirers: '/api_admin/acquirers/list',
        getCountryList: '/api_admin/acquirers/country',
        getTimezoneList: '/api_admin/acquirers/timezone',
        persist: (id: number) => `/api_admin/acquirers/${id}`,
        export: '/api_admin/acquirers/export'
      },
      companies: {
        base: '/api_admin/companies/pages',
        find: '/api_admin/companies/find',
        create: '/api_admin/companies/create',
        get: (id: number) => `/api_admin/companies/${id}`,
        getCompanies: '/api_admin/companies/list',
        persist: (id: number) => `/api_admin/companies/${id}`,
        export: '/api_admin/companies/export'
      },
      resellers: {
        base: '/api_admin/resellers/pages',
        find: '/api_admin/resellers/find',
        create: '/api_admin/resellers/create',
        get: (id: number) => `/api_admin/resellers/${id}`,
        getResellers: '/api_admin/resellers/list',
        persist: (id: number) => `/api_admin/resellers/${id}`,
        getResellerUsersList: `/api_admin/resellers/reseller_user_list`,
        getResellerUsers: (id: number) => `/api_admin/resellers/reseller_user_list/${id}`,
        addResellerUser: '/api_admin/resellers/reseller_user_list/create',
        removeResellerUser: (id: number) => `/api_admin/resellers/reseller_user_list/remove/${id}`,
        export: '/api_admin/resellers/export'
      },
      processinglogs: {
        base: '/api_admin/processinglogs/pages',
        get: (id: number) => `/api_admin/processinglogs/${id}`,
        getProcessinglogs: (id: string) => `/api_admin/processinglogs/list/${id}`,
        getWpfPaymentlogs: (id: string) => `/api_admin/wpfPaymentlogs/list/${id}`,
        persist: (id: number) => `/api_admin/processinglogs/${id}`,
        export: '/api_admin/processinglogs/export'
      },
      tasklogs: {
        base: '/api_admin/task_logs/pages',
        get: (id: number) => `/api_admin/task_logs/${id}`,
      },
      eventlogs: {
        base: '/api_admin/event_logs/pages',
        get: (id: number) => `/api_admin/event_logs/${id}`,
      },
      downloads: {
        getPdf: '/api_admin/downloads/export'
      }
    },
    unauthorizedUrls: [
      new RegExp('^/api_admin/oauth/token$'),
      new RegExp('^/api_admin/users/request$'),
      new RegExp('^/api_admin/users/confirmation_token$'),
      new RegExp('^/api_admin/users/reset_token'),
      new RegExp('^/api_admin/users/reset_confirmation'),
      new RegExp('^/api_admin/users/reset_password'),
      new RegExp('^/api_admin/users/reset$')
    ]
  },
  defaultRoutes: [
    { role: 'ROLE_USER', route: '/panel/dashboard' },
    { role: 'ROLE_ADMIN', route: '/panel/dashboard' }
  ]
};
