"use strict";
// Use generic:---------
function addId(obj) {
    const id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
}
let user = addId({
    name: 'Mahin',
    age: 20
});
console.log(user.name);
// use generic., And use generic type:---------
const addDataID = function (obj) {
    const id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
/*

let useString = 'Jeno';
addDataID(useString)     // error. because this is string.
console.log(addDataID());

*/
let user2 = {
    name: 'Hello JS',
    age: '40'
};
addDataID(user2);
// use generic. and generic use type schema:---------
const addDataTd2 = function (obj) {
    const rand = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { rand });
};
let use = {
    name: 'Abu Hasnat',
    age: 40,
    country: 'Ban',
    line: 300
};
const add = addDataTd2(use);
console.log(add);
;
const response1 = {
    status: 100,
    type: 'good',
    data: {
        name: 'Rahi',
        age: 300,
        datas: '3333'
    }
};
console.log(response1);
// Use generic. use schema:---------
const response2 = {
    status: 200,
    type: 'Excellent',
    data: {
        name: 'Mahi',
        age: 300,
    }
};
console.log(response2);
