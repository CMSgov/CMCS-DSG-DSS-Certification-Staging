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

import { EVENT_CATEGORY, MAX_LENGTH, sendAnalyticsEvent } from '../analytics/SendAnalytics'; // import PropTypes from 'prop-types';

import React from 'react';
import { alertSendsAnalytics } from '../flags';
import classNames from 'classnames';
import get from 'lodash/get';
import uniqueId from 'lodash.uniqueid';
/* eslint-disable camelcase */
// disable linting since prop names must be in snake case for integration with Blast

// Default analytics object
var defaultAnalytics = function defaultAnalytics() {
  var heading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var variation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return {
    onComponentDidMount: {
      event_name: 'alert_impression',
      event_type: EVENT_CATEGORY.uiInteraction,
      ga_eventAction: 'alert impression',
      ga_eventCategory: EVENT_CATEGORY.uiComponents,
      ga_eventLabel: heading,
      heading: heading,
      type: variation
    }
  };
};

export var Alert = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Alert, _React$PureComponent);

  var _super = _createSuper(Alert);

  function Alert(props) {
    var _this;

    _classCallCheck(this, Alert);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "alertTextRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "focusRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "headingId", void 0);

    _defineProperty(_assertThisInitialized(_this), "eventHeadingText", void 0);

    _this.alertTextRef = null;
    _this.focusRef = null;
    _this.headingId = _this.props.headingId || uniqueId('alert_');
    _this.eventHeadingText = '';

    if (process.env.NODE_ENV !== 'production') {
      if (!props.heading && !props.children) {
        console.warn("Empty <Alert> components are not allowed, please use the 'heading' prop or include children.");
      }
    }

    return _this;
  }

  _createClass(Alert, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Automatically set focus on alert element when `autoFocus` prop is used
      if (this.props.autoFocus && this.focusRef) {
        this.focusRef.focus();
      }

      if (alertSendsAnalytics()) {
        var eventAction = 'onComponentDidMount';
        var eventHeading = this.props.heading || this.props.children;
        /* Send analytics event for `error`, `warn`, `success` alert variations */

        if (this.props.variation) {
          if (typeof eventHeading === 'string') {
            this.eventHeadingText = eventHeading.substring(0, MAX_LENGTH);
          } else {
            var eventHeadingTextElement = this.alertTextRef && this.alertTextRef.getElementsByClassName('ds-c-alert__heading')[0] || this.alertTextRef && this.alertTextRef.getElementsByClassName('ds-c-alert__body')[0];
            this.eventHeadingText = eventHeadingTextElement && eventHeadingTextElement.textContent ? eventHeadingTextElement.textContent.substring(0, MAX_LENGTH) : '';
          }

          sendAnalyticsEvent(get(this.props.analytics, eventAction), get(defaultAnalytics(this.eventHeadingText, this.props.variation), eventAction));
        }
      }
    } // Alert class properties

  }, {
    key: "heading",
    value: function heading() {
      var _this$props = this.props,
          _this$props$headingLe = _this$props.headingLevel,
          headingLevel = _this$props$headingLe === void 0 ? '2' : _this$props$headingLe,
          heading = _this$props.heading;
      var Heading = "h".concat(headingLevel);

      if (heading) {
        var headingProps = {
          className: 'ds-c-alert__heading',
          id: this.headingId
        };
        return /*#__PURE__*/React.createElement(Heading, headingProps, heading);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          autoFocus = _this$props2.autoFocus,
          heading = _this$props2.heading,
          headingId = _this$props2.headingId,
          headingLevel = _this$props2.headingLevel,
          hideIcon = _this$props2.hideIcon,
          alertRef = _this$props2.alertRef,
          _this$props2$role = _this$props2.role,
          role = _this$props2$role === void 0 ? 'region' : _this$props2$role,
          variation = _this$props2.variation,
          analytics = _this$props2.analytics,
          alertProps = _objectWithoutProperties(_this$props2, ["children", "className", "autoFocus", "heading", "headingId", "headingLevel", "hideIcon", "alertRef", "role", "variation", "analytics"]);

      var classes = classNames('ds-c-alert', hideIcon && 'ds-c-alert--hide-icon', variation && "ds-c-alert--".concat(variation), className);
      return /*#__PURE__*/React.createElement("div", _extends({
        className: classes
        /* eslint-disable no-return-assign */
        ,
        ref: function ref(_ref) {
          _this2.alertTextRef = _ref;

          if (autoFocus) {
            _this2.focusRef = _ref;
          } else if (alertRef) {
            alertRef(_ref);
          }
        }
        /* eslint-enable no-return-assign */
        ,
        tabIndex: alertRef || autoFocus ? -1 : null,
        role: role,
        "aria-labelledby": heading ? this.headingId : undefined
      }, alertProps), /*#__PURE__*/React.createElement("div", {
        className: "ds-c-alert__body"
      }, this.heading(), children));
    }
  }]);

  return Alert;
}(React.PureComponent);

_defineProperty(Alert, "propTypes", {
  /**
     * Access a reference to the `alert` `div` element
     */
  alertRef: _pt.func,

  /**
     * Analytics events tracking is enabled by default.
     * The `analytics` prop is an object of events that is either a nested `objects` with key-value
     * pairs, or `boolean` for disabling the event tracking. To disable an event tracking, set the
     * event object value to `false`.
     * When an event is triggered, the object value is populated and sent to google analytics
     * if `window.utag` instance is loaded.
     */
  analytics: _pt.shape({
    onComponentDidMount: _pt.oneOfType([_pt.bool, _pt.shape({
      event_name: _pt.string,
      event_type: _pt.string,
      ga_eventAction: _pt.string,
      ga_eventCategory: _pt.string,
      ga_eventLabel: _pt.string,
      ga_eventType: _pt.string,
      ga_eventValue: _pt.string,
      heading: _pt.string,
      type: _pt.string
    })])
  }),

  /**
     * Sets the focus on Alert during the first mount
     */
  autoFocus: _pt.bool,

  /**
     * The alert's body content
     */
  children: _pt.node,
  className: _pt.string,

  /**
     * Text for the alert heading
     */
  heading: _pt.string,

  /**
     * Optional id used to link the `aria-labelledby` attribute to the heading. If not provided, a unique id will be automatically generated and used.
     */
  headingId: _pt.string,

  /**
     * Heading type to override default `<h2>`.
     */
  headingLevel: _pt.oneOf(['1', '2', '3', '4', '5', '6']),

  /**
     * Boolean to hide the `Alert` icon
     */
  hideIcon: _pt.bool,

  /**
     * ARIA `role`, defaults to 'region'
     */
  role: _pt.oneOf(['alert', 'alertdialog', 'region', 'status']),

  /**
     * A string corresponding to the `Alert` variation classes (`error`, `warn`, `success`)
     */
  variation: _pt.oneOf(['error', 'warn', 'success'])
});

export default Alert;