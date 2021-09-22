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

// Polyfills required for IE11 compatibility
import 'core-js/stable/array/includes';
import { FormControl, FormControlPropKeys } from '../FormControl/FormControl';
import { NUM_MONTHS, getMonthNames } from './getMonthNames';
import Button from '../Button/Button';
import Choice from '../ChoiceList/Choice';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import pick from 'lodash/pick';

var monthNumbers = function () {
  var months = [];

  for (var m = 1; m <= NUM_MONTHS; m++) {
    months.push(m);
  }

  return months;
}();

export var MonthPicker = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(MonthPicker, _React$PureComponent);

  var _super = _createSuper(MonthPicker);

  function MonthPicker(props) {
    var _this;

    _classCallCheck(this, MonthPicker);

    _this = _super.call(this, props);
    _this.months = getMonthNames(props.locale);
    _this.monthsLong = getMonthNames(props.locale, false);

    if (typeof props.selectedMonths === 'undefined') {
      _this.isControlled = false; // Since this isn't a controlled component, we need a way
      // to track when the value has changed.

      _this.state = {
        selectedMonths: props.defaultSelectedMonths || []
      };
    } else {
      _this.isControlled = true;
    }

    return _this;
  }

  _createClass(MonthPicker, [{
    key: "selectedMonths",
    value: function selectedMonths() {
      if (this.isControlled) {
        return this.props.selectedMonths;
      }

      return this.state.selectedMonths;
    }
  }, {
    key: "disabledMonths",
    value: function disabledMonths() {
      return this.props.disabledMonths || [];
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      if (this.props.onChange) {
        this.props.onChange(event);
      }

      if (!this.isControlled) {
        var month = parseInt(event.target.value);
        var selectedMonths = this.state.selectedMonths.slice();

        if (selectedMonths.includes(month)) {
          selectedMonths.splice(selectedMonths.indexOf(month), 1);
        } else {
          selectedMonths.push(month);
        }

        this.setState({
          selectedMonths: selectedMonths
        });
      }
    }
  }, {
    key: "handleSelectAll",
    value: function handleSelectAll() {
      if (this.props.onSelectAll) {
        this.props.onSelectAll();
      }

      if (!this.isControlled) {
        var disabledMonths = this.disabledMonths();
        var selectedMonths = monthNumbers.filter(function (m) {
          return !disabledMonths.includes(m);
        });
        this.setState({
          selectedMonths: selectedMonths
        });
      }
    }
  }, {
    key: "handleClearAll",
    value: function handleClearAll() {
      if (this.props.onClearAll) {
        this.props.onClearAll();
      }

      if (!this.isControlled) {
        this.setState({
          selectedMonths: []
        });
      }
    }
  }, {
    key: "renderMonths",
    value: function renderMonths() {
      var _this2 = this;

      var selectedMonths = this.selectedMonths();
      var disabledMonths = this.disabledMonths();
      var _this$props = this.props,
          name = _this$props.name,
          inversed = _this$props.inversed;
      return /*#__PURE__*/React.createElement("ol", {
        className: "ds-c-list--bare ds-u-display--flex ds-u-justify-content--between ds-u-flex-wrap--wrap"
      }, this.months.map(function (month, i) {
        return /*#__PURE__*/React.createElement("li", {
          key: month
        }, /*#__PURE__*/React.createElement(Choice, {
          "aria-label": _this2.monthsLong[i],
          checked: selectedMonths.includes(i + 1),
          className: "ds-c-month-picker__month",
          disabled: disabledMonths.includes(i + 1),
          inversed: inversed,
          onChange: function onChange(e) {
            return _this2.handleChange(e);
          },
          name: name,
          type: "checkbox",
          value: i + 1,
          label: month
        }));
      }));
    }
  }, {
    key: "renderButton",
    value: function renderButton(text, pressed, onClick) {
      return /*#__PURE__*/React.createElement(Button, {
        "aria-pressed": pressed,
        size: "small",
        className: "ds-u-margin-right--1 ds-u-float--left",
        onClick: onClick,
        inversed: this.props.inversed,
        variation: this.props.buttonVariation
      }, text);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          selectAllText = _this$props2.selectAllText,
          clearAllText = _this$props2.clearAllText;
      var selectedMonths = this.selectedMonths();
      var disabledMonths = this.disabledMonths();
      var selectAllPressed = selectedMonths.length === NUM_MONTHS - disabledMonths.length;
      var clearAllPressed = selectedMonths.length === 0;
      var containerProps = pick(this.props, FormControlPropKeys);
      var containerClassName = classNames('ds-c-month-picker', this.props.className);
      return /*#__PURE__*/React.createElement(FormControl, _extends({}, containerProps, {
        className: containerClassName,
        component: "fieldset",
        labelComponent: "legend",
        render: function render() {
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
            className: "ds-c-month-picker__buttons ds-u-margin-top--2 ds-u-margin-bottom--1 ds-u-clearfix"
          }, _this3.renderButton(selectAllText, selectAllPressed, function () {
            return _this3.handleSelectAll();
          }), _this3.renderButton(clearAllText, clearAllPressed, function () {
            return _this3.handleClearAll();
          })), /*#__PURE__*/React.createElement("div", {
            className: "ds-c-month-picker__months"
          }, _this3.renderMonths()));
        }
      }));
    }
  }]);

  return MonthPicker;
}(React.PureComponent);
MonthPicker.defaultProps = {
  selectAllText: 'Select all',
  clearAllText: 'Clear all'
};
MonthPicker.propTypes = {
  /**
   * The `input` field's `name` attribute
   */
  name: PropTypes.string.isRequired,

  /**
   * A [BCP 47 language tag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation)
   * for month name localization. For example: Passing `es-US` as a value
   * will render month names in Spanish.
   */
  locale: PropTypes.string,

  /**
   * Additional classes to be added to the root element.
   */
  className: PropTypes.string,

  /**
   * Applies the "inverse" UI theme
   */
  inversed: PropTypes.bool,

  /**
   * Variation string to be applied to buttons. See [Button component]({{root}}/components/button/#components.button.react)
   */
  buttonVariation: PropTypes.string,

  /**
   * Label for the field
   */
  label: PropTypes.node.isRequired,
  errorMessage: PropTypes.node,

  /**
   * Additional classes to be added to the error message
   */
  errorMessageClassName: PropTypes.string,

  /**
   * Location of the error message relative to the field input
   */
  errorPlacement: PropTypes.oneOf(['top', 'bottom']),

  /**
   * Additional hint text to display
   */
  hint: PropTypes.node,

  /**
   * Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields]({{root}}/guidelines/forms/#required-and-optional-fields).
   */
  requirementLabel: PropTypes.node,

  /**
   * Array of month numbers, where `1` is January, and any month included
   * is disabled for selection.
   */
  disabledMonths: PropTypes.arrayOf(PropTypes.number),

  /**
   * Array of month numbers, where `1` is January, and any month included
   * is selected. This will render a read-only field. If the field should
   * be mutable, use `defaultSelectedMonths`.
   */
  selectedMonths: PropTypes.arrayOf(PropTypes.number),

  /**
   * Array of month numbers, where `1` is January, and any month included
   * is selected by default. Sets the initial checked state for the 12 month
   * checkboxes. Use this for an uncontrolled component; otherwise, use the
   * `selectedMonths` property.
   */
  defaultSelectedMonths: PropTypes.arrayOf(PropTypes.number),

  /**
   * A callback function that's invoked when a month's checked state is changed.
   * Note: This callback is not called when a month is selected or deselected
   * via the "Select all" or "Clear all" buttons – use the `onSelectAll` and
   * `onClearAll` event handlers for those instances.
   */
  onChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onClearAll: PropTypes.func,

  /**
   * The text for the "Select all" button for internationalization
   */
  selectAllText: PropTypes.string,

  /**
   * The text for the "Clear all" button for internationalization
   */
  clearAllText: PropTypes.string
};
export default MonthPicker;