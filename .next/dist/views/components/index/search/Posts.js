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

var _Post = require('./Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/exit/EXITFolder/work/github/social-search/views/components/index/search/Posts.js';


var Posts = function (_React$Component) {
    (0, _inherits3.default)(Posts, _React$Component);

    function Posts() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Posts);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Posts.__proto__ || (0, _getPrototypeOf2.default)(Posts)).call.apply(_ref, [this].concat(args))), _this), _this.formatDate = function (date) {
            var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();
            var hours = date.getHours();
            var minutes = date.getMinutes();

            return day + ' ' + monthNames[monthIndex] + ' ' + year + ' at ' + ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Posts, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'posts-container', 'data-jsx': 1756273878,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, this.props.posts.filter(function (item, i) {
                return i < 50;
            }).map(function (post, i) {
                return _react2.default.createElement(_Post2.default, { key: i, post: post, id: i, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                });
            }), _react2.default.createElement(_style2.default, {
                styleId: 1756273878,
                css: '.posts-container[data-jsx="1756273878"]{width:500px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2NvbXBvbmVudHMvaW5kZXgvc2VhcmNoL1Bvc3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCd0IsQUFHZ0MsWUFDZiIsImZpbGUiOiJ2aWV3cy9jb21wb25lbnRzL2luZGV4L3NlYXJjaC9Qb3N0cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXhpdC9FWElURm9sZGVyL3dvcmsvZ2l0aHViL3NvY2lhbC1zZWFyY2giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFBvc3QgZnJvbSAnLi9Qb3N0J1xuY2xhc3MgUG9zdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgZm9ybWF0RGF0ZSA9IGRhdGU9PntcbiAgICAgICAgdmFyIG1vbnRoTmFtZXMgPSBbXG4gICAgICAgICAgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLFxuICAgICAgICAgIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLFxuICAgICAgICAgIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLFxuICAgICAgICAgIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXG4gICAgICAgIF1cbiAgICAgIFxuICAgICAgICB2YXIgZGF5ID0gZGF0ZS5nZXREYXRlKClcbiAgICAgICAgdmFyIG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKClcbiAgICAgICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpXG4gICAgICAgIHZhciBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKClcbiAgICAgIFxuICAgICAgICByZXR1cm4gZGF5ICsgJyAnICsgbW9udGhOYW1lc1ttb250aEluZGV4XSArICcgJyArIHllYXIgKyAnIGF0ICcgKyAoXCIwXCIraG91cnMpLnNsaWNlKC0yKSArIFwiOlwiICsgKFwiMFwiK21pbnV0ZXMpLnNsaWNlKC0yKVxuICAgICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwb3N0cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnBvc3RzLmZpbHRlcigoaXRlbSxpKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpPDUwXG4gICAgICAgICAgICB9KS5tYXAoIChwb3N0LGkpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxQb3N0IGtleT17aX0gcG9zdD17cG9zdH0gaWQ9e2l9Lz5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5wb3N0cy1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjUwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGU9PntcbiAgICByZXR1cm4ge1xuICAgICAgICBwb3N0czogc3RhdGUuZmJQb3N0UmVkdWNlci5wb3N0c1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQb3N0cykiXX0= */\n/*@ sourceURL=views/components/index/search/Posts.js */'
            }));
        }
    }]);

    return Posts;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        posts: state.fbPostReducer.posts
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Posts);