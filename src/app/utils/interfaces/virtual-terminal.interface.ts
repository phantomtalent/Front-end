export interface IVirtualTerminal {
    id?: number;
    reference_transaction_id?: string;
    status?: string;
    created_at?: Date;
    card_holder?: string;
    card_number?: string;
    cvv?: string;
    expiration_month?: number;
    expiration_year?: number;
    merchant_id?: number;
    merchant_name?: string;
    terminal_id?: number;
    terminal_name?: string;
    contract_id?: number;
    contract_name?: string;
    type?: string;
    error_class?: string;
    merchant_transaction_id?: string;
    unique_id?: string;
    amount?: number;
    currency?: string;
    mode?: string;
    descriptor?: string;
    response_code?: string;
    technical_message?: string;
    usage?: string;
    customer_email?: string;
    customer_phone?: string;
    billing_address_first_name?: string;
    billing_address_last_name?: string;
    billing_address_address1?: string;
    billing_address_zip_code?: string;
    billing_address_city?: string;
    billing_address_state?: string;
    billing_address_country?: string;
}

export interface IVirtualTerminalResponse {
    id?: number;
    reference_transaction_id?: number;
    status?: string;
    created_at?: Date;
    type?: string;
    error_class?: string;
    merchant_transaction_id?: string;
    unique_id?: string;
    amount?: number;
    currency?: string;
}

