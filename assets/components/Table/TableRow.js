"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TableRow = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableRow = function TableRow(_ref) {
  var children = _ref.children,
      _isTableHeadChild = _ref._isTableHeadChild,
      _stackable = _ref._stackable,
      tableRowProps = _objectWithoutProperties(_ref, ["children", "_isTableHeadChild", "_stackable"]);

  var renderChildren = function renderChildren() {
    return _react.default.Children.map(children, function (child) {
      // Extend props before rendering.
      if (child && child.props) {
        return /*#__PURE__*/_react.default.cloneElement(child, {
          _isTableHeadChild: _isTableHeadChild,
          _stackable: _stackable
        });
      }

      return child;
    });
  };

  return /*#__PURE__*/_react.default.createElement("tr", _extends({
    role: "row"
  }, tableRowProps), _isTableHeadChild || _stackable ? renderChildren() : children);
};

exports.TableRow = TableRow;
TableRow.propTypes = {
  /**
   * The table row contents, usually `TableCell`.
   */
  children: _propTypes.default.node,

  /**
   * @hide-prop This gets set from the parent `TableHead` component
   */
  _isTableHeadChild: _propTypes.default.bool,

  /**
   * @hide-prop This gets set from the parent `Table` component
   */
  _stackable: _propTypes.default.bool
};
var _default = TableRow;
exports.default = _default;