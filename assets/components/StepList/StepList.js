"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StepList = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Step = _interopRequireDefault(require("./Step"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StepList = function StepList(_ref) {
  var steps = _ref.steps,
      props = _objectWithoutProperties(_ref, ["steps"]);

  return /*#__PURE__*/_react.default.createElement("ol", {
    className: "ds-c-step-list ds-u-margin-top--4"
  }, steps.map(function (step, i) {
    return /*#__PURE__*/_react.default.createElement(_Step.default, _extends({
      step: _objectSpread(_objectSpread({}, step), {
        component: props.component || step.component
      }),
      key: step.id || i
    }, props));
  }));
};

exports.StepList = StepList;
StepList.defaultProps = {
  showSubSubSteps: false,
  completedText: 'Completed',
  editText: 'Edit',
  resumeText: 'Resume',
  startText: 'Start',
  actionsLabelText: 'Primary actions for %{step}',
  descriptionLabelText: 'Description for %{step}',
  substepsLabelText: 'Secondary actions for %{step}'
};
StepList.propTypes = {
  /**
   * An array of [step objects]({{root}}/patterns/step-list/#patterns.step-list.step-object) that contain
   * text, state, [link/button URLs]({{root}}/patterns/step-list/#patterns.step-list.buttons) and other info needed to render steps.
   */
  steps: _propTypes.default.arrayOf(_propTypes.default.shape).isRequired,

  /**
   * When provided, this will render the passed in component for all link elements. This is useful when
   * integrating with React Router's `<Link>` or using your own custom component.
   * If more specific control is needed, each `step` object also accepts a `component` prop.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.elementType, _propTypes.default.func]),

  /**
   * Whether or not to render a substep's substeps.
   */
  showSubSubSteps: _propTypes.default.bool,

  /**
   * Function called when a step's Edit, Start, or Resume button/link is
   * clicked. The step's `href` property will be passed as a parameter.
   */
  onStepLinkClick: _propTypes.default.func,
  completedText: _propTypes.default.string,
  editText: _propTypes.default.string,
  resumeText: _propTypes.default.string,
  startText: _propTypes.default.string,

  /**
   * A template string for the aria-label describing a step's actions where
   * the substring `%{step}` is replaced with that step's `heading`.
   */
  actionsLabelText: _propTypes.default.string,

  /**
   * A template string for the aria-label for a step's description where
   * the substring `%{step}` is replaced with that step's `heading`.
   */
  descriptionLabelText: _propTypes.default.string,

  /**
   * A template string for the aria-label describing a step's substeps where
   * the substring `%{step}` is replaced with that step's `heading`.
   */
  substepsLabelText: _propTypes.default.string
};
var _default = StepList;
exports.default = _default;