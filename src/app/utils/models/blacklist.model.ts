import {IBlacklist} from '@utils/interfaces';

export class Blacklist implements IBlacklist {
  id = null;
  blacklist_owner_id = null;
  name = null;
  value = null;
  masked_pan = null;
  comment = null;
  created_at = null;

  constructor(c?: IBlacklist) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.blacklist_owner_id = c.blacklist_owner_id ? c.blacklist_owner_id : null;
      this.name = c.name ? c.name : null;
      this.value = c.value ? c.value : null;
      this.masked_pan = c.masked_pan ? c.masked_pan : null;
      this.comment = c.comment ? c.comment : null;
      this.created_at = c.created_at ? c.created_at : null;
    }
  }
}
