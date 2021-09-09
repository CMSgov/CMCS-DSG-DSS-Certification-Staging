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

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
var DEFAULT_COMPONENT_TYPE = 'div';
export var VerticalNavItemLabel = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(VerticalNavItemLabel, _React$PureComponent);

  var _super = _createSuper(VerticalNavItemLabel);

  function VerticalNavItemLabel(props) {
    var _this;

    _classCallCheck(this, VerticalNavItemLabel);

    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.LabelComponent = _this.componentType();
    return _this;
  }
  /**
   * The type of element rendered ultimately depends on whether
   * this is meant to be a subnav toggle, link, or generic label
   * @return {String} The type of HTML tag
   */


  _createClass(VerticalNavItemLabel, [{
    key: "componentType",
    value: function componentType() {
      if (this.props.hasSubnav) {
        return 'button';
      } else if (this.props.component) {
        return this.props.component;
      } else if (this.props.url) {
        return 'a';
      }

      return DEFAULT_COMPONENT_TYPE;
    }
  }, {
    key: "handleClick",
    value: function handleClick(evt) {
      this.props.onClick(evt);
    }
  }, {
    key: "anchorProps",
    value: function anchorProps() {
      return {
        href: this.props.url
      };
    }
  }, {
    key: "buttonProps",
    value: function buttonProps() {
      return {
        'aria-controls': this.props.subnavId,
        'aria-expanded': !this.props.collapsed,
        title: this.props.collapsed ? this.props.ariaCollapsedStateButtonLabel : this.props.ariaExpandedStateButtonLabel
      };
    }
  }, {
    key: "render",
    value: function render() {
      var props = {
        className: classNames('ds-c-vertical-nav__label', {
          'ds-c-vertical-nav__label--current': this.props.selected,
          'ds-c-vertical-nav__label--parent': this.props.hasSubnav
        }),
        onClick: this.props.onClick ? this.handleClick : undefined
      };

      if (this.LabelComponent === 'button') {
        props = _extends(props, this.buttonProps());
      } else if (this.LabelComponent !== DEFAULT_COMPONENT_TYPE) {
        // Apply href if <a> or custom component type
        props = _extends(props, this.anchorProps());
      }

      return /*#__PURE__*/React.createElement(this.LabelComponent, props, this.props.label);
    }
  }]);

  return VerticalNavItemLabel;
}(React.PureComponent);
VerticalNavItemLabel.defaultProps = {
  ariaCollapsedStateButtonLabel: 'Expand sub-navigation',
  ariaExpandedStateButtonLabel: 'Collapse sub-navigation'
};
VerticalNavItemLabel.propTypes = {
  ariaCollapsedStateButtonLabel: PropTypes.string,
  ariaExpandedStateButtonLabel: PropTypes.string,
  collapsed: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType, PropTypes.func]),
  hasSubnav: PropTypes.bool,
  label: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  subnavId: PropTypes.string.isRequired,
  url: PropTypes.string
};
export default VerticalNavItemLabel;