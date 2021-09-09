"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.stepShape = exports.Step = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _StepLink = _interopRequireDefault(require("./StepLink"));

var _SubStep = _interopRequireDefault(require("./SubStep"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Step = function Step(_ref) {
  var step = _ref.step,
      props = _objectWithoutProperties(_ref, ["step"]);

  if (process.env.NODE_ENV !== 'production') {
    if (step.title) {
      console.warn("[Deprecated]: Please remove the 'title' prop the <StepList> step object, use 'heading' instead. This prop has been renamed and will be removed in a future release.");
    }

    if (!step.title && !step.heading) {
      console.warn("Please provide a 'heading' prop in the <StepList> step object, it is a required prop.");
    }
  }

  var getAriaLabel = function getAriaLabel(text) {
    var isValidTemplate = text && text.length > 0;
    var label = isValidTemplate ? text.replace('%{step}', step.heading || step.title) : undefined;
    return {
      'aria-label': label
    };
  };

  var Heading = "h".concat(step.headingLevel || '2');
  var start = step.isNextStep;
  var resume = step.started && !step.completed;
  var className = (0, _classnames.default)('ds-c-step', {
    'ds-c-step--current': start || resume,
    'ds-c-step--completed': step.completed
  });
  var contentClassName = (0, _classnames.default)('ds-c-step__content', {
    'ds-c-step__content--with-content': step.description || step.steps
  });
  var actionsLabelText = props.actionsLabelText,
      substepsLabelText = props.substepsLabelText,
      descriptionLabelText = props.descriptionLabelText;
  var actionsLabel = getAriaLabel(actionsLabelText);
  var substepsLabel = getAriaLabel(substepsLabelText);
  var descriptionLabel = getAriaLabel(descriptionLabelText);
  var linkLabel;

  if (step.completed && !step.steps) {
    linkLabel = step.linkText || props.editText;
  } else if (start) {
    linkLabel = step.linkText || props.startText;
  } else if (resume) {
    linkLabel = step.linkText || props.resumeText;
  }

  var linkClassName;

  if (start || resume) {
    linkClassName = 'ds-c-button ds-c-button--primary';
  } // TODO: make heading required after removing title


  return /*#__PURE__*/_react.default.createElement("li", {
    className: className
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: contentClassName
  }, /*#__PURE__*/_react.default.createElement(Heading, {
    className: "ds-c-step__heading"
  }, step.heading || step.title), step.description && /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "ds-c-step__description"
  }, descriptionLabel), step.description), step.steps && /*#__PURE__*/_react.default.createElement("ol", _extends({
    className: "ds-c-step__substeps"
  }, substepsLabel), step.steps.map(function (s, i) {
    return /*#__PURE__*/_react.default.createElement(_SubStep.default, _extends({
      step: _objectSpread(_objectSpread({}, s), {
        component: step.component || s.component
      }),
      key: s.id || i
    }, props));
  }))), /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "ds-c-step__actions"
  }, actionsLabel), step.completed && /*#__PURE__*/_react.default.createElement("div", {
    className: "ds-c-step__completed-text"
  }, props.completedText), linkLabel && /*#__PURE__*/_react.default.createElement(_StepLink.default, {
    component: step.component,
    href: step.href,
    stepId: step.id,
    screenReaderText: step.heading || step.title,
    onClick: step.onClick || props.onStepLinkClick,
    className: linkClassName
  }, linkLabel)));
}; // Define the shape of a single step so we can recursively define the shape


exports.Step = Step;
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
stepShape.steps = _propTypes.default.arrayOf(_propTypes.default.shape(stepShape));
Step.propTypes = {
  step: _propTypes.default.shape(stepShape).isRequired,
  onStepLinkClick: _propTypes.default.func,
  showSubSubSteps: _propTypes.default.bool,
  completedText: _propTypes.default.string.isRequired,
  editText: _propTypes.default.string.isRequired,
  resumeText: _propTypes.default.string.isRequired,
  startText: _propTypes.default.string.isRequired,
  actionsLabelText: _propTypes.default.string,
  descriptionLabelText: _propTypes.default.string,
  substepsLabelText: _propTypes.default.string
};
var _default = Step;
exports.default = _default;