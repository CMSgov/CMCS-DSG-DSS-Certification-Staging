"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Spinner = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner(props) {
  var className = (0, _classnames.default)('ds-c-spinner', props.size && "ds-c-spinner--".concat(props.size), props.inversed && 'ds-u-fill--background-inverse ds-u-color--base-inverse', props.filled && 'ds-c-spinner--filled', props.className);
  return /*#__PURE__*/_react.default.createElement("span", {
    className: className,
    "aria-valuetext": props['aria-valuetext'],
    role: props.role
  });
};

exports.Spinner = Spinner;
Spinner.propTypes = {
  /** The text announced to screen readers */
  'aria-valuetext': _propTypes.default.string,

  /**
   * Additional classes to be added to the spinner element.
   * Useful for adding utility classes.
   */
  className: _propTypes.default.string,

  /** Applies the inverse theme styling */
  inversed: _propTypes.default.bool,

  /** Adds a background behind the spinner for extra contrast */
  filled: _propTypes.default.bool,

  /** Landmark role so the spinner can receive keyboard focus */
  role: _propTypes.default.string,

  /** Smaller or larger variant */
  size: _propTypes.default.oneOf(['small', 'big'])
};
Spinner.defaultProps = {
  'aria-valuetext': 'Loading',
  role: 'progressbar'
};
var _default = Spinner;
exports.default = _default;