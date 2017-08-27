webpackHotUpdate(5,{

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(191);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(58);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(32);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(33);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(59);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(60);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(565);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(28);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(594);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(638);

var _Layout = __webpack_require__(591);

var _Layout2 = _interopRequireDefault(_Layout);

var _Button = __webpack_require__(659);

var _Button2 = _interopRequireDefault(_Button);

var _Search = __webpack_require__(664);

var _Search2 = _interopRequireDefault(_Search);

var _FBLogin = __webpack_require__(661);

var _FBLogin2 = _interopRequireDefault(_FBLogin);

var _FBFeed = __webpack_require__(662);

var _FBFeed2 = _interopRequireDefault(_FBFeed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/exit/EXITFolder/work/github/social-search/pages/index.js?entry';


var Index = function (_React$Component) {
    (0, _inherits3.default)(Index, _React$Component);

    function Index(props) {
        (0, _classCallCheck3.default)(this, Index);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

        _this.login = function (e) {
            _this.fbLogin.login(_this.loggedIn);
        };

        _this.loggedIn = function () {
            console.log('logged in : ', _this.fbLogin);
            // this.fbFeed.test()
            _this.setState((0, _extends3.default)({}, _this.state, { status: _this.fbLogin.status }));
        };

        _this.notLoggedIn = function () {
            console.log('not logged in : ', _this.fbLogin);
            _this.setState((0, _extends3.default)({}, _this.state, { status: _this.fbLogin.status }));
        };

        _this.loginOrSearch = function () {
            console.log('status', _this.state);
            if (_this.state.status === _FBLogin2.default.CONNECTED) {
                return _react2.default.createElement(_Search2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                });
            }
            return _react2.default.createElement(_Button2.default, { className: 'flex-child login-button', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, 'Search Facebook');
        };

        _this.state = {
            status: _FBLogin2.default.NOT_AUTHORIZED
        };
        return _this;
    }

    (0, _createClass3.default)(Index, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fbLogin = new _FBLogin2.default('1956718501021643', this.loggedIn, this.notLoggedIn);
            this.fbFeed = new _FBFeed2.default(this.fbLogin);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 3344606814,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('div', { className: 'landing', 'data-jsx': 3344606814,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('img', { src: '/static/images/googlelogo_color_272x92dp.png', alt: '', className: 'flex-child logo-icon', 'data-jsx': 3344606814,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }), this.loginOrSearch())), _react2.default.createElement(_style2.default, {
                styleId: 3344606814,
                css: '.landing[data-jsx="3344606814"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:89px}.space[data-jsx="3344606814"]{height:200px}.landing[data-jsx="3344606814"] .flex-child{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.logo-icon[data-jsx="3344606814"]{padding-top:109px}.landing[data-jsx="3344606814"] .login-button{margin-top:40px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EZ0MsQUFHa0QsQUFLQSxBQUdLLEFBR0EsQUFHRixhQVJwQixHQVNBLEVBSEEscURBSEEsR0FSMEIsOEVBQ04sZ0JBQ3BCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9leGl0L0VYSVRGb2xkZXIvd29yay9naXRodWIvc29jaWFsLXNlYXJjaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IHsgaW5pdFN0b3JlIH0gZnJvbSAnLi4vdmlld3MvcmVkdXgvc3RvcmUnXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnfi92aWV3cy9jb21wb25lbnRzL21haW4vTGF5b3V0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICd+L3ZpZXdzL2NvbXBvbmVudHMvc2hhcmVDb21wb25lbnQvYnV0dG9uL0J1dHRvbidcbmltcG9ydCBTZWFyY2ggZnJvbSAnfi92aWV3cy9jb21wb25lbnRzL2luZGV4L1NlYXJjaCdcblxuaW1wb3J0IEZCTG9naW4gZnJvbSAnfi92aWV3cy9saWJzL2ZhY2Vib29rR3JhcGhBUEkvRkJMb2dpbidcbmltcG9ydCBGQkZlZWQgZnJvbSAnfi92aWV3cy9saWJzL2ZhY2Vib29rR3JhcGhBUEkvRkJGZWVkJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHN0YXR1czogRkJMb2dpbi5OT1RfQVVUSE9SSVpFRFxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmZiTG9naW4gPSBuZXcgRkJMb2dpbignMTk1NjcxODUwMTAyMTY0MycsIHRoaXMubG9nZ2VkSW4sIHRoaXMubm90TG9nZ2VkSW4pXG4gICAgICAgIHRoaXMuZmJGZWVkID0gbmV3IEZCRmVlZCh0aGlzLmZiTG9naW4pXG4gICAgfVxuICAgIGxvZ2luID0gZSA9PiB7XG4gICAgICAgIHRoaXMuZmJMb2dpbi5sb2dpbih0aGlzLmxvZ2dlZEluKVxuICAgIH1cbiAgICBsb2dnZWRJbiA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2dlZCBpbiA6ICcsIHRoaXMuZmJMb2dpbilcbiAgICAgICAgLy8gdGhpcy5mYkZlZWQudGVzdCgpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIHN0YXR1czogdGhpcy5mYkxvZ2luLnN0YXR1cyB9KVxuICAgIH1cbiAgICBub3RMb2dnZWRJbiA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ25vdCBsb2dnZWQgaW4gOiAnLCB0aGlzLmZiTG9naW4pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIHN0YXR1czogdGhpcy5mYkxvZ2luLnN0YXR1cyB9KVxuICAgIH1cblxuICAgIGxvZ2luT3JTZWFyY2ggPSAoKT0+e1xuICAgICAgICBjb25zb2xlLmxvZygnc3RhdHVzJywgdGhpcy5zdGF0ZSlcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zdGF0dXMgPT09IEZCTG9naW4uQ09OTkVDVEVEKXtcbiAgICAgICAgICAgIHJldHVybiA8U2VhcmNoLz5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPEJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4LWNoaWxkIGxvZ2luLWJ1dHRvblwiPlNlYXJjaCBGYWNlYm9vazwvQnV0dG9uPlxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2dvb2dsZWxvZ29fY29sb3JfMjcyeDkyZHAucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiZmxleC1jaGlsZCBsb2dvLWljb25cIi8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmxvZ2luT3JTZWFyY2goKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYW5kaW5ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4OXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGFjZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhbmRpbmcgOmdsb2JhbCguZmxleC1jaGlsZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxvZ28taWNvbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFuZGluZyA6Z2xvYmFsKC5sb2dpbi1idXR0b24pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgfVxufVxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gKHByb3BzKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cocHJvcHMpXG4gICAgLy8ge3N0b3JlLCBpc1NlcnZlciwgcGF0aG5hbWUsIHF1ZXJ5fVxuICAgIC8vIHJldHVybiB7fVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSkoSW5kZXgpIl19 */\n/*@ sourceURL=pages/index.js?entry */'
            }));
        }
    }]);

    return Index;
}(_react2.default.Component);

Index.getInitialProps = function (props) {
    // console.log(props)
    // {store, isServer, pathname, query}
    // return {}
};
exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(Index);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/exit/EXITFolder/work/github/social-search/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/exit/EXITFolder/work/github/social-search/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(108)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44ZTAyMDYzYzhjNWVkYzI0YzA3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NjE2NjA3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJy4uL3ZpZXdzL3JlZHV4L3N0b3JlJ1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJ34vdmlld3MvY29tcG9uZW50cy9tYWluL0xheW91dCdcbmltcG9ydCBCdXR0b24gZnJvbSAnfi92aWV3cy9jb21wb25lbnRzL3NoYXJlQ29tcG9uZW50L2J1dHRvbi9CdXR0b24nXG5pbXBvcnQgU2VhcmNoIGZyb20gJ34vdmlld3MvY29tcG9uZW50cy9pbmRleC9TZWFyY2gnXG5cbmltcG9ydCBGQkxvZ2luIGZyb20gJ34vdmlld3MvbGlicy9mYWNlYm9va0dyYXBoQVBJL0ZCTG9naW4nXG5pbXBvcnQgRkJGZWVkIGZyb20gJ34vdmlld3MvbGlicy9mYWNlYm9va0dyYXBoQVBJL0ZCRmVlZCdcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdGF0dXM6IEZCTG9naW4uTk9UX0FVVEhPUklaRURcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5mYkxvZ2luID0gbmV3IEZCTG9naW4oJzE5NTY3MTg1MDEwMjE2NDMnLCB0aGlzLmxvZ2dlZEluLCB0aGlzLm5vdExvZ2dlZEluKVxuICAgICAgICB0aGlzLmZiRmVlZCA9IG5ldyBGQkZlZWQodGhpcy5mYkxvZ2luKVxuICAgIH1cbiAgICBsb2dpbiA9IGUgPT4ge1xuICAgICAgICB0aGlzLmZiTG9naW4ubG9naW4odGhpcy5sb2dnZWRJbilcbiAgICB9XG4gICAgbG9nZ2VkSW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dnZWQgaW4gOiAnLCB0aGlzLmZiTG9naW4pXG4gICAgICAgIC8vIHRoaXMuZmJGZWVkLnRlc3QoKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBzdGF0dXM6IHRoaXMuZmJMb2dpbi5zdGF0dXMgfSlcbiAgICB9XG4gICAgbm90TG9nZ2VkSW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdub3QgbG9nZ2VkIGluIDogJywgdGhpcy5mYkxvZ2luKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBzdGF0dXM6IHRoaXMuZmJMb2dpbi5zdGF0dXMgfSlcbiAgICB9XG5cbiAgICBsb2dpbk9yU2VhcmNoID0gKCk9PntcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1cycsIHRoaXMuc3RhdGUpXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc3RhdHVzID09PSBGQkxvZ2luLkNPTk5FQ1RFRCl7XG4gICAgICAgICAgICByZXR1cm4gPFNlYXJjaC8+XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxCdXR0b24gY2xhc3NOYW1lPVwiZmxleC1jaGlsZCBsb2dpbi1idXR0b25cIj5TZWFyY2ggRmFjZWJvb2s8L0J1dHRvbj5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9nb29nbGVsb2dvX2NvbG9yXzI3Mng5MmRwLnBuZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImZsZXgtY2hpbGQgbG9nby1pY29uXCIvPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5sb2dpbk9yU2VhcmNoKCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFuZGluZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogODlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BhY2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYW5kaW5nIDpnbG9iYWwoLmZsZXgtY2hpbGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sb2dvLWljb257XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTA5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhbmRpbmcgOmdsb2JhbCgubG9naW4tYnV0dG9uKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIH1cbn1cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IChwcm9wcykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHByb3BzKVxuICAgIC8vIHtzdG9yZSwgaXNTZXJ2ZXIsIHBhdGhuYW1lLCBxdWVyeX1cbiAgICAvLyByZXR1cm4ge31cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUpKEluZGV4KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFYQTtBQUNBO0FBWUE7QUFDQTtBQUVBO0FBQUE7QUFoQkE7QUFDQTtBQWlCQTtBQUNBO0FBQ0E7QUFwQkE7QUFDQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTFCQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBRUE7QUFBQTtBQUNBOzs7O0FBd0JBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFKQTtBQTJCQTtBQTNCQTs7Ozs7QUFqQ0E7QUFDQTtBQTZEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==