"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ChoiceList = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Choice = _interopRequireDefault(require("./Choice"));

var _FormControl = require("../FormControl/FormControl");

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _pick = _interopRequireDefault(require("lodash/pick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var ChoiceList = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ChoiceList, _React$PureComponent);

  var _super = _createSuper(ChoiceList);

  function ChoiceList(props) {
    var _this;

    _classCallCheck(this, ChoiceList);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "choiceRefs", void 0);

    if (process.env.NODE_ENV !== 'production') {
      if (props.multiple) {
        console.warn("[Deprecated]: Please remove the 'multiple' prop in <ChoiceList>, use type=\"checkbox\" instead. This prop is deprecated and will be removed in a future release.");
      }

      if (props.type !== 'checkbox' && props.choices.length === 1) {
        console.warn("[Warning]: Use type=\"checkbox\" for components with only one choice. A singl e radio button is disallowed because it prevents users from deselecting the field.");
      }
    }

    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_this));
    _this.choiceRefs = [];
    return _this;
  }

  _createClass(ChoiceList, [{
    key: "handleBlur",
    value: function handleBlur(evt) {
      if (this.props.onBlur) {
        this.props.onBlur(evt);
      }

      if (this.props.onComponentBlur) {
        this.handleComponentBlur(evt);
      }
    }
  }, {
    key: "handleComponentBlur",
    value: function handleComponentBlur(evt) {
      var _this2 = this;

      // The active element is always the document body during a focus
      // transition, so in order to check if the newly focused element
      // is one of our choices, we're going to have to wait a bit.
      setTimeout(function () {
        if (_this2.choiceRefs.indexOf(document.activeElement) === -1) {
          _this2.props.onComponentBlur(evt);
        }
      }, 20);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var containerProps = (0, _pick.default)(this.props, _FormControl.FormControlPropKeys);
      var choices = this.props.choices.map(function (choiceProps) {
        var completeChoiceProps = _objectSpread(_objectSpread({}, choiceProps), {}, {
          inversed: _this3.props.inversed,
          name: _this3.props.name,
          onBlur: (_this3.props.onBlur || _this3.props.onComponentBlur) && _this3.handleBlur,
          onChange: _this3.props.onChange,
          size: _this3.props.size,
          type: _this3.props.type,
          inputClassName: (0, _classnames.default)(choiceProps.inputClassName, {
            'ds-c-choice--error': _this3.props.errorMessage
          }),
          disabled: choiceProps.disabled || _this3.props.disabled,
          // Individual choices can be disabled as well as the entire field
          inputRef: function inputRef(ref) {
            _this3.choiceRefs.push(ref);
          }
        });

        return /*#__PURE__*/_react.default.createElement(_Choice.default, _extends({
          key: choiceProps.value
        }, completeChoiceProps));
      });
      return /*#__PURE__*/_react.default.createElement(_FormControl.FormControl, _extends({}, containerProps, {
        component: "fieldset",
        labelComponent: "legend",
        render: function render() {
          return choices;
        }
      }));
    }
  }]);

  return ChoiceList;
}(_react.default.PureComponent);

exports.ChoiceList = ChoiceList;

_defineProperty(ChoiceList, "propTypes", {
  /**
     * Array of [`Choice`]({{root}}/components/choice/#components.choice.react) data objects to be rendered.
     */
  choices: _propTypes.default.array.isRequired,

  /**
     * Additional classes to be added to the root element.
     */
  className: _propTypes.default.string,

  /**
     * Disables the entire field.
     */
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
     * Additional hint text to display
     */
  hint: _propTypes.default.node,

  /**
     * Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields]({{root}}/guidelines/forms/#required-and-optional-fields).
     */
  requirementLabel: _propTypes.default.node,

  /**
     * Applies the "inverse" UI theme
     */
  inversed: _propTypes.default.bool,

  /**
     * Label for the field
     */
  label: _propTypes.default.node.isRequired,

  /**
     * Additional classes to be added to the `FormLabel`.
     */
  labelClassName: _propTypes.default.string,

  /**
     * @hide-prop [Deprecated] This prop is deprecated after changing `type` to a required prop
     */
  multiple: _propTypes.default.bool,

  /**
     * The field's `name` attribute
     */
  name: _propTypes.default.string.isRequired,

  /**
     * Called anytime any choice is blurred
     */
  onBlur: _propTypes.default.func,

  /**
     * Called when any choice is blurred and the focus does not land on one
     * of the other choices inside this component (i.e., when the whole
     * component loses focus)
     */
  onComponentBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,

  /**
     * Sets the size of the checkbox or radio button
     */
  size: _propTypes.default.oneOf(['small']),

  /**
     * Sets the type to render `checkbox` fields or `radio` buttons
     */
  type: _propTypes.default.oneOf(['checkbox', 'radio']).isRequired
});

var _default = ChoiceList;
exports.default = _default;