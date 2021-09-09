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

import InlineError from '../InlineError/InlineError';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
export var FormLabel = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(FormLabel, _React$PureComponent);

  var _super = _createSuper(FormLabel);

  function FormLabel() {
    _classCallCheck(this, FormLabel);

    return _super.apply(this, arguments);
  }

  _createClass(FormLabel, [{
    key: "hint",
    value: function hint() {
      var hint = this.props.hint;
      var requirementLabel = this.props.requirementLabel;
      if (!hint && !requirementLabel) return;
      var classes = classNames('ds-c-field__hint', {
        'ds-c-field__hint--inverse': this.props.inversed
      });
      var hintPadding = null;

      if (requirementLabel && hint) {
        if (typeof requirementLabel === 'string') {
          // Remove any existing spacing and punctuation
          requirementLabel = requirementLabel.trim().replace(/\.$/, ''); // Add punctuation after the requirementLabel so it doesn't run into the hint

          requirementLabel = requirementLabel + '.';
        } // Add space between hint and preceding requirementLabel


        hintPadding = ' ';
      }

      return /*#__PURE__*/React.createElement("span", {
        className: classes
      }, requirementLabel, hintPadding, hint);
    }
  }, {
    key: "errorMessage",
    value: function errorMessage() {
      if (this.props.errorMessage) {
        // Include fallback for errorId for usage outside of FormControl
        var errorId = null;

        if (this.props.errorId) {
          errorId = this.props.errorId;
        } else if (this.props.fieldId) {
          errorId = "".concat(this.props.fieldId, "-error");
        }

        return /*#__PURE__*/React.createElement(InlineError, {
          id: errorId,
          inversed: this.props.inversed,
          className: this.props.errorMessageClassName
        }, this.props.errorMessage);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fieldId = _this$props.fieldId,
          id = _this$props.id,
          children = _this$props.children,
          component = _this$props.component,
          hint = _this$props.hint,
          textClassName = _this$props.textClassName,
          className = _this$props.className,
          inversed = _this$props.inversed,
          errorMessage = _this$props.errorMessage,
          errorMessageClassName = _this$props.errorMessageClassName,
          errorId = _this$props.errorId,
          requirementLabel = _this$props.requirementLabel,
          labelProps = _objectWithoutProperties(_this$props, ["fieldId", "id", "children", "component", "hint", "textClassName", "className", "inversed", "errorMessage", "errorMessageClassName", "errorId", "requirementLabel"]);

      var ComponentType = this.props.component;
      var classes = classNames('ds-c-label', className, {
        'ds-c-label--inverse': inversed
      });
      return /*#__PURE__*/React.createElement(ComponentType, _extends({
        className: classes,
        htmlFor: fieldId,
        id: id
      }, labelProps), /*#__PURE__*/React.createElement("span", {
        className: classNames(textClassName)
      }, children), this.hint(), this.errorMessage());
    }
  }]);

  return FormLabel;
}(React.PureComponent);
FormLabel.defaultProps = {
  component: 'label'
};
FormLabel.propTypes = {
  /**
   * Label text or HTML.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,

  /**
   * Additional classes to be added to the root element.
   */
  className: PropTypes.string,

  /** The root HTML element used to render the label */
  component: PropTypes.oneOf(['label', 'legend']),

  /** Enable the error state by providing an error message. */
  errorMessage: PropTypes.node,

  /**
   * Additional classes to be added to the error message
   */
  errorMessageClassName: PropTypes.string,

  /**
   * The ID of the error message applied to this field.
   */
  errorId: PropTypes.string,

  /**
   * The ID of the field this label is for. This is used for the label's `for`
   * attribute and any related ARIA attributes, such as for the error message.
   */
  fieldId: PropTypes.string,

  /**
   * Additional hint text to display
   */
  hint: PropTypes.node,

  /**
   * A unique `id` for the label element. Useful for referencing the label from
   * other components with `aria-describedby`.
   */
  id: PropTypes.string,

  /**
   * Set to `true` to apply the "inverse" theme
   */
  inversed: PropTypes.bool,

  /**
   * Text showing the requirement (ie. "Optional", or "Required").
   * In most cases, this should be used to indicate which fields are optional.
   * See the [form guidelines]({{root}}/guidelines/forms/) for more info.
   */
  requirementLabel: PropTypes.node,

  /**
   * Additional classes to be added to the label text.
   */
  textClassName: PropTypes.string
};
export default FormLabel;