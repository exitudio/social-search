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
            return _react2.default.createElement('div', {
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