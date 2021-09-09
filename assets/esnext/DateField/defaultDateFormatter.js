// Prevents day/month greater than 2 digits and year greater than 4 digits
var standardLengthFormatter = function standardLengthFormatter(_ref) {
  var day = _ref.day,
      month = _ref.month,
      year = _ref.year;
  return {
    day: day.length > 2 ? day.substring(0, 2) : day,
    month: month.length > 2 ? month.substring(0, 2) : month,
    year: year.length > 4 ? year.substring(0, 4) : year
  };
};

export var defaultDateFormatter = function defaultDateFormatter(dateObject) {
  return standardLengthFormatter(dateObject);
};
export default defaultDateFormatter;