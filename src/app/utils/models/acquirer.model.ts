import {IAcquirer} from '@utils/interfaces';

export class Acquirer implements IAcquirer {
  id = null;
  name = null;
  timezone = null;
  country_code = null;
  created_at = null;

  constructor(c?: IAcquirer) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.name = c.name ? c.name : null;
      this.timezone = c.timezone ? c.timezone : null;
      this.country_code = c.country_code ? c.country_code : null;
      this.created_at = c.created_at ? c.created_at : null;
    }
  }
}
