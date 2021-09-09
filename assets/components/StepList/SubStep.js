"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.stepShape = exports.SubStep = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _StepLink = _interopRequireDefault(require("./StepLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SubStep = function SubStep(_ref) {
  var step = _ref.step,
      props = _objectWithoutProperties(_ref, ["step"]);

  return /*#__PURE__*/_react.default.createElement("li", {
    className: "ds-c-substep"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ds-c-substep__heading"
  }, step.title || step.heading), (step.completed || step.started) && /*#__PURE__*/_react.default.createElement(_StepLink.default, {
    component: step.component,
    href: step.href,
    stepId: step.id,
    screenReaderText: step.title || step.heading,
    onClick: step.onClick || props.onStepLinkClick,
    className: "ds-c-substep__edit"
  }, step.linkText || props.editText), step.steps && props.showSubSubSteps && /*#__PURE__*/_react.default.createElement("ul", null, step.steps.map(function (s, i) {
    return /*#__PURE__*/_react.default.createElement(SubStep, _extends({
      step: s,
      key: s.id || i
    }, props));
  })));
}; // Duplication of stepShape in `StepList`, for react2dts


exports.SubStep = SubStep;
var stepShape = {
  id: _propTypes.default.string,
  href: _propTypes.default.string.isRequired,
  title: _propTypes.default.string,
  // [Deprecated]
  heading: _propTypes.default.string.isRequired,
  headingLevel: _propTypes.default.oneOf(['1', '2', '3', '4', '5']),
  description: _propTypes.default.string,
  linkText: _propTypes.default.string,
  completed: _propTypes.default.bool,
  started: _propTypes.default.bool,
  isNextStep: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  component: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func])
};
exports.stepShape = stepShape;
SubStep.propTypes = {
  step: _propTypes.default.shape(stepShape).isRequired,
  onStepLinkClick: _propTypes.default.func,
  showSubSubSteps: _propTypes.default.bool,
  editText: _propTypes.default.string.isRequired
};
var _default = SubStep;
exports.default = _default;