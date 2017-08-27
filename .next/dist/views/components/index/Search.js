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

var _Layout = require('../main/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../../redux/store');

var _InputText = require('../shareComponent/inputText/InputText');

var _InputText2 = _interopRequireDefault(_InputText);

var _Button = require('../shareComponent/button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dropdown = require('../shareComponent/dropdown/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _FBLogin = require('../../libs/facebookGraphAPI/FBLogin');

var _FBLogin2 = _interopRequireDefault(_FBLogin);

var _FBFeed = require('../../libs/facebookGraphAPI/FBFeed');

var _FBFeed2 = _interopRequireDefault(_FBFeed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/exit/EXITFolder/work/github/social-search/views/components/index/Search.js';

// import Display from '../views/components/index/Display'


var Search = function (_React$Component) {
    (0, _inherits3.default)(Search, _React$Component);

    function Search() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Search);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call.apply(_ref, [this].concat(args))), _this), _this.login = function (e) {
            _this.fbLogin.login(_this.loggedIn);
        }, _this.loggedIn = function () {
            console.log('logged in : ', _this.fbLogin);
            // this.fbFeed.test()
        }, _this.notLoggedIn = function () {
            console.log('not logged in : ', _this.fbLogin);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Search, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fbLogin = new _FBLogin2.default('1956718501021643', this.loggedIn, this.notLoggedIn);
            this.fbFeed = new _FBFeed2.default(this.fbLogin);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'container index-page', 'data-jsx': 3184125103,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('div', { style: { height: '100px' }, 'data-jsx': 3184125103,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }), _react2.default.createElement(_Dropdown2.default, { dataArray: [{ name: 'a', value: 'a' }, { name: 'b', value: 'b' }, { name: 'c', value: 'c' }], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }), _react2.default.createElement('div', { style: { height: '20px' }, 'data-jsx': 3184125103,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }), _react2.default.createElement('div', { className: 'search-wrapper', 'data-jsx': 3184125103,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_InputText2.default, { className: 'input-text', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 's'), _react2.default.createElement(_Button2.default, { className: 'search-button', onClick: this.login, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'Search')), _react2.default.createElement(_style2.default, {
                styleId: 3184125103,
                css: '.search-wrapper[data-jsx="3184125103"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.index-page[data-jsx="3184125103"] .input-text{width:100%;-webkit-flex-grow:1;-ms-flex-grow:1;flex-grow:1}.index-page[data-jsx="3184125103"] .search-button{margin-left:2px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2NvbXBvbmVudHMvaW5kZXgvU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDZ0MsQUFHMEMsQUFHRixBQUlLLFdBSEosS0FJaEIsMkNBSEEsZUFKQSIsImZpbGUiOiJ2aWV3cy9jb21wb25lbnRzL2luZGV4L1NlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXhpdC9FWElURm9sZGVyL3dvcmsvZ2l0aHViL3NvY2lhbC1zZWFyY2giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ34vdmlld3MvY29tcG9uZW50cy9tYWluL0xheW91dCdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IHsgaW5pdFN0b3JlfSBmcm9tICd+L3ZpZXdzL3JlZHV4L3N0b3JlJ1xuXG4vLyBpbXBvcnQgRGlzcGxheSBmcm9tICcuLi92aWV3cy9jb21wb25lbnRzL2luZGV4L0Rpc3BsYXknXG5pbXBvcnQgSW5wdXRUZXh0IGZyb20gJ34vdmlld3MvY29tcG9uZW50cy9zaGFyZUNvbXBvbmVudC9pbnB1dFRleHQvSW5wdXRUZXh0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICd+L3ZpZXdzL2NvbXBvbmVudHMvc2hhcmVDb21wb25lbnQvYnV0dG9uL0J1dHRvbidcbmltcG9ydCBEcm9wZG93biBmcm9tICd+L3ZpZXdzL2NvbXBvbmVudHMvc2hhcmVDb21wb25lbnQvZHJvcGRvd24vRHJvcGRvd24nXG5cbmltcG9ydCBGQkxvZ2luIGZyb20gJ34vdmlld3MvbGlicy9mYWNlYm9va0dyYXBoQVBJL0ZCTG9naW4nXG5pbXBvcnQgRkJGZWVkIGZyb20gJ34vdmlld3MvbGlicy9mYWNlYm9va0dyYXBoQVBJL0ZCRmVlZCdcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuZmJMb2dpbiA9IG5ldyBGQkxvZ2luKCcxOTU2NzE4NTAxMDIxNjQzJywgdGhpcy5sb2dnZWRJbiwgdGhpcy5ub3RMb2dnZWRJbilcbiAgICAgICAgdGhpcy5mYkZlZWQgPSBuZXcgRkJGZWVkKHRoaXMuZmJMb2dpbilcbiAgICB9XG4gICAgbG9naW49IGU9PntcbiAgICAgICAgdGhpcy5mYkxvZ2luLmxvZ2luKHRoaXMubG9nZ2VkSW4pXG4gICAgfVxuICAgIGxvZ2dlZEluID0gKCk9PntcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2dlZCBpbiA6ICcsdGhpcy5mYkxvZ2luKVxuICAgICAgICAvLyB0aGlzLmZiRmVlZC50ZXN0KClcbiAgICB9XG4gICAgbm90TG9nZ2VkSW4gPSAoKT0+e1xuICAgICAgICBjb25zb2xlLmxvZygnbm90IGxvZ2dlZCBpbiA6ICcsdGhpcy5mYkxvZ2luKVxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGluZGV4LXBhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonMTAwcHgnfX0vPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gZGF0YUFycmF5PXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOidhJyx2YWx1ZTonYSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTonYicsdmFsdWU6J2InfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6J2MnLHZhbHVlOidjJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfS8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzIwcHgnfX0vPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0IGNsYXNzTmFtZT1cImlucHV0LXRleHRcIj5zPC9JbnB1dFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaC1idXR0b25cIiBvbkNsaWNrPXt0aGlzLmxvZ2lufT5TZWFyY2g8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWFyY2gtd3JhcHBlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4LXBhZ2UgOmdsb2JhbCggLmlucHV0LXRleHQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRleC1wYWdlIDpnbG9iYWwoIC5zZWFyY2gtYnV0dG9uKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIH1cbn1cblNlYXJjaC5nZXRJbml0aWFsUHJvcHMgPSAocHJvcHMpPT57XG4gICAgLy8gY29uc29sZS5sb2cocHJvcHMpXG4gICAgLy8ge3N0b3JlLCBpc1NlcnZlciwgcGF0aG5hbWUsIHF1ZXJ5fVxuICAgIC8vIHJldHVybiB7fVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSkoU2VhcmNoKSJdfQ== */\n/*@ sourceURL=views/components/index/Search.js */'
            }));
        }
    }]);

    return Search;
}(_react2.default.Component);

Search.getInitialProps = function (props) {
    // console.log(props)
    // {store, isServer, pathname, query}
    // return {}
};
exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(Search);