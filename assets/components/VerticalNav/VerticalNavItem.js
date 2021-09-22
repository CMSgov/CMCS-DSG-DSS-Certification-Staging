"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VerticalNavItem = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _VerticalNav = _interopRequireDefault(require("./VerticalNav"));

var _VerticalNavItemLabel = _interopRequireDefault(require("./VerticalNavItemLabel"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.uniqueid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var VerticalNavItem = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(VerticalNavItem, _React$PureComponent);

  var _super = _createSuper(VerticalNavItem);

  function VerticalNavItem(props) {
    var _this;

    _classCallCheck(this, VerticalNavItem);

    _this = _super.call(this, props);
    _this.handleLabelClick = _this.handleLabelClick.bind(_assertThisInitialized(_this));
    _this.id = _this.props.id || (0, _lodash.default)('VerticalNavItem_');
    _this.subnavId = "".concat(_this.id, "__subnav");
    _this.state = {
      collapsed: _this.props.defaultCollapsed
    };
    return _this;
  }

  _createClass(VerticalNavItem, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.onSubnavToggle && prevState.collapsed !== this.state.collapsed) {
        this.props.onSubnavToggle(this.props.id, this.state.collapsed);
      }
    }
    /**
     * Called when VerticalNavItemLabel is clicked. Since the "label" could be
     * a link, subnav toggle button, or plain text, we use this method to
     * determine what action to take and which event to actually fire.
     * @param {Object} SyntheticEvent
     */

  }, {
    key: "handleLabelClick",
    value: function handleLabelClick(evt) {
      if (this.hasSubnav()) {
        return this.handleToggleClick();
      }

      return this.handleClick(evt);
    }
    /**
     * Note: This event handler will only get called when the VerticalNavItemLabel
     * is a link or plain text
     */

  }, {
    key: "handleClick",
    value: function handleClick(evt) {
      if (this.props.onClick) {
        this.props.onClick(evt, this.id, this.props.url);
      }
    }
  }, {
    key: "handleToggleClick",
    value: function handleToggleClick() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
  }, {
    key: "hasSubnav",
    value: function hasSubnav() {
      return Boolean(this.props.items && this.props.items.length > 0);
    }
    /**
     * Check if this item is selected or if it is a parent of a selected item
     * @return {Boolean}
     */

  }, {
    key: "isSelected",
    value: function isSelected() {
      if (this.props.selected) return this.props.selected;

      if (this.props._selectedId && this.hasSubnav()) {
        return this.childIsSelected(this.props.items);
      }

      return false;
    }
    /**
     * Checks if a descendant is selected
     * @param {Array} children - The nested items
     * @return {Boolean}
     */

  }, {
    key: "childIsSelected",
    value: function childIsSelected(children) {
      var _this2 = this;

      if (children && children.length) {
        return children.some(function (child) {
          return child.id === _this2.props._selectedId || _this2.childIsSelected(child.items);
        });
      }

      return false;
    }
  }, {
    key: "subnavItems",
    value: function subnavItems() {
      if (this.props.url) {
        // Since the VerticalNavItemLabel will just toggle the subnav, we
        // add a link to the top of the subnav for this item. Otherwise there
        // wouldn't be a way to actually visit its URL
        var item = _extends({}, this.props);

        delete item.items;
        return [item].concat(this.props.items);
      }

      return this.props.items;
    }
  }, {
    key: "renderSubnav",
    value: function renderSubnav() {
      if (this.hasSubnav()) {
        return /*#__PURE__*/_react.default.createElement(_VerticalNav.default, {
          selectedId: this.props._selectedId,
          collapsed: this.state.collapsed,
          id: this.subnavId,
          items: this.subnavItems(),
          component: this.props.component,
          nested: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var classes = (0, _classnames.default)('ds-c-vertical-nav__item', this.props.className);
      return /*#__PURE__*/_react.default.createElement("li", {
        className: classes
      }, /*#__PURE__*/_react.default.createElement(_VerticalNavItemLabel.default, {
        ariaCollapsedStateButtonLabel: this.props.ariaCollapsedStateButtonLabel,
        ariaExpandedStateButtonLabel: this.props.ariaExpandedStateButtonLabel,
        collapsed: this.state.collapsed,
        component: this.props.component,
        label: this.props.label,
        hasSubnav: this.hasSubnav(),
        onClick: this.handleLabelClick,
        selected: this.isSelected(),
        subnavId: this.subnavId,
        url: this.props.url
      }), this.renderSubnav());
    }
  }]);

  return VerticalNavItem;
}(_react.default.PureComponent);

exports.VerticalNavItem = VerticalNavItem;
VerticalNavItem.defaultProps = {
  // Unfortunately, we're defining these default ARIA props here and in
  // VerticalNavItemLabel. We define them here so they show in the docs.
  // TODO(sawyer): Update react-docgen so we don't have to do this
  ariaCollapsedStateButtonLabel: 'Expand sub-navigation',
  ariaExpandedStateButtonLabel: 'Collapse sub-navigation',
  defaultCollapsed: false
};
VerticalNavItem.propTypes = {
  /**
   * @hide-prop This gets passed through from the parent VerticalNav to a nested VerticalNav
   */
  _selectedId: _propTypes.default.string,

  /**
   * Aria label for the toggle button when the sub-navigation is collapsed
   */
  ariaCollapsedStateButtonLabel: _propTypes.default.string,

  /**
   * Aria label for the toggle button when the sub-navigation is expanded
   */
  ariaExpandedStateButtonLabel: _propTypes.default.string,

  /**
   * Additional classes to be added to the root element
   */
  className: _propTypes.default.string,

  /**
   * When provided, this will render the passed in component. This is useful when
   * integrating with React Router's `<Link>` or using your own custom component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.elementType, _propTypes.default.func]),

  /**
   * Whether or not the item's sub-navigation is in a collapsed state by default
   */
  defaultCollapsed: _propTypes.default.bool,

  /**
   * Called when the link is clicked, with the following arguments:
   * [`SyntheticEvent`](https://facebook.github.io/react/docs/events.html),
   * `id`, `url`.
   *
   * This takes precedence over the `VerticalNav` `onLinkClick` prop
   */
  onClick: _propTypes.default.func,

  /**
   * Called when this item's subnav is collapsed or expanded, with the
   * following arguments: `id`, `collapsed`
   */
  onSubnavToggle: _propTypes.default.func,

  /**
   * Optional identifier. This can be handy if you're passing in an
   * `onClick` handler. A unique ID will be generated if one isn't provided.
   */
  id: _propTypes.default.string,

  /**
   * An array of nested `VerticalNavItem` data objects to be rendered in a
   * sub-navigation list.
   */
  items: _propTypes.default.arrayOf(_propTypes.default.shape),

  /**
   * Text to render for this nav item
   */
  label: _propTypes.default.node.isRequired,

  /**
   * A URL to navigate to if this item is a link
   */
  url: _propTypes.default.string,

  /**
   * If this item is currently selected
   */
  selected: _propTypes.default.bool
};
var _default = VerticalNavItem;
exports.default = _default;