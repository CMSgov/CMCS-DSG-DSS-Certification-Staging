var InformationIcon = function InformationIcon(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm1-3.7V6.4H7v5.9h2zM7 4.9c0 .6.3.9 1 .9s1-.3 1-.9c0-.3-.1-.5-.2-.7-.2-.1-.5-.2-.8-.2-.3 0-.6.1-.8.2-.1.2-.2.4-.2.7z"
  }));
};

InformationIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg"
};
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
export var TooltipIcon = function TooltipIcon(props) {
  return /*#__PURE__*/React.createElement("span", {
    className: "ds-c-tooltip-icon__container"
  }, /*#__PURE__*/React.createElement(InformationIcon, {
    className: classNames('ds-c-tooltip-icon', {
      'ds-c-tooltip-icon--inverse': props.inversed
    })
  }));
};
TooltipIcon.propTypes = {
  inversed: PropTypes.bool
};
export default TooltipIcon;