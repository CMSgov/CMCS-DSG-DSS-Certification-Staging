import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { FormControl, FormControlPropKeys } from '../FormControl/FormControl';
import DateInput from './DateInput';
import React from 'react';
import defaultDateFormatter from './defaultDateFormatter';
import omit from 'lodash/omit';
import pick from 'lodash/pick';
export function DateField(props) {
  var containerProps = pick(props, FormControlPropKeys);
  var inputOnlyProps = omit(props, FormControlPropKeys);
  return /*#__PURE__*/React.createElement(FormControl, _extends({}, containerProps, {
    component: "fieldset",
    labelComponent: "legend",
    render: function render(_ref) {
      var labelId = _ref.labelId;
      return /*#__PURE__*/React.createElement(DateInput, _extends({}, inputOnlyProps, {
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
  autoComplete: _pt.bool,

  /**
     * Additional classes to be added to the root fieldset element
     */
  className: _pt.string,

  /**
     * Optional method to format the `input` field values. If this
     * method is provided, the returned value will be passed as a second argument
     * to the `onBlur` and `onChange` callbacks. This method receives an object as
     * its only argument, in the shape of: `{ day, month, year }`
     *
     * By default `dateFormatter` will be set to the `defaultDateFormatter` function, which prevents days/months more than 2 digits & years more than 4 digits.
     */
  dateFormatter: _pt.any,
  disabled: _pt.bool,
  errorMessage: _pt.node,

  /**
     * Additional classes to be added to the error message
     */
  errorMessageClassName: _pt.string,

  /**
     * Location of the error message relative to the field input
     */
  errorPlacement: _pt.oneOf(['top', 'bottom']),

  /**
     * Additional hint text to display above the individual month/day/year fields
     */
  hint: _pt.node,

  /**
     * Applies the "inverse" UI theme
     */
  inversed: _pt.bool,

  /**
     * The primary label, rendered above the individual month/day/year fields
     */
  label: _pt.node,

  /**
     * A unique ID to be used for the DateField label. If one isn't provided, a unique ID will be generated.
     */
  labelId: _pt.string,

  /**
     * Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields]({{root}}/guidelines/forms/#required-and-optional-fields).
     */
  requirementLabel: _pt.node,

  /**
     * Called anytime any date input is blurred
     */
  onBlur: _pt.func,

  /**
     * Called when any date input is blurred and the focus does not land on one
     * of the other date inputs inside this component (i.e., when the whole
     * component loses focus)
     */
  onComponentBlur: _pt.func,

  /**
     * Called anytime any date input is changed
     */
  onChange: _pt.func,

  /**
     * Label for the day field
     */
  dayLabel: _pt.node,

  /**
     * `name` for the day `input` field
     */
  dayName: _pt.string,

  /**
     * Initial value for the day `input` field. Use this for an uncontrolled
     * component; otherwise, use the `dayValue` property.
     */
  dayDefaultValue: _pt.oneOfType([_pt.string, _pt.number]),

  /**
     * Access a reference to the day `input`
     */
  dayFieldRef: _pt.func,

  /**
     * Apply error styling to the day `input`
     */
  dayInvalid: _pt.bool,

  /**
     * Sets the day input's `value`. Use this in combination with `onChange`
     * for a controlled component; otherwise, set `dayDefaultValue`.
     */
  dayValue: _pt.oneOfType([_pt.string, _pt.number]),

  /**
     * Label for the month field
     */
  monthLabel: _pt.node,

  /**
     * `name` for the month `input` field
     */
  monthName: _pt.string,

  /**
     * Initial value for the month `input` field. Use this for an uncontrolled
     * component; otherwise, use the `monthValue` property.
     */
  monthDefaultValue: _pt.oneOfType([_pt.string, _pt.number]),

  /**
     * Access a reference to the month `input`
     */
  monthFieldRef: _pt.func
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
  dateFormatter: defaultDateFormatter
};
export default DateField;