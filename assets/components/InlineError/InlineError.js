"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineError = InlineError;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InlineError(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      inversed = _ref.inversed;
  var classes = (0, _classnames.default)('ds-c-field__error-message', {
    'ds-c-field__error-message--inverse': inversed
  }, className);
  return /*#__PURE__*/_react.default.createElement("span", {
    className: classes,
    id: id,
    role: "alert"
  }, children);
}

InlineError.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  id: _propTypes.default.string,
  inversed: _propTypes.default.bool
};
var _default = InlineError;
exports.default = _default;