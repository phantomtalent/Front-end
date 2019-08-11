import {TerminalRiskFilterType} from '@app/panel/domain/terminal-risk-filter-type';
import {IBlacklistRiskFilterSettings} from '@utils/interfaces/terminal-risk-filters/blacklist.interface';
import {IUserAttemptCountRiskFilterSettings} from '@utils/interfaces/terminal-risk-filters';
import {BlacklistRiskFilterSettings, UserAttemptCountRiskFilterSettings} from '@utils/models/terminal-risk-filters';

export type ITerminalRiskFilterSettings = IBlacklistRiskFilterSettings | IUserAttemptCountRiskFilterSettings;

export const TerminalRiskFilterType2SettingMapping = {
  [TerminalRiskFilterType.BlackList]: BlacklistRiskFilterSettings,
  [TerminalRiskFilterType.UserAttemptCount]: UserAttemptCountRiskFilterSettings,
};
