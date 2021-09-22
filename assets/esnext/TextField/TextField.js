import _pt from "prop-types";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { FormControl, FormControlPropKeys } from '../FormControl/FormControl';
import React from 'react';
import TextInput from './TextInput';
import classNames from 'classnames';
import { errorPlacementDefault } from '../flags';
import omit from 'lodash/omit';
import pick from 'lodash/pick'; // TODO: Remove this export, apps shouldnt be importing `unmaskValue` from `TextField`

export { unmaskValue } from './maskHelpers';
export var TextField = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(TextField, _React$PureComponent);

  var _super = _createSuper(TextField);

  function TextField(props) {
    var _this;

    _classCallCheck(this, TextField);

    _this = _super.call(this, props);

    if (process.env.NODE_ENV !== 'production') {
      if (props.type === 'number') {
        console.warn("Please use the 'numeric' prop instead of 'type=\"number\"' unless your user research suggests otherwise.");
      }
    }

    return _this;
  }

  _createClass(TextField, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var containerProps = pick(this.props, FormControlPropKeys);
      var inputOnlyProps = omit(this.props, FormControlPropKeys); // Add clearfix class

      var containerClassName = classNames('ds-u-clearfix', // fixes issue where the label's margin is collapsed
      this.props.className); // Use errorPlacement feature flag for <TextInput>
      // Duplicate of errorPlacement defaulting that occurs inside <FormControl>

      var errorPlacement = this.props.errorPlacement || errorPlacementDefault();
      return /*#__PURE__*/React.createElement(FormControl, _extends({}, containerProps, {
        className: containerClassName,
        component: "div",
        labelComponent: "label",
        render: function render(_ref) {
          var id = _ref.id,
              errorId = _ref.errorId,
              setRef = _ref.setRef;
          return /*#__PURE__*/React.createElement(TextInput, _extends({}, inputOnlyProps, {
            id: id,
            setRef: setRef,
            errorId: errorId
          }, {
            errorMessage: _this2.props.errorMessage,
            errorPlacement: errorPlacement,
            inversed: _this2.props.inversed
          }));
        }
      }));
    }
  }]);

  return TextField;
}(React.PureComponent);

_defineProperty(TextField, "propTypes", {
  /**
     * Apply an `aria-label` to the text field to provide additional
     * context to assistive devices.
     */
  ariaLabel: _pt.string,

  /**
     * Additional classes to be added to the root `div` element
     */
  className: _pt.string,

  /**
     * Sets the initial value. Use this for an uncontrolled component; otherwise,
     * use the `value` property.
     */
  defaultValue: _pt.oneOfType([_pt.string, _pt.number]),
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
     * Additional classes to be added to the field element
     */
  fieldClassName: _pt.string,

  /**
     * Used to focus `input` on `componentDidMount()`
     */
  focusTrigger: _pt.bool,

  /**
     * Additional hint text to display
     */
  hint: _pt.node,

  /**
     * A unique `id` to be used on the text field.
     */
  id: _pt.string,

  /**
     * Access a reference to the `input` or `textarea` element
     */
  inputRef: _pt.func,

  /**
     * Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields]({{root}}/guidelines/forms/#required-and-optional-fields).
     */
  requirementLabel: _pt.node,

  /**
     * Applies the "inverse" UI theme
     */
  inversed: _pt.bool,

  /**
     * Label for the input
     */
  label: _pt.node.isRequired,

  /**
     * Additional classes to be added to the `FormLabel`.
     */
  labelClassName: _pt.string,

  /**
     * A unique `id` to be used on the label field.
     */
  labelId: _pt.string,

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
  name: _pt.string.isRequired,

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
  rows: _pt.oneOfType([_pt.number, _pt.string])
});

_defineProperty(TextField, "defaultProps", {
  type: 'text'
});

export default TextField;