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

var _Description = require('./Description');

var _Description2 = _interopRequireDefault(_Description);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/exit/EXITFolder/work/github/social-search/views/components/index/search/Post.js';


var Post = function (_React$Component) {
    (0, _inherits3.default)(Post, _React$Component);

    function Post() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Post);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Post.__proto__ || (0, _getPrototypeOf2.default)(Post)).call.apply(_ref, [this].concat(args))), _this), _this.formatDate = function (date) {
            var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();
            var hours = date.getHours();
            var minutes = date.getMinutes();

            return day + ' ' + monthNames[monthIndex] + ' ' + year + ' at ' + ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);
        }, _this.getContent = function () {
            if (_this.props.post.parent_id) {
                return _react2.default.createElement(Post, { post: _this.props.sharedPosts[_this.props.post.parent_id], __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                });
            } else if (_this.props.post.type === 'link' || _this.props.post.type === 'video') {
                return _react2.default.createElement('a', { href: _this.props.post.link, target: '_blank', className: 'share-link', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                }, _react2.default.createElement('div', { className: 'image-container', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                }, _react2.default.createElement('img', { className: 'image', src: _this.props.post.full_picture, alt: '', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                })), _react2.default.createElement('div', { className: 'text', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    }
                }, _react2.default.createElement('div', { className: 'link-head', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    }
                }, _this.props.post.name), _react2.default.createElement('div', { className: 'link-description', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                }, _this.props.post.description)));
            } else if (_this.props.post.full_picture) {
                return _react2.default.createElement('img', { className: 'scaledImageFitWidth', src: _this.props.post.full_picture, alt: '', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                });
            } else {
                return '';
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Post, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'post', 'data-jsx': 2141661945,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('div', { className: 'head', 'data-jsx': 2141661945,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('a', { href: 'https://facebook.com/' + this.props.post.from.id, className: 'profile-image', 'data-jsx': 2141661945,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('img', { src: 'http://graph.facebook.com/' + this.props.post.from.id + '/picture?type=square', alt: '', 'data-jsx': 2141661945,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            })), _react2.default.createElement('div', { className: 'right-info', 'data-jsx': 2141661945,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('div', { className: 'user-name', 'data-jsx': 2141661945,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, this.props.post.from.name, ' ', _react2.default.createElement('a', { href: this.props.post.permalink_url, target: '_blank', 'data-jsx': 2141661945,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, this.props.id, ' >')), _react2.default.createElement('span', { className: 'timestampContent', 'data-jsx': 2141661945,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, this.formatDate(new Date(this.props.post.created_time))))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 2141661945,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(_Description2.default, { message: this.props.post.message, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }), this.getContent()), _react2.default.createElement(_style2.default, {
                styleId: 2141661945,
                css: '.post[data-jsx="2141661945"]{padding:12px;background-color:white;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;margin-top:10px;color:#1d2129}.head[data-jsx="2141661945"]{margin-bottom:11px}.head[data-jsx="2141661945"]:after{clear:both;content:" ";display:block}.profile-image[data-jsx="2141661945"]{float:left;margin-right:8px}.right-info[data-jsx="2141661945"]{float:left}.user-name[data-jsx="2141661945"]{-webkit-letter-spacing:-0.01em;-moz-letter-spacing:-0.01em;-ms-letter-spacing:-0.01em;letter-spacing:-0.01em;color:#365899;cursor:pointer;text-decoration:none;font-weight:bold;font-size:16px;line-height:25px;-webkit-font-smoothing:subpixel-antialiased}.timestampContent[data-jsx="2141661945"]{color:#90949c;font-weight:normal;font-size:14px;-webkit-letter-spacing:-0.01em;-moz-letter-spacing:-0.01em;-ms-letter-spacing:-0.01em;letter-spacing:-0.01em;line-height:20px}.post[data-jsx="2141661945"] .scaledImageFitWidth{height:auto;min-height:initial;width:100%;margin-top:20px;box-shadow:0 1px 1px rgba(0,0,0,.05);border:1px solid rgba(0,0,0,.1)}.post[data-jsx="2141661945"] .share-link{margin-top:10px;display:block;text-decoration:none;color:#1d2129;border:1px solid;border-color:#e9ebee #e9ebee #d1d1d1;box-shadow:0 0 0 1px rgba(0,0,0,.15) inset,0 1px 4px rgba(0,0,0,.1)}.post[data-jsx="2141661945"] .image-container{height:274.05323193916px;position:relative;overflow:hidden;border:1px solid;border-color:#e9ebee #e9ebee #d1d1d1}.post[data-jsx="2141661945"] .image{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);max-width:100%}.post[data-jsx="2141661945"] .text{height:auto;margin:10px 12px}.post[data-jsx="2141661945"] .link-head{font-family:Georgia,serif;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;font-size:18px;font-weight:500;line-height:22px;margin-bottom:5px;max-height:110px;overflow:hidden;word-wrap:break-word}.post[data-jsx="2141661945"] .link-description{line-height:16px;max-height:80px;overflow:hidden;font-size:12px;word-wrap:break-word}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2NvbXBvbmVudHMvaW5kZXgvc2VhcmNoL1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMER3QixBQUdpQyxBQVVPLEFBR1IsQUFLQSxBQUlBLEFBSVksQUFVVCxBQU9GLEFBV0ksQUFTUyxBQU9QLEFBT04sQUFLZSxBQVdWLFdBL0VMLEFBS0ssQUFJckIsQ0FxQnVCLEFBa0NGLENBN0VNLENBb0NKLEVBa0JMLENBdUNFLENBdkJSLENBNURaLElBSWtCLEVBaURJLENBUVQsQUFXYSxFQS9EMUIsQ0E0REEsQ0F4QnlCLENBWFYsRUFQSSxBQXlEQyxFQXRCNEIsQ0F0RTNCLENBYXJCLEtBOEJtQixDQW1CQyxLQTFCTyxDQXlEUixFQXZDRCxFQXJEdUIsS0EyQ0csQ0FtQnZCLEtBK0JJLENBdkNKLFdBU29CLE1BUkEsR0F1Q3pDLEtBN0ZzQixLQTJDaUIsYUExQ25CLENBcUJGLElBeUNsQixNQVIrRSxJQWhDNUQsQ0FyQkQsR0EwQ2xCLElBbUNtQixPQTVFbkIsQUFxQnlCLFFBd0RMLFdBN0NDLEVBVkEsR0F3REEsWUE3Q3JCLEVBVm1CLEdBMkNBLEFBYUcsUUExQnRCLElBN0JxQixHQTJDckIsR0FhcUIsV0F2RDJCLE1Bd0Q1QixnQkFDSyxxQkFDekIsQ0F6REEiLCJmaWxlIjoidmlld3MvY29tcG9uZW50cy9pbmRleC9zZWFyY2gvUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXhpdC9FWElURm9sZGVyL3dvcmsvZ2l0aHViL3NvY2lhbC1zZWFyY2giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSAnLi9EZXNjcmlwdGlvbidcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5jbGFzcyBQb3N0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGZvcm1hdERhdGUgPSBkYXRlPT57XG4gICAgICAgIHZhciBtb250aE5hbWVzID0gW1xuICAgICAgICAgIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIixcbiAgICAgICAgICBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIixcbiAgICAgICAgICBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIixcbiAgICAgICAgICBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIlxuICAgICAgICBdXG4gICAgICBcbiAgICAgICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG4gICAgICAgIHZhciBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpXG4gICAgICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0SG91cnMoKVxuICAgICAgICB2YXIgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpXG4gICAgICBcbiAgICAgICAgcmV0dXJuIGRheSArICcgJyArIG1vbnRoTmFtZXNbbW9udGhJbmRleF0gKyAnICcgKyB5ZWFyICsgJyBhdCAnICsgKFwiMFwiK2hvdXJzKS5zbGljZSgtMikgKyBcIjpcIiArIChcIjBcIittaW51dGVzKS5zbGljZSgtMilcbiAgICAgIH1cblxuICAgIGdldENvbnRlbnQgPSAoKT0+e1xuICAgICAgICBpZih0aGlzLnByb3BzLnBvc3QucGFyZW50X2lkKXtcbiAgICAgICAgICAgIHJldHVybiA8UG9zdCBwb3N0PXsgdGhpcy5wcm9wcy5zaGFyZWRQb3N0c1sgdGhpcy5wcm9wcy5wb3N0LnBhcmVudF9pZCBdIH0vPlxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnBvc3QudHlwZSA9PT0gJ2xpbmsnIHx8IHRoaXMucHJvcHMucG9zdC50eXBlID09PSAndmlkZW8nKXtcbiAgICAgICAgICAgIHJldHVybiA8YSBocmVmPXt0aGlzLnByb3BzLnBvc3QubGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwic2hhcmUtbGlua1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9e3RoaXMucHJvcHMucG9zdC5mdWxsX3BpY3R1cmV9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLWhlYWRcIj57dGhpcy5wcm9wcy5wb3N0Lm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay1kZXNjcmlwdGlvblwiPnt0aGlzLnByb3BzLnBvc3QuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zdC5mdWxsX3BpY3R1cmUpe1xuICAgICAgICAgICAgcmV0dXJuIDxpbWcgY2xhc3NOYW1lPVwic2NhbGVkSW1hZ2VGaXRXaWR0aFwiIHNyYz17dGhpcy5wcm9wcy5wb3N0LmZ1bGxfcGljdHVyZX0gYWx0PVwiXCIvPlxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly9mYWNlYm9vay5jb20vJHt0aGlzLnByb3BzLnBvc3QuZnJvbS5pZH1gfSBjbGFzc05hbWU9XCJwcm9maWxlLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2dyYXBoLmZhY2Vib29rLmNvbS8ke3RoaXMucHJvcHMucG9zdC5mcm9tLmlkfS9waWN0dXJlP3R5cGU9c3F1YXJlYH0gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLW5hbWVcIj57dGhpcy5wcm9wcy5wb3N0LmZyb20ubmFtZX0gPGEgaHJlZj17dGhpcy5wcm9wcy5wb3N0LnBlcm1hbGlua191cmx9IHRhcmdldD1cIl9ibGFua1wiPnt0aGlzLnByb3BzLmlkfSA+PC9hPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lc3RhbXBDb250ZW50XCI+e3RoaXMuZm9ybWF0RGF0ZShuZXcgRGF0ZSh0aGlzLnByb3BzLnBvc3QuY3JlYXRlZF90aW1lKSApfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9uIG1lc3NhZ2U9e3RoaXMucHJvcHMucG9zdC5tZXNzYWdlfS8+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2V0Q29udGVudCgpfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5wb3N0e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjEycHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNlNWU2ZTkgI2RmZTBlNCAjZDBkMWQ1O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMWQyMTI5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaGVhZHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTFweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmhlYWQ6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcm9maWxlLWltYWdle1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yaWdodC1pbmZve1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnVzZXItbmFtZXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM2NTg5OTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRpbWVzdGFtcENvbnRlbnR7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTA5NDljO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBvc3QgOmdsb2JhbCguc2NhbGVkSW1hZ2VGaXRXaWR0aCl7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA1KTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAvKioqKioqIExJTksgKioqKioqL1xuICAgICAgICAgICAgICAgIC5wb3N0IDpnbG9iYWwoLnNoYXJlLWxpbmspe1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFkMjEyOTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2U5ZWJlZSAjZTllYmVlICNkMWQxZDE7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIC4xNSkgaW5zZXQsIDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBvc3QgOmdsb2JhbCguaW1hZ2UtY29udGFpbmVyKXtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNzQuMDUzMjMxOTM5MTZweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZTllYmVlICNlOWViZWUgI2QxZDFkMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBvc3QgOmdsb2JhbCguaW1hZ2Upe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wb3N0IDpnbG9iYWwoLnRleHQpe1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB7LyogbWF4LWhlaWdodDogMTAwcHg7ICovfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucG9zdCA6Z2xvYmFsKC5saW5rLWhlYWQpe1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTEwcHg7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBvc3QgOmdsb2JhbCgubGluay1kZXNjcmlwdGlvbil7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZT0+e1xuICAgIHJldHVybiB7IHNoYXJlZFBvc3RzOiBzdGF0ZS5mYlBvc3RSZWR1Y2VyLnNoYXJlZFBvc3RzfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFBvc3QpIl19 */\n/*@ sourceURL=views/components/index/search/Post.js */'
            }));
        }
    }]);

    return Post;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return { sharedPosts: state.fbPostReducer.sharedPosts };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Post);