import _pt from "prop-types";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

import React from 'react';
import classNames from 'classnames';

/**
 * <Select> is an internal component used by <Dropdown>, which wraps it and handles common form controls like labels, error messages, etc
 * <Select> is also exported for advanced design system use cases, where the internal component can be leveraged to build custom form components
 * As an internal component, it's subject to more breaking changes. Exercise caution using <Select> outside of those special cases
 */
export var Select = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Select, _React$PureComponent);

  var _super = _createSuper(Select);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _super.call(this, props);

    if (process.env.NODE_ENV !== 'production') {
      if (props.children && props.options.length > 0) {
        console.warn("Cannot use 'options' and 'children' React properties at the same time in the <Select> component. Please use 'children' for custom options and 'options' for general cases");
      }
    }

    return _this;
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      // Select specific props
      var _this$props = this.props,
          ariaLabel = _this$props.ariaLabel,
          children = _this$props.children,
          errorId = _this$props.errorId,
          errorMessage = _this$props.errorMessage,
          errorPlacement = _this$props.errorPlacement,
          fieldClassName = _this$props.fieldClassName,
          inversed = _this$props.inversed,
          options = _this$props.options,
          size = _this$props.size,
          setRef = _this$props.setRef,
          selectProps = _objectWithoutProperties(_this$props, ["ariaLabel", "children", "errorId", "errorMessage", "errorPlacement", "fieldClassName", "inversed", "options", "size", "setRef"]);

      var classes = classNames('ds-c-field', {
        'ds-c-field--error': errorMessage,
        'ds-c-field--inverse': inversed
      }, size && "ds-c-field--".concat(size), fieldClassName);
      var optionElements = options.map(function (option) {
        return /*#__PURE__*/React.createElement("option", {
          key: option.value,
          value: option.value
        }, option.label);
      });
      /* eslint-disable react/prop-types */

      var ariaAttributes = {
        'aria-label': ariaLabel,
        // Use set `aria-invalid` based off errorMessage unless manually specified
        'aria-invalid': this.props['aria-invalid'] ? this.props['aria-invalid'] : !!errorMessage,
        // Link input to bottom placed error message
        'aria-describedby': errorPlacement === 'bottom' && errorMessage ? classNames(this.props['aria-describedby'], errorId) : undefined
      };
      /* eslint-enable react/prop-types */

      return /*#__PURE__*/React.createElement("select", _extends({}, ariaAttributes, {
        className: classes,
        ref: setRef
      }, selectProps),
      /* Render custom options if provided */
      children || optionElements);
    }
  }]);

  return Select;
}(React.PureComponent);

_defineProperty(Select, "propTypes", {
  /**
     * Adds `aria-label` attribute. When using `aria-label`, `label` should be empty string.
     */
  ariaLabel: _pt.string,

  /**
     * Used to define custom Select options (i.e. option groups). When using the `children` prop, `options` should be an empty list.
     */
  children: _pt.node,

  /**
     * Sets the initial selected state. Use this for an uncontrolled component;
     * otherwise, use the `value` property.
     */
  defaultValue: _pt.oneOfType([_pt.number, _pt.string]),

  /**
     * Disables the entire field.
     */
  disabled: _pt.bool,

  /**
     * The ID of the error message applied to the Select field.
     */
  errorId: _pt.string,
  errorMessage: _pt.node,

  /**
     * Location of the error message relative to the field input
     */
  errorPlacement: _pt.oneOf(['top', 'bottom']).isRequired,

  /**
     * Additional classes to be added to the select element
     */
  fieldClassName: _pt.string,

  /**
     * A unique ID to be used for the Select field.
     */
  id: _pt.string.isRequired,

  /**
     * Applies the "inverse" UI theme
     */
  inversed: _pt.bool,

  /**
     * The field's `name` attribute
     */
  name: _pt.string.isRequired,

  /**
     * The list of options to be rendered. Provide an empty list if using custom options via the `children` prop.
     */
  options: _pt.arrayOf(_pt.shape({
    label: _pt.node.isRequired,
    value: _pt.oneOfType([_pt.number, _pt.string]).isRequired
  })).isRequired,
  onBlur: _pt.func,
  onChange: _pt.func,
  setRef: _pt.func,

  /**
     * If the component renders a select, set the max-width of the input either to `'small'` or `'medium'`.
     */
  size: _pt.oneOf(['small', 'medium']),

  /**
     * Sets the field's `value`. Use this in combination with `onChange`
     * for a controlled component; otherwise, set `defaultValue`.
     */
  value: _pt.oneOfType([_pt.number, _pt.string])
});

export default Select;