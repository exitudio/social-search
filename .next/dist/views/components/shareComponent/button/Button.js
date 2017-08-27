'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/exit/EXITFolder/work/github/social-search/views/components/shareComponent/button/Button.js';


var Button = function Button(props) {
    var onClick = function onClick(e) {
        if (props.onClick && !props.disable) {
            props.onClick();
        }
    };
    return _react2.default.createElement('div', { className: 'button ' + (props.className || '') + ' ' + (props.disable ? 'disable' : ''), onClick: onClick, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, props.children);
};
Button.propTypes = {
    className: _propTypes2.default.string,
    disable: _propTypes2.default.bool,
    onClick: _propTypes2.default.func
};

exports.default = Button;