"use strict";
var reApiSuc;
(function (reApiSuc) {
    reApiSuc[reApiSuc["SUCCESS"] = 0] = "SUCCESS";
    reApiSuc[reApiSuc["FAILURE"] = 1] = "FAILURE";
    reApiSuc[reApiSuc["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    reApiSuc[reApiSuc["FORBIDDEN"] = 3] = "FORBIDDEN";
})(reApiSuc || (reApiSuc = {}));
const res1 = {
    status: 200,
    type: reApiSuc.SUCCESS,
    test: 'good'
};
console.log(res1);
const res2 = {
    status: 200,
    type: reApiSuc.FORBIDDEN,
    test: 'good'
};
console.log(res2);
