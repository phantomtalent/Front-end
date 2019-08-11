import {IRetrievalRequest} from '@utils/interfaces';

export class RetrievalRequest implements IRetrievalRequest {
  id = null;
  merchant_number = null;
  post_date = null;
  item_type = null;
  rc_code = null;
  rc_description = null;
  acquirer_reference = null;
  issuer_number = null;
  item_slip_number = null;
  card_scheme = null;
  fulfillment_date = null;
  description = null;
  original_post_date = null;
  original_transaction_date = null;
  original_transaction_currency = null;
  original_transaction_amount = null;
  merchant_settlement_currency = null;
  merchant_settlement_amount = null;
  network_settlement_currency = null;
  network_settlement_amount = null;
  card_number = null;
  original_type = null;
  original_slip = null;
  auth_code = null;
  original_batch_number = null;
  rental_agreement_number = null;
  retrieval_request_id = null;
  chargeback_reference_id = null;
  due_date = null;
  central_processing_date = null;
  work_by_date = null;
  processed_transaction_id = null;
  merchant_id = null;
  merchant_name = null;
  created_at = null;
  updated_at = null;
  case_id = null;
  client_number = null;
  unique_tran_id = null;

  constructor(c?: IRetrievalRequest) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.merchant_number = c.merchant_number ? c.merchant_number : null;
      this.post_date = c.post_date ? c.post_date : null;
      this.item_type = c.item_type ? c.item_type : null;
      this.rc_code = c.rc_code ? c.rc_code : null;
      this.rc_description = c.rc_description ? c.rc_description : null;
      this.acquirer_reference = c.acquirer_reference ? c.acquirer_reference : null;
      this.issuer_number = c.issuer_number ? c.issuer_number : null;
      this.item_slip_number = c.item_slip_number ? c.item_slip_number : null;
      this.card_scheme = c.card_scheme ? c.card_scheme : null;
      this.fulfillment_date = c.fulfillment_date ? c.fulfillment_date : null;
      this.description = c.description ? c.description : null;
      this.original_post_date = c.original_post_date ? c.original_post_date : null;
      this.original_transaction_date = c.original_transaction_date ? c.original_transaction_date : null;
      this.original_transaction_currency = c.original_transaction_currency ? c.original_transaction_currency : null;
      this.original_transaction_amount = c.original_transaction_amount ? c.original_transaction_amount : null;
      this.merchant_settlement_currency = c.merchant_settlement_currency ? c.merchant_settlement_currency : null;
      this.merchant_settlement_amount = c.merchant_settlement_amount ? c.merchant_settlement_amount : null;
      this.network_settlement_currency = c.network_settlement_currency ? c.network_settlement_currency : null;
      this.network_settlement_amount = c.network_settlement_amount ? c.network_settlement_amount : null;
      this.card_number = c.card_number ? c.card_number : null;
      this.original_type = c.original_type ? c.original_type : null;
      this.original_slip = c.original_slip ? c.original_slip : null;
      this.auth_code = c.auth_code ? c.auth_code : null;
      this.original_batch_number = c.original_batch_number ? c.original_batch_number : null;
      this.rental_agreement_number = c.rental_agreement_number ? c.rental_agreement_number : null;
      this.retrieval_request_id = c.retrieval_request_id ? c.retrieval_request_id : null;
      this.chargeback_reference_id = c.chargeback_reference_id ? c.chargeback_reference_id : null;
      this.due_date = c.due_date ? c.due_date : null;
      this.central_processing_date = c.central_processing_date ? c.central_processing_date : null;
      this.work_by_date = c.work_by_date ? c.work_by_date : null;
      this.processed_transaction_id = c.processed_transaction_id ? c.processed_transaction_id : null;
      this.merchant_id = c.merchant_id ? c.merchant_id : null;
      this.merchant_name = c.merchant_name ? c.merchant_name : null;
      this.created_at = c.created_at ? c.created_at : null;
      this.updated_at = c.updated_at ? c.updated_at : null;
      this.case_id = c.case_id ? c.case_id : null;
      this.client_number = c.client_number ? c.client_number : null;
      this.unique_tran_id = c.unique_tran_id ? c.unique_tran_id : null;
    }
  }
}
