/*  
    input -> "abc=foo&def=%5Basf%5D&xyz=5&foo=b%3Dar"
    output -> Object {abc: "foo", def: "[asf]", xyz: "5", foo: "b=ar"}
 */
export const URLParamsToObject = url =>{
    return JSON.parse('{"' + decodeURI(url).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
}

/*
    input -> a = {
                userid:1,
                gender:male
            }
    output -> "userid=1&gender=male"
*/
export const ObjectToURLParams = obj =>{
    return Object.keys(obj).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])
    }).join('&')
}