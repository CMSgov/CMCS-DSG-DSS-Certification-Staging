function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

// Polyfills required for IE11 compatibility
// Features used by this app or its dependencies (i.e. @popperjs/core in Tooltip)
import 'core-js/stable/object/assign';
import 'core-js/stable/array/find';
import 'core-js/features/promise'; // TODO: Update react-transition-group once we update react peer dep

import CSSTransition from 'react-transition-group/CSSTransition';
import FocusTrap from 'focus-trap-react';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { createPopper } from '@popperjs/core';
import uniqueId from 'lodash.uniqueid';
export var Tooltip = /*#__PURE__*/function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  var _super = _createSuper(Tooltip);

  function Tooltip(props) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _super.call(this, props);
    _this.id = _this.props.id || uniqueId('trigger_');
    _this.triggerElement = null;
    _this.tooltipElement = null;

    _this.setTriggerElement = function (elem) {
      _this.triggerElement = elem;
    };

    _this.setTooltipElement = function (elem) {
      _this.tooltipElement = elem;
    };

    _this.state = {
      active: false,
      isHover: false,
      isMobile: false
    };
    return _this;
  }

  _createClass(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside.bind(this));
      document.addEventListener('keydown', this.handleEscapeKey.bind(this));
      this.popper = createPopper(this.triggerElement, this.tooltipElement, {
        placement: this.props.placement,
        modifiers: [{
          name: 'offset',
          options: {
            offset: this.props.offset
          }
        }]
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside.bind(this));
      document.removeEventListener('keydown', this.handleEscapeKey.bind(this));
      this.popper.destroy();
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      // Closes dialog and mobile tooltips when mouse clicks outside of tooltip element
      if (this.state.active && (this.props.dialog || this.state.isMobile)) {
        var clickedTrigger = this.triggerElement && this.triggerElement.contains(event.target);
        var clickedTooltip = this.tooltipElement && this.tooltipElement.contains(event.target);

        if (!clickedTooltip && !clickedTrigger) {
          this.setTooltipActive(false);
        }
      }
    }
  }, {
    key: "handleEscapeKey",
    value: function handleEscapeKey(e) {
      // Closes tooltips when ESC key is pressed
      var ESCAPE_KEY = 27;

      if (this.state.active && e.keyCode === ESCAPE_KEY) {
        this.setTooltipActive(false);
      }
    }
  }, {
    key: "setTooltipActive",
    value: function setTooltipActive(active) {
      var _this2 = this;

      if (active !== this.state.active) {
        this.setState({
          active: active
        }, function () {
          _this2.popper.forceUpdate();

          if (active) {
            _this2.props.onOpen && _this2.props.onOpen();
          } else {
            _this2.props.onClose && _this2.props.onClose();
          }
        });
      }
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      var _this3 = this;

      // Hide tooltips when blurring away from the trigger or tooltip body
      // and when the mouse is not hovering over the tooltip
      setTimeout(function () {
        var focusedInsideTrigger = _this3.triggerElement && _this3.triggerElement.contains(document.activeElement);

        var focusedInsideTooltip = _this3.tooltipElement && _this3.tooltipElement.contains(document.activeElement);

        if (!focusedInsideTrigger && !focusedInsideTooltip && !_this3.state.isHover) {
          _this3.setTooltipActive(false);
        }
      }, 10);
    }
  }, {
    key: "handleTouch",
    value: function handleTouch() {
      // On mobile, touch -> mouseenter -> click events can all be fired simultaneously
      // `isMobile` flag is used inside onClick and onMouseEnter handlers, so touch events can be used in isolation on mobile
      // https://stackoverflow.com/a/65055198
      this.setState({
        isMobile: true
      });
      this.setTooltipActive(!this.state.active);
    }
  }, {
    key: "renderTrigger",
    value: function renderTrigger() {
      var _classNames,
          _this4 = this;

      var _this$props = this.props,
          activeClassName = _this$props.activeClassName,
          ariaLabel = _this$props.ariaLabel,
          children = _this$props.children,
          className = _this$props.className,
          component = _this$props.component,
          dialog = _this$props.dialog,
          offset = _this$props.offset,
          id = _this$props.id,
          onClose = _this$props.onClose,
          onOpen = _this$props.onOpen,
          inversed = _this$props.inversed,
          interactiveBorder = _this$props.interactiveBorder,
          placement = _this$props.placement,
          maxWidth = _this$props.maxWidth,
          title = _this$props.title,
          transitionDuration = _this$props.transitionDuration,
          zIndex = _this$props.zIndex,
          others = _objectWithoutProperties(_this$props, ["activeClassName", "ariaLabel", "children", "className", "component", "dialog", "offset", "id", "onClose", "onOpen", "inversed", "interactiveBorder", "placement", "maxWidth", "title", "transitionDuration", "zIndex"]);

      var TriggerComponent = component;
      var triggerClasses = classNames('ds-base', 'ds-c-tooltip__trigger', className, (_classNames = {}, _defineProperty(_classNames, activeClassName, this.state.active), _defineProperty(_classNames, 'ds-c-tooltip__trigger--inverse', inversed), _classNames));
      var linkTriggerOverrides = {
        role: TriggerComponent === 'a' ? 'button' : undefined,
        tabIndex: TriggerComponent === 'a' ? 0 : undefined
      };
      var eventHandlers = dialog ? {
        onTouchStart: function onTouchStart() {
          return _this4.handleTouch();
        },
        onClick: function onClick() {
          if (!_this4.state.isMobile) {
            _this4.setTooltipActive(!_this4.state.active);
          }
        }
      } : {
        onTouchStart: function onTouchStart() {
          return _this4.handleTouch();
        },
        onClick: function onClick() {
          if (!_this4.state.isMobile) {
            _this4.setTooltipActive(!_this4.state.active);
          }
        },
        onFocus: function onFocus() {
          return _this4.setTooltipActive(true);
        },
        onBlur: function onBlur() {
          return _this4.handleBlur();
        }
      };
      return /*#__PURE__*/React.createElement(TriggerComponent, _extends({
        type: TriggerComponent === 'button' ? 'button' : undefined,
        "aria-label": ariaLabel || undefined,
        "aria-describedby": dialog ? undefined : this.id,
        className: triggerClasses,
        ref: this.setTriggerElement
      }, others, linkTriggerOverrides, eventHandlers), children);
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this5 = this;

      var _this$props2 = this.props,
          dialog = _this$props2.dialog,
          inversed = _this$props2.inversed,
          interactiveBorder = _this$props2.interactiveBorder,
          placement = _this$props2.placement,
          maxWidth = _this$props2.maxWidth,
          title = _this$props2.title,
          transitionDuration = _this$props2.transitionDuration,
          zIndex = _this$props2.zIndex;
      var tooltipStyle = {
        maxWidth: maxWidth,
        zIndex: zIndex
      };
      var interactiveBorderStyle = {
        left: "-".concat(interactiveBorder, "px"),
        top: "-".concat(interactiveBorder, "px"),
        border: "".concat(interactiveBorder, "px solid transparent"),
        zIndex: '-999' // ensures interactive border doesnt cover tooltip content

      };
      var eventHandlers = dialog ? {} : {
        onBlur: function onBlur() {
          return _this5.handleBlur();
        }
      };

      var tooltipContent = function tooltipContent() {
        return /*#__PURE__*/React.createElement("div", _extends({
          id: _this5.id,
          tabIndex: dialog ? '-1' : null,
          ref: _this5.setTooltipElement,
          className: classNames('ds-c-tooltip', {
            'ds-c-tooltip--inverse': inversed
          }),
          style: tooltipStyle,
          "data-placement": placement,
          "aria-hidden": !_this5.state.active,
          role: dialog ? 'dialog' : 'tooltip'
        }, eventHandlers), /*#__PURE__*/React.createElement("span", {
          className: "ds-c-tooltip__arrow",
          "data-popper-arrow": true
        }), /*#__PURE__*/React.createElement("div", {
          className: "ds-c-tooltip__content ds-base"
        }, title), !dialog && /*#__PURE__*/React.createElement("span", {
          className: "ds-c-tooltip__interactive-border",
          style: interactiveBorderStyle
        }));
      };

      return /*#__PURE__*/React.createElement(CSSTransition, {
        in: this.state.active,
        classNames: "ds-c-tooltip",
        timeout: transitionDuration
      }, dialog ? /*#__PURE__*/React.createElement(FocusTrap, {
        active: this.state.active,
        focusTrapOptions: {
          // Set initialFocus to the tooltip container element in case it contains no focusable elements
          initialFocus: "#".concat(this.id),
          clickOutsideDeactivates: true
        }
      }, tooltipContent()) : tooltipContent());
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var eventHandlers = this.props.dialog ? {} : {
        onMouseEnter: function onMouseEnter() {
          if (!_this6.state.isMobile) {
            _this6.setState({
              isHover: true
            });

            _this6.setTooltipActive(true);
          }
        },
        onMouseLeave: function onMouseLeave() {
          if (!_this6.state.isMobile) {
            _this6.setState({
              isHover: false
            });

            _this6.setTooltipActive(false);
          }
        }
      };
      return /*#__PURE__*/React.createElement("div", _extends({
        className: "ds-c-tooltip__container"
      }, eventHandlers), this.renderTrigger(), this.renderContent());
    }
  }]);

  return Tooltip;
}(React.Component);
Tooltip.defaultProps = {
  component: 'button',
  interactiveBorder: 15,
  maxWidth: '300px',
  offset: [0, 5],
  placement: 'top',
  transitionDuration: 250,
  // Equivalent to $animation-speed-1
  zIndex: '9999'
};
Tooltip.propTypes = {
  /**
   * Classes applied to the tooltip trigger when the tooltip is active
   */
  activeClassName: PropTypes.string,

  /**
   * Helpful description of the tooltip for screenreaders
   */
  ariaLabel: PropTypes.string,

  /**
   * Tooltip trigger content
   */
  children: PropTypes.node.isRequired,

  /**
   * When provided, this will render the passed in component for the tooltip trigger. Typically this will be a `button`, `a`,
  or rarely an `input` element.
   */
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType, PropTypes.func]),

  /**
   * Classes applied to the tooltip trigger
   */
  className: PropTypes.string,

  /**
   * Tooltip that behaves like a dialog, i.e. a tooltip that only appears on click, traps focus, and contains interactive content. For more information, see Deque's [tooltip dialog documentation](https://dequeuniversity.com/library/aria/tooltip-dialog)
   */
  dialog: PropTypes.bool,

  /**
   * `id` applied to tooltip body container element. If not provided, a unique id will be automatically generated and used.
   */
  id: PropTypes.string,

  /**
   * Sets the size of the invisible border around interactive tooltips that prevents it from immediately hiding when the cursor leaves the tooltip.
   */
  interactiveBorder: PropTypes.number,
  inversed: PropTypes.bool,

  /**
   * Applies `skidding` and `distance` offsets to the tooltip relative to the trigger. See the [`popperjs` docs](https://popper.js.org/docs/v2/modifiers/popper-offsets/) for more info.
   */
  offset: PropTypes.arrayOf(PropTypes.number),

  /**
   * Called when the tooltip is hidden
   */
  onClose: PropTypes.func,

  /**
   * Called when the tooltip is shown
   */
  onOpen: PropTypes.func,

  /**
   * Placement of the tooltip body relative to the trigger. See the [`popperjs` docs](https://popper.js.org/docs/v2/constructors/#options) for more info.
   */
  placement: PropTypes.oneOf(['auto', 'bottom', 'top', 'right', 'left']),

  /**
   * `maxWidth` styling applied to the tooltip body
   */
  maxWidth: PropTypes.string,

  /**
   * Content inside the tooltip body or popover. If this contains interactive elements use the `dialog` prop.
   */
  title: PropTypes.node.isRequired,

  /**
   * Duration of the `react-transition-group` CSSTransition. See the [`timeout` option](http://reactcommunity.org/react-transition-group/transition#Transition-prop-timeout) for more info.
   */
  transitionDuration: PropTypes.number,

  /**
   * `zIndex` styling applied to the tooltip body
   */
  zIndex: PropTypes.string
};
export default Tooltip;