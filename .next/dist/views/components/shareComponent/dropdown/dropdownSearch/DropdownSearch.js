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

        var _this = (0, _possibleConstructorReturn3.default)(this, (DropdownSearch.__proto__ || (0, _getPrototypeOf2.default)(DropdownSearch)).call(this, props));

        _this.onClickSearch = function () {
            _this.props.onSearchChange(_this.state.searchText, true);
            _this.setState((0, _extends3.default)({}, _this.state, { isSearching: true, selectedItem: -1 }));
        };

        _this.onItemClick = function (i, item, e) {
            _this.setState((0, _extends3.default)({}, _this.state, {
                isSearching: false,
                selectedItem: i,
                searchText: item.name
            }));
        };

        _this.onChangeText = function (e) {
            _this.props.onSearchChange(e.target.value);
            _this.setState((0, _extends3.default)({}, _this.state, { searchText: e.target.value, selectedItem: -1 }));
        };

        _this.handleClickOutside = function (e) {
            _this.setState((0, _extends3.default)({}, _this.state, { isSearching: false, selectedItem: -1 }));
        };

        _this.onKeyDown = function (e) {
            console.log(e.keyCode);
            if (e.keyCode === 38) {
                // arrow up
                var nextSelectIndex = _this.state.selectedItem - 1;
                if (nextSelectIndex < 0) {
                    nextSelectIndex = _this.props.data.length - 1;
                }
                _this.setState((0, _extends3.default)({}, _this.state, { searchText: _this.props.data[nextSelectIndex].name, selectedItem: nextSelectIndex }));
            } else if (e.keyCode === 40) {
                // arrow down
                var _nextSelectIndex = _this.state.selectedItem + 1;
                if (_nextSelectIndex > _this.props.data.length - 1) {
                    _nextSelectIndex = 0;
                }
                _this.setState((0, _extends3.default)({}, _this.state, { searchText: _this.props.data[_nextSelectIndex].name, selectedItem: _nextSelectIndex }));
            } else if (e.keyCode === 13) {
                // enter
                _this.setState((0, _extends3.default)({}, _this.state, { searchText: _this.props.data[_this.state.selectedItem].name, isSearching: false }));
            } else if (e.keyCode === 27) {
                // escape
                _this.handleClickOutside();
            }
        };

        _this.getSearchState = function () {
            if (!_this.state.isSearching) {
                var showNode = _this.props.data[_this.state.selectedItem] ? _this.props.data[_this.state.selectedItem].node : _this.state.searchText;
                return _react2.default.createElement('div', { className: 'head-text', onClick: _this.onClickSearch, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, showNode);
            } else {
                var getWrapperClass = function getWrapperClass() {
                    return _this.props.data.length > 0 ? 'list' : '';
                };
                return _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
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
                        lineNumber: 69
                    }
                }), _react2.default.createElement('ul', { className: 'items-wrapper ' + getWrapperClass(), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 78
                    }
                }, _this.props.data.map(function (item, i) {
                    return _react2.default.createElement(_Item2.default, { key: i,
                        selected: i === _this.state.selectedItem,
                        onClick: _this.onItemClick.bind(_this, i, item), __source: {
                            fileName: _jsxFileName,
                            lineNumber: 80
                        }
                    }, item.node);
                })));
            }
        };

        _this.state = {
            isSearching: false,
            selectedItem: -1,
            searchText: ''
        };
        return _this;
    }

    (0, _createClass3.default)(DropdownSearch, [{
        key: 'render',
        value: function render() {
            console.log('..render..', this.state);
            return _react2.default.createElement('div', { className: 'dropdown-container', onKeyDown: this.onKeyDown, 'data-jsx': 1408344601,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement('div', { className: 'dropdown-search', 'data-jsx': 1408344601,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, this.getSearchState()), _react2.default.createElement(_style2.default, {
                styleId: 1408344601,
                css: '.dropdown-container[data-jsx="1408344601"]{width:100%;height:54px;position:relative}.dropdown-search[data-jsx="1408344601"]{' + ConfigStyle.inputStyle + ' padding:0;background-image:url(\'/static/images/dropdown-arrow.jpg\');background-repeat:no-repeat;background-position:right 10px top 24px;height:auto;position:absolute;z-index:100;left:0;right:0}.dropdown-search[data-jsx="1408344601"] .head-text{cursor:pointer;padding:1px 6px 1px 6px;height:52px;line-height:52px;box-sizing:border-box;font-size:20px}.dropdown-search[data-jsx="1408344601"] input{border:none;height:52px;width:100%;font-family:Helvetica,Arial,sans-serif !important;font-size:20px}.dropdown-search[data-jsx="1408344601"] .items-wrapper{cursor:pointer}.dropdown-search[data-jsx="1408344601"] .items-wrapper.list{padding-bottom:20px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2NvbXBvbmVudHMvc2hhcmVDb21wb25lbnQvZHJvcGRvd24vZHJvcGRvd25TZWFyY2gvRHJvcGRvd25TZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkZnQyxBQUd1QyxBQU1BLEFBV0ssQUFRSCxBQU9HLEFBR0ssV0FsQ1QsQ0F5QkMsR0FSVyxBQWUzQixLQUdBLEdBbENzQixDQXlCUCxXQUN5QyxJQXJCTSxBQVkvQyxFQWhCZixVQWlCcUIsaUJBQ0ssaUJBUVIsS0FQQyxPQWRhLEdBc0JoQyxLQVBBLG9CQWQ0Qyx3Q0FDN0IsWUFDTyxrQkFDTixZQUNOLE9BQ0MsUUFDWCIsImZpbGUiOiJ2aWV3cy9jb21wb25lbnRzL3NoYXJlQ29tcG9uZW50L2Ryb3Bkb3duL2Ryb3Bkb3duU2VhcmNoL0Ryb3Bkb3duU2VhcmNoLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9leGl0L0VYSVRGb2xkZXIvd29yay9naXRodWIvc29jaWFsLXNlYXJjaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBvbkNsaWNrT3V0c2lkZSBmcm9tICdyZWFjdC1vbmNsaWNrb3V0c2lkZSdcbmltcG9ydCAqIGFzIENvbmZpZ1N0eWxlIGZyb20gJ34vdmlld3MvY29tcG9uZW50cy9tYWluL3N0eWxlL2NvbmZpZ1N0eWxlJ1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJ1xuXG5jbGFzcyBEcm9wZG93blNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc1NlYXJjaGluZzogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW06IC0xLFxuICAgICAgICAgICAgc2VhcmNoVGV4dDogJycsXG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DbGlja1NlYXJjaCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlYXJjaENoYW5nZSggdGhpcy5zdGF0ZS5zZWFyY2hUZXh0LCB0cnVlIClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIGlzU2VhcmNoaW5nOiB0cnVlLCBzZWxlY3RlZEl0ZW06IC0xLCB9KVxuICAgIH1cbiAgICBvbkl0ZW1DbGljayA9IChpLCBpdGVtLCBlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIGlzU2VhcmNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbTogaSxcbiAgICAgICAgICAgIHNlYXJjaFRleHQ6IGl0ZW0ubmFtZSxcbiAgICAgICAgfSlcbiAgICB9XG4gICAgb25DaGFuZ2VUZXh0ID0gZSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWFyY2hDaGFuZ2UoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBzZWFyY2hUZXh0OiBlLnRhcmdldC52YWx1ZSwgc2VsZWN0ZWRJdGVtOiAtMSwgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVDbGlja091dHNpZGUgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIGlzU2VhcmNoaW5nOiBmYWxzZSwgc2VsZWN0ZWRJdGVtOiAtMSwgIH0pXG4gICAgfVxuXG4gICAgb25LZXlEb3duID0gZT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhlLmtleUNvZGUpXG4gICAgICAgIGlmKGUua2V5Q29kZT09PTM4KXtcbiAgICAgICAgICAgIC8vIGFycm93IHVwXG4gICAgICAgICAgICBsZXQgbmV4dFNlbGVjdEluZGV4ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gLSAxXG4gICAgICAgICAgICBpZihuZXh0U2VsZWN0SW5kZXg8MCl7XG4gICAgICAgICAgICAgICAgbmV4dFNlbGVjdEluZGV4ID0gdGhpcy5wcm9wcy5kYXRhLmxlbmd0aC0xXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgc2VhcmNoVGV4dDogdGhpcy5wcm9wcy5kYXRhW25leHRTZWxlY3RJbmRleF0ubmFtZSwgc2VsZWN0ZWRJdGVtOm5leHRTZWxlY3RJbmRleCB9KVxuICAgICAgICB9ZWxzZSBpZihlLmtleUNvZGU9PT00MCl7XG4gICAgICAgICAgICAvLyBhcnJvdyBkb3duXG4gICAgICAgICAgICBsZXQgbmV4dFNlbGVjdEluZGV4ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gKyAxXG4gICAgICAgICAgICBpZihuZXh0U2VsZWN0SW5kZXggPiB0aGlzLnByb3BzLmRhdGEubGVuZ3RoIC0xICl7XG4gICAgICAgICAgICAgICAgbmV4dFNlbGVjdEluZGV4ID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHNlYXJjaFRleHQ6IHRoaXMucHJvcHMuZGF0YVtuZXh0U2VsZWN0SW5kZXhdLm5hbWUsIHNlbGVjdGVkSXRlbTpuZXh0U2VsZWN0SW5kZXggfSlcbiAgICAgICAgfWVsc2UgaWYoZS5rZXlDb2RlPT09MTMpe1xuICAgICAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBzZWFyY2hUZXh0OiB0aGlzLnByb3BzLmRhdGFbdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1dLm5hbWUsIGlzU2VhcmNoaW5nOiBmYWxzZSB9KVxuICAgICAgICB9ZWxzZSBpZihlLmtleUNvZGU9PT0yNyl7XG4gICAgICAgICAgICAvLyBlc2NhcGVcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNlYXJjaFN0YXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNTZWFyY2hpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dOb2RlID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtXSA/IHRoaXMucHJvcHMuZGF0YVt0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbV0ubm9kZSA6IHRoaXMuc3RhdGUuc2VhcmNoVGV4dFxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaGVhZC10ZXh0XCIgb25DbGljaz17dGhpcy5vbkNsaWNrU2VhcmNofT57c2hvd05vZGV9PC9kaXY+XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBnZXRXcmFwcGVyQ2xhc3MgPSAoKT0+dGhpcy5wcm9wcy5kYXRhLmxlbmd0aD4wPydsaXN0JzonJ1xuICAgICAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IHJlZj17Y2hpbGQgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNoaWxkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGlsZC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZWxlY3Rpb25TdGFydCA9IGNoaWxkLnNlbGVjdGlvbkVuZCA9IGNoaWxkLnZhbHVlLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVRleHR9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFRleHR9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cyAvPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2BpdGVtcy13cmFwcGVyICR7Z2V0V3JhcHBlckNsYXNzKCl9YH0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEl0ZW0ga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtpID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uSXRlbUNsaWNrLmJpbmQodGhpcywgaSwgaXRlbSl9PntpdGVtLm5vZGV9PC9JdGVtPlxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnLi5yZW5kZXIuLicsIHRoaXMuc3RhdGUpXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lclwiIG9uS2V5RG93bj17dGhpcy5vbktleURvd259PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0U2VhcmNoU3RhdGUoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bi1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24tc2VhcmNoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Q29uZmlnU3R5bGUuaW5wdXRTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZHJvcGRvd24tYXJyb3cuanBnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxMHB4IHRvcCAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDphdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OjA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24tc2VhcmNoIDpnbG9iYWwoLmhlYWQtdGV4dCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MXB4IDZweCAxcHggNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo1MnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MnB4OyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bi1zZWFyY2ggOmdsb2JhbChpbnB1dCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRyb3Bkb3duLXNlYXJjaCA6Z2xvYmFsKC5pdGVtcy13cmFwcGVyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24tc2VhcmNoIDpnbG9iYWwoLml0ZW1zLXdyYXBwZXIubGlzdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBvbkNsaWNrT3V0c2lkZShEcm9wZG93blNlYXJjaClcblxuXG5Ecm9wZG93blNlYXJjaC5wcm9wVHlwZXMgPSB7XG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICBuYW1lOlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICAgICAgICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgICAgICAgICAgICAgUHJvcFR5cGVzLm5vZGVcbiAgICAgICAgICAgICAgICBdKS5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgbm9kZTpQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG4gICAgICAgIH0pXG4gICAgKS5pc1JlcXVpcmVkLFxuICAgIG9uU2VhcmNoQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbn0iXX0= */\n/*@ sourceURL=views/components/shareComponent/dropdown/dropdownSearch/DropdownSearch.js */'
            }));
        }
    }]);

    return DropdownSearch;
}(_react2.default.Component);

exports.default = (0, _reactOnclickoutside2.default)(DropdownSearch);


DropdownSearch.propTypes = {
    data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool, _propTypes2.default.node]).isRequired,
        node: _propTypes2.default.node.isRequired
    })).isRequired,
    onSearchChange: _propTypes2.default.func.isRequired,
    onSelect: _propTypes2.default.func
};