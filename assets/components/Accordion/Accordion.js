"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Accordion = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleKeyDown = function handleKeyDown(e) {
  var target = e.target;
  var accordionElement = e.currentTarget;

  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    var triggers = Array.prototype.slice.call(accordionElement.querySelectorAll('.ds-c-accordion__button'));
    var direction = e.key === 'ArrowDown' ? 1 : -1;
    var index = triggers.indexOf(target);
    var length = triggers.length;
    var newIndex = (index + length + direction) % length;
    triggers[newIndex].focus();
    e.preventDefault();
  }
}; // eslint-disable-next-line react/prop-types


var Accordion = function Accordion(_ref) {
  var bordered = _ref.bordered,
      children = _ref.children,
      className = _ref.className;
  var classes = (0, _classnames.default)('ds-c-accordion', bordered && 'ds-c-accordion--bordered', className);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    _react.default.createElement("div", {
      onKeyDown: handleKeyDown,
      className: classes
    }, children)
  );
};

exports.Accordion = Accordion;
Accordion.propTypes = {
  /**
     * Applies a border to the accordion content.
     */
  bordered: _propTypes.default.bool,
  children: _propTypes.default.node,

  /**
     * Class to be applied to the outer `<div>` that contains all accordion items.
     */
  className: _propTypes.default.string
};
var _default = Accordion;
exports.default = _default;