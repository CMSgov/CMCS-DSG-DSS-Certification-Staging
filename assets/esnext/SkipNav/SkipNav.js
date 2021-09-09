import PropTypes from 'prop-types';
import React from 'react';
export function SkipNav(_ref) {
  var children = _ref.children,
      href = _ref.href,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("a", {
    className: "ds-c-skip-nav",
    href: href,
    onClick: onClick
  }, children);
}
SkipNav.defaultProps = {
  children: 'Skip to main content'
};
SkipNav.propTypes = {
  /**
   * Skip nav label
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,

  /**
   * The anchor or target for the link (where the link will jump the user to)
   */
  href: PropTypes.string.isRequired,

  /**
   * An onClick handler used for manually setting focus on the content.
   * Sometimes it's necessary to manually set focus, like when an app uses hash
   * routing and element-id links will be mistaken for routes.
   */
  onClick: PropTypes.func
};
export default SkipNav;