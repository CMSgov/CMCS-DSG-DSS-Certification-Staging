import _pt from "prop-types";
import React from 'react';
import classNames from 'classnames';

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


export var Accordion = function Accordion(_ref) {
  var bordered = _ref.bordered,
      children = _ref.children,
      className = _ref.className;
  var classes = classNames('ds-c-accordion', bordered && 'ds-c-accordion--bordered', className);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    React.createElement("div", {
      onKeyDown: handleKeyDown,
      className: classes
    }, children)
  );
};
Accordion.propTypes = {
  /**
     * Applies a border to the accordion content.
     */
  bordered: _pt.bool,
  children: _pt.node,

  /**
     * Class to be applied to the outer `<div>` that contains all accordion items.
     */
  className: _pt.string
};
export default Accordion;