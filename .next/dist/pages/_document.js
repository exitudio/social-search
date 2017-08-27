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

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/exit/EXITFolder/work/github/social-search/pages/_document.js?entry';


var MyDocument = function (_Document) {
    (0, _inherits3.default)(MyDocument, _Document);

    function MyDocument() {
        (0, _classCallCheck3.default)(this, MyDocument);

        return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
    }

    (0, _createClass3.default)(MyDocument, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('html', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement(_document.Head, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, 'My page title'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/reset.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            })), _react2.default.createElement('body', { className: 'custom_class', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, this.props.customValue, _react2.default.createElement(_document.Main, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }), _react2.default.createElement(_document.NextScript, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }), _react2.default.createElement('script', { dangerouslySetInnerHTML: {
                    __html: '\n                        //we can set js over heer.\n                    ' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            })));
        }
    }], [{
        key: 'getInitialProps',
        value: function getInitialProps(_ref) {
            var renderPage = _ref.renderPage;

            var _renderPage = renderPage(),
                html = _renderPage.html,
                head = _renderPage.head,
                errorHtml = _renderPage.errorHtml,
                chunks = _renderPage.chunks;

            var styles = (0, _server2.default)();
            return { html: html, head: head, errorHtml: errorHtml, chunks: chunks, styles: styles };
        }
    }]);

    return MyDocument;
}(_document2.default);

exports.default = MyDocument;