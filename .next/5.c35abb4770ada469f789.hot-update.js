webpackHotUpdate(5,{

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadPostAction = exports.LOAD_POSTS_DONE = exports.ADD_POSTS = exports.LOAD_FAIL_POSTS = exports.LOADING_POSTS = undefined;

var _classCallCheck2 = __webpack_require__(32);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _axios = __webpack_require__(674);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/exit/EXITFolder/work/github/social-search/views/components/index/search/redux/fbPostAction.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/exit/EXITFolder/work/github/social-search/views/components/index/search/redux/fbPostAction.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jMzVhYmI0NzcwYWRhNDY5Zjc4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdmlld3MvY29tcG9uZW50cy9pbmRleC9zZWFyY2gvcmVkdXgvZmJQb3N0QWN0aW9uLmpzP2EzNzY3NTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuZXhwb3J0IGNvbnN0IExPQURJTkdfUE9TVFMgPSAnbG9hZGluZ19wb3N0cydcbmV4cG9ydCBjb25zdCBMT0FEX0ZBSUxfUE9TVFMgPSAnbG9hZF9mYWlsX3Bvc3RzJ1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUUyA9ICdhZGRfcG9zdHMnXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19ET05FID0gJ2xvYWRfcG9zdHNfZG9uZSdcblxubGV0IGxvYWRQb3N0c1xuXG5jbGFzcyBMb2FkUG9zdHN7XG4gICAgY29uc3RydWN0b3Iob3duZXJJRCwgZGlzcGF0Y2gpe1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWVcblxuICAgICAgICB3aW5kb3dbJ0ZCJ10uYXBpKFxuICAgICAgICAgICAgb3duZXJJRCsnL3Bvc3RzJyxcbiAgICAgICAgICAgICdHRVQnLFxuICAgICAgICAgICAgeyBcImZpZWxkc1wiOiBcInBpY3R1cmUsbmFtZSxjYXB0aW9uLGNyZWF0ZWRfdGltZSxkZXNjcmlwdGlvbixmZWVkX3RhcmdldGluZyxmcm9tLGljb24sbGluayxtZXNzYWdlLHBlcm1hbGlua191cmwsc2hhcmVzLHNvdXJjZSxzdGF0dXNfdHlwZSxzdG9yeSx0eXBlLHdpdGhfdGFncyxwYXJlbnRfaWQsZnVsbF9waWN0dXJlXCIsIFwibGltaXRcIjogMTAwIH0sXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Bvc3Q6OicscmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgaWYoIHRoaXMuYWN0aXZlICl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFyZXNwb25zZS5lcnJvcil7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFJlc3BvbnNlQW5kTG9hZE5leHRQYWdlKHJlc3BvbnNlLCBkaXNwYXRjaClcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTpMT0FEX0ZBSUxfUE9TVFN9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgZ2V0UmVzcG9uc2VBbmRMb2FkTmV4dFBhZ2UgPSAocmVzcG9uc2UsIGRpc3BhdGNoKT0+e1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVFMsXG4gICAgICAgICAgICBwYXlsb2FkOnJlc3BvbnNlLmRhdGEsXG4gICAgICAgIH0pXG4gICAgICAgIGlmKCByZXNwb25zZS5wYWdpbmcgJiYgcmVzcG9uc2UucGFnaW5nLm5leHQgKXtcbiAgICAgICAgICAgIGF4aW9zLmdldChyZXNwb25zZS5wYWdpbmcubmV4dClcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGFnZS4uLicscmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIGlmKCB0aGlzLmFjdGl2ZSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRSZXNwb25zZUFuZExvYWROZXh0UGFnZShyZXNwb25zZS5kYXRhLCBkaXNwYXRjaClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKHJlc3BvbnNlPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYWdlIGZhaWwuLi4nLHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICBpZiggdGhpcy5hY3RpdmUgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOkxPQURfRkFJTF9QT1NUU30pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOkxPQURfUE9TVFNfRE9ORX0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkUG9zdEFjdGlvbiA9IG93bmVySUQ9PntcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSk9PntcbiAgICAgICAgLyogY29uc3QgYWNjZXNzVG9rZW4gPSBnZXRTdGF0ZSgpLmxvZ2luUmVkdWNlci5hY2Nlc3NUb2tlblxuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgICAgICAgcGFyYW1zLmFwcGVuZCgnYWNjZXNzX3Rva2VuJyxhY2Nlc3NUb2tlbilcbiAgICAgICAgcGFyYW1zLmFwcGVuZCgnaW5jbHVkZV9oZWFkZXJzJyxmYWxzZSlcbiAgICAgICAgcGFyYW1zLmFwcGVuZCgnYmF0Y2gnLGBbXG4gICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgIFwibWV0aG9kXCI6XCJHRVRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjpcImdldC1wb3N0XCIsIFxuICAgICAgICAgICAgICAgIFwicmVsYXRpdmVfdXJsXCI6XCJtZS9wb3N0cz9maWVsZHM9cGljdHVyZSxuYW1lLGNhcHRpb24sY3JlYXRlZF90aW1lLGRlc2NyaXB0aW9uLGZlZWRfdGFyZ2V0aW5nLGZyb20saWNvbixsaW5rLG1lc3NhZ2UscGVybWFsaW5rX3VybCxzaGFyZXMsc291cmNlLHN0YXR1c190eXBlLHN0b3J5LHR5cGUsd2l0aF90YWdzLHBhcmVudF9pZCxmdWxsX3BpY3R1cmVcIiwgXG4gICAgICAgICAgICAgICAgXCJvbWl0X3Jlc3BvbnNlX29uX3N1Y2Nlc3NcIjpmYWxzZSxcbiAgICAgICAgICAgIH0sIF1gKVxuICAgICAgICBheGlvcy5wb3N0KCdodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbScscGFyYW1zKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT09IDIwMCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IEpTT04ucGFyc2UocmVzcG9uc2UuZGF0YVswXS5ib2R5KVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0JyxyZXN1bHQpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0gZXJyb3IgLS0tLScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChyZXNwb25zZT0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuICAqL1xuICAgICAgICBkaXNwYXRjaCh7dHlwZTpMT0FESU5HX1BPU1RTfSlcbiAgICAgICAgaWYoIGxvYWRQb3N0cyApIGxvYWRQb3N0cy5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBsb2FkUG9zdHMgPSBuZXcgTG9hZFBvc3RzKG93bmVySUQsIGRpc3BhdGNoKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi92aWV3cy9jb21wb25lbnRzL2luZGV4L3NlYXJjaC9yZWR1eC9mYlBvc3RBY3Rpb24uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7Ozs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFFQTs7QUFHQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFkQTtBQWVBO0FBRUE7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQS9CQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9