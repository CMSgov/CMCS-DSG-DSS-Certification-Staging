"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DateInput = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("../TextField/TextField"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var DateInput = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(DateInput, _React$PureComponent);

  var _super = _createSuper(DateInput);

  function DateInput(props) {
    var _this;

    _classCallCheck(this, DateInput);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "monthInput", void 0);

    _defineProperty(_assertThisInitialized(_this), "dayInput", void 0);

    _defineProperty(_assertThisInitialized(_this), "yearInput", void 0);

    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DateInput, [{
    key: "formatDate",
    value: function formatDate() {
      if (this.props.dateFormatter && this.monthInput && this.dayInput && this.yearInput) {
        var values = {
          month: this.monthInput.value,
          day: this.dayInput.value,
          year: this.yearInput.value
        };
        return this.props.dateFormatter(values);
      }
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(evt) {
      if (this.props.onBlur) {
        this.props.onBlur(evt, this.formatDate());
      }

      if (this.props.onComponentBlur) {
        this.handleComponentBlur(evt);
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(evt) {
      this.props.onChange(evt, this.formatDate());
    }
  }, {
    key: "handleComponentBlur",
    value: function handleComponentBlur(evt) {
      var _this2 = this;

      // The active element is always the document body during a focus
      // transition, so in order to check if the newly focused element
      // is one of our other date inputs, we're going to have to wait
      // a bit.
      setTimeout(function () {
        if (document.activeElement !== _this2.dayInput && document.activeElement !== _this2.monthInput && document.activeElement !== _this2.yearInput) {
          _this2.props.onComponentBlur(evt, _this2.formatDate());
        }
      }, 20);
    }
  }, {
    key: "renderField",
    value: function renderField(type) {
      var _this3 = this;

      var sharedTextFieldProps = {
        className: 'ds-l-col--auto',
        labelClassName: 'ds-c-datefield__label',
        disabled: this.props.disabled,
        inversed: this.props.inversed,
        onBlur: (this.props.onBlur || this.props.onComponentBlur) && this.handleBlur,
        onChange: this.props.onChange && this.handleChange,
        numeric: true
      };
      return /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({}, sharedTextFieldProps, {
        defaultValue: this.props["".concat(type, "DefaultValue")],
        value: this.props["".concat(type, "Value")],
        label: this.props["".concat(type, "Label")],
        name: this.props["".concat(type, "Name")],
        fieldClassName: (0, _classnames.default)("ds-c-field--".concat(type), {
          'ds-c-field--error': this.props["".concat(type, "Invalid")]
        }),
        inputRef: function inputRef(el) {
          _this3["".concat(type, "Input")] = el;
          if (_this3.props["".concat(type, "FieldRef")]) _this3.props["".concat(type, "FieldRef")](el);
        },
        autoComplete: this.props.autoComplete && "bday-".concat(type),
        "aria-describedby": this.props.labelId,
        "aria-invalid": this.props["".concat(type, "Invalid")]
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "ds-l-form-row ds-u-align-items--end"
      }, this.renderField('month'), /*#__PURE__*/_react.default.createElement("span", {
        className: "ds-c-datefield__separator"
      }, "/"), this.renderField('day'), /*#__PURE__*/_react.default.createElement("span", {
        className: "ds-c-datefield__separator"
      }, "/"), this.renderField('year'));
    }
  }]);

  return DateInput;
}(_react.default.PureComponent);

exports.DateInput = DateInput;

_defineProperty(DateInput, "propTypes", {
  /**
     * Adds `autocomplete` attributes `bday-day`, `bday-month` and `bday-year` to the corresponding `<DateInput>` inputs
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
     * By default `dateFormatter` will be set to the `defaultDateFormatter` function, which prevents days/months more than 2 digits & years more than 4 digits.
     */
  dateFormatter: _propTypes.default.func,

  /**
     * Disables all three input fields.
     */
  disabled: _propTypes.default.bool,

  /**
     * Applies the "inverse" UI theme
     */
  inversed: _propTypes.default.bool,

  /**
     * A unique ID applied to the DateField label.
     */
  labelId: _propTypes.default.string.isRequired,

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
  dayLabel: _propTypes.default.node.isRequired,

  /**
     * `name` for the day `input` field
     */
  dayName: _propTypes.default.string.isRequired,

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
  monthLabel: _propTypes.default.node.isRequired,

  /**
     * `name` for the month `input` field
     */
  monthName: _propTypes.default.string.isRequired,

  /**
     * Initial value for the month `input` field. Use this for an uncontrolled
     * component; otherwise, use the `monthValue` property.
     */
  monthDefaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
     * Access a reference to the month `input`
     */
  monthFieldRef: _propTypes.default.func,

  /**
     * Apply error styling to the month `input`
     */
  monthInvalid: _propTypes.default.bool,

  /**
     * Sets the month input's `value`. Use this in combination with `onChange`
     * for a controlled component; otherwise, set `monthDefaultValue`.
     */
  monthValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
     * Initial value for the year `input` field. Use this for an uncontrolled
     * component; otherwise, use the `yearValue` property.
     */
  yearDefaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
     * Access a reference to the year `input`
     */
  yearFieldRef: _propTypes.default.func,

  /**
     * Apply error styling to the year `input`
     */
  yearInvalid: _propTypes.default.bool,

  /**
     * Label for the year `input` field
     */
  yearLabel: _propTypes.default.node.isRequired
});

var _default = DateInput;
exports.default = _default;