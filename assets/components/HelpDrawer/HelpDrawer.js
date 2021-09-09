"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HelpDrawer = void 0;

var _SendAnalytics = require("../analytics/SendAnalytics");

var _Button = _interopRequireDefault(require("../Button/Button"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _get = _interopRequireDefault(require("lodash/get"));

var _flags = require("../flags");

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

// Default analytics object
var defaultAnalytics = function defaultAnalytics() {
  var heading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    onComponentDidMount: {
      event_name: 'help_drawer_opened',
      event_type: _SendAnalytics.EVENT_CATEGORY.uiInteraction,
      ga_eventAction: 'opened help drawer',
      ga_eventCategory: _SendAnalytics.EVENT_CATEGORY.uiComponents,
      ga_eventLabel: heading,
      heading: heading
    },
    onComponentWillUnmount: {
      event_name: 'help_drawer_closed',
      event_type: _SendAnalytics.EVENT_CATEGORY.uiInteraction,
      ga_eventAction: 'closed help drawer',
      ga_eventCategory: _SendAnalytics.EVENT_CATEGORY.uiComponents,
      ga_eventLabel: heading,
      heading: heading
    }
  };
};

var HelpDrawer = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(HelpDrawer, _React$PureComponent);

  var _super = _createSuper(HelpDrawer);

  function HelpDrawer(props) {
    var _this;

    _classCallCheck(this, HelpDrawer);

    _this = _super.call(this, props);
    _this.headingRef = null;
    _this.eventHeadingText = '';

    if (process.env.NODE_ENV !== 'production') {
      if (props.title) {
        console.warn("[Deprecated]: Please remove the 'title' prop in <HelpDrawer>, use 'heading' instead. This prop has been renamed and will be removed in a future release.");
      }

      if (!props.title && !props.heading) {
        console.warn("The 'heading' prop in <HelpDrawer> is required. The 'title' prop has been renamed to 'heading' and will be removed in a future release.");
      }
    }

    return _this;
  }

  _createClass(HelpDrawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.headingRef) this.headingRef.focus();

      if ((0, _flags.helpDrawerSendsAnalytics)()) {
        var eventAction = 'onComponentDidMount';
        var eventHeading = this.props.title || this.props.heading;

        if (typeof eventHeading === 'string') {
          this.eventHeadingText = eventHeading.substring(0, _SendAnalytics.MAX_LENGTH);
        } else {
          this.eventHeadingText = this.headingRef && this.headingRef.textContent ? this.headingRef.textContent.substring(0, _SendAnalytics.MAX_LENGTH) : '';
        }
        /* Send analytics event for helpdrawer open */


        (0, _SendAnalytics.sendAnalyticsEvent)((0, _get.default)(this.props.analytics, eventAction), (0, _get.default)(defaultAnalytics(this.eventHeadingText), eventAction));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if ((0, _flags.helpDrawerSendsAnalytics)()) {
        var eventAction = 'onComponentWillUnmount';
        /* Send analytics event for helpdrawer close */

        (0, _SendAnalytics.sendAnalyticsEvent)((0, _get.default)(this.props.analytics, eventAction), (0, _get.default)(defaultAnalytics(this.eventHeadingText), eventAction));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          ariaLabel = _this$props.ariaLabel,
          className = _this$props.className,
          closeButtonText = _this$props.closeButtonText,
          children = _this$props.children,
          footerBody = _this$props.footerBody,
          footerTitle = _this$props.footerTitle,
          heading = _this$props.heading,
          onCloseClick = _this$props.onCloseClick,
          title = _this$props.title;
      var Heading = "h".concat(this.props.headingLevel) || "h3";
      /* eslint-disable jsx-a11y/no-noninteractive-tabindex, react/no-danger */

      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)(className, 'ds-c-help-drawer')
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ds-c-help-drawer__header"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ds-u-fill--gray-lightest ds-u-padding--2 ds-u-display--flex ds-u-align-items--start"
      }, /*#__PURE__*/_react.default.createElement(Heading, {
        ref: function ref(el) {
          return _this2.headingRef = el;
        },
        tabIndex: "0",
        className: "ds-u-text--lead ds-u-margin-y--0 ds-u-margin-right--2"
      }, // TODO: make heading required after removing title
      title || heading), /*#__PURE__*/_react.default.createElement(_Button.default, {
        "aria-label": ariaLabel,
        className: "ds-u-margin-left--auto ds-c-help-drawer__close-button",
        size: "small",
        onClick: onCloseClick
      }, closeButtonText))), /*#__PURE__*/_react.default.createElement("div", {
        className: "ds-c-help-drawer__body"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ds-c-help-drawer__content ds-u-md-font-size--small ds-u-lg-font-size--base ds-u-padding--2"
      }, children), /*#__PURE__*/_react.default.createElement("div", {
        className: "ds-c-help-drawer__footer ds-u-fill--primary-alt-lightest ds-u-md-font-size--small ds-u-lg-font-size--base ds-u-padding--2"
      }, /*#__PURE__*/_react.default.createElement("h4", {
        className: "ds-text ds-u-margin--0"
      }, footerTitle), /*#__PURE__*/_react.default.createElement("div", {
        className: "ds-text ds-u-margin--0"
      }, footerBody))));
    }
  }]);

  return HelpDrawer;
}(_react.default.PureComponent);

exports.HelpDrawer = HelpDrawer;
HelpDrawer.defaultProps = {
  ariaLabel: 'Close help drawer',
  closeButtonText: 'Close',
  headingLevel: '3'
};
/**
 * Defines the shape of an analytics event for tracking that is an object with key-value pairs
 */

var AnalyticsEventShape = _propTypes.default.shape({
  event_name: _propTypes.default.string,
  event_type: _propTypes.default.string,
  ga_eventAction: _propTypes.default.string,
  ga_eventCategory: _propTypes.default.string,
  ga_eventLabel: _propTypes.default.string,
  ga_eventType: _propTypes.default.string,
  ga_eventValue: _propTypes.default.string,
  heading: _propTypes.default.string
}); // TODO: closeButtonText, title/heading should be a string, but it is being used as a node in MCT,
// until we provide a better solution for customization, we type it as a node.


HelpDrawer.propTypes = {
  /**
   * Analytics events tracking is enabled by default.
   * The `analytics` prop is an object of events that is either a nested `objects` with key-value
   * pairs, or `boolean` for disabling the event tracking. To disable an event tracking, set the
   * event object value to `false`.
   * When an event is triggered, the object value is populated and sent to google analytics
   * if `window.utag` instance is loaded.
   */
  analytics: _propTypes.default.shape({
    onComponentDidMount: _propTypes.default.oneOfType([_propTypes.default.bool, AnalyticsEventShape]),
    onComponentWillUnmount: _propTypes.default.oneOfType([_propTypes.default.bool, AnalyticsEventShape])
  }),

  /**
   * Helps give more context to screen readers on the button that closes the Help Drawer
   */
  ariaLabel: _propTypes.default.string,
  closeButtonText: _propTypes.default.node,
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  footerBody: _propTypes.default.node,
  footerTitle: _propTypes.default.string,

  /**
   * Text for the HelpDrawer title. Required because the `heading` will be focused on mount.
   */
  heading: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),

  /**
   * Heading type to override default `<h3>`
   */
  headingLevel: _propTypes.default.oneOf(['1', '2', '3', '4', '5']),
  onCloseClick: _propTypes.default.func.isRequired,

  /**
   * @hide-prop [Deprecated] This prop has been renamed to `heading`.
   */
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node])
};
var _default = HelpDrawer;
exports.default = _default;