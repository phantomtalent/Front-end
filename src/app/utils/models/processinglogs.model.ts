import {IProcessingLogs} from '@utils/interfaces';

export class ProcessingLogs implements IProcessingLogs {
  id = null;
  unique_id = null;
  title = null;
  message = null;
  merchant_ip = null;
  level = null;
  created_at = null;
  updated_at = null;

  constructor(c?: IProcessingLogs) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.unique_id = c.unique_id ? c.unique_id : null;
      this.title = c.title ? c.title : null;
      this.message = c.message ? c.message : null;
      this.merchant_ip = c.merchant_ip ? c.merchant_ip : null;
      this.level = c.level ? c.level : null;
      this.created_at = c.created_at ? c.created_at : null;
      this.updated_at = c.updated_at ? c.updated_at : null;
    }
  }
}
