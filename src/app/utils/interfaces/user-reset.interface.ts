export interface IUserReset {
  id: string;
  name: string;
  email: string;
  password: string;
  oldPassword: string;
  confirmPassword: string;
  confirmation_token: string;
  reset_password_token: string;
}
