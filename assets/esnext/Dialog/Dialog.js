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

import { EVENT_CATEGORY, MAX_LENGTH, sendAnalyticsEvent } from '../analytics/SendAnalytics';
import AriaModal from 'react-aria-modal';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { dialogSendsAnalytics } from '../flags';
import get from 'lodash/get'; // Default analytics object

var defaultAnalytics = function defaultAnalytics() {
  var heading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    onComponentDidMount: {
      event_name: 'modal_impression',
      event_type: EVENT_CATEGORY.uiInteraction,
      ga_eventAction: 'modal impression',
      ga_eventCategory: EVENT_CATEGORY.uiComponents,
      ga_eventLabel: heading,
      heading: heading
    },
    onComponentWillUnmount: {
      event_name: 'modal_closed',
      event_type: EVENT_CATEGORY.uiInteraction,
      ga_eventAction: 'closed modal',
      ga_eventCategory: EVENT_CATEGORY.uiComponents,
      ga_eventLabel: heading,
      heading: heading
    }
  };
};

export var Dialog = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Dialog, _React$PureComponent);

  var _super = _createSuper(Dialog);

  function Dialog(props) {
    var _this;

    _classCallCheck(this, Dialog);

    _this = _super.call(this, props);
    _this.headingRef = null;
    _this.eventHeadingText = '';

    if (process.env.NODE_ENV !== 'production') {
      if (props.title) {
        console.warn("[Deprecated]: Please remove the 'title' prop in <Dialog>, use 'heading' instead. This prop has been renamed and will be removed in a future release.");
      }

      if (props.escapeExitDisabled) {
        console.warn("[Deprecated]: Please remove the 'escapeExitDisabled' prop in <Dialog>, use 'escapeExits' instead. This prop has been renamed and will be removed in a future release.");
      }

      if (props.closeText) {
        console.warn("[Deprecated]: Please remove the 'closeText' prop in <Dialog>, use 'closeButtonText' instead. This prop has been renamed and will be removed in a future release.");
      }
    }

    return _this;
  }

  _createClass(Dialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (dialogSendsAnalytics()) {
        var eventAction = 'onComponentDidMount';
        var eventHeading = this.props.title || this.props.heading;

        if (typeof eventHeading === 'string') {
          this.eventHeadingText = eventHeading.substring(0, MAX_LENGTH);
        } else {
          this.eventHeadingText = this.headingRef && this.headingRef.textContent ? this.headingRef.textContent.substring(0, MAX_LENGTH) : '';
        }
        /* Send analytics event for dialog open */


        sendAnalyticsEvent(get(this.props.analytics, eventAction), get(defaultAnalytics(this.eventHeadingText), eventAction));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (dialogSendsAnalytics()) {
        var eventAction = 'onComponentWillUnmount';
        /* Send analytics event for dialog close */

        sendAnalyticsEvent(get(this.props.analytics, eventAction), get(defaultAnalytics(this.eventHeadingText), eventAction));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          actions = _this$props.actions,
          actionsClassName = _this$props.actionsClassName,
          analytics = _this$props.analytics,
          ariaCloseLabel = _this$props.ariaCloseLabel,
          children = _this$props.children,
          className = _this$props.className,
          closeButtonSize = _this$props.closeButtonSize,
          closeButtonText = _this$props.closeButtonText,
          closeButtonVariation = _this$props.closeButtonVariation,
          closeText = _this$props.closeText,
          escapeExits = _this$props.escapeExits,
          escapeExitDisabled = _this$props.escapeExitDisabled,
          headerClassName = _this$props.headerClassName,
          heading = _this$props.heading,
          onExit = _this$props.onExit,
          size = _this$props.size,
          title = _this$props.title,
          modalProps = _objectWithoutProperties(_this$props, ["actions", "actionsClassName", "analytics", "ariaCloseLabel", "children", "className", "closeButtonSize", "closeButtonText", "closeButtonVariation", "closeText", "escapeExits", "escapeExitDisabled", "headerClassName", "heading", "onExit", "size", "title"]);

      var dialogClassNames = classNames('ds-c-dialog', 'ds-base', className, size && "ds-c-dialog--".concat(size));
      var headerClassNames = classNames('ds-c-dialog__header', headerClassName);
      var actionsClassNames = classNames('ds-c-dialog__actions', actionsClassName); // TODO: remove after deprecating 'escapeExitDiabled' prop

      var escapeExitsProp = escapeExitDisabled ? !escapeExitDisabled : escapeExits;
      /* eslint-disable jsx-a11y/no-redundant-roles */

      return /*#__PURE__*/React.createElement(AriaModal, _extends({
        dialogClass: dialogClassNames // TODO: remove 'escapeExits' after deprecating 'escapeExitDiabled' prop so that 'escapeExits' will pass via the 'modalProps' spread operator
        ,
        escapeExits: escapeExitsProp,
        focusDialog: true,
        includeDefaultStyles: false,
        onExit: onExit,
        titleId: "dialog-title dialog-content",
        underlayClass: "ds-c-dialog-wrap"
      }, modalProps), /*#__PURE__*/React.createElement("div", {
        role: "document"
      }, /*#__PURE__*/React.createElement("header", {
        ref: function ref(_ref) {
          return _this2.headingRef = _ref;
        },
        className: headerClassNames,
        role: "banner"
      }, // TODO: make heading required after removing title
      (title || heading) && /*#__PURE__*/React.createElement("h1", {
        className: "ds-h2",
        id: "dialog-title"
      }, heading), /*#__PURE__*/React.createElement(Button, {
        "aria-label": ariaCloseLabel,
        className: "ds-c-dialog__close",
        onClick: onExit,
        size: closeButtonSize,
        variation: closeButtonVariation
      }, // TODO: remove closeText support once fully deprecated
      closeText || closeButtonText)), /*#__PURE__*/React.createElement("main", {
        role: "main"
      }, /*#__PURE__*/React.createElement("div", {
        id: "dialog-content"
      }, children)), actions && /*#__PURE__*/React.createElement("aside", {
        className: actionsClassNames,
        role: "complementary"
      }, actions)));
      /* eslint-enable jsx-a11y/no-redundant-roles */
    }
  }]);

  return Dialog;
}(React.PureComponent);
Dialog.defaultProps = {
  ariaCloseLabel: 'Close modal dialog',
  closeButtonText: 'Close',
  closeButtonVariation: 'transparent',
  escapeExits: true,
  escapeExitDisabled: false,
  underlayClickExits: false
};
/**
 * Defines the shape of an analytics event for tracking that is an object with key-value pairs
 */

var AnalyticsEventShape = PropTypes.shape({
  event_name: PropTypes.string,
  event_type: PropTypes.string,
  ga_eventAction: PropTypes.string,
  ga_eventCategory: PropTypes.string,
  ga_eventLabel: PropTypes.string,
  ga_eventType: PropTypes.string,
  ga_eventValue: PropTypes.string,
  heading: PropTypes.string
}); // TODO: closeButtonText should be a string, but it is being used as a node in MCT,
// until we provide a better solution for customization, we type it as a node.

Dialog.propTypes = {
  /**
   * If `true`, the modal will receive a role of `alertdialog`, instead of its
   * default `dialog`. The `alertdialog` role should only be used when an
   * alert, error, or warning occurs.
   */
  alert: PropTypes.bool,

  /**
   * Analytics events tracking is enabled by default.
   * The `analytics` prop is an object of events that is either a nested `objects` with key-value
   * pairs, or `boolean` for disabling the event tracking. To disable an event tracking, set the
   * event object value to `false`.
   * When an event is triggered, the object value is populated and sent to google analytics
   * if `window.utag` instance is loaded.
   */
  analytics: PropTypes.shape({
    onComponentDidMount: PropTypes.oneOfType([PropTypes.bool, AnalyticsEventShape]),
    onComponentWillUnmount: PropTypes.oneOfType([PropTypes.bool, AnalyticsEventShape])
  }),

  /**
   * Provide a **DOM node** which contains your page's content (which the modal should render
   * outside of). When the modal is open this node will receive `aria-hidden="true"`.
   * This can help screen readers understand what's going on.
   * Also see `getApplicationNode`.
   */
  applicationNode: function applicationNode(props, propName, componentName) {
    if (props[propName] && props[propName] instanceof Element === false) {
      return new Error("Invalid prop `".concat(propName, "` supplied to `").concat(componentName, "`. Expected a DOM node. You may also be interested in the getApplicationNode prop"));
    }
  },

  /**
   * Buttons or other HTML to be rendered in the "actions" bar
   * at the bottom of the dialog.
   */
  actions: PropTypes.node,

  /**
   * Additional classes to be added to the actions container.
   */
  actionsClassName: PropTypes.string,

  /**
   * Aria label for the close button
   */
  ariaCloseLabel: PropTypes.string,

  /**
   * The modal's body content
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional classes to be added to the root dialog element.
   */
  className: PropTypes.string,

  /**
   * Size of the close button. See [Button component]({{root}}/components/button/#components.button.react)
   */
  closeButtonSize: PropTypes.oneOf(['small', 'big']),

  /**
   * For internationalization purposes, the text for the "Close" button must be
   * passed in as a prop.
   */
  closeButtonText: PropTypes.node,

  /**
   * Variation string to be applied to close button component. See [Button component]({{root}}/components/button/#components.button.react)
   */
  closeButtonVariation: PropTypes.string,

  /**
   * @hide-prop [Deprecated] This prop has been renamed to `closeButtonText`.
   * @hide-prop The text for the "Close" button
   */
  closeText: PropTypes.node,

  /**
   * Enable exiting the dialog when a user presses the Escape key.
   * [Read more on react-aria-modal docs.](https://github.com/davidtheclark/react-aria-modal#escapeexits)
   */
  escapeExits: PropTypes.bool,

  /**
   * @hide-prop [Deprecated] This prop has been renamed to `escapeExits`.
   * @hide-prop Disable exiting the dialog when a user presses the Escape key.
   */
  escapeExitDisabled: PropTypes.bool,

  /**
   * Same as `applicationNode`, but a function that returns the node instead of
   * the node itself. The function will not be called until after the component
   * mounts, so it's safe to use browser globals and refer to DOM nodes within
   * it (e.g. `document.getElementById(..)`)
   */
  getApplicationNode: PropTypes.func,

  /**
   * Additional classes to be added to the header, which wraps the heading and
   * close button.
   */
  headerClassName: PropTypes.string,

  /**
   * The Dialog's heading, to be rendered in the header alongside the close button.
   */
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Set focus to a specific element that should receive initial focus (if `focusDialog={false}`).
   * [Read more on react-aria-modal docs.](https://github.com/davidtheclark/react-aria-modal#initialfocus)
   */
  initialFocus: PropTypes.string,

  /**
   * A method to handle the state change of exiting (or deactivating)
   * the modal. It will be invoked when the user presses Escape, or clicks outside
   * the dialog (if `underlayClickExits=true`).
   */
  onExit: PropTypes.func,
  size: PropTypes.oneOf(['narrow', 'wide', 'full']),

  /**
   * @hide-prop [Deprecated] This prop has been renamed to `heading`.
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Enable exiting the dialog when a user clicks the underlay.
   * [Read more on react-aria-modal docs.](https://github.com/davidtheclark/react-aria-modal#underlayclickexits)
   */
  underlayClickExits: PropTypes.bool
};
export default Dialog;