import { ICardBrands } from '@utils/interfaces';

export class CardBrands implements ICardBrands {
  id: number;
  contract_id: number;
  card_brand: string;

  constructor(c?: ICardBrands) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.contract_id = c.contract_id ? c.contract_id : null;
      this.card_brand = c.card_brand ? c.card_brand : null;
    }
  }
}
