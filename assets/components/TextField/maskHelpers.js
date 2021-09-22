"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toCurrency = toCurrency;
exports.maskValue = maskValue;
exports.unmaskValue = unmaskValue;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Deliminate chunks of integers
var maskDeliminatedRegex = {
  phone: /(\d{3})(\d{1,3})?(\d+)?/,
  ssn: /([*\d]{3})([*\d]{1,2})?([*\d]+)?/,
  zip: /(\d{5})(\d*)/
};
/**
 * Remove everything that isn't a digit or asterisk
 * @param {String} value
 * @returns {String}
 */

function toDigitsAndAsterisks(value) {
  return value.replace(/[^\d*]/g, '');
}
/**
 * Split value into groups and insert a hyphen deliminator between each
 * @param {String} value
 * @param {RegExp} rx - Regular expression with capturing groups
 * @returns {String}
 */


function deliminateRegexGroups(value, rx) {
  var matches = toDigitsAndAsterisks(value).match(rx);

  if (matches && matches.length > 1) {
    value = matches.slice(1).filter(function (a) {
      return !!a;
    }) // remove undefined groups
    .join('-');
  }

  return value;
}
/**
 * Determines if a value is a valid string with numeric digits
 * @param {String} value
 * @param {String} mask
 * @returns {Boolean}
 */


function isValueMaskable(value, mask) {
  if (value && typeof value === 'string') {
    var hasDigits = value.match(/\d/);
    var hasDigitsAsterisks = value.match(/[\d*]/g);

    if (hasDigits || hasDigitsAsterisks && mask === 'ssn') {
      return true;
    }
  }

  return false;
}
/**
 * Performs various transforms to format provided string as currency.
 * @param {String} value - a string containing at least one digit
 * @returns {String}
 */


function toCurrency(value) {
  // Determine if the value is positive or negative.
  var sign = value.indexOf('-') === 0 ? '-' : ''; // Remove all characters except digits and decimal points.

  value = value.replace(/[^\d.]/g, ''); // Remove all but the first decimal point.

  var firstDecimalPointIndex = value.indexOf('.');
  value = value.replace(/[.]/g, function (match, index) {
    return index > firstDecimalPointIndex ? '' : match;
  }); // Remove leading zeroes (we'll add one back later if needed).

  value = value.replace(/^0+/g, ''); // Split into whole number and fractional parts based on decimal point.

  var _value$split = value.split('.'),
      _value$split2 = _slicedToArray(_value$split, 2),
      whole = _value$split2[0],
      _value$split2$ = _value$split2[1],
      fractional = _value$split2$ === void 0 ? '' : _value$split2$; // Add commas for readability (if applicable), or simply return zero.
  // This "replaces" the zero-length space between groups of 3 digits with a comma.
  // Demo of this regex: https://regex101.com/r/JPocnt/2


  whole = whole === '' ? '0' : whole.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');

  if (fractional !== '') {
    if (fractional.length === 1) {
      // Pad with a zero for two decimal places.
      fractional = fractional.concat('0');
    } else if (fractional.length > 2) {
      // Cut all characters after the second decimal place.
      fractional = fractional.slice(0, 2);
    } // Clear the fractional if there's no cents. Add the decimal back here.


    fractional = fractional === '00' ? '' : ".".concat(fractional);
  }

  return "".concat(sign).concat(whole).concat(fractional);
}
/**
 * Returns the value with additional masking characters, or the same value back if invalid numeric string
 * @param {String} value
 * @returns {String}
 */


function maskValue() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var mask = arguments.length > 1 ? arguments[1] : undefined;

  if (isValueMaskable(value, mask)) {
    if (mask === 'currency') {
      value = toCurrency(value);
    } else if (maskDeliminatedRegex[mask]) {
      // Use deliminator regex to mask value and remove unwanted characters
      // If the regex does not match, return the numeric digits.
      value = deliminateRegexGroups(value, maskDeliminatedRegex[mask]);
    }
  }

  return value;
}
/**
 * Remove mask characters from value, or the same value back if invalid numeric string
 * @param {String} value
 * @param {String} mask
 * @returns {String}
 */


function unmaskValue(value, mask) {
  if (isValueMaskable(value, mask)) {
    if (mask === 'currency') {
      // Preserve only digits, decimal point, or negative symbol
      var matches = value.match(/^-|[\d.]/g);

      if (matches) {
        value = matches.join('');
      }
    } else if (maskDeliminatedRegex[mask]) {
      // Remove the deliminators and revert to single ungrouped string
      value = toDigitsAndAsterisks(value);
    }
  }

  return value;
}