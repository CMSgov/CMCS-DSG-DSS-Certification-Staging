"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Badge = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Badge = function Badge(props) {
  var className = props.className,
      children = props.children,
      size = props.size,
      variation = props.variation,
      others = _objectWithoutProperties(props, ["className", "children", "size", "variation"]);

  var sizeClasses = {
    big: 'ds-u-font-size--base'
  };
  var variationClass = variation && "ds-c-badge--".concat(variation);
  var classes = (0, _classnames.default)('ds-c-badge', variationClass, sizeClasses[size], className);
  return /*#__PURE__*/_react.default.createElement("span", _extends({
    className: classes
  }, others), children);
};

exports.Badge = Badge;
Badge.propTypes = {
  /**
   * Additional classes to be added to the root badge element.
   * Useful for adding utility classes.
   */
  className: _propTypes.default.string,

  /**
   * Label text or HTML.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired,

  /**
   * Sets the font size of the Badge
   */
  size: _propTypes.default.oneOf(['big']),

  /**
   * A string corresponding to the badge-component variation classes
   */
  variation: _propTypes.default.oneOf(['info', 'success', 'warn', 'alert'])
};
var _default = Badge;
exports.default = _default;