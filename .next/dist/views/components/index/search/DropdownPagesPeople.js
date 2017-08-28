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

    function DropdownPagesPeople(props) {
        (0, _classCallCheck3.default)(this, DropdownPagesPeople);

        var _this = (0, _possibleConstructorReturn3.default)(this, (DropdownPagesPeople.__proto__ || (0, _getPrototypeOf2.default)(DropdownPagesPeople)).call(this, props));

        _this.onSearchChange = function (text) {
            _this.props.dispatch(FBPageAction.LoadFBPageAction(text));
        };

        _this.data = [{ name: 'aaa', node: _react2.default.createElement('div', { className: 'child-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, _react2.default.createElement('img', { src: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c17.0.50.50/p50x50/1013835_588444897892457_2075531411_n.jpg?oh=912e2a0af609da4994bfbb5bd9686b91&oe=5A21386A', alt: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, 'OK')) }, { name: 'bbb', node: _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, 'node bbb') }, { name: 'ccc', node: _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, 'node ccc') }];
        return _this;
    }

    (0, _createClass3.default)(DropdownPagesPeople, [{
        key: 'render',
        value: function render() {
            console.log(this.props);
            return _react2.default.createElement('div', {
                'data-jsx': 60589828,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement(_DropdownSearch2.default, { data: this.data, onSearchChange: this.onSearchChange, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }), _react2.default.createElement(_style2.default, {
                styleId: 60589828,
                css: '.child-item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2NvbXBvbmVudHMvaW5kZXgvc2VhcmNoL0Ryb3Bkb3duUGFnZXNQZW9wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJnQyxBQUcwQywwRUFDUyxzQkFDMUIiLCJmaWxlIjoidmlld3MvY29tcG9uZW50cy9pbmRleC9zZWFyY2gvRHJvcGRvd25QYWdlc1Blb3BsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXhpdC9FWElURm9sZGVyL3dvcmsvZ2l0aHViL3NvY2lhbC1zZWFyY2giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0ICogYXMgRkJQYWdlQWN0aW9uIGZyb20gJy4vcmVkdXgvRkJQYWdlQWN0aW9uJ1xuaW1wb3J0IERyb3Bkb3duU2VhcmNoIGZyb20gJ34vdmlld3MvY29tcG9uZW50cy9zaGFyZUNvbXBvbmVudC9kcm9wZG93bi9kcm9wZG93blNlYXJjaC9Ecm9wZG93blNlYXJjaCdcbmNsYXNzIERyb3Bkb3duUGFnZXNQZW9wbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5kYXRhID0gW1xuICAgICAgICAgICAge25hbWU6J2FhYScsIG5vZGU6PGRpdiBjbGFzc05hbWU9XCJjaGlsZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9zY29udGVudC54eC5mYmNkbi5uZXQvdi90MS4wLTEvYzE3LjAuNTAuNTAvcDUweDUwLzEwMTM4MzVfNTg4NDQ0ODk3ODkyNDU3XzIwNzU1MzE0MTFfbi5qcGc/b2g9OTEyZTJhMGFmNjA5ZGE0OTk0YmZiYjViZDk2ODZiOTEmb2U9NUEyMTM4NkFcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+T0s8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59LFxuICAgICAgICAgICAge25hbWU6J2JiYicsIG5vZGU6PGRpdj5ub2RlIGJiYjwvZGl2Pn0sXG4gICAgICAgICAgICB7bmFtZTonY2NjJywgbm9kZTo8ZGl2Pm5vZGUgY2NjPC9kaXY+fSxcbiAgICAgICAgXVxuICAgIH1cbiAgICBvblNlYXJjaENoYW5nZSA9IHRleHQ9PntcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChGQlBhZ2VBY3Rpb24uTG9hZEZCUGFnZUFjdGlvbih0ZXh0KSApXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxuICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duU2VhcmNoIGRhdGE9e3RoaXMuZGF0YX0gb25TZWFyY2hDaGFuZ2U9e3RoaXMub25TZWFyY2hDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgOmdsb2JhbCguY2hpbGQtaXRlbSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIH1cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlPT4oe1xuICAgIHBhZ2VzOiBzdGF0ZS5GQlBhZ2VSZWR1Y2VyLnBhZ2VzLFxufSlcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShEcm9wZG93blBhZ2VzUGVvcGxlKSJdfQ== */\n/*@ sourceURL=views/components/index/search/DropdownPagesPeople.js */'
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