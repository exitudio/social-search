'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoadFBPageAction = exports.ADD_FB_PAGES = exports.CLEAR_SEARCH = exports.LOAD_FAIL_FB_PAGES = exports.LOADING_FB_PAGES = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOADING_FB_PAGES = exports.LOADING_FB_PAGES = 'loading_fb_pages';
var LOAD_FAIL_FB_PAGES = exports.LOAD_FAIL_FB_PAGES = 'load_fail_fb_pages';
var CLEAR_SEARCH = exports.CLEAR_SEARCH = 'clear_search';
var ADD_FB_PAGES = exports.ADD_FB_PAGES = 'add_fb_pages';

var LoadOnce = function LoadOnce() {
    var _this = this;

    (0, _classCallCheck3.default)(this, LoadOnce);

    this.getPromise = function (searchWords) {
        return new _promise2.default(function (resolve, reject) {
            window['FB'].api('/search', 'GET', { "q": searchWords, "type": "page", "fields": "picture,name", "limit": 5 }, function (response) {
                if (_this.active) {
                    if (response && response.data && !response.error) {
                        resolve(response);
                    } else {
                        reject(response);
                    }
                }
            });
        });
    };

    this.active = true;
};

exports.default = LoadOnce;


var lastLoad = void 0;

var LoadFBPageAction = exports.LoadFBPageAction = function LoadFBPageAction(searchWords) {
    return function (dispatch) {
        console.log('searchWords', searchWords);
        if (searchWords !== '') {
            dispatch({ type: LOADING_FB_PAGES, payload: searchWords });
            if (lastLoad) lastLoad.active = false;
            lastLoad = new LoadOnce();
            return lastLoad.getPromise(searchWords).then(function (response) {
                dispatch({ type: ADD_FB_PAGES, payload: response.data });
            }).catch(function (response) {
                console.log('LOAD FAIL ....', response);
                dispatch({ type: LOAD_FAIL_FB_PAGES });
            });
        } else {
            if (lastLoad) lastLoad.active = false;
            dispatch({ type: CLEAR_SEARCH });
        }
    };
};