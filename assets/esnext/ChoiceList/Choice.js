import _pt from "prop-types";

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import EvEmitter from 'ev-emitter';
import FormLabel from '../FormLabel/FormLabel';
import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';

/** Used to emit events to all Choice components */
var dsChoiceEmitter = new EvEmitter();
export var Choice = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Choice, _React$PureComponent);

  var _super = _createSuper(Choice);

  function Choice(props) {
    var _this;

    _classCallCheck(this, Choice);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "input", void 0);

    _defineProperty(_assertThisInitialized(_this), "id", void 0);

    _defineProperty(_assertThisInitialized(_this), "isControlled", void 0);

    _defineProperty(_assertThisInitialized(_this), "uncheckEventName", void 0);

    _this.input = null;
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleUncheck = _this.handleUncheck.bind(_assertThisInitialized(_this));
    _this.id = _this.props.id || uniqueId("".concat(_this.props.type, "_").concat(_this.props.name, "_"));

    if (typeof _this.props.checked === 'undefined') {
      _this.isControlled = false; // Since this isn't a controlled component, we need a way
      // to track when the value has changed. This can then be used
      // to identify when to toggle the visibility of (un)checkedChildren

      _this.state = {
        checked: _this.props.defaultChecked
      }; // Event emitters are only relevant for uncontrolled radio buttons

      if (_this.props.type === 'radio') {
        _this.uncheckEventName = "".concat(_this.props.name, "-uncheck");
        dsChoiceEmitter.on(_this.uncheckEventName, _this.handleUncheck);
      }
    } else {
      _this.isControlled = true;
    }

    if (process.env.NODE_ENV !== 'production') {// Temporarily disable deprecation warning
      // if (props.children) {
      //  console.warn(
      //    `[Deprecated]: Please remove the 'children' prop in <Choice>, use 'label' instead. This prop has been renamed and will be removed in a future release.`
      //  );
      // }
    }

    return _this;
  }

  _createClass(Choice, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Unbind event emitters are only relevant for uncontrolled radio buttons
      if (!this.isControlled && this.props.type === 'radio') {
        dsChoiceEmitter.off(this.uncheckEventName, this.handleUncheck);
      }
    }
  }, {
    key: "checked",
    value: function checked() {
      if (this.isControlled) {
        return this.props.checked;
      }

      return this.state.checked;
    }
    /**
     * A radio button doesn't receive an onChange event when it is unchecked,
     * so we fire an "uncheck" event when any radio option is selected. This
     * allows us to check each radio options' checked state.
     * @param {String} checkedId - ID of the checked radio option
     */

  }, {
    key: "handleUncheck",
    value: function handleUncheck(checkedId) {
      if (checkedId !== this.id && this.input.checked !== this.state.checked) {
        this.setState({
          checked: this.input.checked
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(evt) {
      if (this.props.onChange) {
        this.props.onChange(evt);
      }

      if (!this.isControlled) {
        this.setState({
          checked: evt.target.checked
        });

        if (this.props.type === 'radio' && evt.target.checked) {
          // Emit the uncheck event so other radio options update their state
          dsChoiceEmitter.emitEvent(this.uncheckEventName, [this.id]);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          checkedChildren = _this$props.checkedChildren,
          children = _this$props.children,
          className = _this$props.className,
          disabled = _this$props.disabled,
          hint = _this$props.hint,
          inversed = _this$props.inversed,
          inputClassName = _this$props.inputClassName,
          label = _this$props.label,
          labelClassName = _this$props.labelClassName,
          requirementLabel = _this$props.requirementLabel,
          size = _this$props.size,
          uncheckedChildren = _this$props.uncheckedChildren,
          inputRef = _this$props.inputRef,
          inputProps = _objectWithoutProperties(_this$props, ["checkedChildren", "children", "className", "disabled", "hint", "inversed", "inputClassName", "label", "labelClassName", "requirementLabel", "size", "uncheckedChildren", "inputRef"]);

      var inputClasses = classNames(inputClassName, 'ds-c-choice', {
        'ds-c-choice--inverse': inversed,
        'ds-c-choice--small': size === 'small'
      }); // Remove props we have our own implementations for

      if (inputProps.id) delete inputProps.id;
      if (inputProps.onChange) delete inputProps.onChange;
      return /*#__PURE__*/React.createElement("div", {
        className: className,
        "aria-live": checkedChildren ? 'polite' : null,
        "aria-relevant": checkedChildren ? 'additions text' : null,
        "aria-atomic": checkedChildren ? 'false' : null
      }, /*#__PURE__*/React.createElement("input", _extends({
        className: inputClasses,
        id: this.id,
        onChange: this.handleChange,
        disabled: disabled,
        ref: function ref(_ref) {
          _this2.input = _ref;

          if (inputRef) {
            inputRef(_ref);
          }
        }
      }, inputProps)), /*#__PURE__*/React.createElement(FormLabel, {
        className: labelClassName,
        fieldId: this.id,
        hint: hint,
        inversed: inversed,
        requirementLabel: requirementLabel
      }, label || children), this.checked() ? checkedChildren : uncheckedChildren);
    }
  }]);

  return Choice;
}(React.PureComponent);

_defineProperty(Choice, "propTypes", {
  /**
     * @hide-prop In order to be consistent with form elements, use `label` instead
     */
  children: _pt.node,

  /**
     * Sets the input's `checked` state. Use this in combination with `onChange`
     * for a controlled component; otherwise, set `defaultChecked`.
     */
  checked: _pt.bool,

  /**
     * Content to be shown when the choice is checked. See
     * **Checked children and the expose within pattern** on
     * the Guidance tab for detailed instructions.
     */
  checkedChildren: _pt.node,

  /**
     * Content to be shown when the choice is not checked
     */
  uncheckedChildren: _pt.node,

  /**
     * Additional classes to be added to the root `div` element.
     */
  className: _pt.string,

  /**
     * Additional classes to be added to the `input` element.
     */
  inputClassName: _pt.string,

  /**
     * Label text or HTML.
     */
  label: _pt.node,

  /**
     * Additional classes to be added to the `FormLabel`.
     */
  labelClassName: _pt.string,

  /**
     * Sets the initial `checked` state. Use this for an uncontrolled component;
     * otherwise, use the `checked` property.
     */
  defaultChecked: _pt.bool,
  disabled: _pt.bool,

  /**
     * Access a reference to the `input` element
     */
  inputRef: _pt.func,

  /**
     * Additional hint text to display below the choice's label
     */
  hint: _pt.node,

  /**
     * A unique ID to be used for the input field, as well as the label's
     * `for` attribute. A unique ID will be generated if one isn't provided.
     */
  id: _pt.string,

  /**
     * Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields]({{root}}/guidelines/forms/#required-and-optional-fields).
     */
  requirementLabel: _pt.node,

  /**
     * Applies the "inverse" UI theme
     */
  inversed: _pt.bool,
  size: _pt.oneOf(['small']),

  /**
     * The `input` field's `name` attribute
     */
  name: _pt.string.isRequired,
  onBlur: _pt.func,
  onChange: _pt.func,

  /**
     * Sets the type to render `checkbox` fields or `radio` buttons
     */
  type: _pt.oneOf(['checkbox', 'radio']).isRequired,

  /**
     * The `input` `value` attribute
     */
  value: _pt.oneOfType([_pt.number, _pt.string]).isRequired
});

export default Choice;