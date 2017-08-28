'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('../views/redux/store');

var _Layout = require('../views/components/main/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Button = require('../views/components/shareComponent/button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Search = require('../views/components/index/search/Search');

var _Search2 = _interopRequireDefault(_Search);

var _DropdownPagesPeople = require('../views/components/index/search/DropdownPagesPeople');

var _DropdownPagesPeople2 = _interopRequireDefault(_DropdownPagesPeople);

var _FBLogin = require('../views/libs/facebookGraphAPI/FBLogin');

var _FBLogin2 = _interopRequireDefault(_FBLogin);

var _FBFeed = require('../views/libs/facebookGraphAPI/FBFeed');

var _FBFeed2 = _interopRequireDefault(_FBFeed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/exit/EXITFolder/work/github/social-search/pages/index.js?entry';


var Index = function (_React$Component) {
    (0, _inherits3.default)(Index, _React$Component);

    function Index(props) {
        (0, _classCallCheck3.default)(this, Index);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

        _this.login = function (e) {
            _this.fbLogin.login();
        };

        _this.logout = function (e) {
            _this.fbLogin.logout();
        };

        _this.test = function () {
            _this.fbFeed.test();
        };

        _this.onFBStatusChanged = function (status) {
            _this.setState((0, _extends3.default)({}, _this.state, { status: status }));
        };

        _this.loginOrSearch = function () {
            console.log('status', _this.state);
            if (_this.state.status === _FBLogin2.default.CONNECTED) {
                return _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                }, _react2.default.createElement(_Search2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                    }
                }), _react2.default.createElement(_Button2.default, { onClick: _this.test, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                }));
            } else if (_this.state.status === _FBLogin2.default.NOT_AUTHORIZED) {
                return _react2.default.createElement(_Button2.default, { className: 'flex-child login-button', onClick: _this.login, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                    }
                }, 'Search Facebook');
            } else if (_this.state.status === _FBLogin2.default.CHECKING) {
                return _react2.default.createElement(_Button2.default, { className: 'flex-child login-button', disable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                    }
                }, 'Checking Login');
            }
        };

        _this.state = {
            status: _FBLogin2.default.CHECKING
        };
        return _this;
    }

    (0, _createClass3.default)(Index, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fbLogin = new _FBLogin2.default('1245609988878153', this.onFBStatusChanged); //'1956718501021643'
            this.fbFeed = new _FBFeed2.default(this.fbLogin);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 3344606814,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('div', { className: 'landing', 'data-jsx': 3344606814,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('img', { src: '/static/images/googlelogo_color_272x92dp.png', alt: '', className: 'flex-child logo-icon', 'data-jsx': 3344606814,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }), _react2.default.createElement(_DropdownPagesPeople2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }), this.loginOrSearch())), _react2.default.createElement(_style2.default, {
                styleId: 3344606814,
                css: '.landing[data-jsx="3344606814"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:89px}.space[data-jsx="3344606814"]{height:200px}.landing[data-jsx="3344606814"] .flex-child{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.logo-icon[data-jsx="3344606814"]{padding-top:109px}.landing[data-jsx="3344606814"] .login-button{margin-top:40px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEZ0MsQUFHa0QsQUFLQSxBQUdLLEFBR0EsQUFHRixhQVJwQixHQVNBLEVBSEEscURBSEEsR0FSMEIsOEVBQ04sZ0JBQ3BCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9leGl0L0VYSVRGb2xkZXIvd29yay9naXRodWIvc29jaWFsLXNlYXJjaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlZHV4UGFnZSB9IGZyb20gJy4uL3ZpZXdzL3JlZHV4L3N0b3JlJ1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJ34vdmlld3MvY29tcG9uZW50cy9tYWluL0xheW91dCdcbmltcG9ydCBCdXR0b24gZnJvbSAnfi92aWV3cy9jb21wb25lbnRzL3NoYXJlQ29tcG9uZW50L2J1dHRvbi9CdXR0b24nXG5pbXBvcnQgU2VhcmNoIGZyb20gJ34vdmlld3MvY29tcG9uZW50cy9pbmRleC9zZWFyY2gvU2VhcmNoJ1xuaW1wb3J0IERyb3Bkb3duUGFnZXNQZW9wbGUgZnJvbSAnfi92aWV3cy9jb21wb25lbnRzL2luZGV4L3NlYXJjaC9Ecm9wZG93blBhZ2VzUGVvcGxlJ1xuXG5pbXBvcnQgRkJMb2dpbiBmcm9tICd+L3ZpZXdzL2xpYnMvZmFjZWJvb2tHcmFwaEFQSS9GQkxvZ2luJ1xuaW1wb3J0IEZCRmVlZCBmcm9tICd+L3ZpZXdzL2xpYnMvZmFjZWJvb2tHcmFwaEFQSS9GQkZlZWQnXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc3RhdHVzOiBGQkxvZ2luLkNIRUNLSU5HXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZmJMb2dpbiA9IG5ldyBGQkxvZ2luKCcxMjQ1NjA5OTg4ODc4MTUzJywgdGhpcy5vbkZCU3RhdHVzQ2hhbmdlZCkgLy8nMTk1NjcxODUwMTAyMTY0MydcbiAgICAgICAgdGhpcy5mYkZlZWQgPSBuZXcgRkJGZWVkKHRoaXMuZmJMb2dpbilcbiAgICB9XG4gICAgbG9naW4gPSBlID0+IHtcbiAgICAgICAgdGhpcy5mYkxvZ2luLmxvZ2luKClcbiAgICB9XG4gICAgbG9nb3V0ID0gZSA9PntcbiAgICAgICAgdGhpcy5mYkxvZ2luLmxvZ291dCgpXG4gICAgfVxuICAgIHRlc3QgPSAoKT0+e1xuICAgICAgICB0aGlzLmZiRmVlZC50ZXN0KClcbiAgICB9XG5cbiAgICBvbkZCU3RhdHVzQ2hhbmdlZCA9IHN0YXR1cyA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIHN0YXR1cyB9KVxuICAgIH1cblxuICAgIGxvZ2luT3JTZWFyY2ggPSAoKT0+e1xuICAgICAgICBjb25zb2xlLmxvZygnc3RhdHVzJywgdGhpcy5zdGF0ZSlcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zdGF0dXMgPT09IEZCTG9naW4uQ09OTkVDVEVEKXtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICAgIDxTZWFyY2gvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy50ZXN0fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfWVsc2UgaWYodGhpcy5zdGF0ZS5zdGF0dXMgPT09IEZCTG9naW4uTk9UX0FVVEhPUklaRUQpe1xuICAgICAgICAgICAgcmV0dXJuIDxCdXR0b24gY2xhc3NOYW1lPVwiZmxleC1jaGlsZCBsb2dpbi1idXR0b25cIiBvbkNsaWNrPXt0aGlzLmxvZ2lufT5TZWFyY2ggRmFjZWJvb2s8L0J1dHRvbj5cbiAgICAgICAgfWVsc2UgaWYodGhpcy5zdGF0ZS5zdGF0dXMgPT09IEZCTG9naW4uQ0hFQ0tJTkcpe1xuICAgICAgICAgICAgcmV0dXJuIDxCdXR0b24gY2xhc3NOYW1lPVwiZmxleC1jaGlsZCBsb2dpbi1idXR0b25cIiBkaXNhYmxlPkNoZWNraW5nIExvZ2luPC9CdXR0b24+XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9nb29nbGVsb2dvX2NvbG9yXzI3Mng5MmRwLnBuZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImZsZXgtY2hpbGQgbG9nby1pY29uXCIvPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25QYWdlc1Blb3BsZS8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmxvZ2luT3JTZWFyY2goKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYW5kaW5ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4OXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGFjZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhbmRpbmcgOmdsb2JhbCguZmxleC1jaGlsZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxvZ28taWNvbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFuZGluZyA6Z2xvYmFsKC5sb2dpbi1idXR0b24pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgfVxufVxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gKHByb3BzKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cocHJvcHMpXG4gICAgLy8ge3N0b3JlLCBpc1NlcnZlciwgcGF0aG5hbWUsIHF1ZXJ5fVxuICAgIC8vIHJldHVybiB7fVxufVxuZXhwb3J0IGRlZmF1bHQgcmVkdXhQYWdlKEluZGV4KSJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
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
exports.default = (0, _store.reduxPage)(Index);