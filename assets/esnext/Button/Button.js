function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

import PropTypes from 'prop-types';
import React from 'react';
import _classNames from 'classnames';
export var Button = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Button, _React$PureComponent);

  var _super = _createSuper(Button);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _super.call(this, props);

    if (process.env.NODE_ENV !== 'production') {
      if (props.inverse) {
        console.warn("[Deprecated]: Please remove the 'inverse' prop in <Button>, use 'inversed' instead. This prop has been renamed and will be removed in a future release.");
      }

      if (props.variation === 'danger') {
        console.warn("[Deprecated]: Please remove the 'danger' variation prop in <Button>. This prop has will be removed in a future release.");
      }
    }

    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    return _this;
  } // Get an object of props to pass to the rendered <Button> component


  _createClass(Button, [{
    key: "attrs",
    value: function attrs() {
      /**
       * Since any number of arbitrary props can be passed into this component, we
       * use a destructuring assignment to get only the props we want to pass to the
       * rendered HTML element. For example, the "variation" prop is used to generate
       * the classNames, but doesn't need passed to the rendered component, so we
       * omit it here so that it's not included in the props object.
       */
      var _this$props = this.props,
          className = _this$props.className,
          component = _this$props.component,
          inputRef = _this$props.inputRef,
          inversed = _this$props.inversed,
          inverse = _this$props.inverse,
          onClick = _this$props.onClick,
          size = _this$props.size,
          variation = _this$props.variation,
          props = _objectWithoutProperties(_this$props, ["className", "component", "inputRef", "inversed", "inverse", "onClick", "size", "variation"]);

      var attrs = _objectSpread({
        className: this.classNames()
      }, props);

      if (this.props.onClick) {
        attrs.onClick = this.handleClick;
      }

      if (component !== 'button' || this.props.href) {
        // Assume `component` is not a <button> and remove <button> specific attributes
        attrs.role = 'button';
        delete attrs.disabled;
        delete attrs.type;
      }

      return attrs;
    }
  }, {
    key: "componentType",
    value: function componentType() {
      var component = this.props.component;

      if (component === 'button' && this.props.href) {
        // If `href` is provided and a custom component is not, we render `<a>` instead
        component = 'a';
      }

      return component;
    }
  }, {
    key: "classNames",
    value: function classNames() {
      var variationClass = this.props.variation && "ds-c-button--".concat(this.props.variation);
      var disabledClass = this.props.disabled && this.componentType() !== 'button' && 'ds-c-button--disabled';
      var sizeClass = this.props.size && "ds-c-button--".concat(this.props.size);
      var inverseClass = (this.props.inversed || this.props.inverse) && 'ds-c-button--inverse';
      return _classNames('ds-c-button', disabledClass, variationClass, inverseClass, sizeClass, this.props.className);
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      // Trigger onClick on space key event for `<a>` elements
      if (e.key === ' ') {
        this.handleClick(e);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      if (!this.props.disabled && this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var attrs = this.attrs();
      var ComponentType = this.componentType();
      return /*#__PURE__*/React.createElement(ComponentType, _extends({
        ref: this.props.inputRef,
        onKeyPress: this.componentType() === 'a' ? this.handleKeyPress : undefined
      }, attrs), this.props.children);
    }
  }]);

  return Button;
}(React.PureComponent);
Button.defaultProps = {
  type: 'button',
  component: 'button'
};
Button.propTypes = {
  /**
   * Label text or HTML
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,

  /**
   * Additional classes to be added to the root button element.
   * Useful for adding utility classes.
   */
  className: PropTypes.string,

  /**
   * When provided, this will render the passed in component. This is useful when
   * integrating with React Router's `<Link>` or using your own custom component.
   */
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType, PropTypes.func]),
  disabled: PropTypes.bool,

  /**
   * When provided the root component will render as an `<a>` element
   * rather than `button`.
   */
  href: PropTypes.string,

  /**
   * Access a reference to the `button` or `a` element
   */
  inputRef: PropTypes.func,

  /** @hide-prop [Deprecated] Use inversed instead */
  inverse: PropTypes.bool,

  /** Applies the inverse theme styling */
  inversed: PropTypes.bool,

  /**
   * Returns the [`SyntheticEvent`](https://facebook.github.io/react/docs/events.html).
   * Not called when the button is disabled.
   */
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'big']),

  /**
   * Button [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) attribute
   */
  type: PropTypes.oneOf(['button', 'submit']),

  /**
   * A string corresponding to the button-component variation classes.
   * The `'danger'` variation is deprecated and will be removed in a future release.
   */
  variation: PropTypes.oneOf(['primary', 'danger', 'success', 'transparent'])
};
export default Button;