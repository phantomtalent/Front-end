import {IUserReset} from '@utils/interfaces';

export class UserReset implements IUserReset {

  id: string = null;
  name: string = null;
  email: string = null;
  password: string = null;
  oldPassword: string = null;
  confirmPassword: string = null;
  confirmation_token: string = null;
  reset_password_token: string = null;

  constructor(c?: IUserReset) {
    if (c) {
      this.id = c.id;
      this.name = c.name;
      this.email = c.email;
      this.password = c.password;
      this.oldPassword = c.oldPassword;
      this.confirmPassword = c.confirmPassword;
      this.confirmation_token = c.confirmation_token;
      this.reset_password_token = c.reset_password_token;
    }
  }
}
