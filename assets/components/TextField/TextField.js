"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "unmaskValue", {
  enumerable: true,
  get: function get() {
    return _maskHelpers.unmaskValue;
  }
});
exports.default = exports.TextField = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormControl = require("../FormControl/FormControl");

var _react = _interopRequireDefault(require("react"));

var _TextInput = _interopRequireDefault(require("./TextInput"));

var _classnames = _interopRequireDefault(require("classnames"));

var _flags = require("../flags");

var _omit = _interopRequireDefault(require("lodash/omit"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _maskHelpers = require("./maskHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var TextField = /*#__PURE__*/function (_React$PureComponent) {
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

      var containerProps = (0, _pick.default)(this.props, _FormControl.FormControlPropKeys);
      var inputOnlyProps = (0, _omit.default)(this.props, _FormControl.FormControlPropKeys); // Add clearfix class

      var containerClassName = (0, _classnames.default)('ds-u-clearfix', // fixes issue where the label's margin is collapsed
      this.props.className); // Use errorPlacement feature flag for <TextInput>
      // Duplicate of errorPlacement defaulting that occurs inside <FormControl>

      var errorPlacement = this.props.errorPlacement || (0, _flags.errorPlacementDefault)();
      return /*#__PURE__*/_react.default.createElement(_FormControl.FormControl, _extends({}, containerProps, {
        className: containerClassName,
        component: "div",
        labelComponent: "label",
        render: function render(_ref) {
          var id = _ref.id,
              errorId = _ref.errorId,
              setRef = _ref.setRef;
          return /*#__PURE__*/_react.default.createElement(_TextInput.default, _extends({}, inputOnlyProps, {
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
}(_react.default.PureComponent);

exports.TextField = TextField;

_defineProperty(TextField, "propTypes", {
  /**
     * Apply an `aria-label` to the text field to provide additional
     * context to assistive devices.
     */
  ariaLabel: _propTypes.default.string,

  /**
     * Additional classes to be added to the root `div` element
     */
  className: _propTypes.default.string,

  /**
     * Sets the initial value. Use this for an uncontrolled component; otherwise,
     * use the `value` property.
     */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
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
     * Additional classes to be added to the field element
     */
  fieldClassName: _propTypes.default.string,

  /**
     * Used to focus `input` on `componentDidMount()`
     */
  focusTrigger: _propTypes.default.bool,

  /**
     * Additional hint text to display
     */
  hint: _propTypes.default.node,

  /**
     * A unique `id` to be used on the text field.
     */
  id: _propTypes.default.string,

  /**
     * Access a reference to the `input` or `textarea` element
     */
  inputRef: _propTypes.default.func,

  /**
     * Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields]({{root}}/guidelines/forms/#required-and-optional-fields).
     */
  requirementLabel: _propTypes.default.node,

  /**
     * Applies the "inverse" UI theme
     */
  inversed: _propTypes.default.bool,

  /**
     * Label for the input
     */
  label: _propTypes.default.node.isRequired,

  /**
     * Additional classes to be added to the `FormLabel`.
     */
  labelClassName: _propTypes.default.string,

  /**
     * A unique `id` to be used on the label field.
     */
  labelId: _propTypes.default.string,

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
  name: _propTypes.default.string.isRequired,

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
  rows: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
});

_defineProperty(TextField, "defaultProps", {
  type: 'text'
});

var _default = TextField;
exports.default = _default;