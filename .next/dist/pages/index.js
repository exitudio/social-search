'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _reactRedux = require('react-redux');

var _store = require('../views/redux/store');

var _Layout = require('../views/components/main/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Button = require('../views/components/shareComponent/button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Search = require('../views/components/index/search/Search');

var _Search2 = _interopRequireDefault(_Search);

var _FBFeed = require('../views/libs/facebookGraphAPI/FBFeed');

var _FBFeed2 = _interopRequireDefault(_FBFeed);

var _logInAction = require('../views/components/index/redux/logInAction');

var LoginAction = _interopRequireWildcard(_logInAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/exit/EXITFolder/work/github/social-search/pages/index.js?entry';


var Index = function (_React$Component) {
    (0, _inherits3.default)(Index, _React$Component);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.login = function (e) {
            LoginAction.loginAction();
        }, _this.loginOrSearch = function () {
            if (_this.props.status === LoginAction.CONNECTED) {
                return _react2.default.createElement(_Search2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                });
            } else if (_this.props.status === LoginAction.NOT_AUTHORIZED) {
                return _react2.default.createElement(_Button2.default, { className: 'flex-child login-button', onClick: _this.login, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                }, 'Search Facebook');
            } else if (_this.props.status === LoginAction.CHECKING) {
                return _react2.default.createElement(_Button2.default, { className: 'flex-child login-button', disable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                }, 'Checking Login');
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Index, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.dispatch(LoginAction.initOnceAction());
            this.fbFeed = new _FBFeed2.default(this.fbLogin);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 3344606814,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('div', { className: 'landing', 'data-jsx': 3344606814,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('img', { src: '/static/images/googlelogo_color_272x92dp.png', alt: '', className: 'flex-child logo-icon', 'data-jsx': 3344606814,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }), this.loginOrSearch())), _react2.default.createElement(_style2.default, {
                styleId: 3344606814,
                css: '.landing[data-jsx="3344606814"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:89px}.space[data-jsx="3344606814"]{height:200px}.landing[data-jsx="3344606814"] .flex-child{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.logo-icon[data-jsx="3344606814"]{padding-top:109px}.landing[data-jsx="3344606814"] .login-button{margin-top:40px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDZ0MsQUFHa0QsQUFLQSxBQUdLLEFBR0EsQUFHRixhQVJwQixHQVNBLEVBSEEscURBSEEsR0FSMEIsOEVBQ04sZ0JBQ3BCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9leGl0L0VYSVRGb2xkZXIvd29yay9naXRodWIvc29jaWFsLXNlYXJjaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyByZWR1eFBhZ2UgfSBmcm9tICcuLi92aWV3cy9yZWR1eC9zdG9yZSdcblxuaW1wb3J0IExheW91dCBmcm9tICd+L3ZpZXdzL2NvbXBvbmVudHMvbWFpbi9MYXlvdXQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ34vdmlld3MvY29tcG9uZW50cy9zaGFyZUNvbXBvbmVudC9idXR0b24vQnV0dG9uJ1xuaW1wb3J0IFNlYXJjaCBmcm9tICd+L3ZpZXdzL2NvbXBvbmVudHMvaW5kZXgvc2VhcmNoL1NlYXJjaCdcblxuXG5pbXBvcnQgRkJGZWVkIGZyb20gJ34vdmlld3MvbGlicy9mYWNlYm9va0dyYXBoQVBJL0ZCRmVlZCdcblxuaW1wb3J0ICogYXMgTG9naW5BY3Rpb24gZnJvbSAnfi92aWV3cy9jb21wb25lbnRzL2luZGV4L3JlZHV4L2xvZ0luQWN0aW9uJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goTG9naW5BY3Rpb24uaW5pdE9uY2VBY3Rpb24oKSlcbiAgICAgICAgdGhpcy5mYkZlZWQgPSBuZXcgRkJGZWVkKHRoaXMuZmJMb2dpbilcbiAgICB9XG4gICAgbG9naW4gPSBlID0+IHtcbiAgICAgICAgTG9naW5BY3Rpb24ubG9naW5BY3Rpb24oKVxuICAgIH1cbiAgICBsb2dpbk9yU2VhcmNoID0gKCk9PntcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdGF0dXMgPT09IExvZ2luQWN0aW9uLkNPTk5FQ1RFRCl7XG4gICAgICAgICAgICByZXR1cm4gPFNlYXJjaC8+XG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMuc3RhdHVzID09PSBMb2dpbkFjdGlvbi5OT1RfQVVUSE9SSVpFRCl7XG4gICAgICAgICAgICByZXR1cm4gPEJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4LWNoaWxkIGxvZ2luLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMubG9naW59PlNlYXJjaCBGYWNlYm9vazwvQnV0dG9uPlxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnN0YXR1cyA9PT0gTG9naW5BY3Rpb24uQ0hFQ0tJTkcpe1xuICAgICAgICAgICAgcmV0dXJuIDxCdXR0b24gY2xhc3NOYW1lPVwiZmxleC1jaGlsZCBsb2dpbi1idXR0b25cIiBkaXNhYmxlPkNoZWNraW5nIExvZ2luPC9CdXR0b24+XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9nb29nbGVsb2dvX2NvbG9yXzI3Mng5MmRwLnBuZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImZsZXgtY2hpbGQgbG9nby1pY29uXCIvPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5sb2dpbk9yU2VhcmNoKCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFuZGluZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogODlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BhY2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYW5kaW5nIDpnbG9iYWwoLmZsZXgtY2hpbGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sb2dvLWljb257XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTA5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhbmRpbmcgOmdsb2JhbCgubG9naW4tYnV0dG9uKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIH1cbn1cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IChwcm9wcykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHByb3BzKVxuICAgIC8vIHtzdG9yZSwgaXNTZXJ2ZXIsIHBhdGhuYW1lLCBxdWVyeX1cbiAgICAvLyByZXR1cm4ge31cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlPT4oe1xuICAgIHN0YXR1czogc3RhdGUubG9naW5SZWR1Y2VyLnN0YXR1c1xufSlcbmV4cG9ydCBkZWZhdWx0IHJlZHV4UGFnZShjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSW5kZXgpKSJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
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
var mapStateToProps = function mapStateToProps(state) {
    return {
        status: state.loginReducer.status
    };
};
exports.default = (0, _store.reduxPage)((0, _reactRedux.connect)(mapStateToProps)(Index));