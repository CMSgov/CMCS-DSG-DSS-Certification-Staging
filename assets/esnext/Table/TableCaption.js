function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
export var TableCaption = function TableCaption(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _id = _ref._id,
      _scrollActive = _ref._scrollActive,
      _scrollableNotice = _ref._scrollableNotice,
      tableCaptionProps = _objectWithoutProperties(_ref, ["children", "className", "_id", "_scrollActive", "_scrollableNotice"]);

  var classes = classNames('ds-c-table__caption', className);
  return /*#__PURE__*/React.createElement("caption", _extends({
    className: classes,
    id: _id
  }, tableCaptionProps), children, _scrollActive && _scrollableNotice);
}; // Set component name to make child.type.displayName available to other components (eg. Table)

TableCaption.displayName = 'TableCaption';
TableCaption.propTypes = {
  /**
   * The table caption contents.
   */
  children: PropTypes.node,

  /**
   * Additional classes to be added to the caption element.
   */
  className: PropTypes.string,

  /**
   * @hide-prop This gets passed from the parent `Table` component when the table `scrollable` prop is set.
   */
  _id: PropTypes.string,

  /**
   * @hide-prop This gets passed from the parent `Table` component when the table `scrollable` prop is set.
   */
  _scrollActive: PropTypes.bool,

  /**
   * @hide-prop This gets passed from the parent `Table` component when the table `scrollable` prop is set.
   */
  _scrollableNotice: PropTypes.node
};
export default TableCaption;