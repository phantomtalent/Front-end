import {ICompany} from '@utils/interfaces';

export class Company implements ICompany {
  id = null;
  name = null;
  created_at = null;

  constructor(c?: ICompany) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.name = c.name ? c.name : null;
      this.created_at = c.created_at ? c.created_at : null;
    }
  }
}
