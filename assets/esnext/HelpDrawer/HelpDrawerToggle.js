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

import Button from '../Button/Button';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
/**
 * A link that triggers the visibility of a help drawer
 */

export var HelpDrawerToggle = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(HelpDrawerToggle, _React$PureComponent);

  var _super = _createSuper(HelpDrawerToggle);

  function HelpDrawerToggle() {
    _classCallCheck(this, HelpDrawerToggle);

    return _super.apply(this, arguments);
  }

  _createClass(HelpDrawerToggle, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!this.props.helpDrawerOpen && prevProps.helpDrawerOpen && this.buttonRef) {
        this.buttonRef.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          inline = _this$props.inline,
          showDrawer = _this$props.showDrawer,
          helpDrawerOpen = _this$props.helpDrawerOpen,
          others = _objectWithoutProperties(_this$props, ["className", "children", "inline", "showDrawer", "helpDrawerOpen"]);

      var classes = classNames('ds-c-help-drawer__toggle', inline && 'ds-u-display--inline', className);
      return /*#__PURE__*/React.createElement(Button, _extends({
        className: classes,
        inputRef: function inputRef(el) {
          return _this.buttonRef = el;
        },
        onClick: function onClick() {
          return showDrawer();
        },
        variation: "transparent"
      }, others), children);
    }
  }]);

  return HelpDrawerToggle;
}(React.PureComponent);
HelpDrawerToggle.propTypes = {
  /**
   * Whether or not the Help Drawer controlled by this toggle is open or closed.
   * This value is used to re-focus the toggle that opened the drawer when the drawer closes.
   */
  helpDrawerOpen: PropTypes.bool.isRequired,

  /**
   * The HelpDrawerToggle content
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional classes for the toggle button anchor element.
   */
  className: PropTypes.string,

  /**
   * Adds `display: inline` to the HelpDrawerToggle.
   */
  inline: PropTypes.bool,

  /**
   * This function is called with an id that the toggle generates.
   * It can be used in implementing the help drawer for keeping track of the drawer the toggle controls
   */
  showDrawer: PropTypes.func.isRequired
};
export default HelpDrawerToggle;