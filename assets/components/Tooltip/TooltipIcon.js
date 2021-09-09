"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TooltipIcon = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InformationIcon = function InformationIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("path", {
    d: "M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm1-3.7V6.4H7v5.9h2zM7 4.9c0 .6.3.9 1 .9s1-.3 1-.9c0-.3-.1-.5-.2-.7-.2-.1-.5-.2-.8-.2-.3 0-.6.1-.8.2-.1.2-.2.4-.2.7z"
  }));
};

InformationIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg"
};

var TooltipIcon = function TooltipIcon(props) {
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "ds-c-tooltip-icon__container"
  }, /*#__PURE__*/_react.default.createElement(InformationIcon, {
    className: (0, _classnames.default)('ds-c-tooltip-icon', {
      'ds-c-tooltip-icon--inverse': props.inversed
    })
  }));
};

exports.TooltipIcon = TooltipIcon;
TooltipIcon.propTypes = {
  inversed: _propTypes.default.bool
};
var _default = TooltipIcon;
exports.default = _default;