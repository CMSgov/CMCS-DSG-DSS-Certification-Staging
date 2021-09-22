"use strict";

require("core-js/modules/es.array.find");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.promise.finally");

require("core-js/modules/es.string.iterator");

require("core-js/modules/esnext.aggregate-error");

require("core-js/modules/esnext.promise.all-settled");

require("core-js/modules/esnext.promise.any");

require("core-js/modules/esnext.promise.try");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Tooltip = void 0;

var _CSSTransition = _interopRequireDefault(require("react-transition-group/CSSTransition"));

var _focusTrapReact = _interopRequireDefault(require("focus-trap-react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _core = require("@popperjs/core");

var _lodash = _interopRequireDefault(require("lodash.uniqueid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Tooltip = /*#__PURE__*/function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  var _super = _createSuper(Tooltip);

  function Tooltip(props) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _super.call(this, props);
    _this.id = _this.props.id || (0, _lodash.default)('trigger_');
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
      this.popper = (0, _core.createPopper)(this.triggerElement, this.tooltipElement, {
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
      var triggerClasses = (0, _classnames.default)('ds-base', 'ds-c-tooltip__trigger', className, (_classNames = {}, _defineProperty(_classNames, activeClassName, this.state.active), _defineProperty(_classNames, 'ds-c-tooltip__trigger--inverse', inversed), _classNames));
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
      return /*#__PURE__*/_react.default.createElement(TriggerComponent, _extends({
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
        return /*#__PURE__*/_react.default.createElement("div", _extends({
          id: _this5.id,
          tabIndex: dialog ? '-1' : null,
          ref: _this5.setTooltipElement,
          className: (0, _classnames.default)('ds-c-tooltip', {
            'ds-c-tooltip--inverse': inversed
          }),
          style: tooltipStyle,
          "data-placement": placement,
          "aria-hidden": !_this5.state.active,
          role: dialog ? 'dialog' : 'tooltip'
        }, eventHandlers), /*#__PURE__*/_react.default.createElement("span", {
          className: "ds-c-tooltip__arrow",
          "data-popper-arrow": true
        }), /*#__PURE__*/_react.default.createElement("div", {
          className: "ds-c-tooltip__content ds-base"
        }, title), !dialog && /*#__PURE__*/_react.default.createElement("span", {
          className: "ds-c-tooltip__interactive-border",
          style: interactiveBorderStyle
        }));
      };

      return /*#__PURE__*/_react.default.createElement(_CSSTransition.default, {
        in: this.state.active,
        classNames: "ds-c-tooltip",
        timeout: transitionDuration
      }, dialog ? /*#__PURE__*/_react.default.createElement(_focusTrapReact.default, {
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
      return /*#__PURE__*/_react.default.createElement("div", _extends({
        className: "ds-c-tooltip__container"
      }, eventHandlers), this.renderTrigger(), this.renderContent());
    }
  }]);

  return Tooltip;
}(_react.default.Component);

exports.Tooltip = Tooltip;
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
  activeClassName: _propTypes.default.string,

  /**
   * Helpful description of the tooltip for screenreaders
   */
  ariaLabel: _propTypes.default.string,

  /**
   * Tooltip trigger content
   */
  children: _propTypes.default.node.isRequired,

  /**
   * When provided, this will render the passed in component for the tooltip trigger. Typically this will be a `button`, `a`,
  or rarely an `input` element.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.elementType, _propTypes.default.func]),

  /**
   * Classes applied to the tooltip trigger
   */
  className: _propTypes.default.string,

  /**
   * Tooltip that behaves like a dialog, i.e. a tooltip that only appears on click, traps focus, and contains interactive content. For more information, see Deque's [tooltip dialog documentation](https://dequeuniversity.com/library/aria/tooltip-dialog)
   */
  dialog: _propTypes.default.bool,

  /**
   * `id` applied to tooltip body container element. If not provided, a unique id will be automatically generated and used.
   */
  id: _propTypes.default.string,

  /**
   * Sets the size of the invisible border around interactive tooltips that prevents it from immediately hiding when the cursor leaves the tooltip.
   */
  interactiveBorder: _propTypes.default.number,
  inversed: _propTypes.default.bool,

  /**
   * Applies `skidding` and `distance` offsets to the tooltip relative to the trigger. See the [`popperjs` docs](https://popper.js.org/docs/v2/modifiers/popper-offsets/) for more info.
   */
  offset: _propTypes.default.arrayOf(_propTypes.default.number),

  /**
   * Called when the tooltip is hidden
   */
  onClose: _propTypes.default.func,

  /**
   * Called when the tooltip is shown
   */
  onOpen: _propTypes.default.func,

  /**
   * Placement of the tooltip body relative to the trigger. See the [`popperjs` docs](https://popper.js.org/docs/v2/constructors/#options) for more info.
   */
  placement: _propTypes.default.oneOf(['auto', 'bottom', 'top', 'right', 'left']),

  /**
   * `maxWidth` styling applied to the tooltip body
   */
  maxWidth: _propTypes.default.string,

  /**
   * Content inside the tooltip body or popover. If this contains interactive elements use the `dialog` prop.
   */
  title: _propTypes.default.node.isRequired,

  /**
   * Duration of the `react-transition-group` CSSTransition. See the [`timeout` option](http://reactcommunity.org/react-transition-group/transition#Transition-prop-timeout) for more info.
   */
  transitionDuration: _propTypes.default.number,

  /**
   * `zIndex` styling applied to the tooltip body
   */
  zIndex: _propTypes.default.string
};
var _default = Tooltip;
exports.default = _default;