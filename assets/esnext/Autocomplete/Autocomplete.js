function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

/**
 * https://www.levelaccess.com/differences-aria-1-0-1-1-changes-rolecombobox/
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
 * https://www.digitala11y.com/aria-autocomplete-properties/
 *
 * We have opted to retain the ARIA 1.0 markup pattern for comboboxes.
 * This was done because the ARIA 1.1 markup pattern triggers a different
 * behavior on containers with a role="combobox" attribute. WCAG refers to
 * this as a composite widget: https://www.w3.org/TR/wai-aria-1.1/#h-composite
 *
 * Our testing with screen readers, specifically JAWS, has been the deciding
 * factor in going back to the ARIA 1.0 markup pattern. There were a number
 * of conflicting interactions using the 1.1 markup pattern that felt like
 * an unacceptable regression of the user experience.
 */
import Button from '../Button/Button';
import Downshift from 'downshift';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '../TextField/TextField';
import WrapperDiv from './WrapperDiv';
import classNames from 'classnames';
import { errorPlacementDefault } from '../flags';
import get from 'lodash/get';
import uniqueId from 'lodash.uniqueid';
/**
 * Determine if a React component is a TextField
 * @param {React.Node} child - a React component
 * @return {Boolean} Is this a TextField component?
 */

function isTextField(child) {
  var componentName = get(child, 'type.displayName') || get(child, 'type.name'); // Check child.type first and as a fallback, check child.type.displayName follow by child.type.name

  return child && (child.type === TextField || componentName === 'TextField');
}

export var Autocomplete = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Autocomplete, _React$PureComponent);

  var _super = _createSuper(Autocomplete);

  function Autocomplete(props) {
    var _this;

    _classCallCheck(this, Autocomplete);

    _this = _super.call(this, props);
    _this.id = _this.props.id || uniqueId('autocomplete_');
    _this.labelId = _this.props.labelId || uniqueId('autocomplete_label_');
    _this.listboxId = uniqueId('autocomplete_owned_listbox_');
    _this.listboxContainerId = uniqueId('autocomplete_owned_container_');
    _this.listboxHeadingId = uniqueId('autocomplete_header_');
    return _this;
  }

  _createClass(Autocomplete, [{
    key: "filterItems",
    value: function filterItems(items, inputValue, getInputProps, getItemProps, highlightedIndex) {
      var _this2 = this;

      // If we have results, create a mapped list
      if (items.length) {
        return items.map(function (item, index) {
          return /*#__PURE__*/React.createElement("li", _extends({
            "aria-selected": highlightedIndex === index,
            className: highlightedIndex === index ? 'ds-c-autocomplete__list-item ds-c-autocomplete__list-item--active' : 'ds-c-autocomplete__list-item',
            key: item.id,
            role: "option"
          }, getItemProps({
            item: item
          })), _this2.props.itemToString(item));
        });
      } // If we're waiting for results to load, show the non-selected message


      if (this.props.loading) {
        return /*#__PURE__*/React.createElement("li", {
          "aria-selected": "false",
          className: "ds-c-autocomplete__list-item--message",
          role: "option"
        }, this.props.loadingMessage);
      } // If we have no results, show the non-selected message


      return /*#__PURE__*/React.createElement("li", {
        "aria-selected": "false",
        className: "ds-c-autocomplete__list-item--message",
        role: "option"
      }, this.props.noResultsMessage);
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(getInputProps, listboxOpen) {
      var _this3 = this;

      var isOpen = listboxOpen; // Extend props on the TextField, by passing them
      // through Downshift's `getInputProps` method

      return React.Children.map(this.props.children, function (child) {
        if (isTextField(child)) {
          // The display of bottom placed errorMessages in TextField breaks the Autocomplete's UI design.
          // Add errorMessageClassName to fix the styles for bottom placed errors
          var bottomError = (child.props.errorPlacement === 'bottom' || errorPlacementDefault() === 'bottom') && child.props.errorMessage;
          var errorMessageClassName = bottomError ? classNames('ds-c-autocomplete__error-message', {
            'ds-c-autocomplete__error-message--clear-btn': _this3.props.clearSearchButton
          }, child.props.errorMessageClassName) : child.props.errorMessageClassName;
          var propOverrides = {
            'aria-autocomplete': 'list',
            'aria-controls': isOpen ? _this3.listboxId : null,
            'aria-expanded': isOpen,
            'aria-labelledby': null,
            'aria-owns': isOpen ? _this3.listboxId : null,
            autoComplete: _this3.props.autoCompleteLabel,
            errorMessageClassName: errorMessageClassName,
            focusTrigger: _this3.props.focusTrigger,
            id: _this3.id,
            inputRef: _this3.props.inputRef,
            labelId: _this3.labelId,
            onBlur: child.props.onBlur,
            onChange: child.props.onChange,
            onKeyDown: child.props.onKeyDown,
            role: 'combobox'
          };
          return /*#__PURE__*/React.cloneElement(child, getInputProps(propOverrides));
        }

        return child;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          ariaClearLabel = _this$props.ariaClearLabel,
          clearInputText = _this$props.clearInputText,
          items = _this$props.items,
          label = _this$props.label,
          loading = _this$props.loading,
          children = _this$props.children,
          className = _this$props.className,
          clearSearchButton = _this$props.clearSearchButton,
          autocompleteProps = _objectWithoutProperties(_this$props, ["ariaClearLabel", "clearInputText", "items", "label", "loading", "children", "className", "clearSearchButton"]);

      var rootClassName = classNames('ds-u-clearfix', 'ds-c-autocomplete', className);
      return /*#__PURE__*/React.createElement(Downshift, autocompleteProps, function (_ref) {
        var clearSelection = _ref.clearSelection,
            getInputProps = _ref.getInputProps,
            getItemProps = _ref.getItemProps,
            getRootProps = _ref.getRootProps,
            highlightedIndex = _ref.highlightedIndex,
            inputValue = _ref.inputValue,
            isOpen = _ref.isOpen;
        return /*#__PURE__*/React.createElement(WrapperDiv, getRootProps({
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-labelledby': null,
          'aria-owns': null,
          className: rootClassName,
          refKey: 'innerRef',
          role: null
        }), _this4.renderChildren(getInputProps, isOpen), isOpen && (loading || items) ? /*#__PURE__*/React.createElement("div", {
          className: "ds-u-border--1 ds-u-padding--1 ds-c-autocomplete__list",
          id: _this4.listboxContainerId
        }, label && !loading && /*#__PURE__*/React.createElement("h5", {
          className: "ds-u-margin--0 ds-u-padding--1",
          id: _this4.listboxHeadingId
        }, label), /*#__PURE__*/React.createElement("ul", {
          "aria-labelledby": label ? _this4.listboxHeadingId : null,
          className: "ds-c-list--bare",
          id: _this4.listboxId,
          role: "listbox"
        }, _this4.filterItems(items, inputValue, getInputProps, getItemProps, highlightedIndex))) : null, clearSearchButton && /*#__PURE__*/React.createElement(Button, {
          "aria-label": ariaClearLabel,
          className: "ds-u-float--right ds-u-margin-right--0",
          onClick: clearSelection,
          size: "small",
          variation: "transparent"
        }, clearInputText));
      });
    }
  }]);

  return Autocomplete;
}(React.PureComponent);
Autocomplete.defaultProps = {
  ariaClearLabel: 'Clear search to try again',
  autoCompleteLabel: 'off',
  clearInputText: 'Clear search',
  clearSearchButton: true,
  itemToString: function itemToString(item) {
    return item ? item.name : '';
  },
  loadingMessage: 'Loading...',
  noResultsMessage: 'No results'
};
Autocomplete.propTypes = {
  /**
   * Screenreader-specific label for the Clear search `<button>`. Intended to provide a longer, more descriptive explanation of the button's behavior.
   */
  ariaClearLabel: PropTypes.string,

  /**
   * Control the `TextField` autocomplete attribute. Defaults to "off" to support accessibility. [Read more.](https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion)
   */
  autoCompleteLabel: PropTypes.string,

  /**
   * Must contain a `TextField` component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional classes to be added to the root element.
   * Useful for adding utility classes.
   */
  className: PropTypes.string,

  /**
   * Text rendered on the page if `clearInput` prop is passed. Default is "Clear search".
   */
  clearInputText: PropTypes.node,

  /**
   * Removes the Clear search button when set to `false`
   */
  clearSearchButton: PropTypes.bool,

  /**
   * Used to focus child `TextField` on `componentDidMount()`
   */
  focusTrigger: PropTypes.bool,

  /**
   * A unique id to be passed to the child `TextField`. If no id is passed as a prop,
   * the `Autocomplete` component will auto-generate one. This prop was provided in cases
   * where an id might need to be passed to multiple components, such as the `htmlFor`
   * attribute on a label and the id of an input.
   */
  id: PropTypes.string,

  /**
   * Customize the default status messages announced to screenreader users via aria-live when autocomplete results are populated. [Read more on downshift docs.](https://github.com/paypal/downshift#geta11ystatusmessage)
   */
  getA11yStatusMessage: PropTypes.func,

  /**
   * Access a reference to the child `TextField`'s `input` element
   */
  inputRef: PropTypes.func,

  /**
   * Used to determine the string value for the selected item (which is used to compute the `inputValue`). [Read more on downshift docs.](https://github.com/paypal/downshift#itemtostring)
   */
  itemToString: PropTypes.func,

  /**
   * Array of objects used to populate the suggestion list that appears below the input as users type. This array of objects is intended for an async data callback, and should conform to the prescribed shape to avoid errors.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })),

  /**
   * Adds a heading to the top of the autocomplete list. This can be used to convey to the user that they're required to select an option from the autocomplete list.
   */
  label: PropTypes.node,

  /**
   * A unique `id` to be used on the child `TextField` label tag
   */
  labelId: PropTypes.string,

  /**
   * Can be called when the `items` array is being fetched remotely, or will be delayed for more than 1-2 seconds.
   */
  loading: PropTypes.bool,

  /**
   * Message users will see when the `loading` prop is passed to `Autocomplete`.
   */
  loadingMessage: PropTypes.node,

  /**
   * Message users will see when the `items` array returns empty and the `loading` prop is passed to `<Autocomplete />`.
   */
  noResultsMessage: PropTypes.node,

  /**
   * Called when the user selects an item and the selected item has changed. Called with the item that was selected and the new state. [Read more on downshift docs.](https://github.com/paypal/downshift#onchange)
   */
  onChange: PropTypes.func,

  /**
   * Called when the child `TextField` value changes. Returns a String `inputValue`. [Read more on downshift docs.](https://github.com/paypal/downshift#oninputvaluechange)
   */
  onInputValueChange: PropTypes.func
};
export default Autocomplete;