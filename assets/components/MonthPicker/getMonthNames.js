"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMonthNames = getMonthNames;
exports.NUM_MONTHS = void 0;
var NUM_MONTHS = 12;
/**
 * Generates an array of month names according to the given or default locale
 *
 * @param  {string} [locale] locale for generating month names
 * @param  {boolean} [short] whether to return short month names
 * @return {string[]}        array of month names
 */

exports.NUM_MONTHS = NUM_MONTHS;

function getMonthNames(locale) {
  var short = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var options = {
    month: short ? 'short' : 'long'
  };
  var months = [];

  for (var i = 0; i < NUM_MONTHS; i++) {
    var date = new Date();
    date.setMonth(i, 1);
    months.push(date.toLocaleString(locale, options));
  }

  return months;
}