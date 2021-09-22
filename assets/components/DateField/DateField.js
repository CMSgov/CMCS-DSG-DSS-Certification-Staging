"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateField = DateField;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormControl = require("../FormControl/FormControl");

var _DateInput = _interopRequireDefault(require("./DateInput"));

var _react = _interopRequireDefault(require("react"));

var _defaultDateFormatter = _interopRequireDefault(require("./defaultDateFormatter"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _pick = _interopRequireDefault(require("lodash/pick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function DateField(props) {
  var containerProps = (0, _pick.default)(props, _FormControl.FormControlPropKeys);
  var inputOnlyProps = (0, _omit.default)(props, _FormControl.FormControlPropKeys);
  return /*#__PURE__*/_react.default.createElement(_FormControl.FormControl, _extends({}, containerProps, {
    component: "fieldset",
    labelComponent: "legend",
    render: function render(_ref) {
      var labelId = _ref.labelId;
      return /*#__PURE__*/_react.default.createElement(_DateInput.default, _extends({}, inputOnlyProps, {
        labelId: labelId
      }, {
        inversed: props.inversed
      }));
    }
  }));
}

DateField.propTypes = {
  /**
     * Adds `autocomplete` attributes `bday-day`, `bday-month` and `bday-year` to the corresponding `<DateField>` inputs
     */
  autoComplete: _propTypes.default.bool,

  /**
     * Additional classes to be added to the root fieldset element
     */
  className: _propTypes.default.string,

  /**
     * Optional method to format the `input` field values. If this
     * method is provided, the returned value will be passed as a second argument
     * to the `onBlur` and `onChange` callbacks. This method receives an object as
     * its only argument, in the shape of: `{ day, month, year }`
     *
     * By default `dateFormatter` will be set to the `defaultDateFormatter` function, which prevents days/months more than 2 digits & years more than 4 digits.
     */
  dateFormatter: _propTypes.default.any,
  disabled: _propTypes.default.bool,
  errorMessage: _propTypes.default.node,

  /**
     * Additional classes to be added to the error message
     */
  errorMessageClassName: _propTypes.default.string,

  /**
     * Location of the error message relative to the field input
     */
  errorPlacement: _propTypes.default.oneOf(['top', 'bottom']),

  /**
     * Additional hint text to display above the individual month/day/year fields
     */
  hint: _propTypes.default.node,

  /**
     * Applies the "inverse" UI theme
     */
  inversed: _propTypes.default.bool,

  /**
     * The primary label, rendered above the individual month/day/year fields
     */
  label: _propTypes.default.node,

  /**
     * A unique ID to be used for the DateField label. If one isn't provided, a unique ID will be generated.
     */
  labelId: _propTypes.default.string,

  /**
     * Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields]({{root}}/guidelines/forms/#required-and-optional-fields).
     */
  requirementLabel: _propTypes.default.node,

  /**
     * Called anytime any date input is blurred
     */
  onBlur: _propTypes.default.func,

  /**
     * Called when any date input is blurred and the focus does not land on one
     * of the other date inputs inside this component (i.e., when the whole
     * component loses focus)
     */
  onComponentBlur: _propTypes.default.func,

  /**
     * Called anytime any date input is changed
     */
  onChange: _propTypes.default.func,

  /**
     * Label for the day field
     */
  dayLabel: _propTypes.default.node,

  /**
     * `name` for the day `input` field
     */
  dayName: _propTypes.default.string,

  /**
     * Initial value for the day `input` field. Use this for an uncontrolled
     * component; otherwise, use the `dayValue` property.
     */
  dayDefaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
     * Access a reference to the day `input`
     */
  dayFieldRef: _propTypes.default.func,

  /**
     * Apply error styling to the day `input`
     */
  dayInvalid: _propTypes.default.bool,

  /**
     * Sets the day input's `value`. Use this in combination with `onChange`
     * for a controlled component; otherwise, set `dayDefaultValue`.
     */
  dayValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
     * Label for the month field
     */
  monthLabel: _propTypes.default.node,

  /**
     * `name` for the month `input` field
     */
  monthName: _propTypes.default.string,

  /**
     * Initial value for the month `input` field. Use this for an uncontrolled
     * component; otherwise, use the `monthValue` property.
     */
  monthDefaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
     * Access a reference to the month `input`
     */
  monthFieldRef: _propTypes.default.func
};
DateField.defaultProps = {
  label: 'Date',
  hint: 'For example: 4 / 28 / 1986',
  dayLabel: 'Day',
  dayName: 'day',
  monthLabel: 'Month',
  monthName: 'month',
  yearLabel: 'Year',
  yearName: 'year',
  dateFormatter: _defaultDateFormatter.default
};
var _default = DateField;
exports.default = _default;