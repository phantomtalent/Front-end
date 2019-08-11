import { IMerchantCompanies } from '@utils/interfaces';

export class MerchantCompanies implements IMerchantCompanies {
  id = null;
  name = null;
  business_owner_id = null;
  company_id = null;

  constructor(c?: IMerchantCompanies) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.name = c.name ? c.name : null;
      this.business_owner_id = c.business_owner_id ? c.business_owner_id : null;
      this.company_id = c.company_id ? c.company_id : null;
    }
  }
}
