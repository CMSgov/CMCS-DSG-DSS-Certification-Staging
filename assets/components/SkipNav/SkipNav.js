"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkipNav = SkipNav;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SkipNav(_ref) {
  var children = _ref.children,
      href = _ref.href,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement("a", {
    className: "ds-c-skip-nav",
    href: href,
    onClick: onClick
  }, children);
}

SkipNav.defaultProps = {
  children: 'Skip to main content'
};
SkipNav.propTypes = {
  /**
   * Skip nav label
   */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired,

  /**
   * The anchor or target for the link (where the link will jump the user to)
   */
  href: _propTypes.default.string.isRequired,

  /**
   * An onClick handler used for manually setting focus on the content.
   * Sometimes it's necessary to manually set focus, like when an app uses hash
   * routing and element-id links will be mistaken for routes.
   */
  onClick: _propTypes.default.func
};
var _default = SkipNav;
exports.default = _default;