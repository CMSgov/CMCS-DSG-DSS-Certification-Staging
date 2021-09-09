"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Tabs = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Tab = _interopRequireDefault(require("./Tab"));

var _TabPanel = _interopRequireDefault(require("./TabPanel"));

var _classnames = _interopRequireDefault(require("classnames"));

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/** CONSTANTS
 * Adding in the constant values for keycodes
 * to handle onKeyDown events
 */
var LEFT_ARROW = 'ArrowLeft';
var RIGHT_ARROW = 'ArrowRight';
/**
 * Get the id of the first TabPanel child
 * @param {Object} props
 * @return {String} The id
 */

function getDefaultSelectedId(props) {
  var selectedId; // TODO: Use the panelChildren method to pass in an array
  // of panels, instead of doing it here...

  _react.default.Children.forEach(props.children, function (child) {
    if (isTabPanel(child) && !selectedId) {
      selectedId = child.props.id;
    }
  });

  return selectedId;
}
/**
 * Generate an id for a panel's associated tab if one doesn't yet exist
 * @param {Object} TabPanel component
 * @return {String} Tab ID
 */


function panelTabId(panel) {
  return panel.props.tabId || "ds-c-tabs__item--".concat(panel.props.id);
}
/**
 * Determine if a React component is a TabPanel
 * @param {React.Node} child - a React component
 * @return {Boolean} Is this a TabPanel component?
 */


function isTabPanel(child) {
  var componentName = (0, _get.default)(child, 'type.displayName') || (0, _get.default)(child, 'type.name'); // Check child.type first and as a fallback, check child.type.displayName follow by child.type.name

  return child && (child.type === _TabPanel.default || componentName === 'TabPanel');
}

var Tabs = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Tabs, _React$PureComponent);

  var _super = _createSuper(Tabs);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _super.call(this, props);
    var selectedId;

    if ('defaultSelectedId' in props) {
      selectedId = props.defaultSelectedId;
    } else {
      selectedId = getDefaultSelectedId(props);
    }

    _this.handleTabClick = _this.handleTabClick.bind(_assertThisInitialized(_this));
    _this.handleTabKeyDown = _this.handleTabKeyDown.bind(_assertThisInitialized(_this));
    _this.state = {
      selectedId: selectedId
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      if (this.state.selectedId !== prevState.selectedId) {
        if (typeof this.props.onChange === 'function') {
          this.props.onChange(this.state.selectedId, prevState.selectedId);
        }

        this.tabs[this.state.selectedId].focus();
        this.replaceState(this.tabs[this.state.selectedId].href);
      }
    }
  }, {
    key: "handleTabClick",
    value: function handleTabClick(evt, panelId) {
      evt.preventDefault();
      this.setState({
        selectedId: panelId
      });
    }
  }, {
    key: "handleTabKeyDown",
    value: function handleTabKeyDown(evt, panelId) {
      var tabs = this.panelChildren();
      var tabIndex = tabs.findIndex(function (elem) {
        return elem.props.id === panelId;
      });
      var target;

      switch (evt.key) {
        case LEFT_ARROW:
          evt.preventDefault();

          if (tabIndex === 0) {
            target = tabs[tabs.length - 1].props.id;
          } else {
            target = tabs[tabIndex - 1].props.id;
          }

          this.setState({
            selectedId: target
          });
          break;

        case RIGHT_ARROW:
          evt.preventDefault();

          if (tabIndex === tabs.length - 1) {
            target = tabs[0].props.id;
          } else {
            target = tabs[tabIndex + 1].props.id;
          }

          this.setState({
            selectedId: target
          });
          break;

        default:
          break;
      }
    }
    /**
     * Filter children and return only TabPanel components
     */

  }, {
    key: "panelChildren",
    value: function panelChildren() {
      return _react.default.Children.toArray(this.props.children).filter(isTabPanel);
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this2 = this;

      return _react.default.Children.map(this.props.children, function (child) {
        if (isTabPanel(child)) {
          // Extend props on panels before rendering. Also removes any props
          // that don't need passed into TabPanel but are used to generate
          // the Tab components
          return /*#__PURE__*/_react.default.cloneElement(child, {
            selected: _this2.state.selectedId === child.props.id,
            tab: undefined,
            tabHref: undefined,
            tabId: panelTabId(child)
          });
        }

        return child;
      });
    }
  }, {
    key: "renderTabs",
    value: function renderTabs() {
      var _this3 = this;

      var panels = this.panelChildren();
      var listClasses = (0, _classnames.default)('ds-c-tabs', this.props.tablistClassName);
      this.tabs = {};
      var tabs = panels.map(function (panel) {
        return /*#__PURE__*/_react.default.createElement(_Tab.default, {
          className: panel.props.tabClassName,
          href: panel.props.tabHref,
          disabled: panel.props.disabled,
          id: panelTabId(panel),
          key: panel.key,
          onClick: _this3.handleTabClick,
          onKeyDown: _this3.handleTabKeyDown,
          panelId: panel.props.id,
          ref: function ref(tab) {
            _this3.tabs[panel.props.id] = tab;
          },
          selected: _this3.state.selectedId === panel.props.id
        }, panel.props.tab);
      });
      return /*#__PURE__*/_react.default.createElement("div", {
        className: listClasses,
        role: "tablist"
      }, tabs);
    }
    /**
     * Update the URL in the browser without adding a new entry to the history.
     * @param {String} url - Absolute or relative URL
     */

  }, {
    key: "replaceState",
    value: function replaceState(url) {
      if (window.history) {
        window.history.replaceState({}, document.title, url);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, this.renderTabs(), this.renderChildren());
    }
  }]);

  return Tabs;
}(_react.default.PureComponent);

exports.Tabs = Tabs;
Tabs.propTypes = {
  /**
   * Must only contain `TabPanel` components
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Sets the initial selected `TabPanel` state. If this isn't set, the first
   * `TabPanel` will be selected.
   */
  defaultSelectedId: _propTypes.default.string,

  /**
   * A callback function that's invoked when the selected tab is changed.
   * `(selectedId, prevSelectedId) => void`
   */
  onChange: _propTypes.default.func,

  /**
   * Additional classes to be added to the component wrapping the tabs
   */
  tablistClassName: _propTypes.default.string
};
var _default = Tabs;
exports.default = _default;