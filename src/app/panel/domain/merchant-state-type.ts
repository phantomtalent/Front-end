export enum MerchantStateType {
  being_set_up = 1,
  live_for_processing = 2,
  trading_suspended = 3,
  account_suspended = 4,
}

export const MerchantStateType2LabelMapping = {
  [MerchantStateType.being_set_up]: 'Being set up',
  [MerchantStateType.live_for_processing]: 'Live for processing',
  [MerchantStateType.trading_suspended]: 'Trading suspended',
  [MerchantStateType.account_suspended]: 'Account suspended',
}
