import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import Mask from './Mask';
import classNames from 'classnames';

/**
 * <TextInput> is an internal component used by <TextField>, which wraps it and handles shared form UI like labels, error messages, etc
 * <TextInput> is also exported for advanced design system use cases, where the internal component can be leveraged to build custom form components
 * As an internal component, it's subject to more breaking changes. Exercise caution using <TextInput> outside of those special cases
 */
var TextInput = function TextInput(props) {
  var ariaLabel = props.ariaLabel,
      errorId = props.errorId,
      errorMessage = props.errorMessage,
      errorPlacement = props.errorPlacement,
      fieldClassName = props.fieldClassName,
      inversed = props.inversed,
      mask = props.mask,
      multiline = props.multiline,
      numeric = props.numeric,
      rows = props.rows,
      size = props.size,
      setRef = props.setRef,
      type = props.type,
      pattern = props.pattern,
      inputProps = _objectWithoutProperties(props, ["ariaLabel", "errorId", "errorMessage", "errorPlacement", "fieldClassName", "inversed", "mask", "multiline", "numeric", "rows", "size", "setRef", "type", "pattern"]);

  var classes = classNames('ds-c-field', {
    'ds-c-field--error': errorMessage,
    'ds-c-field--inverse': inversed
  }, mask && "ds-c-field--".concat(mask), size && "ds-c-field--".concat(size), fieldClassName);
  var inputType = type;

  if (numeric) {
    inputType = 'text';
  } else if (multiline) {
    inputType = undefined;
  }

  var ComponentType = multiline ? 'textarea' : 'input';
  /* eslint-disable react/prop-types */

  var ariaAttributes = {
    'aria-label': ariaLabel,
    // Use set `aria-invalid` based off errorMessage unless manually specified
    'aria-invalid': props['aria-invalid'] ? props['aria-invalid'] : !!errorMessage,
    // Link input to bottom placed error message
    'aria-describedby': errorPlacement === 'bottom' && errorMessage ? classNames(props['aria-describedby'], errorId) : undefined
  };
  var numberRows = typeof rows === 'string' ? parseInt(rows) : rows;
  /* eslint-enable react/prop-types */

  var field = /*#__PURE__*/React.createElement(ComponentType, _extends({}, ariaAttributes, {
    className: classes,
    ref: setRef,
    rows: multiline && numberRows ? numberRows : undefined,
    inputMode: numeric ? 'numeric' : undefined,
    pattern: numeric && !pattern ? '[0-9]*' : pattern,
    type: inputType
  }, inputProps));
  return mask ? /*#__PURE__*/React.createElement(Mask, {
    mask: mask
  }, field) : field;
};

TextInput.propTypes = {
  /**
     * Apply an `aria-label` to the text field to provide additional
     * context to assistive devices.
     */
  ariaLabel: _pt.string,

  /**
     * Sets the initial value. Use this for an uncontrolled component; otherwise,
     * use the `value` property.
     */
  defaultValue: _pt.oneOfType([_pt.string, _pt.number]),
  disabled: _pt.bool,

  /**
     * The ID of the error message applied to the Select field.
     */
  errorId: _pt.string,
  errorMessage: _pt.node,

  /**
     * Location of the error message relative to the field input
     */
  errorPlacement: _pt.oneOf(['top', 'bottom']),

  /**
     * Additional classes to be added to the field element
     */
  fieldClassName: _pt.string,

  /**
     * A unique `id` to be used on the text field.
     */
  id: _pt.string,

  /**
     * Applies the "inverse" UI theme
     */
  inversed: _pt.bool,

  /**
     * Apply formatting to the field that's unique to the value
     * you expect to be entered. Depending on the mask, the
     * field's appearance and functionality may be affected.
     */
  mask: _pt.oneOf(['currency', 'phone', 'ssn', 'zip']),

  /**
     * Whether or not the text field is a multiline text field
     */
  multiline: _pt.bool,
  name: _pt.string,

  /**
     * Sets `inputMode`, `type`, and `pattern` to improve accessiblity and consistency for number fields. Use this prop instead of `type="number"`, see [here](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/) for more information.
     */
  numeric: _pt.bool,
  onBlur: _pt.func,
  onChange: _pt.func,

  /**
     * @hide-prop HTML `input` [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).
     */
  pattern: _pt.string,

  /**
     * Optionally specify the number of visible text lines for the field. Only
     * applicable if this is a multiline field.
     */
  rows: _pt.oneOfType([_pt.number, _pt.string]),
  setRef: _pt.func,

  /**
     * Set the max-width of the input either to `'small'` or `'medium'`.
     */
  size: _pt.oneOf(['small', 'medium']),

  /**
     * HTML `input` [type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#<input>_types) attribute. If you are using `type=number` please use the numeric prop instead.
     */
  type: _pt.string.isRequired,

  /**
     * Sets the input's `value`. Use this in combination with `onChange`
     * for a controlled component; otherwise, set `defaultValue`.
     */
  value: _pt.oneOfType([_pt.string, _pt.number])
};
export default TextInput;