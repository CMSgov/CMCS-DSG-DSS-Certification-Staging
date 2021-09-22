"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Mask = _interopRequireDefault(require("./Mask"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

  var classes = (0, _classnames.default)('ds-c-field', {
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
    'aria-describedby': errorPlacement === 'bottom' && errorMessage ? (0, _classnames.default)(props['aria-describedby'], errorId) : undefined
  };
  var numberRows = typeof rows === 'string' ? parseInt(rows) : rows;
  /* eslint-enable react/prop-types */

  var field = /*#__PURE__*/_react.default.createElement(ComponentType, _extends({}, ariaAttributes, {
    className: classes,
    ref: setRef,
    rows: multiline && numberRows ? numberRows : undefined,
    inputMode: numeric ? 'numeric' : undefined,
    pattern: numeric && !pattern ? '[0-9]*' : pattern,
    type: inputType
  }, inputProps));

  return mask ? /*#__PURE__*/_react.default.createElement(_Mask.default, {
    mask: mask
  }, field) : field;
};

TextInput.propTypes = {
  /**
     * Apply an `aria-label` to the text field to provide additional
     * context to assistive devices.
     */
  ariaLabel: _propTypes.default.string,

  /**
     * Sets the initial value. Use this for an uncontrolled component; otherwise,
     * use the `value` property.
     */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  disabled: _propTypes.default.bool,

  /**
     * The ID of the error message applied to the Select field.
     */
  errorId: _propTypes.default.string,
  errorMessage: _propTypes.default.node,

  /**
     * Location of the error message relative to the field input
     */
  errorPlacement: _propTypes.default.oneOf(['top', 'bottom']),

  /**
     * Additional classes to be added to the field element
     */
  fieldClassName: _propTypes.default.string,

  /**
     * A unique `id` to be used on the text field.
     */
  id: _propTypes.default.string,

  /**
     * Applies the "inverse" UI theme
     */
  inversed: _propTypes.default.bool,

  /**
     * Apply formatting to the field that's unique to the value
     * you expect to be entered. Depending on the mask, the
     * field's appearance and functionality may be affected.
     */
  mask: _propTypes.default.oneOf(['currency', 'phone', 'ssn', 'zip']),

  /**
     * Whether or not the text field is a multiline text field
     */
  multiline: _propTypes.default.bool,
  name: _propTypes.default.string,

  /**
     * Sets `inputMode`, `type`, and `pattern` to improve accessiblity and consistency for number fields. Use this prop instead of `type="number"`, see [here](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/) for more information.
     */
  numeric: _propTypes.default.bool,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,

  /**
     * @hide-prop HTML `input` [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).
     */
  pattern: _propTypes.default.string,

  /**
     * Optionally specify the number of visible text lines for the field. Only
     * applicable if this is a multiline field.
     */
  rows: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  setRef: _propTypes.default.func,

  /**
     * Set the max-width of the input either to `'small'` or `'medium'`.
     */
  size: _propTypes.default.oneOf(['small', 'medium']),

  /**
     * HTML `input` [type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#<input>_types) attribute. If you are using `type=number` please use the numeric prop instead.
     */
  type: _propTypes.default.string.isRequired,

  /**
     * Sets the input's `value`. Use this in combination with `onChange`
     * for a controlled component; otherwise, set `defaultValue`.
     */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
var _default = TextInput;
exports.default = _default;