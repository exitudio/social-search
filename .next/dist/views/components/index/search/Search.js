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

var _InputText = require('../../shareComponent/inputText/InputText');

var _InputText2 = _interopRequireDefault(_InputText);

var _Button = require('../../shareComponent/button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _DropdownPagesPeople = require('./DropdownPagesPeople');

var _DropdownPagesPeople2 = _interopRequireDefault(_DropdownPagesPeople);

var _Posts = require('./Posts');

var _Posts2 = _interopRequireDefault(_Posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/exit/EXITFolder/work/github/social-search/views/components/index/search/Search.js';


var Search = function (_React$Component) {
    (0, _inherits3.default)(Search, _React$Component);

    function Search() {
        (0, _classCallCheck3.default)(this, Search);

        return (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).apply(this, arguments));
    }

    (0, _createClass3.default)(Search, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'index-page', 'data-jsx': 3184125103,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement('div', { style: { height: '100px' }, 'data-jsx': 3184125103,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }), _react2.default.createElement(_DropdownPagesPeople2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }), _react2.default.createElement('div', { style: { height: '20px' }, 'data-jsx': 3184125103,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }), _react2.default.createElement('div', { className: 'search-wrapper', 'data-jsx': 3184125103,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement(_InputText2.default, { className: 'input-text', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, 's'), _react2.default.createElement(_Button2.default, { className: 'search-button', onClick: this.login, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, 'Search')), _react2.default.createElement(_Posts2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }), _react2.default.createElement(_style2.default, {
                styleId: 3184125103,
                css: '.search-wrapper[data-jsx="3184125103"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.index-page[data-jsx="3184125103"] .input-text{width:100%;-webkit-flex-grow:1;-ms-flex-grow:1;flex-grow:1}.index-page[data-jsx="3184125103"] .search-button{margin-left:2px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2NvbXBvbmVudHMvaW5kZXgvc2VhcmNoL1NlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmdDLEFBRzBDLEFBR0YsQUFJSyxXQUhKLEtBSWhCLDJDQUhBLGVBSkEiLCJmaWxlIjoidmlld3MvY29tcG9uZW50cy9pbmRleC9zZWFyY2gvU2VhcmNoLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9leGl0L0VYSVRGb2xkZXIvd29yay9naXRodWIvc29jaWFsLXNlYXJjaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbnB1dFRleHQgZnJvbSAnfi92aWV3cy9jb21wb25lbnRzL3NoYXJlQ29tcG9uZW50L2lucHV0VGV4dC9JbnB1dFRleHQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ34vdmlld3MvY29tcG9uZW50cy9zaGFyZUNvbXBvbmVudC9idXR0b24vQnV0dG9uJ1xuaW1wb3J0IERyb3Bkb3duUGFnZXNQZW9wbGUgZnJvbSAnLi9Ecm9wZG93blBhZ2VzUGVvcGxlJ1xuaW1wb3J0IFBvc3RzIGZyb20gJy4vUG9zdHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXgtcGFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OicxMDBweCd9fS8+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blBhZ2VzUGVvcGxlLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonMjBweCd9fS8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgY2xhc3NOYW1lPVwiaW5wdXQtdGV4dFwiPnM8L0lucHV0VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMubG9naW59PlNlYXJjaDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFBvc3RzLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlYXJjaC13cmFwcGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5kZXgtcGFnZSA6Z2xvYmFsKCAuaW5wdXQtdGV4dCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4LXBhZ2UgOmdsb2JhbCggLnNlYXJjaC1idXR0b24pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=views/components/index/search/Search.js */'
            }));
        }
    }]);

    return Search;
}(_react2.default.Component);

exports.default = Search;