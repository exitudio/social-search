'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoadFBPageAction = exports.ADD_FB_PAGES = exports.LOAD_FAIL_FB_PAGES = exports.LOADING_FB_PAGES = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOADING_FB_PAGES = exports.LOADING_FB_PAGES = 'loading_fb_pages';
var LOAD_FAIL_FB_PAGES = exports.LOAD_FAIL_FB_PAGES = 'load_fail_fb_pages';
var ADD_FB_PAGES = exports.ADD_FB_PAGES = 'add_fb_pages';

var LoadFBPageAction = exports.LoadFBPageAction = function LoadFBPageAction(searchWords) {
    return function (dispatch) {
        console.log('searchWords', searchWords);
        dispatch({ type: LOADING_FB_PAGES, payload: searchWords });
        return new _promise2.default(function (resolve, reject) {
            window['FB'].api('/search', 'GET', { "q": searchWords, "type": "page", "fields": "picture,name" }, function (response) {
                if (response && response.data && !response.error) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
        }).then(function (response) {
            dispatch({ type: ADD_FB_PAGES, payload: response.data });
        }).catch(function (response) {
            console.log('LOAD FAIL ....', response);
            dispatch({
                type: LOAD_FAIL_FB_PAGES
            });
        });
    };
};