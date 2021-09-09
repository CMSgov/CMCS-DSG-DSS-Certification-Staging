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

import Alert from '../Alert/Alert';
import PropTypes from 'prop-types';
import React from 'react';
import TableCaption from './TableCaption';
import classNames from 'classnames';
import get from 'lodash/get';
import uniqueId from 'lodash.uniqueid'; // TODO: Revert out of this 'PR update to use lifecycle methods'
// (https://github.com/CMSgov/design-system/pull/777)
// when hc.gov child ds and the product apps are on react v16.8

function debounce(fn, ms) {
  var _arguments = arguments,
      _this = this;

  var timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      timer = null;
      fn.apply(_this, _arguments);
    }, ms);
  };
}
/**
 * Determine if a React component is a TableCaption
 * @param {React.Node} child - a React component
 * @return {Boolean} Is this a TableCaption component?
 */


function isTableCaption(child) {
  var componentName = get(child, 'type.displayName') || get(child, 'type.name'); // Check child.type first and as a fallback, check child.type.displayName follow by child.type.name

  return child && (child.type === TableCaption || componentName === 'TableCaption');
}

export var Table = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Table, _React$PureComponent);

  var _super = _createSuper(Table);

  function Table(props) {
    var _this2;

    _classCallCheck(this, Table);

    _this2 = _super.call(this, props);
    _this2.state = {
      scrollActive: false
    };
    _this2.captionID = uniqueId('caption-');
    _this2.container = 0;
    _this2.debounceHandleResize = debounce(_this2.handleResize.bind(_assertThisInitialized(_this2)), 500);

    if (process.env.NODE_ENV !== 'production') {
      if (props.scrollable && Array.isArray(props.children) && !props.children.some(function (child) {
        return isTableCaption(child);
      })) {
        console.warn('The children prop in `Table` must include `TableCaption` component for scrollable tables.');
      }

      if (props.dense) {
        console.warn("[Deprecated]: Please remove the 'dense' prop in <Table>, use 'compact' instead. This prop has been renamed and will be removed in a future release.");
      }
    }

    return _this2;
  }

  _createClass(Table, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.scrollable) {
        window.addEventListener('resize', this.debounceHandleResize);
        this.handleResize();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.scrollable) {
        window.removeEventListener('resize', this.debounceHandleResize);
      }
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      var _this$container = this.container,
          scrollWidth = _this$container.scrollWidth,
          clientWidth = _this$container.clientWidth;
      var scrollActive = scrollWidth > clientWidth;
      this.setState({
        scrollActive: scrollActive
      });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this3 = this;

      return React.Children.map(this.props.children, function (child) {
        if (isTableCaption(child)) {
          // Extend props on TableCaption before rendering.
          // TODO: Use React Context when all products are on React v16.8 or higher
          if (_this3.props.scrollable) {
            return /*#__PURE__*/React.cloneElement(child, {
              _id: _this3.captionID,
              _scrollActive: _this3.state.scrollActive,
              _scrollableNotice: _this3.props.scrollableNotice
            });
          }
        } else if (_this3.props.stackable && child.props) {
          // Extend props for others before rendering.
          return /*#__PURE__*/React.cloneElement(child, {
            _stackable: _this3.props.stackable
          });
        }

        return child;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          borderless = _this$props.borderless,
          className = _this$props.className,
          compact = _this$props.compact,
          dense = _this$props.dense,
          stackable = _this$props.stackable,
          stackableBreakpoint = _this$props.stackableBreakpoint,
          striped = _this$props.striped,
          scrollable = _this$props.scrollable,
          scrollableNotice = _this$props.scrollableNotice,
          children = _this$props.children,
          tableProps = _objectWithoutProperties(_this$props, ["borderless", "className", "compact", "dense", "stackable", "stackableBreakpoint", "striped", "scrollable", "scrollableNotice", "children"]);

      var classes = classNames('ds-c-table', borderless ? 'ds-c-table--borderless' : null, compact || dense ? 'ds-c-table--compact' : null, striped ? 'ds-c-table--striped' : null, stackable ? "ds-c-".concat(stackableBreakpoint, "-table--stacked") : null, className); // Makes table container focusable and displays the scrollable notice when table width exceeds viewport
      // by setting `tabIndex = 0` attribute.
      // This provides context for screen readers to the table's <caption> via aria-labelleby

      var attributeScrollable = scrollable && {
        className: 'ds-c-table__wrapper',
        role: 'region',
        'aria-labelledby': this.captionID,
        'aria-live': 'polite',
        'aria-relevant': 'additions',
        tabIndex: this.state.scrollActive ? '0' : null
      };
      return /*#__PURE__*/React.createElement("div", _extends({
        ref: function ref(container) {
          _this4.container = container;
        }
      }, attributeScrollable), /*#__PURE__*/React.createElement("table", _extends({
        className: classes,
        role: "table"
      }, tableProps), this.renderChildren()));
    }
  }]);

  return Table;
}(React.PureComponent);
Table.defaultProps = {
  scrollableNotice: /*#__PURE__*/React.createElement(Alert, {
    className: "ds-u-margin-y--1 ds-u-font-weight--normal",
    role: "status"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ds-c-alert__text"
  }, "Scroll using arrow keys to see more")),
  stackableBreakpoint: 'sm'
};
Table.propTypes = {
  /**
   * Applies the borderless variation of the table.
   */
  borderless: PropTypes.bool,

  /**
   * The table contents, usually `TableCaption`, `TableHead` and `TableBody`.
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional classes to be added to the root table element.
   */
  className: PropTypes.string,

  /**
   * Applies the compact variation of the table.
   */
  compact: PropTypes.bool,

  /**
   * @hide-prop [Deprecated] Use compact instead.
   */
  dense: PropTypes.bool,

  /**
   * Applies a horizontal scrollbar and scrollable notice on `TableCaption` when the `Table`'s contents exceed the container width.
   */
  scrollable: PropTypes.bool,

  /**
   * Additional text or content to display when the horizontal scrollbar is visible to give the user notice of the scroll behavior.
   * This prop will only be used when the `Table` `scrollable` prop is set and the table width is wider than the viewport.
   */
  scrollableNotice: PropTypes.node,

  /**
   * Enables responsive styles to vertically stack rows at the specified `stackableBreakpoint`.
   * When `stackable` is set, `id` or `headers` prop is required in `TableCell`
   */
  stackable: PropTypes.bool,

  /**
   * The viewport size at which responsive vertically stacked row styles are applied. Only used when the `stackable` prop is set to `true`. [Read more on breakpoints](/guidelines/responsive/)
   */
  stackableBreakpoint: PropTypes.oneOf(['sm', 'md', 'lg']),

  /**
   * Applies the striped variation of the table.
   */
  striped: PropTypes.bool
};
export default Table;