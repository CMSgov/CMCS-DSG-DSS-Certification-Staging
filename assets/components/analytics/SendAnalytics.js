"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendAnalytics = sendAnalytics;
exports.sendAnalyticsEvent = sendAnalyticsEvent;
exports.default = exports.MAX_LENGTH = exports.EVENT_CATEGORY = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MAX_RETRIES = 3;
var TIMEOUT = 300;
/* eslint-disable camelcase */

var EVENT_CATEGORY = {
  contentTools: 'content tools',
  uiComponents: 'ui components',
  uiInteraction: 'ui interaction'
};
exports.EVENT_CATEGORY = EVENT_CATEGORY;
var MAX_LENGTH = 100;
exports.MAX_LENGTH = MAX_LENGTH;

function sendAnalytics(event, props) {
  var retry = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (window.utag && window.utag[event]) {
    try {
      window.utag[event](props);
      return "Tealium event sent: ".concat(props.ga_eventCategory, " - ").concat(props.ga_eventAction, " - ").concat(props.ga_eventLabel);
    } catch (e) {
      return "Error sending event to Tealium ".concat(e);
    }
  } else {
    if (++retry <= MAX_RETRIES) {
      setTimeout(function () {
        return sendAnalytics(event, props, retry);
      }, retry * TIMEOUT);
    } else {
      return "Tealium event max retries reached";
    }
  }
}

function sendAnalyticsEvent(overrides, defaultPayload) {
  var analyticsDisabled = overrides === false;

  if (window.utag && !analyticsDisabled) {
    var mergedPayload = (0, _merge.default)(defaultPayload, overrides);

    var ga_eventAction = mergedPayload.ga_eventAction,
        ga_eventCategory = mergedPayload.ga_eventCategory,
        ga_eventLabel = mergedPayload.ga_eventLabel,
        _mergedPayload$ga_eve = mergedPayload.ga_eventType,
        ga_eventType = _mergedPayload$ga_eve === void 0 ? 'cmsds' : _mergedPayload$ga_eve,
        _mergedPayload$ga_eve2 = mergedPayload.ga_eventValue,
        ga_eventValue = _mergedPayload$ga_eve2 === void 0 ? '' : _mergedPayload$ga_eve2,
        other_props = _objectWithoutProperties(mergedPayload, ["ga_eventAction", "ga_eventCategory", "ga_eventLabel", "ga_eventType", "ga_eventValue"]);

    var payload = _objectSpread({
      ga_eventAction: ga_eventAction,
      ga_eventCategory: ga_eventCategory,
      ga_eventLabel: ga_eventLabel,
      ga_eventType: ga_eventType,
      ga_eventValue: ga_eventValue
    }, other_props);

    return sendAnalytics('link', payload);
  } else {
    return '';
  }
}
/* eslint-enable camelcase */


var _default = sendAnalytics;
exports.default = _default;