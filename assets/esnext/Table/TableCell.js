function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
export var TableCell = function TableCell(_ref) {
  var align = _ref.align,
      children = _ref.children,
      className = _ref.className,
      component = _ref.component,
      headers = _ref.headers,
      id = _ref.id,
      scope = _ref.scope,
      stackedTitle = _ref.stackedTitle,
      stackedClassName = _ref.stackedClassName,
      _isTableHeadChild = _ref._isTableHeadChild,
      _stackable = _ref._stackable,
      tableCellProps = _objectWithoutProperties(_ref, ["align", "children", "className", "component", "headers", "id", "scope", "stackedTitle", "stackedClassName", "_isTableHeadChild", "_stackable"]);

  if (process.env.NODE_ENV !== 'production' && _stackable) {
    // Provide warning message for `id` prop for cells with parent component of `TableHead`
    if (_isTableHeadChild) {
      if (!id) {
        console.warn('The id prop in `TableCell` is required for stackable tables. This prop is needed to assign an id to a heading in the responsive stacked view.');
      }
    } else {
      // Provide warning message for stacktable `headers` and `stackedTitle` props
      if (!headers) {
        console.warn('The headers prop in `TableCell` is required for stackable tables. This prop is needed to associate the headings with data cells in the responsive stacked view.');
      }

      if (!stackedTitle) {
        console.warn('The stackedTitle prop in `TableCell` is required for stackable tables. This prop is displayed for the data cell in the responsive stacked view.');
      }
    }
  }

  var Component;

  if (component) {
    Component = component;
  } else {
    Component = _isTableHeadChild ? 'th' : 'td';
  }

  var role = 'cell';

  if (_isTableHeadChild) {
    role = 'columnheader';
  } else if (component === 'th') {
    role = 'rowheader';
  }

  var defaultScope = scope;

  if (!defaultScope && _isTableHeadChild) {
    defaultScope = 'col';
  }

  var alignClassName = align ? "ds-u-text-align--".concat(align) : null;
  var classes = classNames(alignClassName, className); // The data attributes `data-title` is access by CSS to generates row header content for stacked table

  return /*#__PURE__*/React.createElement(Component, _extends({
    className: classes,
    role: role,
    scope: defaultScope,
    headers: headers,
    id: id,
    "data-title": stackedTitle
  }, tableCellProps), children);
};
TableCell.defaultProps = {
  align: 'left'
};
TableCell.propTypes = {
  /**
   * Set the text-align on the table cell content.
   */
  align: PropTypes.oneOf(['center', 'left', 'right']),

  /**
   * The table cell contents.
   */
  children: PropTypes.node,

  /**
   * Additional classes to be added to the row element.
   */
  className: PropTypes.string,

  /**
   * When provided, this will render the passed in component as the HTML element.
   * If this prop is undefined, it renders a `<th>` element if the parent component is `TableHead`,
   * otherwise, it renders a `<td>` element.
   */
  component: PropTypes.oneOf(['td', 'th']),

  /**
   * `TableCell` must define a `headers` prop for stackable tables with a `<td>` element.
   * The `headers` prop associates header and data cells for screen readers.
   * `headers` consist of a list of space-separated ids that each correspond to a `<td>` element.
   * [Read more about the headers attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#Attributes).
   */
  headers: PropTypes.string,

  /**
   * `TableCell` must define an `id` prop for stackable tables with a `<th>` element.
   * The `id` prop associates header and data cells for screen readers.
   */
  id: PropTypes.string,

  /**
   * If this prop is undefined, the component sets a scope attribute of `col` when the parent
   * component is `TableHead` to identify the header cell is a header for a column.
   */
  scope: PropTypes.oneOf(['row', 'col', 'rowgroup', 'colgroup']),

  /**
   * Additional classes to be added to the stacked Title element.
   */
  stackedClassName: PropTypes.string,

  /**
   * Table data cell's corresponding header title, this stacked title is displayed as the row header
   * when a responsive table is vertically stacked.
   */
  stackedTitle: PropTypes.string,

  /**
   * @hide-prop This gets set from the parent `TableHead` component
   */
  _isTableHeadChild: PropTypes.bool,

  /**
   * @hide-prop This gets set from the parent `Table` component
   */
  _stackable: PropTypes.bool
};
export default TableCell;