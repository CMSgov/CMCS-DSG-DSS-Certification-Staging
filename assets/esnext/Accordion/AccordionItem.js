import _pt from "prop-types";

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

import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
export var AccordionItem = /*#__PURE__*/function (_React$Component) {
  _inherits(AccordionItem, _React$Component);

  var _super = _createSuper(AccordionItem);

  /* eslint-disable react/sort-comp */

  /* eslint-enable react/sort-comp */
  function AccordionItem(props) {
    var _this;

    _classCallCheck(this, AccordionItem);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "buttonId", void 0);

    _defineProperty(_assertThisInitialized(_this), "contentId", void 0);

    _defineProperty(_assertThisInitialized(_this), "isControlled", void 0);

    _this.isControlled = !!props.onChange;
    _this.state = _this.isControlled ? {} : {
      isOpen: !!props.defaultOpen
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.contentId = props.id || uniqueId('accordionItem_');
    _this.buttonId = "".concat(_this.contentId, "-button");
    return _this;
  } // Set the state for opening and closing an accordion item


  _createClass(AccordionItem, [{
    key: "handleClick",
    value: function handleClick() {
      if (this.isControlled) {
        this.props.onChange();
      } else {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          buttonClassName = _this$props.buttonClassName,
          children = _this$props.children,
          contentClassName = _this$props.contentClassName,
          heading = _this$props.heading,
          _this$props$headingLe = _this$props.headingLevel,
          headingLevel = _this$props$headingLe === void 0 ? '2' : _this$props$headingLe,
          isControlledOpen = _this$props.isControlledOpen;
      var contentClasses = classNames('ds-c-accordion__content', contentClassName);
      var buttonClasses = classNames('ds-c-accordion__button', buttonClassName);
      var HeadingTag = "h".concat(headingLevel);

      if (heading) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeadingTag, {
          className: "ds-c-accordion__heading"
        }, /*#__PURE__*/React.createElement("button", {
          className: buttonClasses,
          "aria-expanded": this.isControlled ? isControlledOpen : this.state.isOpen,
          "aria-controls": this.contentId,
          id: this.buttonId,
          onClick: this.handleClick
        }, heading)), /*#__PURE__*/React.createElement("div", {
          className: contentClasses,
          "aria-labelledby": this.buttonId,
          id: this.contentId,
          hidden: this.isControlled ? !isControlledOpen : !this.state.isOpen
        }, children));
      }
    }
  }]);

  return AccordionItem;
}(React.Component);

_defineProperty(AccordionItem, "propTypes", {
  /**
     * Class to be applied to the header `<button>` of an accordion item.
     */
  buttonClassName: _pt.string,
  children: _pt.node,

  /**
     * Class to be applied to the content `<div>` tag of an accordion item.
     */
  contentClassName: _pt.string,

  /**
     * Boolean to expand the accordion.
     */
  defaultOpen: _pt.bool,

  /**
     * Text for the accordion item heading.
     */
  heading: _pt.oneOfType([_pt.node, _pt.string]).isRequired,

  /**
     *  Heading type to override default `<h2>`.
     */
  headingLevel: _pt.oneOf(['1', '2', '3', '4', '5', '6']),

  /**
     *  If not provided, a unique id will be automatically generated and used.
     */
  id: _pt.string,

  /**
     * Sets the accordion panel's open state. Use this in combination with `onChange`
     * for a controlled accordion; otherwise, set `defaultOpen`.
     */
  isControlledOpen: _pt.bool,

  /**
     * A callback function that's invoked when a controlled accordion panel is selected or deselected.
     */
  onChange: _pt.func
});

_defineProperty(AccordionItem, "defaultProps", {
  headingLevel: '2'
});

export default AccordionItem;