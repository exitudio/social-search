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
            return nextProps.selected !== this.props.selected || nextState.isOver !== this.state.isOver;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('li', { onClick: this.onClick,
                onMouseOver: this.onMouseOver,
                onMouseLeave: this.onMouseLeave,
                className: 'item ' + this.getHighlight(), 'data-jsx': 323698977,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('div', { className: 'item-text', 'data-jsx': 323698977,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, this.props.children), _react2.default.createElement(_style2.default, {
                styleId: 323698977,
                css: '.item[data-jsx="323698977"]{width:100%;height:51px}.item.selected[data-jsx="323698977"]{background-color:' + ConfigStyle.blueLight + ';color:white}.item.over[data-jsx="323698977"]{background-color:' + ConfigStyle.blueDark + ';color:white}.item-text[data-jsx="323698977"]{margin:0 20px;border-top:1px solid;border-color:' + ConfigStyle.grayMid + ';line-height:50px;box-sizing:border-box}.item.selected[data-jsx="323698977"] .item-text[data-jsx="323698977"],.item.over[data-jsx="323698977"] .item-text[data-jsx="323698977"]{border:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2NvbXBvbmVudHMvc2hhcmVDb21wb25lbnQvZHJvcGRvd24vZHJvcGRvd25TZWFyY2gvSXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2dDLEFBSXdDLEFBS1gsQUFJQSxBQUdjLEFBT0YsV0FsQkEsQ0FtQmhCLEVBUHlCLFNBWHpCLFlBWTZDLFdBUjlDLEFBSUEsWUFKQyxBQUlBLG1CQUtxQixpQkFDSyxzQkFDMUIiLCJmaWxlIjoidmlld3MvY29tcG9uZW50cy9zaGFyZUNvbXBvbmVudC9kcm9wZG93bi9kcm9wZG93blNlYXJjaC9JdGVtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9leGl0L0VYSVRGb2xkZXIvd29yay9naXRodWIvc29jaWFsLXNlYXJjaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCAqIGFzIENvbmZpZ1N0eWxlIGZyb20gJ34vdmlld3MvY29tcG9uZW50cy9tYWluL3N0eWxlL2NvbmZpZ1N0eWxlJ1xuXG5jbGFzcyBJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7aXNPdmVyOmZhbHNlfVxuICAgIH1cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUoIG5leHRQcm9wcywgbmV4dFN0YXRlKXtcbiAgICAgICAgcmV0dXJuIG5leHRQcm9wcy5zZWxlY3RlZCAhPT0gdGhpcy5wcm9wcy5zZWxlY3RlZCB8fCBuZXh0U3RhdGUuaXNPdmVyICE9PSB0aGlzLnN0YXRlLmlzT3ZlclxuICAgIH1cbiAgICBvbkNsaWNrID0gZT0+e1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soKVxuICAgIH1cbiAgICBvbk1vdXNlT3ZlciA9IGU9PntcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgaXNPdmVyOnRydWV9KVxuICAgIH1cbiAgICBvbk1vdXNlTGVhdmUgPSBlPT57XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIGlzT3ZlcjpmYWxzZX0pXG4gICAgfVxuXG4gICAgZ2V0SGlnaGxpZ2h0ID0gKCk9PntcbiAgICAgICAgaWYoIHRoaXMuc3RhdGUuaXNPdmVyICkgcmV0dXJuICdvdmVyJ1xuICAgICAgICBlbHNlIGlmKHRoaXMucHJvcHMuc2VsZWN0ZWQgKSByZXR1cm4gJ3NlbGVjdGVkJ1xuICAgICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiA8bGkgb25DbGljaz17dGhpcy5vbkNsaWNrfSBcbiAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5vbk1vdXNlT3Zlcn0gXG4gICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLm9uTW91c2VMZWF2ZX0gXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaXRlbSAke3RoaXMuZ2V0SGlnaGxpZ2h0KCl9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVte1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAke0NvbmZpZ1N0eWxlLmFkZFRyYW5zaXRpb24oJ2JhY2tncm91bmQtY29sb3InKX0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLml0ZW0uc2VsZWN0ZWR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb25maWdTdHlsZS5ibHVlTGlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaXRlbS5vdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29uZmlnU3R5bGUuYmx1ZURhcmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaXRlbS10ZXh0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6JHtDb25maWdTdHlsZS5ncmF5TWlkfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLml0ZW0uc2VsZWN0ZWQgLml0ZW0tdGV4dCwgLml0ZW0ub3ZlciAuaXRlbS10ZXh0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9saT4gXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSXRlbVxuXG5JdGVtLnByb3BUeXBlcyA9IHtcbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59Il19 */\n/*@ sourceURL=views/components/shareComponent/dropdown/dropdownSearch/Item.js */'
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