"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorPlacementDefault = errorPlacementDefault;
exports.setErrorPlacementDefault = setErrorPlacementDefault;
exports.alertSendsAnalytics = alertSendsAnalytics;
exports.setAlertSendsAnalytics = setAlertSendsAnalytics;
exports.dialogSendsAnalytics = dialogSendsAnalytics;
exports.setDialogSendsAnalytics = setDialogSendsAnalytics;
exports.helpDrawerSendsAnalytics = helpDrawerSendsAnalytics;
exports.setHelpDrawerSendsAnalytics = setHelpDrawerSendsAnalytics;
// featureFlags.js
var flags = {
  ERROR_PLACEMENT_DEFAULT: 'top',
  ALERT_SENDS_ANALYTICS: false,
  DIALOG_SENDS_ANALYTICS: false,
  HELP_DRAWER_SENDS_ANALYTICS: false
};

function errorPlacementDefault() {
  return flags.ERROR_PLACEMENT_DEFAULT;
}

function setErrorPlacementDefault(value) {
  flags.ERROR_PLACEMENT_DEFAULT = value;
}

function alertSendsAnalytics() {
  return flags.ALERT_SENDS_ANALYTICS;
}

function setAlertSendsAnalytics(value) {
  flags.ALERT_SENDS_ANALYTICS = value;
}

function dialogSendsAnalytics() {
  return flags.DIALOG_SENDS_ANALYTICS;
}

function setDialogSendsAnalytics(value) {
  flags.DIALOG_SENDS_ANALYTICS = value;
}

function helpDrawerSendsAnalytics() {
  return flags.HELP_DRAWER_SENDS_ANALYTICS;
}

function setHelpDrawerSendsAnalytics(value) {
  flags.HELP_DRAWER_SENDS_ANALYTICS = value;
}