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

var _configStyle = require('../../../main/style/configStyle');

var ConfigStyle = _interopRequireWildcard(_configStyle);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/exit/EXITFolder/work/github/social-search/views/components/shareComponent/dropdown/dropdownSearch/Item.js';


var Item = function (_React$Component) {
    (0, _inherits3.default)(Item, _React$Component);

    function Item(props) {
        (0, _classCallCheck3.default)(this, Item);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Item.__proto__ || (0, _getPrototypeOf2.default)(Item)).call(this, props));

        _this.onClick = function (e) {
            _this.props.onClick();
        };

        _this.onMouseOver = function (e) {
            _this.setState((0, _extends3.default)({}, _this.state, { isOver: true }));
        };

        _this.onMouseLeave = function (e) {
            _this.setState((0, _extends3.default)({}, _this.state, { isOver: false }));
        };

        _this.getHighlight = function () {
            if (_this.state.isOver) return 'over';else if (_this.props.selected) return 'selected';
            return '';
        };

        _this.state = { isOver: false };
        return _this;
    }

    (0, _createClass3.default)(Item, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.selected !== this.props.selected || nextState.isOver !== this.state.isOver || nextProps.children !== this.props.children;
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('item render...');
            return _react2.default.createElement('li', { onClick: this.onClick,
                onMouseOver: this.onMouseOver,
                onMouseLeave: this.onMouseLeave,
                className: 'item ' + this.getHighlight(), 'data-jsx': 4088896094,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('div', { className: 'item-text', 'data-jsx': 4088896094,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, this.props.children), _react2.default.createElement(_style2.default, {
                styleId: 4088896094,
                css: '.item[data-jsx="4088896094"]{width:100%;height:51px}.item.selected[data-jsx="4088896094"]{background-color:' + ConfigStyle.blueLight + ';color:white}.item.over[data-jsx="4088896094"]{background-color:' + ConfigStyle.blueDark + ';color:white}.item-text[data-jsx="4088896094"]{margin:0 20px;border-top:1px solid;border-color:' + ConfigStyle.grayMid + ';line-height:51px;height:51px;box-sizing:border-box}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2NvbXBvbmVudHMvc2hhcmVDb21wb25lbnQvZHJvcGRvd24vZHJvcGRvd25TZWFyY2gvSXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2dDLEFBSXdDLEFBS1gsQUFJQSxBQUdjLFdBWEYsR0FZUyxTQVh6QixZQVk2QyxXQVI5QyxBQUlBLFlBSkMsQUFJQSxtQkFLcUIsaUJBQ0wsWUFDVSxzQkFDMUIiLCJmaWxlIjoidmlld3MvY29tcG9uZW50cy9zaGFyZUNvbXBvbmVudC9kcm9wZG93bi9kcm9wZG93blNlYXJjaC9JdGVtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9leGl0L0VYSVRGb2xkZXIvd29yay9naXRodWIvc29jaWFsLXNlYXJjaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCAqIGFzIENvbmZpZ1N0eWxlIGZyb20gJ34vdmlld3MvY29tcG9uZW50cy9tYWluL3N0eWxlL2NvbmZpZ1N0eWxlJ1xuXG5jbGFzcyBJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7aXNPdmVyOmZhbHNlfVxuICAgIH1cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUoIG5leHRQcm9wcywgbmV4dFN0YXRlKXtcbiAgICAgICAgcmV0dXJuIG5leHRQcm9wcy5zZWxlY3RlZCAhPT0gdGhpcy5wcm9wcy5zZWxlY3RlZCB8fCBuZXh0U3RhdGUuaXNPdmVyICE9PSB0aGlzLnN0YXRlLmlzT3ZlciB8fCBuZXh0UHJvcHMuY2hpbGRyZW4gIT09IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICB9XG4gICAgb25DbGljayA9IGU9PntcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKClcbiAgICB9XG4gICAgb25Nb3VzZU92ZXIgPSBlPT57XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIGlzT3Zlcjp0cnVlfSlcbiAgICB9XG4gICAgb25Nb3VzZUxlYXZlID0gZT0+e1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBpc092ZXI6ZmFsc2V9KVxuICAgIH1cblxuICAgIGdldEhpZ2hsaWdodCA9ICgpPT57XG4gICAgICAgIGlmKCB0aGlzLnN0YXRlLmlzT3ZlciApIHJldHVybiAnb3ZlcidcbiAgICAgICAgZWxzZSBpZih0aGlzLnByb3BzLnNlbGVjdGVkICkgcmV0dXJuICdzZWxlY3RlZCdcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zb2xlLmxvZygnaXRlbSByZW5kZXIuLi4nKVxuICAgICAgICByZXR1cm4gPGxpIG9uQ2xpY2s9e3RoaXMub25DbGlja30gXG4gICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMub25Nb3VzZU92ZXJ9IFxuICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5vbk1vdXNlTGVhdmV9IFxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGl0ZW0gJHt0aGlzLmdldEhpZ2hsaWdodCgpfWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuaXRlbXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogJHtDb25maWdTdHlsZS5hZGRUcmFuc2l0aW9uKCdiYWNrZ3JvdW5kLWNvbG9yJyl9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtLnNlbGVjdGVke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29uZmlnU3R5bGUuYmx1ZUxpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLml0ZW0ub3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbmZpZ1N0eWxlLmJsdWVEYXJrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLml0ZW0tdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiR7Q29uZmlnU3R5bGUuZ3JheU1pZH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaXRlbS5zZWxlY3RlZCAuaXRlbS10ZXh0LCAuaXRlbS5vdmVyIC5pdGVtLXRleHR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGJvcmRlcjogbm9uZTsgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB9YH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvbGk+IFxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEl0ZW1cblxuSXRlbS5wcm9wVHlwZXMgPSB7XG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufSJdfQ== */\n/*@ sourceURL=views/components/shareComponent/dropdown/dropdownSearch/Item.js */'
            }));
        }
    }]);

    return Item;
}(_react2.default.Component);

exports.default = Item;


Item.propTypes = {
    selected: _propTypes2.default.bool,
    children: _propTypes2.default.node,
    onClick: _propTypes2.default.func.isRequired
};