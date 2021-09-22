"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Mask = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _maskHelpers = require("./maskHelpers");

var _react = _interopRequireDefault(require("react"));

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

var maskPattern = {
  phone: '[0-9-]*',
  ssn: '[0-9-*]*',
  zip: '[0-9-]*',
  currency: '[0-9.,-]*'
};
var maskOverlayContent = {
  currency: '$'
};

var Mask = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Mask, _React$PureComponent);

  var _super = _createSuper(Mask);

  function Mask(props) {
    var _this;

    _classCallCheck(this, Mask);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "debouncedOnBlurEvent", void 0);

    var field = _this.field();

    var initialValue = field.props.value || field.props.defaultValue;
    _this.state = {
      value: (0, _maskHelpers.maskValue)(initialValue, props.mask)
    };
    return _this;
  }

  _createClass(Mask, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.debouncedOnBlurEvent) {
        this.field().props.onBlur(this.debouncedOnBlurEvent);
        this.debouncedOnBlurEvent = null;
      }

      var fieldProps = this.field().props;

      var prevField = _react.default.Children.only(prevProps.children);

      var prevFieldProps = /*#__PURE__*/_react.default.isValidElement(prevField) ? prevField.props : {};
      var isControlled = fieldProps.value !== undefined;

      if (isControlled && prevFieldProps.value !== fieldProps.value) {
        var mask = this.props.mask; // For controlled components, the value prop should ideally be changed by
        // the controlling component once we've called onChange with our updates.
        // If the change was triggered this way through user input, then the prop
        // given should match our internal state when unmasked. If what we're
        // given and what we have locally don't match, that means the controlling
        // component has made its own unrelated change, so we should update our
        // state and mask this new value.

        if ((0, _maskHelpers.unmaskValue)(fieldProps.value, mask) !== (0, _maskHelpers.unmaskValue)(this.state.value, mask)) {
          var value = (0, _maskHelpers.maskValue)(fieldProps.value || '', mask);
          this.setState({
            value: value
          }); // eslint-disable-line react/no-did-update-set-state
        }
      }
    }
  }, {
    key: "field",

    /**
     * Get the child text field. Called as a method so that
     * updates to the field cause the mask to re-render
     * @returns {React.ReactElement} Child TextField
     */
    value: function field() {
      return _react.default.Children.only(this.props.children);
    }
    /**
     * To avoid a jarring experience for screen readers, we only
     * add/remove characters after the field has been blurred,
     * rather than when the user is typing in the field
     * @param {Object} evt
     * @param {React.Element} field - Child TextField
     */

  }, {
    key: "handleBlur",
    value: function handleBlur(evt, field) {
      var value = (0, _maskHelpers.maskValue)(evt.target.value, this.props.mask); // We only debounce the onBlur when we know for sure that
      // this component will re-render (AKA when the value changes)
      // and when an onBlur callback is present

      var debounce = value !== this.state.value && typeof field.props.onBlur === 'function';

      if (debounce) {
        // We need to retain a reference to the event after the callback
        // has been called. We pass this onto the consuming app's onBlur
        // only after the value has been manipulated – this way, the
        // value returned by event.target.value is the value after masking
        evt.persist();
        this.debouncedOnBlurEvent = evt;
      }

      this.setState({
        value: value
      });

      if (!debounce && typeof field.props.onBlur === 'function') {
        // If we didn't debounce the onBlur event, then we need to
        // call the onBlur callback from here
        field.props.onBlur(evt);
      }
    }
    /**
     * @param {Object} evt
     * @param {React.Element} field - Child TextField
     */

  }, {
    key: "handleChange",
    value: function handleChange(evt, field) {
      this.setState({
        value: evt.target.value
      });

      if (typeof field.props.onChange === 'function') {
        field.props.onChange(evt);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var mask = this.props.mask;
      var field = this.field();

      var modifiedTextField = /*#__PURE__*/_react.default.cloneElement(field, {
        defaultValue: undefined,
        onBlur: function onBlur(evt) {
          return _this2.handleBlur(evt, field);
        },
        onChange: function onChange(evt) {
          return _this2.handleChange(evt, field);
        },
        value: this.state.value,
        type: 'text',
        inputMode: 'numeric',
        pattern: maskPattern[this.props.mask]
      }); // UI overlayed on top of a field to support certain masks


      var maskOverlay = maskOverlayContent[mask] ? /*#__PURE__*/_react.default.createElement("div", {
        className: "ds-c-field__before ds-c-field__before--".concat(mask)
      }, maskOverlayContent[mask]) : null;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "ds-c-field-mask ds-c-field-mask--".concat(mask)
      }, maskOverlay, modifiedTextField);
    }
  }]);

  return Mask;
}(_react.default.PureComponent);

exports.Mask = Mask;

_defineProperty(Mask, "propTypes", {
  /**
     * Must contain a `TextField` component
     */
  children: _propTypes.default.node.isRequired,
  mask: _propTypes.default.oneOf(['currency', 'phone', 'ssn', 'zip'])
});

var _default = Mask;
exports.default = _default;