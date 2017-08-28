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
            _this.setState((0, _extends3.default)({}, _this.state, { isSearching: true }));
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
            _this.setState((0, _extends3.default)({}, _this.state, { searchText: e.target.value }));
        };

        _this.handleClickOutside = function (e) {
            _this.setState((0, _extends3.default)({}, _this.state, { isSearching: false }));
        };

        _this.onKeyDown = function (e) {
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
            }
        };

        _this.getSearchState = function () {
            if (!_this.state.isSearching) {
                var showNode = _this.props.data[_this.state.selectedItem] ? _this.props.data[_this.state.selectedItem].node : '';
                return _react2.default.createElement('div', { className: 'head-text', onClick: _this.onClickSearch, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                    }
                }, showNode);
            } else {
                return _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, _react2.default.createElement('input', { ref: function ref(child) {
                        return _this.inputSearch;
                    },
                    onChange: _this.onChangeText,
                    value: _this.state.searchText,
                    autoFocus: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                }), _react2.default.createElement('ul', { className: 'items-wrapper', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                    }
                }, _this.props.data.map(function (item, i) {
                    return _react2.default.createElement(_Item2.default, { key: i,
                        selected: i === _this.state.selectedItem,
                        onClick: _this.onItemClick.bind(_this, i, item), __source: {
                            fileName: _jsxFileName,
                            lineNumber: 72
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
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'dropdown-container', onKeyDown: this.onKeyDown, 'data-jsx': 1454180686,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement('div', { className: 'dropdown-search', 'data-jsx': 1454180686,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, this.getSearchState()), _react2.default.createElement(_style2.default, {
                styleId: 1454180686,
                css: '.dropdown-container[data-jsx="1454180686"]{width:100%;height:50px;position:relative}.dropdown-search[data-jsx="1454180686"]{' + ConfigStyle.inputStyle + ' padding:0;background-image:url(\'/static/images/dropdown-arrow.jpg\');background-repeat:no-repeat;background-position:right 10px top 24px;height:auto;position:absolute;z-index:100;left:0;right:0}.dropdown-search[data-jsx="1454180686"] .head-text{cursor:pointer;padding:1px 6px 1px 6px;height:48px;line-height:48px;box-sizing:border-box}.dropdown-search[data-jsx="1454180686"] input{border:none;height:48px;width:100%}.dropdown-search[data-jsx="1454180686"] .items-wrapper{cursor:pointer}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2NvbXBvbmVudHMvc2hhcmVDb21wb25lbnQvZHJvcGRvd24vZHJvcGRvd25TZWFyY2gvRHJvcGRvd25TZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0ZnQyxBQUd1QyxBQU1BLEFBV0ssQUFPSCxBQU1HLFdBN0JKLENBeUJDLEdBUlcsQUFhM0IsUUE3QnNCLENBeUJQLFdBQ2YsSUFyQjhELEFBWS9DLEVBaEJmLFVBaUJxQixpQkFDSyxzQkFDMUIsT0FkZ0MsNEJBQ1ksd0NBQzdCLFlBQ08sa0JBQ04sWUFDTixPQUNDLFFBQ1giLCJmaWxlIjoidmlld3MvY29tcG9uZW50cy9zaGFyZUNvbXBvbmVudC9kcm9wZG93bi9kcm9wZG93blNlYXJjaC9Ecm9wZG93blNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXhpdC9FWElURm9sZGVyL3dvcmsvZ2l0aHViL3NvY2lhbC1zZWFyY2giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgb25DbGlja091dHNpZGUgZnJvbSAncmVhY3Qtb25jbGlja291dHNpZGUnXG5pbXBvcnQgKiBhcyBDb25maWdTdHlsZSBmcm9tICd+L3ZpZXdzL2NvbXBvbmVudHMvbWFpbi9zdHlsZS9jb25maWdTdHlsZSdcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSdcblxuY2xhc3MgRHJvcGRvd25TZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNTZWFyY2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiAtMSxcbiAgICAgICAgICAgIHNlYXJjaFRleHQ6ICcnLFxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cbiAgICB9XG4gICAgb25DbGlja1NlYXJjaCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIGlzU2VhcmNoaW5nOiB0cnVlIH0pXG4gICAgfVxuICAgIG9uSXRlbUNsaWNrID0gKGksIGl0ZW0sIGUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgaXNTZWFyY2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiBpLFxuICAgICAgICAgICAgc2VhcmNoVGV4dDogaXRlbS5uYW1lLFxuICAgICAgICB9KVxuICAgIH1cbiAgICBvbkNoYW5nZVRleHQgPSBlID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlYXJjaENoYW5nZShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHNlYXJjaFRleHQ6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2tPdXRzaWRlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBpc1NlYXJjaGluZzogZmFsc2UgfSlcbiAgICB9XG5cbiAgICBvbktleURvd24gPSBlPT57XG4gICAgICAgIGlmKGUua2V5Q29kZT09PTM4KXtcbiAgICAgICAgICAgIC8vIGFycm93IHVwXG4gICAgICAgICAgICBsZXQgbmV4dFNlbGVjdEluZGV4ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gLSAxXG4gICAgICAgICAgICBpZihuZXh0U2VsZWN0SW5kZXg8MCl7XG4gICAgICAgICAgICAgICAgbmV4dFNlbGVjdEluZGV4ID0gdGhpcy5wcm9wcy5kYXRhLmxlbmd0aC0xXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgc2VhcmNoVGV4dDogdGhpcy5wcm9wcy5kYXRhW25leHRTZWxlY3RJbmRleF0ubmFtZSwgc2VsZWN0ZWRJdGVtOm5leHRTZWxlY3RJbmRleCB9KVxuICAgICAgICB9ZWxzZSBpZihlLmtleUNvZGU9PT00MCl7XG4gICAgICAgICAgICAvLyBhcnJvdyBkb3duXG4gICAgICAgICAgICBsZXQgbmV4dFNlbGVjdEluZGV4ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gKyAxXG4gICAgICAgICAgICBpZihuZXh0U2VsZWN0SW5kZXggPiB0aGlzLnByb3BzLmRhdGEubGVuZ3RoIC0xICl7XG4gICAgICAgICAgICAgICAgbmV4dFNlbGVjdEluZGV4ID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHNlYXJjaFRleHQ6IHRoaXMucHJvcHMuZGF0YVtuZXh0U2VsZWN0SW5kZXhdLm5hbWUsIHNlbGVjdGVkSXRlbTpuZXh0U2VsZWN0SW5kZXggfSlcbiAgICAgICAgfWVsc2UgaWYoZS5rZXlDb2RlPT09MTMpe1xuICAgICAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBzZWFyY2hUZXh0OiB0aGlzLnByb3BzLmRhdGFbdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1dLm5hbWUsIGlzU2VhcmNoaW5nOiBmYWxzZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2VhcmNoU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pc1NlYXJjaGluZykge1xuICAgICAgICAgICAgY29uc3Qgc2hvd05vZGUgPSB0aGlzLnByb3BzLmRhdGFbdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1dID8gdGhpcy5wcm9wcy5kYXRhW3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtXS5ub2RlIDogJydcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImhlYWQtdGV4dFwiIG9uQ2xpY2s9e3RoaXMub25DbGlja1NlYXJjaH0+e3Nob3dOb2RlfTwvZGl2PlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IHJlZj17Y2hpbGQgPT4gdGhpcy5pbnB1dFNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VUZXh0fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hUZXh0fVxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXMgLz5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaXRlbXMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxJdGVtIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17aSA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkl0ZW1DbGljay5iaW5kKHRoaXMsIGksIGl0ZW0pfT57aXRlbS5ub2RlfTwvSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyXCIgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXRTZWFyY2hTdGF0ZSgpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgLmRyb3Bkb3duLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bi1zZWFyY2h7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtDb25maWdTdHlsZS5pbnB1dFN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9kcm9wZG93bi1hcnJvdy5qcGcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEwcHggdG9wIDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bi1zZWFyY2ggOmdsb2JhbCguaGVhZC10ZXh0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxcHggNnB4IDFweCA2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjQ4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24tc2VhcmNoIDpnbG9iYWwoaW5wdXQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkOyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24tc2VhcmNoIDpnbG9iYWwoLml0ZW1zLXdyYXBwZXIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG9uQ2xpY2tPdXRzaWRlKERyb3Bkb3duU2VhcmNoKVxuXG5cbkRyb3Bkb3duU2VhcmNoLnByb3BUeXBlcyA9IHtcbiAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIG5hbWU6UHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgICAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgICAgICAgICAgICAgICBQcm9wVHlwZXMubm9kZVxuICAgICAgICAgICAgICAgIF0pLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBub2RlOlByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbiAgICAgICAgfSlcbiAgICApLmlzUmVxdWlyZWQsXG4gICAgb25TZWFyY2hDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxufSJdfQ== */\n/*@ sourceURL=views/components/shareComponent/dropdown/dropdownSearch/DropdownSearch.js */'
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