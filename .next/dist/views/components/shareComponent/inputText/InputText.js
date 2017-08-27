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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/exit/EXITFolder/work/github/social-search/views/components/shareComponent/inputText/InputText.js';


var InputText = function (_React$Component) {
    (0, _inherits3.default)(InputText, _React$Component);

    function InputText(props) {
        (0, _classCallCheck3.default)(this, InputText);

        var _this = (0, _possibleConstructorReturn3.default)(this, (InputText.__proto__ || (0, _getPrototypeOf2.default)(InputText)).call(this, props));

        _this.onChange = function (e) {
            if (_this.props.onChange) {
                _this.props.onChange(e.target.value);
            }
            _this.setState((0, _extends3.default)({}, _this.state, {
                value: e.target.value
            }));
        };

        _this.onBlur = function (e) {
            if (_this.props.onBlur) {
                _this.props.onBlur();
            }
        };

        _this.state = {
            value: _this.props.value
        };
        return _this;
    }

    (0, _createClass3.default)(InputText, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState((0, _extends3.default)({}, this.state, {
                value: nextProps.value
            }));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('input', { className: (this.props.className || '') + ' input-text',
                onChange: this.onChange,
                onBlur: this.onBlur,
                value: this.state.value || '',
                placeholder: this.props.placeholder, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            });
        }
    }]);

    return InputText;
}(_react2.default.Component);

exports.default = InputText;


InputText.propTypes = {
    className: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    onChange: _propTypes2.default.func,
    onBlur: _propTypes2.default.func
};