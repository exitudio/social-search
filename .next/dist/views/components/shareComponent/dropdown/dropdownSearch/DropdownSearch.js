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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _configStyle = require('../../../main/style/configStyle');

var ConfigStyle = _interopRequireWildcard(_configStyle);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/exit/EXITFolder/work/github/social-search/views/components/shareComponent/dropdown/dropdownSearch/DropdownSearch.js';


var DropdownSearch = function (_React$Component) {
    (0, _inherits3.default)(DropdownSearch, _React$Component);

    function DropdownSearch(props) {
        (0, _classCallCheck3.default)(this, DropdownSearch);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (DropdownSearch.__proto__ || (0, _getPrototypeOf2.default)(DropdownSearch)).call(this, props));

        _this2.onClickSearch = function () {
            _this2.props.onSearchChange(_this2.state.searchText, true);
            _this2.setState((0, _extends3.default)({}, _this2.state, { isSearching: true, selectedItem: -1 }));
        };

        _this2.onItemClick = function (i, item, e) {
            _this2.props.onSelect(i);
            _this2.setState((0, _extends3.default)({}, _this2.state, {
                isSearching: false,
                selectedItem: i,
                searchText: item.name
            }));
        };

        _this2.onChangeText = function (e) {
            _this2.props.onSearchChange(e.target.value);
            _this2.setState((0, _extends3.default)({}, _this2.state, { searchText: e.target.value, selectedItem: -1 }));
        };

        _this2.quit = function () {
            _this2.setState((0, _extends3.default)({}, _this2.state, { isSearching: false, selectedItem: -1 }));
        };

        _this2.onKeyDown = function (e) {
            console.log(e.keyCode);
            if (e.keyCode === 38) {
                // arrow up
                var nextSelectIndex = _this2.state.selectedItem - 1;
                if (nextSelectIndex < 0) {
                    nextSelectIndex = _this2.props.data.length - 1;
                }
                _this2.setState((0, _extends3.default)({}, _this2.state, { searchText: _this2.props.data[nextSelectIndex].name, selectedItem: nextSelectIndex }));
            } else if (e.keyCode === 40) {
                // arrow down
                var _nextSelectIndex = _this2.state.selectedItem + 1;
                if (_nextSelectIndex > _this2.props.data.length - 1) {
                    _nextSelectIndex = 0;
                }
                _this2.setState((0, _extends3.default)({}, _this2.state, { searchText: _this2.props.data[_nextSelectIndex].name, selectedItem: _nextSelectIndex }));
            } else if (e.keyCode === 13) {
                // enter
                if (_this2.state.selectedItem > -1) {
                    _this2.props.onSelect(_this2.state.selectedItem);
                    _this2.setState((0, _extends3.default)({}, _this2.state, { searchText: _this2.props.data[_this2.state.selectedItem].name, isSearching: false }));
                }
            } else if (e.keyCode === 27) {
                // escape
                _this2.quit();
            }
        };

        _this2.getSearchState = function () {
            if (!_this2.state.isSearching) {
                var showNode = _this2.props.data[_this2.state.selectedItem] ? _this2.props.data[_this2.state.selectedItem].node : _this2.state.searchText;
                return _react2.default.createElement('div', { className: 'head-text', onClick: _this2.onClickSearch, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                    }
                }, showNode);
            } else {
                //add click out side function
                var getWrapperClass = function getWrapperClass() {
                    return _this2.props.data.length > 0 ? 'list' : '';
                };
                var _this = _this2;

                var searchDiv = function (_React$Component2) {
                    (0, _inherits3.default)(searchDiv, _React$Component2);

                    function searchDiv() {
                        var _ref;

                        var _temp, _this3, _ret;

                        (0, _classCallCheck3.default)(this, searchDiv);

                        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }

                        return _ret = (_temp = (_this3 = (0, _possibleConstructorReturn3.default)(this, (_ref = searchDiv.__proto__ || (0, _getPrototypeOf2.default)(searchDiv)).call.apply(_ref, [this].concat(args))), _this3), _this3.handleClickOutside = function (e) {
                            _this.quit();
                        }, _temp), (0, _possibleConstructorReturn3.default)(_this3, _ret);
                    }

                    (0, _createClass3.default)(searchDiv, [{
                        key: 'render',
                        value: function render() {
                            return _react2.default.createElement('div', {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 80
                                }
                            }, _react2.default.createElement('input', { ref: function ref(child) {
                                    if (child) {
                                        console.log(child.value);
                                        child.selectionStart = child.selectionEnd = child.value.length;
                                    }
                                },
                                onChange: _this.onChangeText,
                                value: _this.state.searchText,
                                autoFocus: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 81
                                }
                            }), _react2.default.createElement('ul', { className: 'items-wrapper ' + getWrapperClass(), __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 90
                                }
                            }, _this.props.data.map(function (item, i) {
                                return _react2.default.createElement(_Item2.default, { key: i,
                                    selected: i === _this.state.selectedItem,
                                    onClick: _this.onItemClick.bind(_this, i, item), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 92
                                    }
                                }, item.node);
                            })));
                        }
                    }]);

                    return searchDiv;
                }(_react2.default.Component);

                var ClickOutside = (0, _reactOnclickoutside2.default)(searchDiv);
                return _react2.default.createElement(ClickOutside, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 101
                    }
                });
            }
        };

        _this2.state = {
            isSearching: false,
            selectedItem: -1,
            searchText: ''
        };
        return _this2;
    }

    (0, _createClass3.default)(DropdownSearch, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'dropdown-container', onKeyDown: this.onKeyDown, 'data-jsx': 1408344601,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, _react2.default.createElement('div', { className: 'dropdown-search', 'data-jsx': 1408344601,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, this.getSearchState()), _react2.default.createElement(_style2.default, {
                styleId: 1408344601,
                css: '.dropdown-container[data-jsx="1408344601"]{width:100%;height:54px;position:relative}.dropdown-search[data-jsx="1408344601"]{' + ConfigStyle.inputStyle + ' padding:0;background-image:url(\'/static/images/dropdown-arrow.jpg\');background-repeat:no-repeat;background-position:right 10px top 24px;height:auto;position:absolute;z-index:100;left:0;right:0}.dropdown-search[data-jsx="1408344601"] .head-text{cursor:pointer;padding:1px 6px 1px 6px;height:52px;line-height:52px;box-sizing:border-box;font-size:20px}.dropdown-search[data-jsx="1408344601"] input{border:none;height:52px;width:100%;font-family:Helvetica,Arial,sans-serif !important;font-size:20px}.dropdown-search[data-jsx="1408344601"] .items-wrapper{cursor:pointer}.dropdown-search[data-jsx="1408344601"] .items-wrapper.list{padding-bottom:20px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2NvbXBvbmVudHMvc2hhcmVDb21wb25lbnQvZHJvcGRvd24vZHJvcGRvd25TZWFyY2gvRHJvcGRvd25TZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEdnQyxBQUd1QyxBQU1BLEFBV0ssQUFRSCxBQU9HLEFBR0ssV0FsQ1QsQ0F5QkMsR0FSVyxBQWUzQixLQUdBLEdBbENzQixDQXlCUCxXQUN5QyxJQXJCTSxBQVkvQyxFQWhCZixVQWlCcUIsaUJBQ0ssaUJBUVIsS0FQQyxPQWRhLEdBc0JoQyxLQVBBLG9CQWQ0Qyx3Q0FDN0IsWUFDTyxrQkFDTixZQUNOLE9BQ0MsUUFDWCIsImZpbGUiOiJ2aWV3cy9jb21wb25lbnRzL3NoYXJlQ29tcG9uZW50L2Ryb3Bkb3duL2Ryb3Bkb3duU2VhcmNoL0Ryb3Bkb3duU2VhcmNoLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9leGl0L0VYSVRGb2xkZXIvd29yay9naXRodWIvc29jaWFsLXNlYXJjaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBvbkNsaWNrT3V0c2lkZSBmcm9tICdyZWFjdC1vbmNsaWNrb3V0c2lkZSdcbmltcG9ydCAqIGFzIENvbmZpZ1N0eWxlIGZyb20gJ34vdmlld3MvY29tcG9uZW50cy9tYWluL3N0eWxlL2NvbmZpZ1N0eWxlJ1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJ1xuXG5jbGFzcyBEcm9wZG93blNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc1NlYXJjaGluZzogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW06IC0xLFxuICAgICAgICAgICAgc2VhcmNoVGV4dDogJycsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrU2VhcmNoID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VhcmNoQ2hhbmdlKCB0aGlzLnN0YXRlLnNlYXJjaFRleHQsIHRydWUgKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgaXNTZWFyY2hpbmc6IHRydWUsIHNlbGVjdGVkSXRlbTogLTEsIH0pXG4gICAgfVxuICAgIG9uSXRlbUNsaWNrID0gKGksIGl0ZW0sIGUpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChpKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICBpc1NlYXJjaGluZzogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW06IGksXG4gICAgICAgICAgICBzZWFyY2hUZXh0OiBpdGVtLm5hbWUsXG4gICAgICAgIH0pXG4gICAgfVxuICAgIG9uQ2hhbmdlVGV4dCA9IGUgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VhcmNoQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgc2VhcmNoVGV4dDogZS50YXJnZXQudmFsdWUsIHNlbGVjdGVkSXRlbTogLTEsIH0pXG4gICAgfVxuXG4gICAgcXVpdCA9ICgpPT57XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBpc1NlYXJjaGluZzogZmFsc2UsIHNlbGVjdGVkSXRlbTogLTEsICB9KVxuICAgIH1cblxuICAgIG9uS2V5RG93biA9IGU9PntcbiAgICAgICAgY29uc29sZS5sb2coZS5rZXlDb2RlKVxuICAgICAgICBpZihlLmtleUNvZGU9PT0zOCl7XG4gICAgICAgICAgICAvLyBhcnJvdyB1cFxuICAgICAgICAgICAgbGV0IG5leHRTZWxlY3RJbmRleCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtIC0gMVxuICAgICAgICAgICAgaWYobmV4dFNlbGVjdEluZGV4PDApe1xuICAgICAgICAgICAgICAgIG5leHRTZWxlY3RJbmRleCA9IHRoaXMucHJvcHMuZGF0YS5sZW5ndGgtMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHNlYXJjaFRleHQ6IHRoaXMucHJvcHMuZGF0YVtuZXh0U2VsZWN0SW5kZXhdLm5hbWUsIHNlbGVjdGVkSXRlbTpuZXh0U2VsZWN0SW5kZXggfSlcbiAgICAgICAgfWVsc2UgaWYoZS5rZXlDb2RlPT09NDApe1xuICAgICAgICAgICAgLy8gYXJyb3cgZG93blxuICAgICAgICAgICAgbGV0IG5leHRTZWxlY3RJbmRleCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtICsgMVxuICAgICAgICAgICAgaWYobmV4dFNlbGVjdEluZGV4ID4gdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCAtMSApe1xuICAgICAgICAgICAgICAgIG5leHRTZWxlY3RJbmRleCA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBzZWFyY2hUZXh0OiB0aGlzLnByb3BzLmRhdGFbbmV4dFNlbGVjdEluZGV4XS5uYW1lLCBzZWxlY3RlZEl0ZW06bmV4dFNlbGVjdEluZGV4IH0pXG4gICAgICAgIH1lbHNlIGlmKGUua2V5Q29kZT09PTEzKXtcbiAgICAgICAgICAgIC8vIGVudGVyXG4gICAgICAgICAgICBpZiggdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gPiAtMSApe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QodGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0pXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHNlYXJjaFRleHQ6IHRoaXMucHJvcHMuZGF0YVt0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbV0ubmFtZSwgaXNTZWFyY2hpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmKGUua2V5Q29kZT09PTI3KXtcbiAgICAgICAgICAgIC8vIGVzY2FwZVxuICAgICAgICAgICAgdGhpcy5xdWl0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNlYXJjaFN0YXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNTZWFyY2hpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dOb2RlID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtXSA/IHRoaXMucHJvcHMuZGF0YVt0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbV0ubm9kZSA6IHRoaXMuc3RhdGUuc2VhcmNoVGV4dFxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaGVhZC10ZXh0XCIgb25DbGljaz17dGhpcy5vbkNsaWNrU2VhcmNofT57c2hvd05vZGV9PC9kaXY+XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL2FkZCBjbGljayBvdXQgc2lkZSBmdW5jdGlvblxuICAgICAgICAgICAgY29uc3QgZ2V0V3JhcHBlckNsYXNzID0gKCk9PnRoaXMucHJvcHMuZGF0YS5sZW5ndGg+MD8nbGlzdCc6JydcbiAgICAgICAgICAgIGNvbnN0IF90aGlzID0gdGhpc1xuICAgICAgICAgICAgY2xhc3Mgc2VhcmNoRGl2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrT3V0c2lkZSA9IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5xdWl0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVuZGVyKCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtjaGlsZCA9PiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNoaWxkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2hpbGQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLnNlbGVjdGlvblN0YXJ0ID0gY2hpbGQuc2VsZWN0aW9uRW5kID0gY2hpbGQudmFsdWUubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtfdGhpcy5vbkNoYW5nZVRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17X3RoaXMuc3RhdGUuc2VhcmNoVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgaXRlbXMtd3JhcHBlciAke2dldFdyYXBwZXJDbGFzcygpfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge190aGlzLnByb3BzLmRhdGEubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxJdGVtIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2kgPT09IF90aGlzLnN0YXRlLnNlbGVjdGVkSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17X3RoaXMub25JdGVtQ2xpY2suYmluZChfdGhpcywgaSwgaXRlbSl9PntpdGVtLm5vZGV9PC9JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgQ2xpY2tPdXRzaWRlID0gb25DbGlja091dHNpZGUoc2VhcmNoRGl2KVxuICAgICAgICAgICAgcmV0dXJuIDxDbGlja091dHNpZGUvPlxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyXCIgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXRTZWFyY2hTdGF0ZSgpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgLmRyb3Bkb3duLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo1NHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bi1zZWFyY2h7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtDb25maWdTdHlsZS5pbnB1dFN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9kcm9wZG93bi1hcnJvdy5qcGcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEwcHggdG9wIDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bi1zZWFyY2ggOmdsb2JhbCguaGVhZC10ZXh0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxcHggNnB4IDFweCA2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjUycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUycHg7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRyb3Bkb3duLXNlYXJjaCA6Z2xvYmFsKGlucHV0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24tc2VhcmNoIDpnbG9iYWwoLml0ZW1zLXdyYXBwZXIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bi1zZWFyY2ggOmdsb2JhbCguaXRlbXMtd3JhcHBlci5saXN0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duU2VhcmNoXG5cblxuRHJvcGRvd25TZWFyY2gucHJvcFR5cGVzID0ge1xuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgbmFtZTpQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgICAgICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgICAgICAgICAgICAgIFByb3BUeXBlcy5ub2RlXG4gICAgICAgICAgICAgICAgXSkuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIG5vZGU6UHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxuICAgICAgICB9KVxuICAgICkuaXNSZXF1aXJlZCxcbiAgICBvblNlYXJjaENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG59Il19 */\n/*@ sourceURL=views/components/shareComponent/dropdown/dropdownSearch/DropdownSearch.js */'
            }));
        }
    }]);

    return DropdownSearch;
}(_react2.default.Component);

exports.default = DropdownSearch;


DropdownSearch.propTypes = {
    data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool, _propTypes2.default.node]).isRequired,
        node: _propTypes2.default.node.isRequired
    })).isRequired,
    onSearchChange: _propTypes2.default.func.isRequired,
    onSelect: _propTypes2.default.func
};