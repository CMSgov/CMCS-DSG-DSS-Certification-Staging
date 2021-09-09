"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormControlPropKeys = exports.FormControl = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormLabel = _interopRequireDefault(require("../FormLabel/FormLabel"));

var _InlineError = _interopRequireDefault(require("../InlineError/InlineError"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _flags = require("../flags");

var _lodash = _interopRequireDefault(require("lodash.uniqueid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var FormControl = /*#__PURE__*/function (_React$Component) {
  _inherits(FormControl, _React$Component);

  var _super = _createSuper(FormControl);

  function FormControl(props) {
    var _this;

    _classCallCheck(this, FormControl);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "id", void 0);

    _defineProperty(_assertThisInitialized(_this), "labelId", void 0);

    _defineProperty(_assertThisInitialized(_this), "errorId", void 0);

    _defineProperty(_assertThisInitialized(_this), "inputRef", void 0);

    _this.id = props.id || (0, _lodash.default)('field_');
    _this.labelId = props.labelId || "".concat(_this.id, "-label");
    _this.errorId = props.errorId || "".concat(_this.id, "-error");
    _this.setRef = _this.setRef.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FormControl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Automatically set focus on field input element when `focusTrigger` prop is used
      if (this.props.focusTrigger && this.inputRef) {
        this.inputRef.focus();
      }
    }
  }, {
    key: "setRef",
    value: function setRef(elem) {
      // Use React.forwardRef when upgraded to React 16.3
      if (this.props.focusTrigger) {
        this.inputRef = elem;
      }

      if (this.props.inputRef) {
        this.props.inputRef(elem);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          component = _this$props.component,
          errorMessage = _this$props.errorMessage,
          errorMessageClassName = _this$props.errorMessageClassName,
          _this$props$errorPlac = _this$props.errorPlacement,
          errorPlacement = _this$props$errorPlac === void 0 ? (0, _flags.errorPlacementDefault)() : _this$props$errorPlac,
          hint = _this$props.hint,
          inversed = _this$props.inversed,
          label = _this$props.label,
          labelClassName = _this$props.labelClassName,
          labelComponent = _this$props.labelComponent,
          requirementLabel = _this$props.requirementLabel,
          render = _this$props.render;
      var ComponentType = component;
      var isFieldset = ComponentType === 'fieldset';
      var classes = (0, _classnames.default)({
        'ds-c-fieldset': isFieldset
      }, className);
      var bottomError = errorPlacement === 'bottom' && errorMessage; // Use `aria-invalid` attribute on errored fieldsets
      // Errored form components without fieldsets must handle `aria-invalid` in their own component

      var ariaInvalid = isFieldset && errorMessage ? true : undefined; // Bottom placed errors are handled in FormControl instead of FormLabel

      var renderBottomError = bottomError ? /*#__PURE__*/_react.default.createElement(_InlineError.default, {
        id: this.errorId,
        inversed: inversed,
        className: errorMessageClassName
      }, errorMessage) : null; // Bottom placed errors cannot be linked to Choices in ChoiceList, so we add a hidden error message to the label

      var renderHiddenError = isFieldset && bottomError ? /*#__PURE__*/_react.default.createElement("div", {
        className: "ds-u-visibility--screen-reader"
      }, errorMessage) : null; // Field input props handled by <FormControl>
      // TODO: Move `setRef` logic into <TextField> and <Select>
      // TODO: Simplify `id` props by using a singular `fieldId` prop, and a consistent id naming convention
      // TODO: Use React Context to provide shared form props like `errorPlacement`, `inversed`, `fieldId`

      var fieldInputProps = {
        id: this.id,
        labelId: this.labelId,
        errorId: this.errorId,
        setRef: this.setRef
      };
      return /*#__PURE__*/_react.default.createElement(ComponentType, {
        className: classes,
        "aria-invalid": ariaInvalid
      }, /*#__PURE__*/_react.default.createElement(_FormLabel.default, {
        className: labelClassName,
        component: labelComponent,
        errorMessage: bottomError ? undefined : errorMessage,
        errorMessageClassName: bottomError ? undefined : errorMessageClassName,
        errorId: this.errorId // Avoid using `for` attribute for components with multiple inputs
        // i.e. ChoiceList, DateField, and other components that use `fieldset`
        ,
        fieldId: isFieldset ? undefined : this.id,
        hint: hint,
        id: this.labelId,
        requirementLabel: requirementLabel,
        inversed: inversed
      }, label, renderHiddenError), render(fieldInputProps), renderBottomError);
    }
  }]);

  return FormControl;
}(_react.default.Component);

exports.FormControl = FormControl;

_defineProperty(FormControl, "propTypes", {
  /**
     * Additional classes to be added to the field container.
     */
  className: _propTypes.default.string,

  /**
     * The HTML element used to render the container
     */
  component: _propTypes.default.oneOf(['div', 'fieldset']).isRequired,

  /**
     * A unique ID to be used for the error message. If one isn't provided, a unique ID will be generated.
     */
  errorId: _propTypes.default.string,
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
     * Used to focus the field input on `componentDidMount()`
     */
  focusTrigger: _propTypes.default.bool,

  /**
     * Additional hint text to display
     */
  hint: _propTypes.default.node,

  /**
     * A unique ID to be used for the field input. If one isn't provided, a unique ID will be generated.
     */
  id: _propTypes.default.string,

  /**
     * Access a reference to the field input
     */
  inputRef: _propTypes.default.func,

  /**
     * Applies the "inverse" UI theme
     */
  inversed: _propTypes.default.bool,

  /**
     * Label for the field.
     */
  label: _propTypes.default.node.isRequired,

  /**
     * Additional classes to be added to the field label
     */
  labelClassName: _propTypes.default.string,

  /**
     * The root HTML element used to render the field label
     */
  labelComponent: _propTypes.default.oneOf(['label', 'legend']).isRequired,

  /**
     * A unique `id` to be used on the field label. If one isn't provided, a unique ID will be generated.
     */
  labelId: _propTypes.default.string,

  /**
     * Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields]({{root}}/guidelines/forms/#required-and-optional-fields).
     */
  requirementLabel: _propTypes.default.node,

  /**
     * A function that returns a field input element to accept render props
     */
  render: _propTypes.default.func.isRequired
});

var FormControlPropKeys = ['className', 'component', 'errorId', 'errorMessage', 'errorMessageClassName', 'errorPlacement', 'focusTrigger', 'hint', 'id', 'inputRef', 'inversed', 'label', 'labelClassName', 'labelComponent', 'labelId', 'requirementLabel', 'render'];
exports.FormControlPropKeys = FormControlPropKeys;
var _default = FormControl;
exports.default = _default;