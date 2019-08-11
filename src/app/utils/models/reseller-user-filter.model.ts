import {IResellerUserFilter} from '@utils/interfaces';

export class ResellerUserFilter implements IResellerUserFilter {
  name = null;
  login = null;
  email = null;

  constructor(c?: IResellerUserFilter) {
    if (c) {
      this.name = c.name ? c.name : null;
      this.login = c.login ? c.login : null;
      this.email = c.email ? c.email : null;
    }
  }
}
