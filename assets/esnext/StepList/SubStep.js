function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import StepLink from './StepLink';
export var SubStep = function SubStep(_ref) {
  var step = _ref.step,
      props = _objectWithoutProperties(_ref, ["step"]);

  return /*#__PURE__*/React.createElement("li", {
    className: "ds-c-substep"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-c-substep__heading"
  }, step.title || step.heading), (step.completed || step.started) && /*#__PURE__*/React.createElement(StepLink, {
    component: step.component,
    href: step.href,
    stepId: step.id,
    screenReaderText: step.title || step.heading,
    onClick: step.onClick || props.onStepLinkClick,
    className: "ds-c-substep__edit"
  }, step.linkText || props.editText), step.steps && props.showSubSubSteps && /*#__PURE__*/React.createElement("ul", null, step.steps.map(function (s, i) {
    return /*#__PURE__*/React.createElement(SubStep, _extends({
      step: s,
      key: s.id || i
    }, props));
  })));
}; // Duplication of stepShape in `StepList`, for react2dts

export var stepShape = {
  id: PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  // [Deprecated]
  heading: PropTypes.string.isRequired,
  headingLevel: PropTypes.oneOf(['1', '2', '3', '4', '5']),
  description: PropTypes.string,
  linkText: PropTypes.string,
  completed: PropTypes.bool,
  started: PropTypes.bool,
  isNextStep: PropTypes.bool,
  onClick: PropTypes.func,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
};
SubStep.propTypes = {
  step: PropTypes.shape(stepShape).isRequired,
  onStepLinkClick: PropTypes.func,
  showSubSubSteps: PropTypes.bool,
  editText: PropTypes.string.isRequired
};
export default SubStep;