webpackHotUpdate(5,{

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _style = __webpack_require__(556);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(28);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(597);

var _FBPageAction = __webpack_require__(684);

var FBPageAction = _interopRequireWildcard(_FBPageAction);

var _DropdownSearch = __webpack_require__(677);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/exit/EXITFolder/work/github/social-search/views/components/index/search/DropdownPagesPeople.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/exit/EXITFolder/work/github/social-search/views/components/index/search/DropdownPagesPeople.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xZTY1ZmQwZTBhN2U1M2RhZmNkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdmlld3MvY29tcG9uZW50cy9pbmRleC9zZWFyY2gvRHJvcGRvd25QYWdlc1Blb3BsZS5qcz9iMmE3Nzc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgKiBhcyBGQlBhZ2VBY3Rpb24gZnJvbSAnLi9yZWR1eC9GQlBhZ2VBY3Rpb24nXG5pbXBvcnQgRHJvcGRvd25TZWFyY2ggZnJvbSAnfi92aWV3cy9jb21wb25lbnRzL3NoYXJlQ29tcG9uZW50L2Ryb3Bkb3duL2Ryb3Bkb3duU2VhcmNoL0Ryb3Bkb3duU2VhcmNoJ1xuY2xhc3MgRHJvcGRvd25QYWdlc1Blb3BsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBvblNlYXJjaENoYW5nZSA9ICh0ZXh0LCBpbW1lZGlhdGVseSk9PntcbiAgICAgICAgaWYoaW1tZWRpYXRlbHkpe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChGQlBhZ2VBY3Rpb24uTG9hZEZCUGFnZUFjdGlvbih0ZXh0KSApXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcbiAgICAgICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgKCk9PnRoaXMucHJvcHMuZGlzcGF0Y2goRkJQYWdlQWN0aW9uLkxvYWRGQlBhZ2VBY3Rpb24odGV4dCkgKSxcbiAgICAgICAgICAgICAgICAzMDBcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXREYXRhID0gKCk9PntcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wYWdlcyl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5wYWdlcy5tYXAoIChpdGVtLCBpKT0+KHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgbm9kZTogPGRpdiBjbGFzc05hbWU9XCJjaGlsZC1pdGVtXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPXtpdGVtLnBpY3R1cmUuZGF0YS51cmx9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbmFtZVwiPntpdGVtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXBhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duU2VhcmNoIGRhdGE9e3RoaXMuZ2V0RGF0YSgpfSBvblNlYXJjaENoYW5nZT17dGhpcy5vblNlYXJjaENoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24tcGFnZSA6Z2xvYmFsKC5jaGlsZC1pdGVtKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bi1wYWdlIDpnbG9iYWwoLmltYWdlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bi1wYWdlIDpnbG9iYWwoLml0ZW0tbmFtZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgfVxufVxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGU9Pih7XG4gICAgcGFnZXM6IHN0YXRlLkZCUGFnZVJlZHVjZXIucGFnZXMsXG59KVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKERyb3Bkb3duUGFnZXNQZW9wbGUpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdmlld3MvY29tcG9uZW50cy9pbmRleC9zZWFyY2gvRHJvcGRvd25QYWdlc1Blb3BsZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQVJBO0FBVUE7QUFDQTs7Ozs7O0FBR0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFEQTtBQWdCQTtBQWhCQTs7Ozs7QUEzQkE7QUFDQTtBQTRDQTs7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9