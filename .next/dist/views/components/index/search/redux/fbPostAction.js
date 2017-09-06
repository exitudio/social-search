'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadPostAction = exports.LOAD_POSTS_DONE = exports.ADD_POSTS = exports.LOAD_FAIL_POSTS = exports.LOADING_POSTS = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _JsLib = require('../../../../libs/JsLib');

var JsLib = _interopRequireWildcard(_JsLib);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOADING_POSTS = exports.LOADING_POSTS = 'loading_posts';
var LOAD_FAIL_POSTS = exports.LOAD_FAIL_POSTS = 'load_fail_posts';
var ADD_POSTS = exports.ADD_POSTS = 'add_posts';
var LOAD_POSTS_DONE = exports.LOAD_POSTS_DONE = 'load_posts_done';

var loadPosts = void 0;

var LoadPostWithParentShare = function LoadPostWithParentShare(ownerID, accessToken, dispatch, getState) {
    var _this = this;

    (0, _classCallCheck3.default)(this, LoadPostWithParentShare);

    this.getLoad = function (url) {
        var params = new URLSearchParams();
        params.append('access_token', _this.accessToken);
        params.append('include_headers', false);
        params.append('batch', '[\n            { \n                "method":"GET",\n                "name":"get-posts", \n                "relative_url":"' + url + '", \n                "omit_response_on_success":false,\n            }, \n            {\n                "method":"GET",\n                "relative_url":"?ids={result=get-posts:$.data.*.parent_id}&' + _this.fieldParam + '"\n            }\n        ]');
        _axios2.default.post('https://graph.facebook.com', params).then(function (response) {
            // console.log(response)
            if (_this.active) {
                if (response && !response.error && response.status === 200) {

                    var result = JSON.parse(response.data[0].body);
                    var sharedResult = JSON.parse(response.data[1].body);

                    _this.dispatch({
                        type: ADD_POSTS,
                        payload: {
                            posts: result.data,
                            sharedPosts: sharedResult.error ? {} : sharedResult
                        }
                    });
                    console.log('result:', result);
                    console.log('sharedResult:', sharedResult);
                    console.log('________________________________________');

                    //check length of posts array
                    var isPostsLessThan4000 = _this.getState().fbPostReducer.posts.length < 1;

                    if (result.paging && result.paging.next && isPostsLessThan4000) {
                        // console.log('next',result.paging.next)

                        //delete unuse params (access_token)
                        var _params = result.paging.next.split('?')[1];
                        // let paramsObj = JsLib.URLParamsToObject(params)
                        // delete paramsObj.access_token
                        // params = JsLib.ObjectToURLParams(paramsObj)

                        // console.log('params',params)
                        var _url = _this.baseURL + '?' + _params;
                        _this.getLoad(_url);
                    } else {
                        console.log('no next page or reach 4000 posts loaded');
                    }
                } else {
                    _this.dispatch({ type: LOAD_FAIL_POSTS });
                }
            }
        }).catch(function (response) {
            console.log(response);
            _this.dispatch({ type: LOAD_FAIL_POSTS });
        });
    };

    this.getResponseAndLoadNextPage = function (response) {};

    this.active = true;
    this.ownerID = ownerID;
    this.accessToken = accessToken;
    this.dispatch = dispatch;
    this.getState = getState;

    this.fieldParam = 'fields=picture,name,caption,created_time,description,feed_targeting,from,icon,link,message,permalink_url,shares,source,status_type,story,type,with_tags,parent_id,full_picture';
    this.baseURL = this.ownerID + '/posts';
    var defaultURL = this.baseURL + '?' + this.fieldParam + '&limit=50'; //Batch limitation is 50
    this.getLoad(defaultURL);
};

var loadPostAction = exports.loadPostAction = function loadPostAction(ownerID) {
    return function (dispatch, getState) {

        dispatch({ type: LOADING_POSTS });
        if (loadPosts) loadPosts.active = false;
        var accessToken = getState().loginReducer.accessToken;
        loadPosts = new LoadPostWithParentShare(ownerID, accessToken, dispatch, getState);
    };
};