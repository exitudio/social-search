"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/exit/EXITFolder/work/github/social-search/views/components/index/search/Post.js";


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
            if (_this.props.post.parent_id) {} else if (_this.props.post.type === 'link') {
                return _react2.default.createElement("div", { className: "share-link", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }, _react2.default.createElement("div", { className: "image-container", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                }, _react2.default.createElement("img", { className: "image", src: _this.props.post.full_picture, alt: "", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                })), _react2.default.createElement("div", { className: "text", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                }, _react2.default.createElement("div", { className: "link-head", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                }, _this.props.post.name), _react2.default.createElement("div", { className: "link-description", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                }, _this.props.post.description)));
            } else {
                return _react2.default.createElement("img", { className: "scaledImageFitWidth", src: _this.props.post.full_picture, alt: "", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                    }
                });
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Post, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", { className: "post", "data-jsx": 3134803866,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement("div", { className: "head", "data-jsx": 3134803866,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement("a", { href: "https://facebook.com/" + this.props.post.from.id, className: "profile-image", "data-jsx": 3134803866,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement("img", { src: "http://graph.facebook.com/" + this.props.post.from.id + "/picture?type=square", alt: "", "data-jsx": 3134803866,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            })), _react2.default.createElement("div", { className: "right-info", "data-jsx": 3134803866,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement("div", { className: "user-name", "data-jsx": 3134803866,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, this.props.post.from.name, " ", this.props.id), _react2.default.createElement("span", { className: "timestampContent", "data-jsx": 3134803866,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, this.formatDate(new Date(this.props.post.created_time))))), _react2.default.createElement("div", { className: "content", "data-jsx": 3134803866,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement("div", { className: "description", "data-jsx": 3134803866,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, this.props.post.message), this.getContent()), _react2.default.createElement(_style2.default, {
                styleId: 3134803866,
                css: ".post[data-jsx=\"3134803866\"]{width:500px;padding:12px;background-color:white;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;margin-bottom:10px;color:#1d2129}.head[data-jsx=\"3134803866\"]{margin-bottom:11px}.head[data-jsx=\"3134803866\"]:after{clear:both;content:\" \";display:block}.profile-image[data-jsx=\"3134803866\"]{float:left;margin-right:8px}.right-info[data-jsx=\"3134803866\"]{float:left}.user-name[data-jsx=\"3134803866\"]{-webkit-letter-spacing:-0.01em;-moz-letter-spacing:-0.01em;-ms-letter-spacing:-0.01em;letter-spacing:-0.01em;color:#365899;cursor:pointer;text-decoration:none;font-weight:bold;font-size:16px;line-height:25px;-webkit-font-smoothing:subpixel-antialiased}.timestampContent[data-jsx=\"3134803866\"]{color:#90949c;font-weight:normal;font-size:14px;-webkit-letter-spacing:-0.01em;-moz-letter-spacing:-0.01em;-ms-letter-spacing:-0.01em;letter-spacing:-0.01em;line-height:20px}.post[data-jsx=\"3134803866\"] .scaledImageFitWidth{height:auto;min-height:initial;width:100%;margin-top:20px}.post[data-jsx=\"3134803866\"] .share-link{margin-top:10px;border:1px solid;border-color:#e9ebee #e9ebee #d1d1d1;box-shadow:0 0 0 1px rgba(0,0,0,.15) inset,0 1px 4px rgba(0,0,0,.1)}.post[data-jsx=\"3134803866\"] .image-container{height:274.05323193916px;position:relative;overflow:hidden;border:1px solid;border-color:#e9ebee #e9ebee #d1d1d1}.post[data-jsx=\"3134803866\"] .image{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);max-width:100%}.post[data-jsx=\"3134803866\"] .text{height:auto;margin:10px 12px;max-height:100px}.post[data-jsx=\"3134803866\"] .link-head{font-family:Georgia,serif;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;font-size:18px;font-weight:500;line-height:22px;margin-bottom:5px;max-height:110px;overflow:hidden;word-wrap:break-word}.post[data-jsx=\"3134803866\"] .link-description{line-height:16px;max-height:80px;overflow:hidden;font-size:12px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2NvbXBvbmVudHMvaW5kZXgvc2VhcmNoL1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUR3QixBQUdnQyxBQVdRLEFBR1IsQUFLQSxBQUlBLEFBSVksQUFVVCxBQU9GLEFBU0ksQUFPUyxBQU9QLEFBT04sQUFLZSxBQVdWLFdBM0VMLEFBS0ssQUFJckIsQ0F2QmdCLEFBNENPLEFBOEJGLEVBckNFLEVBaUJGLENBb0NELENBdkJSLENBeERaLElBSWtCLEVBZFMsQUEyREwsQ0FRVCxBQVdhLEVBM0QxQixDQXVEcUIsRUE5Qk4sRUFQSSxBQWlCc0IsQUFvQ3JCLEVBdEI0QixFQXJEaEQsS0E4Qm1CLENBZUMsR0FlcEIsRUF6RXFCLEFBb0NNLENBcURSLFNBN0NuQixDQWVxQixLQStCckIsQ0F6RnlDLEtBb0RzQyxNQU90QywwQkExRG5CLE9Bc0JKLElBcUNsQixPQTFEdUIsR0FzQkosUUFvREEsT0FuRE0sQUE0QnpCLENBbERrQixPQTBFRSxPQXpFcEIsSUFnQ3FCLEVBVkEsR0FvREEsWUF6Q3JCLEVBVm1CLEdBdUNBLEFBYUcsWUFuREQsR0F1Q3JCLEdBYXFCLFdBbkQyQixNQW9ENUIsZ0JBQ0sscUJBQ3pCLENBckRBIiwiZmlsZSI6InZpZXdzL2NvbXBvbmVudHMvaW5kZXgvc2VhcmNoL1Bvc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2V4aXQvRVhJVEZvbGRlci93b3JrL2dpdGh1Yi9zb2NpYWwtc2VhcmNoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBmb3JtYXREYXRlID0gZGF0ZT0+e1xuICAgICAgICB2YXIgbW9udGhOYW1lcyA9IFtcbiAgICAgICAgICBcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsXG4gICAgICAgICAgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsXG4gICAgICAgICAgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsXG4gICAgICAgICAgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJcbiAgICAgICAgXVxuICAgICAgXG4gICAgICAgIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKVxuICAgICAgICB2YXIgbW9udGhJbmRleCA9IGRhdGUuZ2V0TW9udGgoKVxuICAgICAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgICAgICB2YXIgaG91cnMgPSBkYXRlLmdldEhvdXJzKClcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKVxuICAgICAgXG4gICAgICAgIHJldHVybiBkYXkgKyAnICcgKyBtb250aE5hbWVzW21vbnRoSW5kZXhdICsgJyAnICsgeWVhciArICcgYXQgJyArIChcIjBcIitob3Vycykuc2xpY2UoLTIpICsgXCI6XCIgKyAoXCIwXCIrbWludXRlcykuc2xpY2UoLTIpXG4gICAgICB9XG5cbiAgICBnZXRDb250ZW50ID0gKCk9PntcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wb3N0LnBhcmVudF9pZCl7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zdC50eXBlID09PSAnbGluaycpe1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic2hhcmUtbGlua1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9e3RoaXMucHJvcHMucG9zdC5mdWxsX3BpY3R1cmV9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLWhlYWRcIj57dGhpcy5wcm9wcy5wb3N0Lm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay1kZXNjcmlwdGlvblwiPnt0aGlzLnByb3BzLnBvc3QuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gPGltZyBjbGFzc05hbWU9XCJzY2FsZWRJbWFnZUZpdFdpZHRoXCIgc3JjPXt0aGlzLnByb3BzLnBvc3QuZnVsbF9waWN0dXJlfSBhbHQ9XCJcIi8+XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL2ZhY2Vib29rLmNvbS8ke3RoaXMucHJvcHMucG9zdC5mcm9tLmlkfWB9IGNsYXNzTmFtZT1cInByb2ZpbGUtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vZ3JhcGguZmFjZWJvb2suY29tLyR7dGhpcy5wcm9wcy5wb3N0LmZyb20uaWR9L3BpY3R1cmU/dHlwZT1zcXVhcmVgfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItbmFtZVwiPnt0aGlzLnByb3BzLnBvc3QuZnJvbS5uYW1lfSB7dGhpcy5wcm9wcy5pZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZXN0YW1wQ29udGVudFwiPnt0aGlzLmZvcm1hdERhdGUobmV3IERhdGUodGhpcy5wcm9wcy5wb3N0LmNyZWF0ZWRfdGltZSkgKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57dGhpcy5wcm9wcy5wb3N0Lm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2V0Q29udGVudCgpfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5wb3N0e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDo1MDBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMnB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZTVlNmU5ICNkZmUwZTQgI2QwZDFkNTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFkMjEyOTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmhlYWR7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDExcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5oZWFkOmFmdGVye1xuICAgICAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJvZmlsZS1pbWFnZXtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmlnaHQtaW5mb3tcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC51c2VyLW5hbWV7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzNjU4OTk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50aW1lc3RhbXBDb250ZW50e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzkwOTQ5YztcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wb3N0IDpnbG9iYWwoLnNjYWxlZEltYWdlRml0V2lkdGgpe1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAvKioqKioqIExJTksgKioqKioqL1xuICAgICAgICAgICAgICAgIC5wb3N0IDpnbG9iYWwoLnNoYXJlLWxpbmspe1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNlOWViZWUgI2U5ZWJlZSAjZDFkMWQxO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAuMTUpIGluc2V0LCAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wb3N0IDpnbG9iYWwoLmltYWdlLWNvbnRhaW5lcil7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjc0LjA1MzIzMTkzOTE2cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2U5ZWJlZSAjZTllYmVlICNkMWQxZDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wb3N0IDpnbG9iYWwoLmltYWdlKXtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucG9zdCA6Z2xvYmFsKC50ZXh0KXtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTJweDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wb3N0IDpnbG9iYWwoLmxpbmstaGVhZCl7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucG9zdCA6Z2xvYmFsKC5saW5rLWRlc2NyaXB0aW9uKXtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=views/components/index/search/Post.js */"
            }));
        }
    }]);

    return Post;
}(_react2.default.Component);

exports.default = Post;