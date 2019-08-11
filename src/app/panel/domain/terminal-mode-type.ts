export enum TerminalModeType {
  live = 1,
  test = 2,
}

export const TerminalModeType2LabelMapping = {
  [TerminalModeType.live]: "Live",
  [TerminalModeType.test]: "Test",
}
