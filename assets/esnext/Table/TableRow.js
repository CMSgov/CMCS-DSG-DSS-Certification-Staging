function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
export var TableRow = function TableRow(_ref) {
  var children = _ref.children,
      _isTableHeadChild = _ref._isTableHeadChild,
      _stackable = _ref._stackable,
      tableRowProps = _objectWithoutProperties(_ref, ["children", "_isTableHeadChild", "_stackable"]);

  var renderChildren = function renderChildren() {
    return React.Children.map(children, function (child) {
      // Extend props before rendering.
      if (child && child.props) {
        return /*#__PURE__*/React.cloneElement(child, {
          _isTableHeadChild: _isTableHeadChild,
          _stackable: _stackable
        });
      }

      return child;
    });
  };

  return /*#__PURE__*/React.createElement("tr", _extends({
    role: "row"
  }, tableRowProps), _isTableHeadChild || _stackable ? renderChildren() : children);
};
TableRow.propTypes = {
  /**
   * The table row contents, usually `TableCell`.
   */
  children: PropTypes.node,

  /**
   * @hide-prop This gets set from the parent `TableHead` component
   */
  _isTableHeadChild: PropTypes.bool,

  /**
   * @hide-prop This gets set from the parent `Table` component
   */
  _stackable: PropTypes.bool
};
export default TableRow;