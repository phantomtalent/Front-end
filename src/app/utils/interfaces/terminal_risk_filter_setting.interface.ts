export enum TerminalRiskFilterFormSchemeFieldType {
  Input = 'input',
  Select = 'select',
  Checkbox = 'checkbox',
  Number = 'number',
  MultiSelect = 'multi_select'
}

export interface ITerminalRiskFilterSetting<T> {
  name?: string;
  value: T;
  type: TerminalRiskFilterFormSchemeFieldType;
  options?: string[];
}

export interface ITerminalRiskFilterSettingForBackend<T> {
  name?: string;
  value: T;
  type: TerminalRiskFilterFormSchemeFieldType;
  options?: string[];
}
