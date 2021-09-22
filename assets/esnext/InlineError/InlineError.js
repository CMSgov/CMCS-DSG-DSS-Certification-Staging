import _pt from "prop-types";
import React from 'react';
import classNames from 'classnames';
/**
 * <InlineError> is an internal component used by <FormLabel> and <FormControl>
 * <InlineError> is also exported for advanced design system use cases, where the internal component can be leveraged to build custom form components
 */

export function InlineError(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      inversed = _ref.inversed;
  var classes = classNames('ds-c-field__error-message', {
    'ds-c-field__error-message--inverse': inversed
  }, className);
  return /*#__PURE__*/React.createElement("span", {
    className: classes,
    id: id,
    role: "alert"
  }, children);
}
InlineError.propTypes = {
  children: _pt.node,
  className: _pt.string,
  id: _pt.string,
  inversed: _pt.bool
};
export default InlineError;