// featureFlags.js
var flags = {
  ERROR_PLACEMENT_DEFAULT: 'top',
  ALERT_SENDS_ANALYTICS: false,
  DIALOG_SENDS_ANALYTICS: false,
  HELP_DRAWER_SENDS_ANALYTICS: false
};
export function errorPlacementDefault() {
  return flags.ERROR_PLACEMENT_DEFAULT;
}
export function setErrorPlacementDefault(value) {
  flags.ERROR_PLACEMENT_DEFAULT = value;
}
export function alertSendsAnalytics() {
  return flags.ALERT_SENDS_ANALYTICS;
}
export function setAlertSendsAnalytics(value) {
  flags.ALERT_SENDS_ANALYTICS = value;
}
export function dialogSendsAnalytics() {
  return flags.DIALOG_SENDS_ANALYTICS;
}
export function setDialogSendsAnalytics(value) {
  flags.DIALOG_SENDS_ANALYTICS = value;
}
export function helpDrawerSendsAnalytics() {
  return flags.HELP_DRAWER_SENDS_ANALYTICS;
}
export function setHelpDrawerSendsAnalytics(value) {
  flags.HELP_DRAWER_SENDS_ANALYTICS = value;
}