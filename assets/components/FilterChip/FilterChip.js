"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FilterChip = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ClearIcon = require("../ClearIcon");

var _ClearIconAlternate = require("./ClearIconAlternate");

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var actionableKeys = ['Enter', 'Backspace', 'Delete'];

var FilterChip = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterChip, _React$Component);

  var _super = _createSuper(FilterChip);

  function FilterChip(props) {
    var _this;

    _classCallCheck(this, FilterChip);

    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FilterChip, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.onDelete();
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(evt) {
      if (actionableKeys.includes(evt.key)) {
        this.handleClick();
        evt.preventDefault();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          label = _this$props.label,
          ariaClearLabel = _this$props.ariaClearLabel,
          className = _this$props.className,
          useAlternateIcon = _this$props.useAlternateIcon,
          size = _this$props.size;
      var buttonClassNames = (0, _classnames.default)('ds-c-filter-chip__button', size && size === 'big' ? 'ds-c-filter-chip__button--big' : '', className);
      var iconContainerClassNames = (0, _classnames.default)('ds-c-filter-chip__clear-icon-container', useAlternateIcon ? 'ds-c-filter-chip__clear-icon-alternate-container' : '');
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
        className: buttonClassNames,
        id: id || (0, _lodash.default)("filter_"),
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "ds-c-filter-chip__label"
      }, label), /*#__PURE__*/_react.default.createElement("span", {
        className: iconContainerClassNames,
        "aria-label": ariaClearLabel
      }, useAlternateIcon ? /*#__PURE__*/_react.default.createElement(_ClearIconAlternate.ClearIconAlternate, null) : /*#__PURE__*/_react.default.createElement(_ClearIcon.ClearIcon, null))));
    }
  }]);

  return FilterChip;
}(_react.default.Component);

exports.FilterChip = FilterChip;

_defineProperty(FilterChip, "propTypes", {
  /**
     * Id for filter chip button. If not provided, a unique id will be automatically generated and used.
     */
  id: _propTypes.default.string,

  /**
     * Class to be applied to the outer `<div>` that contains filter chip button.
     */
  className: _propTypes.default.string,

  /**
     * Text for the filter chip
     */
  label: _propTypes.default.string.isRequired,

  /**
     *  For screenreaders, text to read for removal
     */
  ariaClearLabel: _propTypes.default.string.isRequired,

  /**
     * Function to call when filter chip is dismissed
     */
  onDelete: _propTypes.default.func.isRequired,

  /**
     *  Use alternate thinner close icon in place of standard
     */
  useAlternateIcon: _propTypes.default.bool,

  /**
     * Sets the size of the chip to larger version
     */
  size: _propTypes.default.oneOf(['big'])
});

var _default = FilterChip;
exports.default = _default;