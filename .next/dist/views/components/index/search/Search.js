'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Layout = require('../../main/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../../../redux/store');

var _InputText = require('../../shareComponent/inputText/InputText');

var _InputText2 = _interopRequireDefault(_InputText);

var _Button = require('../../shareComponent/button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dropdown = require('../../shareComponent/dropdown/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/exit/EXITFolder/work/github/social-search/views/components/index/search/Search.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n            .search-wrapper{\n                display: flex;\n                .input-text{\n                    width: 100%;\n                    flex-grow: 1;\n                }\n                .search-button{\n                    margin-left: 2px;\n                }\n            }\n        '], ['\n            .search-wrapper{\n                display: flex;\n                .input-text{\n                    width: 100%;\n                    flex-grow: 1;\n                }\n                .search-button{\n                    margin-left: 2px;\n                }\n            }\n        ']);

// import Display from '../views/components/index/Display'


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
            var SearchContainer = _styledComponents2.default.div(_templateObject);
            return _react2.default.createElement('div', { className: 'container index-page', 'data-jsx': 3184125103,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('div', { style: { height: '100px' }, 'data-jsx': 3184125103,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }), _react2.default.createElement(_Dropdown2.default, { dataArray: [{ name: 'a', value: 'a' }, { name: 'b', value: 'b' }, { name: 'c', value: 'c' }], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }), _react2.default.createElement('div', { style: { height: '20px' }, 'data-jsx': 3184125103,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), _react2.default.createElement('div', { className: 'search-wrapper', 'data-jsx': 3184125103,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_InputText2.default, { className: 'input-text', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 's'), _react2.default.createElement(_Button2.default, { className: 'search-button', onClick: this.login, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Search')), _react2.default.createElement(_style2.default, {
                styleId: 3184125103,
                css: '.search-wrapper[data-jsx="3184125103"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.index-page[data-jsx="3184125103"] .input-text{width:100%;-webkit-flex-grow:1;-ms-flex-grow:1;flex-grow:1}.index-page[data-jsx="3184125103"] .search-button{margin-left:2px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2NvbXBvbmVudHMvaW5kZXgvc2VhcmNoL1NlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2dDLEFBRzBDLEFBR0YsQUFJSyxXQUhKLEtBSWhCLDJDQUhBLGVBSkEiLCJmaWxlIjoidmlld3MvY29tcG9uZW50cy9pbmRleC9zZWFyY2gvU2VhcmNoLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9leGl0L0VYSVRGb2xkZXIvd29yay9naXRodWIvc29jaWFsLXNlYXJjaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ34vdmlld3MvY29tcG9uZW50cy9tYWluL0xheW91dCdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IHsgaW5pdFN0b3JlfSBmcm9tICd+L3ZpZXdzL3JlZHV4L3N0b3JlJ1xuXG4vLyBpbXBvcnQgRGlzcGxheSBmcm9tICcuLi92aWV3cy9jb21wb25lbnRzL2luZGV4L0Rpc3BsYXknXG5pbXBvcnQgSW5wdXRUZXh0IGZyb20gJ34vdmlld3MvY29tcG9uZW50cy9zaGFyZUNvbXBvbmVudC9pbnB1dFRleHQvSW5wdXRUZXh0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICd+L3ZpZXdzL2NvbXBvbmVudHMvc2hhcmVDb21wb25lbnQvYnV0dG9uL0J1dHRvbidcbmltcG9ydCBEcm9wZG93biBmcm9tICd+L3ZpZXdzL2NvbXBvbmVudHMvc2hhcmVDb21wb25lbnQvZHJvcGRvd24vRHJvcGRvd24nXG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgU2VhcmNoQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICAgICAgICAgIC5zZWFyY2gtd3JhcHBlcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIC5pbnB1dC10ZXh0e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2VhcmNoLWJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGBcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGluZGV4LXBhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonMTAwcHgnfX0vPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gZGF0YUFycmF5PXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOidhJyx2YWx1ZTonYSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTonYicsdmFsdWU6J2InfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6J2MnLHZhbHVlOidjJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfS8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzIwcHgnfX0vPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0IGNsYXNzTmFtZT1cImlucHV0LXRleHRcIj5zPC9JbnB1dFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaC1idXR0b25cIiBvbkNsaWNrPXt0aGlzLmxvZ2lufT5TZWFyY2g8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWFyY2gtd3JhcHBlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4LXBhZ2UgOmdsb2JhbCggLmlucHV0LXRleHQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRleC1wYWdlIDpnbG9iYWwoIC5zZWFyY2gtYnV0dG9uKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIH1cbn1cblNlYXJjaC5nZXRJbml0aWFsUHJvcHMgPSAocHJvcHMpPT57XG4gICAgLy8gY29uc29sZS5sb2cocHJvcHMpXG4gICAgLy8ge3N0b3JlLCBpc1NlcnZlciwgcGF0aG5hbWUsIHF1ZXJ5fVxuICAgIC8vIHJldHVybiB7fVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSkoU2VhcmNoKSJdfQ== */\n/*@ sourceURL=views/components/index/search/Search.js */'
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