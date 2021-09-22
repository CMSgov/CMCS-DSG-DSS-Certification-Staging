"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Tab = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

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

var Tab = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Tab, _React$PureComponent);

  var _super = _createSuper(Tab);

  function Tab(props) {
    var _this;

    _classCallCheck(this, Tab);

    _this = _super.call(this, props);
    _this.focus = _this.focus.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.href = _this.props.href || "#".concat(_this.props.panelId);
    return _this;
  }

  _createClass(Tab, [{
    key: "handleClick",
    value: function handleClick(evt) {
      if (this.props.onClick) {
        this.props.onClick(evt, this.props.panelId, this.props.id, this.href);
      }
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(evt) {
      if (this.props.onKeyDown) {
        this.props.onKeyDown(evt, this.props.panelId, this.props.id, this.href);
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this.tab.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = (0, _classnames.default)('ds-c-tabs__item', this.props.className);
      var sharedTabProps = {
        role: 'tab',
        className: classes,
        id: this.props.id,
        ref: function ref(tab) {
          _this2.tab = tab;
        }
      };

      if (!this.props.disabled) {
        return (
          /*#__PURE__*/
          // eslint-disable-next-line jsx-a11y/role-supports-aria-props
          _react.default.createElement("a", _extends({
            "aria-selected": String(this.props.selected),
            "aria-controls": this.props.panelId,
            href: this.href,
            onClick: this.handleClick,
            onKeyDown: this.handleKeyDown
          }, sharedTabProps), this.props.children)
        );
      } else {
        return /*#__PURE__*/_react.default.createElement("span", _extends({
          "aria-disabled": "true"
        }, sharedTabProps), this.props.children);
      }
    }
  }]);

  return Tab;
}(_react.default.PureComponent);

exports.Tab = Tab;
Tab.defaultProps = {
  selected: false
};
Tab.propTypes = {
  /**
   * Tab label text or HTML.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired,

  /**
   * Additional classes to be added to the root tab element.
   */
  className: _propTypes.default.string,

  /**
   * A unique `id`, to be used on the rendered tab element.
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Sets the `href` attribute used for the tab. This can be useful if you want
   * to use relative links rather than a URL hash (the default).
   */
  href: _propTypes.default.string,

  /**
   * Called when the tab is clicked, with the following arguments:
   * [`SyntheticEvent`](https://facebook.github.io/react/docs/events.html),
   * `panelId`, `id`, `href`
   */
  onClick: _propTypes.default.func,

  /**
   * Called when the tab is selected and a keydown event is triggered.
   * Called with the following arguments:
   * [`SyntheticEvent`](https://facebook.github.io/react/docs/events.html),
   * `panelId`, `id`, `href`
   */
  onKeyDown: _propTypes.default.func,

  /**
   * The `id` of the associated `TabPanel`. Used for the `aria-controls` attribute.
   */
  panelId: _propTypes.default.string.isRequired,
  selected: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
var _default = Tab;
exports.default = _default;