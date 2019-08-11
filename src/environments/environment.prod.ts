const baseUrl = 'http://185.185.126.15';
export const environment = {
  production: true,
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
        token: baseUrl + '/api_admin/oauth/token'
      },
      dashboard: {
        get: (currency: string) => `/api_admin/dashboard/volumes/${currency}`,
        topTerminals: baseUrl + '/api_admin/dashboard/terminals',
        topMerchants: baseUrl + '/api_admin/dashboard/merchants',
        topContracts: baseUrl + '/api_admin/dashboard/contracts'
      },
      users: {
        requestReset: baseUrl + '/api_admin/users/request',
        confirmation_token: baseUrl + '/api_admin/users/confirmation_token',
        reset_token: baseUrl + '/api_admin/users/reset_token',
        reset_confirmation: baseUrl + '/api_admin/users/reset_confirmation',
        reset_password: baseUrl + '/api_admin/users/reset_password',
        reset_user_password: baseUrl + '/api_admin/users/reset_user_password',
        reset: baseUrl + '/api_admin/users/reset',
        base: baseUrl + '/api_admin/users/pages',
        find: baseUrl + '/api_admin/users/find',
        create: baseUrl + '/api_admin/users/create',
        get: (id: number) => `/api_admin/users/${id}`,
        persist: (id: number) => `/api_admin/users/${id}`,
        export: baseUrl + '/api_admin/users/export'
      },
      merchant_users: {
        base: baseUrl + '/api_admin/merchant_users/pages',
        find: baseUrl + '/api_admin/merchant_users/find',
        create: baseUrl + '/api_admin/merchant_users/create',
        get: (id: number) => `/api_admin/merchant_users/${id}`,
        persist: (id: number) => `/api_admin/merchant_users/${id}`,
        export: baseUrl + '/api_admin/merchant_users/export'
      },
      reseller_users: {
        base: baseUrl + '/api_admin/reseller_users/pages',
        find: baseUrl + '/api_admin/reseller_users/find',
        create: baseUrl + '/api_admin/reseller_users/create',
        get: (id: number) => `/api_admin/reseller_users/${id}`,
        persist: (id: number) => `/api_admin/reseller_users/${id}`,
        export: baseUrl + '/api_admin/reseller_users/export'
      },
      transactions: {
        base: baseUrl + '/api_admin/transactions/find',
        get: (id: number) => `/api_admin/transactions/${id}`,
        getReference_transaction_id: (id: number) => `/api_admin/transactions/reference_transactions/${id}`,
        getTransactionNotification: (id: number) => `/api_admin/transactions/notification/${id}`,
        persist: (id: number) => `/api_admin/transactions/${id}`,
        getTransactionStatusList: baseUrl + `/api_admin/transactions/transaction_status`,
        getTransactionTypesList: baseUrl + `/api_admin/transactions/transaction_types`,
        getBillingAddress: (id: number) => `/api_admin/transactions/billing_address/${id}`,
        getShippingAddress: (id: number) => `/api_admin/transactions/shipping_address/${id}`,
        reconcile: (id: number) => `/api_admin/transactions/reconcile/${id}`,
        export: baseUrl + '/api_admin/transactions/export'
      },
      processed_transactions: {
        base: baseUrl + '/api_admin/processed_transactions/find',
        get: (id: number) => `/api_admin/processed_transactions/${id}`,
        getReference_transaction_id: (id: number) => `/api_admin/processed_transactions/reference_transactions/${id}`,
        persist: (id: number) => `/api_admin/processed_transactions/${id}`,
        export: baseUrl + '/api_admin/processed_transactions/export'
      },
      chargebacks: {
        base: baseUrl + '/api_admin/chargebacks/find',
        get: (id: number) => `/api_admin/chargebacks/${id}`,
        getReference_transaction_id: (id: number) => `/api_admin/chargebacks/reference_transactions/${id}`,
        persist: (id: number) => `/api_admin/chargebacks/${id}`,
        getChargebackTypesList: baseUrl + `/api_admin/chargebacks/chargeback_types`,
        export: baseUrl + '/api_admin/chargebacks/export'
      },
      retrievalrequests: {
        base: baseUrl + '/api_admin/retrieval_requests/find',
        get: (id: number) => `/api_admin/retrieval_requests/${id}`,
        getReference_transaction_id: (id: number) => `/api_admin/retrieval_requests/reference_transactions/${id}`,
        persist: (id: number) => `/api_admin/retrieval_requests/${id}`,
        export: baseUrl + '/api_admin/retrieval_requests/export'
      },
      visafraudreports: {
        base: baseUrl + '/api_admin/visa_fraud_report/find',
        get: (id: number) => `/api_admin/visa_fraud_report/${id}`,
        getReference_transaction_id: (id: number) => `/api_admin/visa_fraud_report/reference_transactions/${id}`,
        persist: (id: number) => `/api_admin/visa_fraud_report/${id}`,
        export: baseUrl + '/api_admin/visa_fraud_report/export'
      },
      mastercardfraudreports: {
        base: baseUrl + '/api_admin/mastercard_fraud_report/find',
        get: (id: number) => `/api_admin/mastercard_fraud_report/${id}`,
        getReference_transaction_id: (id: number) => `/api_admin/mastercard_fraud_report/reference_transactions/${id}`,
        persist: (id: number) => `/api_admin/mastercard_fraud_report/${id}`,
        export: baseUrl + '/api_admin/mastercard_fraud_report/export'
      },
      transaction_notes: {
        save: baseUrl + '/api_admin/transaction_notes',
        base: baseUrl + '/api_admin/transaction_notes/pages',
        get: (id: number) => `/api_admin/transaction_notes/${id}`,
        persist: (id: number) => `/api_admin/transaction_notes/${id}`,
        list: (transactionId: number) => `/api_admin/transaction_notes/unique_id/${transactionId}`,
        delete: (id: number) => `/api_admin/transaction_notes/remove/${id}`,
        export: baseUrl + '/api_admin/transaction_notes/export',
      },
      virtual_terminals: {
        save: (type: string) => `${baseUrl}/api_admin/virtual_terminal/process/${type}`,
        getTransaction: (uniqeId: string) => `${baseUrl}/api_admin/virtual_terminal/transaction/${uniqeId}`
      },
      wpf_payments: {
        base: baseUrl + '/api_admin/wpf_payments/find',
        transactions: (id: number) => baseUrl + `/api_admin/wpf_payments/wpf_transactions/${id}`,
        referenceTransactions: (id: number) => baseUrl + `/api_admin/wpf_payments/wpf_reference_transactions/${id}`,
        getWpfPaymentNotification: (id: number) => `/api_admin/wpf_payments/notification/${id}`,
        get: (id: number) => `/api_admin/wpf_payments/${id}`,
        persist: (id: number) => `/api_admin/wpf_payments/${id}`,
        getBillingAddress: (id: number) => `/api_admin/wpf_payments/billing_address/${id}`,
        getShippingAddress: (id: number) => `/api_admin/wpf_payments/shipping_address/${id}`,
        export: baseUrl + '/api_admin/wpf_payments/export'
      },
      blacklists: {
        base: baseUrl + '/api_admin/blacklists/pages',
        create: baseUrl + '/api_admin/blacklists/create',
        get: (id: number) => `/api_admin/blacklists/${id}`,
        persist: (id: number) => `/api_admin/blacklists/${id}`,
        export: baseUrl + '/api_admin/blacklists/export'
      },
      merchants: {
        base: baseUrl + '/api_admin/merchants/pages',
        find: baseUrl + '/api_admin/merchants/find',
        create: baseUrl + '/api_admin/merchants/create',
        get: (id: number) => `/api_admin/merchants/${id}`,
        getMerchants: baseUrl + '/api_admin/merchants/list',
        persist: (id: number) => `/api_admin/merchants/${id}`,
        getCompaniesList: baseUrl + `/api_admin/merchants/merchant_company_list`,
        getCompanies: (id: number) => baseUrl + `/api_admin/merchants/merchant_company_list/${id}`,
        addCompany: baseUrl + '/api_admin/merchants/merchant_company_list/create',
        removeCompany: (id: number) => baseUrl + `/api_admin/merchants/merchant_company_list/remove/${id}`,
        getMerchantUsersList: baseUrl + `/api_admin/merchants/merchant_user_list`,
        getMerchantUsers: (id: number) => baseUrl + `/api_admin/merchants/merchant_user_list/${id}`,
        addMerchantUser: baseUrl + '/api_admin/merchants/merchant_user_list/create',
        removeMerchantUser: (id: number) => baseUrl + `/api_admin/merchants/merchant_user_list/remove/${id}`,
        export: baseUrl + '/api_admin/merchants/export'
      },
      terminals: {
        base: baseUrl + '/api_admin/terminals/pages',
        find: baseUrl + '/api_admin/terminals/find',
        create: baseUrl + '/api_admin/terminals/create',
        get: (id: number) => `/api_admin/terminals/${id}`,
        getTerminals: baseUrl + `/api_admin/terminals/list`,
        getCurrenciesList: baseUrl + '/api_admin/terminals/currency',
        getTrafficShalperList: baseUrl + '/api_admin/terminals/traffic_shaper_class',
        getDescriptorTypeList: baseUrl + '/api_admin/terminals/descriptor_type',
        getTerminalDeclineReasonsList: (id: number) => `/api_admin/terminals/risk_details/${id}`,
        persist: (id: number) => `/api_admin/terminals/${id}`,
        getContracts: (id: number) => baseUrl + `/api_admin/terminals/contracts_terminals_list/${id}`,
        getContractsList: baseUrl + '/api_admin/terminals/contracts_list',
        addContract: baseUrl + '/api_admin/terminals/contracts_terminals/create',
        removeContract: (id: number) => baseUrl + `/api_admin/terminals/contracts_terminals/remove/${id}`,
        export: baseUrl + '/api_admin/terminals/export'
      },
      terminals_risk_filters: {
        list: (terminalId: number) => `${baseUrl}/api_admin/terminals/terminals_risk_filters/${terminalId}`,
        get: (id: number) => `${baseUrl}/api_admin/terminals/terminals_risk_filter/${id}`,
        save: (id: number) => `${baseUrl}/api_admin/terminals/terminals_risk_filter/${id}`,
        create: `${baseUrl}/api_admin/terminals/terminals_risk_filter/create`,
        delete: (id: number|number[]) => `${baseUrl}/api_admin/terminals/terminals_risk_filter/${Array.isArray(id) ? id.join(',') : id}`,
        changeOrder: (terminalId: number) => `${baseUrl}/api_admin/terminals/terminals_risk_filter/change_order/${terminalId}`,
        copyToTerminals: (id: number) => `${baseUrl}/api_admin/terminals/terminals_risk_filter/copy_filter/${id}`,
      },
      contracts: {
        base: baseUrl + '/api_admin/contracts/pages',
        find: baseUrl + '/api_admin/contracts/find',
        create: baseUrl + '/api_admin/contracts/create',
        get: (id: number) => `/api_admin/contracts/${id}`,
        persist: (id: number) => `/api_admin/contracts/${id}`,
        getContractGateways: baseUrl + '/api_admin/contracts/gateways',
        getMpiGateways: baseUrl + '/api_admin/contracts/gateway_mpi',
        getContractMcc: baseUrl + '/api_admin/contracts/mcc',
        getContractRefundTimeframe: baseUrl + '/api_admin/contracts/refund_timeframe',
        getContractAuthorizeTimeframe: baseUrl + '/api_admin/contracts/authorize_timeframe',
        getCurrencies: (id: number) => baseUrl + `/api_admin/contracts/currencies_list/${id}`,
        addCurrency: baseUrl + '/api_admin/contracts/currency/create',
        removeCurrency: (id: number) => baseUrl + `/api_admin/contracts/currency/remove/${id}`,
        getCardBrandsList: baseUrl + `/api_admin/contracts/card_brand/list`,
        getCardBrands: (id: number) => baseUrl + `/api_admin/contracts/card_brand_list/${id}`,
        addCardBrands: baseUrl + '/api_admin/contracts/card_brand/create',
        removeCardBrands: (id: number) => baseUrl + `/api_admin/contracts/card_brand/remove/${id}`,
        export: baseUrl + '/api_admin/contracts/export'
      },
      apiattempts: {
        base: baseUrl + '/api_admin/apiattempts/pages',
        get: (id: number) => `/api_admin/apiattempts/${id}`,
        persist: (id: number) => `/api_admin/apiattempts/${id}`,
        export: baseUrl + '/api_admin/apiattempts/export'
      },
      notifications: {
        base: baseUrl + '/api_admin/notifications/pages',
        get: (id: number) => `/api_admin/notifications/${id}`,
        persist: (id: number) => `/api_admin/notifications/${id}`,
        export: baseUrl + '/api_admin/notifications/export'
      },
      notificationUrls: {
        base: (id: number) => `/api_admin/merchants/notification_urls/${id}`,
        get: (id: number) => `/api_admin/merchants/notification_url/${id}`,
        delete: (id: number) => `/api_admin/merchants/notification_url/remove/${id}`,
        persist: (id: number) => `/api_admin/merchants/notification_url/${id}`,
        create: baseUrl + '/api_admin/merchants/notification_url/create',
        notification_types: baseUrl + '/api_admin/merchants/notification_types'
      },
      acquirers: {
        base: baseUrl + '/api_admin/acquirers/pages',
        find: baseUrl + '/api_admin/acquirers/find',
        create: baseUrl + '/api_admin/acquirers/create',
        get: (id: number) => `/api_admin/acquirers/${id}`,
        getAcquirers: baseUrl + '/api_admin/acquirers/list',
        getCountryList: baseUrl + '/api_admin/acquirers/country',
        getTimezoneList: baseUrl + '/api_admin/acquirers/timezone',
        persist: (id: number) => `/api_admin/acquirers/${id}`,
        export: baseUrl + '/api_admin/acquirers/export'
      },
      companies: {
        base: baseUrl + '/api_admin/companies/pages',
        find: baseUrl + '/api_admin/companies/find',
        create: baseUrl + '/api_admin/companies/create',
        get: (id: number) => `/api_admin/companies/${id}`,
        getCompanies: baseUrl + '/api_admin/companies/list',
        persist: (id: number) => `/api_admin/companies/${id}`,
        export: baseUrl + '/api_admin/companies/export'
      },
      resellers: {
        base: baseUrl + '/api_admin/resellers/pages',
        find: baseUrl + '/api_admin/resellers/find',
        create: baseUrl + '/api_admin/resellers/create',
        get: (id: number) => `/api_admin/resellers/${id}`,
        getResellers: baseUrl + '/api_admin/resellers/list',
        persist: (id: number) => `/api_admin/resellers/${id}`,
        getResellerUsersList: baseUrl + `/api_admin/resellers/reseller_user_list`,
        getResellerUsers: (id: number) => `/api_admin/resellers/reseller_user_list/${id}`,
        addResellerUser: baseUrl + '/api_admin/resellers/reseller_user_list/create',
        removeResellerUser: (id: number) => `/api_admin/resellers/reseller_user_list/remove/${id}`,
        export: baseUrl + '/api_admin/resellers/export'
      },
      processinglogs: {
        base: baseUrl + '/api_admin/processinglogs/pages',
        get: (id: number) => `/api_admin/processinglogs/${id}`,
        getProcessinglogs: (id: string) => `/api_admin/processinglogs/list/${id}`,
        getWpfPaymentlogs: (id: string) => `/api_admin/wpfPaymentlogs/list/${id}`,
        persist: (id: number) => `/api_admin/processinglogs/${id}`,
        export: baseUrl + '/api_admin/processinglogs/export'
      },
      tasklogs: {
        base: baseUrl + '/api_admin/task_logs/pages',
        get: (id: number) => `/api_admin/task_logs/${id}`,
      },
      eventlogs: {
        base: baseUrl + '/api_admin/event_logs/pages',
        get: (id: number) => `/api_admin/event_logs/${id}`,
      },
      downloads: {
        getPdf: baseUrl + '/api_admin/downloads/export'
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
