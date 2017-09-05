'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadPostAction = exports.LOAD_POSTS_DONE = exports.ADD_POSTS = exports.LOAD_FAIL_POSTS = exports.LOADING_POSTS = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOADING_POSTS = exports.LOADING_POSTS = 'loading_posts';
var LOAD_FAIL_POSTS = exports.LOAD_FAIL_POSTS = 'load_fail_posts';
var ADD_POSTS = exports.ADD_POSTS = 'add_posts';
var LOAD_POSTS_DONE = exports.LOAD_POSTS_DONE = 'load_posts_done';

var loadPosts = void 0;

var LoadPosts = function LoadPosts(ownerID, dispatch) {
    var _this = this;

    (0, _classCallCheck3.default)(this, LoadPosts);

    _initialiseProps.call(this);

    this.active = true;

    window['FB'].api(ownerID + '/posts', 'GET', { "fields": "picture,name,caption,created_time,description,feed_targeting,from,icon,link,message,permalink_url,shares,source,status_type,story,type,with_tags,parent_id,full_picture", "limit": 100 }, function (response) {
        console.log('post::', response);
        if (_this.active) {
            if (!response.error) {
                _this.getResponseAndLoadNextPage(response, dispatch);
            } else {
                dispatch({ type: LOAD_FAIL_POSTS });
            }
        }
    });
};

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.getResponseAndLoadNextPage = function (response, dispatch) {
        dispatch({
            type: ADD_POSTS,
            payload: response.data
        });
        if (response.paging && response.paging.next) {
            _axios2.default.get(response.paging.next).then(function (response) {
                console.log('page...', response);
                if (_this2.active) {
                    _this2.getResponseAndLoadNextPage(response.data, dispatch);
                }
            }).catch(function (response) {
                console.log('page fail...', response);
                if (_this2.active) {
                    dispatch({ type: LOAD_FAIL_POSTS });
                }
            });
        } else {
            dispatch({ type: LOAD_POSTS_DONE });
        }
    };
};

var loadPostAction = exports.loadPostAction = function loadPostAction(ownerID) {
    return function (dispatch, getState) {
        /* const accessToken = getState().loginReducer.accessToken
        const params = new URLSearchParams()
        params.append('access_token',accessToken)
        params.append('include_headers',false)
        params.append('batch',`[
            { 
                "method":"GET",
                "name":"get-post", 
                "relative_url":"me/posts?fields=picture,name,caption,created_time,description,feed_targeting,from,icon,link,message,permalink_url,shares,source,status_type,story,type,with_tags,parent_id,full_picture", 
                "omit_response_on_success":false,
            }, ]`)
        axios.post('https://graph.facebook.com',params)
            .then(response=>{
                console.log(response)
                if(response.status === 200){
                    const result = JSON.parse(response.data[0].body)
                    console.log('result',result)
                }else{
                    console.log('--- error ----')
                }
            })
            .catch(response=>{
                console.log(response)
            })
        return  */
        dispatch({ type: LOADING_POSTS });
        if (loadPosts) loadPosts.active = false;
        loadPosts = new LoadPosts(ownerID, dispatch);
    };
};