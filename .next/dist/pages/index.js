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

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../views/redux/store');

var _Layout = require('../views/components/main/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Button = require('../views/components/shareComponent/button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Search = require('../views/components/index/Search');

var _Search2 = _interopRequireDefault(_Search);

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