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

var _FBPageAction = require('./redux/FBPageAction');

var FBPageAction = _interopRequireWildcard(_FBPageAction);

var _DropdownSearch = require('../../shareComponent/dropdown/dropdownSearch/DropdownSearch');

var _DropdownSearch2 = _interopRequireDefault(_DropdownSearch);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/exit/EXITFolder/work/github/social-search/views/components/index/search/DropdownPagesPeople.js';


var DropdownPagesPeople = function (_React$Component) {
    (0, _inherits3.default)(DropdownPagesPeople, _React$Component);

    function DropdownPagesPeople() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DropdownPagesPeople);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DropdownPagesPeople.__proto__ || (0, _getPrototypeOf2.default)(DropdownPagesPeople)).call.apply(_ref, [this].concat(args))), _this), _this.onSearchChange = function (text, immediately) {
            if (immediately) {
                _this.props.dispatch(FBPageAction.LoadFBPageAction(text));
            } else {
                clearTimeout(_this.timeout);
                _this.timeout = setTimeout(function () {
                    return _this.props.dispatch(FBPageAction.LoadFBPageAction(text));
                }, 300);
            }
        }, _this.getData = function () {
            if (_this.props.pages) {
                return _this.props.pages.map(function (item, i) {
                    return {
                        name: item.name,
                        node: _react2.default.createElement('div', { className: 'child-item', key: i, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 21
                            }
                        }, _react2.default.createElement('img', { className: 'image', src: item.picture.data.url, alt: '', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            }
                        }), _react2.default.createElement('div', { className: 'item-name', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 23
                            }
                        }, item.name))
                    };
                });
            } else {
                return [];
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(DropdownPagesPeople, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'dropdown-page', 'data-jsx': 3965194424,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement(_DropdownSearch2.default, { data: this.getData(), onSearchChange: this.onSearchChange, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }), _react2.default.createElement(_style2.default, {
                styleId: 3965194424,
                css: '.dropdown-page[data-jsx="3965194424"] .child-item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.dropdown-page[data-jsx="3965194424"] .image{height:100%}.dropdown-page[data-jsx="3965194424"] .item-name{margin-left:20px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2NvbXBvbmVudHMvaW5kZXgvc2VhcmNoL0Ryb3Bkb3duUGFnZXNQZW9wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNnQyxBQUcwQyxBQUtGLEFBR00sWUFGckIsS0FHQSx5REFSMEIsc0JBQ0gsNkZBQ3ZCIiwiZmlsZSI6InZpZXdzL2NvbXBvbmVudHMvaW5kZXgvc2VhcmNoL0Ryb3Bkb3duUGFnZXNQZW9wbGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2V4aXQvRVhJVEZvbGRlci93b3JrL2dpdGh1Yi9zb2NpYWwtc2VhcmNoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCAqIGFzIEZCUGFnZUFjdGlvbiBmcm9tICcuL3JlZHV4L0ZCUGFnZUFjdGlvbidcbmltcG9ydCBEcm9wZG93blNlYXJjaCBmcm9tICd+L3ZpZXdzL2NvbXBvbmVudHMvc2hhcmVDb21wb25lbnQvZHJvcGRvd24vZHJvcGRvd25TZWFyY2gvRHJvcGRvd25TZWFyY2gnXG5jbGFzcyBEcm9wZG93blBhZ2VzUGVvcGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIG9uU2VhcmNoQ2hhbmdlID0gKHRleHQsIGltbWVkaWF0ZWx5KT0+e1xuICAgICAgICBpZihpbW1lZGlhdGVseSl7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKEZCUGFnZUFjdGlvbi5Mb2FkRkJQYWdlQWN0aW9uKHRleHQpIClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KVxuICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAoKT0+dGhpcy5wcm9wcy5kaXNwYXRjaChGQlBhZ2VBY3Rpb24uTG9hZEZCUGFnZUFjdGlvbih0ZXh0KSApLFxuICAgICAgICAgICAgICAgIDMwMFxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldERhdGEgPSAoKT0+e1xuICAgICAgICBpZih0aGlzLnByb3BzLnBhZ2VzKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLnBhZ2VzLm1hcCggKGl0ZW0sIGkpPT4oe1xuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBub2RlOiA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkLWl0ZW1cIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9e2l0ZW0ucGljdHVyZS5kYXRhLnVybH0gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1uYW1lXCI+e2l0ZW0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tcGFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25TZWFyY2ggZGF0YT17dGhpcy5nZXREYXRhKCl9IG9uU2VhcmNoQ2hhbmdlPXt0aGlzLm9uU2VhcmNoQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bi1wYWdlIDpnbG9iYWwoLmNoaWxkLWl0ZW0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRyb3Bkb3duLXBhZ2UgOmdsb2JhbCguaW1hZ2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRyb3Bkb3duLXBhZ2UgOmdsb2JhbCguaXRlbS1uYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICB9XG59XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZT0+KHtcbiAgICBwYWdlczogc3RhdGUuRkJQYWdlUmVkdWNlci5wYWdlcyxcbn0pXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRHJvcGRvd25QYWdlc1Blb3BsZSkiXX0= */\n/*@ sourceURL=views/components/index/search/DropdownPagesPeople.js */'
            }));
        }
    }]);

    return DropdownPagesPeople;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        pages: state.FBPageReducer.pages
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(DropdownPagesPeople);