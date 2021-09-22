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
import Select from './Select';
import { errorPlacementDefault } from '../flags';
import omit from 'lodash/omit';
import pick from 'lodash/pick';
export var Dropdown = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Dropdown, _React$PureComponent);

  var _super = _createSuper(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, props);

    if (process.env.NODE_ENV !== 'production') {
      // 'ariaLabel' is provided with a `label` prop that is not an empty string
      if (props.ariaLabel && (typeof props.label !== 'string' || props.label.length > 0)) {
        console.warn("Cannot use 'ariaLabel' and 'label' React properties together in the <Dropdown> component. If the 'label' prop is used, it should be written for all users so that an 'ariaLabel' is not needed. The 'ariaLabel' prop is intended to be used only when the input is missing an input label (i.e when an empty string is provided for the 'label' prop)");
      } // An empty string `label` is provided without a corresponding `ariaLabel` prop


      if (!props.ariaLabel && typeof props.label === 'string' && props.label.length === 0) {
        console.warn("Please provide an 'ariaLabel' when using the <Dropdown> component without a 'label' prop.");
      }
    }

    return _this;
  }

  _createClass(Dropdown, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var containerProps = pick(this.props, FormControlPropKeys);
      var inputOnlyProps = omit(this.props, FormControlPropKeys); // Use errorPlacement feature flag for <Select>
      // Duplicate of errorPlacement defaulting that occurs inside <FormControl>

      var errorPlacement = this.props.errorPlacement || errorPlacementDefault();
      return /*#__PURE__*/React.createElement(FormControl, _extends({}, containerProps, {
        component: "div",
        labelComponent: "label",
        render: function render(_ref) {
          var id = _ref.id,
              errorId = _ref.errorId,
              setRef = _ref.setRef;
          return /*#__PURE__*/React.createElement(Select, _extends({}, inputOnlyProps, {
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

  return Dropdown;
}(React.PureComponent);

_defineProperty(Dropdown, "propTypes", {
  /**
     * Adds `aria-label` attribute. When using `aria-label`, `label` should be empty string.
     */
  ariaLabel: _pt.string,

  /**
     * Additional classes to be added to the root element.
     */
  className: _pt.string,

  /**
     * Used to define custom dropdown options (i.e. option groups). When using the `children` prop, `options` should be an empty list.
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
     * Additional classes to be added to the select element
     */
  fieldClassName: _pt.string,

  /**
     * Used to focus `select` on `componentDidMount()`
     */
  focusTrigger: _pt.bool,

  /**
     * Additional hint text to display
     */
  hint: _pt.node,

  /**
     * A unique ID to be used for the dropdown field. If one isn't provided, a unique ID will be generated.
     */
  id: _pt.string,

  /**
     * Access a reference to the `select` element
     */
  inputRef: _pt.func,

  /**
     * Applies the "inverse" UI theme
     */
  inversed: _pt.bool,

  /**
     * Label for the field. If using `Dropdown` without a label, provide an empty string for `label` and use the `ariaLabel` prop instead.
     */
  label: _pt.node.isRequired,

  /**
     * Additional classes to be added to the `FormLabel`.
     */
  labelClassName: _pt.string,

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

  /**
     * Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields]({{root}}/guidelines/forms/#required-and-optional-fields).
     */
  requirementLabel: _pt.node,

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

export default Dropdown;