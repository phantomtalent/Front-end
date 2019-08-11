export enum UserRoleType {
  admin = 'ROLE_ADMIN',
  merchant = 'ROLE_MERCHANT',
}

export const UserRoleType2LabelMapping = {
  [UserRoleType.admin]: 'Admin',
  [UserRoleType.merchant]: 'Merchant',
}
