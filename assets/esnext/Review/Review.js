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

import PropTypes from 'prop-types';
import React from 'react';
import ReviewLink from './ReviewLink';
import classNames from 'classnames';
export var Review = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Review, _React$PureComponent);

  var _super = _createSuper(Review);

  function Review() {
    _classCallCheck(this, Review);

    return _super.apply(this, arguments);
  }

  _createClass(Review, [{
    key: "heading",
    value: function heading() {
      var Heading = "h".concat(this.props.headingLevel) || "h3";

      if (this.props.heading) {
        return /*#__PURE__*/React.createElement(Heading, {
          className: "ds-c-review__heading"
        }, this.props.heading);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          editAriaLabel = _this$props.editAriaLabel,
          editHref = _this$props.editHref,
          editText = _this$props.editText,
          onEditClick = _this$props.onEditClick,
          editContent = _this$props.editContent;
      var classes = classNames('ds-c-review', className);
      return /*#__PURE__*/React.createElement("div", {
        className: classes
      }, /*#__PURE__*/React.createElement("div", {
        className: "ds-u-margin-right--2"
      }, this.heading(), /*#__PURE__*/React.createElement("div", {
        className: "ds-c-review__body"
      }, children)), editContent, !editContent && editHref && /*#__PURE__*/React.createElement(ReviewLink, {
        onClick: onEditClick,
        href: editHref,
        ariaLabel: editAriaLabel
      }, editText));
    }
  }]);

  return Review;
}(React.PureComponent);
Review.defaultProps = {
  editText: 'Edit',
  headingLevel: '3'
};
Review.propTypes = {
  /**
   * `Review` component's body HTML.
   */
  children: PropTypes.node.isRequired,
  className: PropTypes.string,

  /**
   * Optional label to give screenreaders longer, more descriptive text to
   * explain the context of an edit link.
   */
  editAriaLabel: PropTypes.string,

  /**
   * An optional node in place of the edit link. If this defined, no edit link will be shown.
   */
  editContent: PropTypes.node,

  /**
   * Href for the edit link. If this is undefined, no edit link will be shown.
   */
  editHref: PropTypes.string,
  editText: PropTypes.node,
  heading: PropTypes.node,

  /**
   * Heading type to override default `<h3>`.
   */
  headingLevel: PropTypes.oneOf(['1', '2', '3', '4', '5']),

  /**
   * An optional function that is executed on edit link click. The event and
   * props.editHref value are passed to this function.
   */
  onEditClick: PropTypes.func
};
export default Review;