"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UsaBanner = void 0;

var _en = _interopRequireDefault(require("../../locale/en.json"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _es = _interopRequireDefault(require("../../locale/es.json"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.uniqueid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var IconDotGov = function IconDotGov(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#2378c3",
    d: "M36.5 20.91v1.36h-1.35a.71.71 0 0 1-.73.68H18.23a.71.71 0 0 1-.73-.68h-1.36v-1.36l10.18-4.07zm0 13.57v1.36H16.14v-1.36a.71.71 0 0 1 .73-.68h18.9a.71.71 0 0 1 .73.68zM21.57 23.62v8.14h1.36v-8.14h2.71v8.14H27v-8.14h2.71v8.14h1.36v-8.14h2.71v8.14h.63a.71.71 0 0 1 .73.68v.68H17.5v-.67a.71.71 0 0 1 .73-.68h.63v-8.15h2.71z"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    fill: "none",
    stroke: "#005ea2",
    strokeMiterlimit: "10",
    cx: "27",
    cy: "27.12",
    r: "26"
  }));
};

IconDotGov.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 54 54"
};

var IconFlag = function IconFlag(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("title", null, "U.S. flag"), /*#__PURE__*/_react.default.createElement("desc", null, "U.S. flag"), /*#__PURE__*/_react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#FFF",
    d: "M0 0h16v11H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#DB3E1F",
    d: "M8 0h8v1H8z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#1E33B1",
    d: "M0 0h8v7H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#DB3E1F",
    d: "M8 2h8v1H8zm0 2h8v1H8zm0 2h8v1H8zM0 8h16v1H0zm0 2h16v1H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#FFF",
    d: "M1 1h1v1H1zm1 2h1v1H2zM1 5h1v1H1zm2-4h1v1H3zm1 2h1v1H4zM3 5h1v1H3zm2-4h1v1H5zm1 2h1v1H6zM5 5h1v1H5z"
  })));
};

IconFlag.defaultProps = {
  width: "16",
  height: "11",
  xmlns: "http://www.w3.org/2000/svg"
};

var IconFlagSpanish = function IconFlagSpanish(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("title", null, "U.S. Bandera"), /*#__PURE__*/_react.default.createElement("desc", null, "U.S. Bandera"), /*#__PURE__*/_react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#FFF",
    d: "M0 0h16v11H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#DB3E1F",
    d: "M8 0h8v1H8z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#1E33B1",
    d: "M0 0h8v7H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#DB3E1F",
    d: "M8 2h8v1H8zm0 2h8v1H8zm0 2h8v1H8zM0 8h16v1H0zm0 2h16v1H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#FFF",
    d: "M1 1h1v1H1zm1 2h1v1H2zM1 5h1v1H1zm2-4h1v1H3zm1 2h1v1H4zM3 5h1v1H3zm2-4h1v1H5zm1 2h1v1H6zM5 5h1v1H5z"
  })));
};

IconFlagSpanish.defaultProps = {
  width: "16",
  height: "11",
  xmlns: "http://www.w3.org/2000/svg"
};

var IconHttps = function IconHttps(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#719f2a",
    d: "M34.72 34.84a1.29 1.29 0 0 1-1.29 1.29H20.57a1.29 1.29 0 0 1-1.29-1.29v-7.72a1.29 1.29 0 0 1 1.29-1.29H21v-2.57a6 6 0 0 1 12 0v2.57h.43a1.29 1.29 0 0 1 1.29 1.29v7.72zm-4.29-9v-2.58a3.43 3.43 0 0 0-6.86 0v2.57h6.86z"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    fill: "none",
    stroke: "#538200",
    strokeMiterlimit: "10",
    cx: "27",
    cy: "27.12",
    r: "26"
  }));
};

IconHttps.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 54 54"
};

var IconLock = function IconLock(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("title", null, "Lock"), /*#__PURE__*/_react.default.createElement("desc", null, "A locked padlock"), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
  }));
};

IconLock.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 52 64"
};

var IconLockSpanish = function IconLockSpanish(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("title", null, "Candado"), /*#__PURE__*/_react.default.createElement("desc", null, "Un candado cerrado"), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
  }));
};

IconLockSpanish.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 52 64"
};

var UsaBanner = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(UsaBanner, _React$PureComponent);

  var _super = _createSuper(UsaBanner);

  function UsaBanner(props) {
    var _this;

    _classCallCheck(this, UsaBanner);

    _this = _super.call(this, props);
    _this.id = props.id || (0, _lodash.default)('gov-banner_');
    _this.state = {
      isBannerOpen: false
    };
    _this.handleToggleBanner = _this.handleToggleBanner.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UsaBanner, [{
    key: "handleToggleBanner",
    value: function handleToggleBanner() {
      this.setState({
        isBannerOpen: !this.state.isBannerOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var t = this.props.locale === 'es' ? _es.default.usaBanner : _en.default.usaBanner;
      var langProp = this.props.locale === 'es' ? 'es' : null;
      var IconFlagComponent = this.props.locale === 'es' ? IconFlagSpanish : IconFlag;
      var IconLockComponent = this.props.locale === 'es' ? IconLockSpanish : IconLock;
      var classes = (0, _classnames.default)('ds-c-usa-banner', this.props.className);
      return /*#__PURE__*/_react.default.createElement("section", {
        className: classes,
        "aria-label": t.bannerLabel,
        lang: langProp
      }, /*#__PURE__*/_react.default.createElement("header", {
        className: "ds-c-usa-banner__header ".concat(this.state.isBannerOpen ? 'ds-c-usa-banner__header--expanded' : '')
      }, /*#__PURE__*/_react.default.createElement("p", {
        className: "ds-c-usa-banner__header-text"
      }, /*#__PURE__*/_react.default.createElement(IconFlagComponent, {
        role: "img",
        className: "ds-c-usa-banner__header-flag",
        focusable: "false"
      })), /*#__PURE__*/_react.default.createElement("p", {
        className: "ds-c-usa-banner__header-text"
      }, /*#__PURE__*/_react.default.createElement("span", null, t.bannerText), /*#__PURE__*/_react.default.createElement("span", {
        className: "ds-c-usa-banner__header-action",
        "aria-hidden": "true"
      }, t.bannerActionText), /*#__PURE__*/_react.default.createElement("button", {
        onClick: this.handleToggleBanner,
        className: "ds-c-usa-banner__button",
        "aria-expanded": this.state.isBannerOpen,
        "aria-controls": this.id
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "ds-c-usa-banner__button-text"
      }, t.bannerActionText)))), /*#__PURE__*/_react.default.createElement("div", {
        className: "ds-c-usa-banner__content",
        id: this.id,
        hidden: !this.state.isBannerOpen
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ds-u-display--flex ds-u-flex-direction--column ds-u-sm-flex-direction--row ds-u-flex-wrap--nowrap"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ds-c-usa-banner__guidance"
      }, /*#__PURE__*/_react.default.createElement(IconDotGov, {
        className: "ds-c-usa-banner__icon",
        "aria-hidden": "true"
      }), /*#__PURE__*/_react.default.createElement("p", {
        className: "ds-c-usa-banner__media-body"
      }, /*#__PURE__*/_react.default.createElement("strong", null, t.domainHeaderText), /*#__PURE__*/_react.default.createElement("br", null), t.domainAText, /*#__PURE__*/_react.default.createElement("strong", null, " ", t.govText, " "), t.domainText)), /*#__PURE__*/_react.default.createElement("div", {
        className: "ds-c-usa-banner__guidance"
      }, /*#__PURE__*/_react.default.createElement(IconHttps, {
        className: "ds-c-usa-banner__icon",
        "aria-hidden": "true"
      }), /*#__PURE__*/_react.default.createElement("p", {
        className: "ds-c-usa-banner__media-body"
      }, /*#__PURE__*/_react.default.createElement("strong", null, t.httpsHeaderText), /*#__PURE__*/_react.default.createElement("br", null), t.httpsAText, /*#__PURE__*/_react.default.createElement("strong", null, " ", t.httpsLockText, " "), " (", ' ', /*#__PURE__*/_react.default.createElement(IconLockComponent, {
        role: "img",
        className: "ds-c-usa-banner__lock-image",
        focusable: "false"
      }), ' ', ") ", t.httpsOrText, /*#__PURE__*/_react.default.createElement("strong", null, " ", t.httpsText, " "), t.httpsDetailText)))));
    }
  }]);

  return UsaBanner;
}(_react.default.PureComponent);

exports.UsaBanner = UsaBanner;
UsaBanner.defaultProps = {
  locale: 'en'
};
UsaBanner.propTypes = {
  /**
   * Additional classes to be added to the root `section` element
   */
  className: _propTypes.default.string,

  /**
   * A unique ID to be applied to the banner content. A unique ID will be generated if one isn't provided.
   */
  id: _propTypes.default.string,

  /**
   *
   * The language the USA Banner will be presented in.
   */
  locale: _propTypes.default.oneOf(['en', 'es'])
};
var _default = UsaBanner;
exports.default = _default;