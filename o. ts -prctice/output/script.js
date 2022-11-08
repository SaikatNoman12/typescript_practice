"use strict";
/* --- TypeScript Basics --- */
// string:
let a = 'Nomaan';
console.log(a);
// a = 30;
a = 'Hello JavaScript';
console.log(a);
// number:
let num = 10;
console.log(num);
// num = 'Hello';
num = 200000;
console.log(num);
// boolean:
let data = true;
console.log(data);
// data = 'Hello;';
// data = 3000;
data = false;
console.log(data);
// empty data:
let anyType;
console.log(anyType);
anyType = 'Hello';
console.log(anyType);
anyType = 200123;
console.log(anyType);
// function
function myFunc(dd, bb, cc, ...args) {
    console.log(args);
    return dd + ' ' + bb + ' ' + cc;
}
const func = myFunc('Hello', 315, true, 'heello');
console.log(func);
// array:
const arr = ['hello', 'JavaScript', 'Bangladesh'];
console.log(arr);
const arr2 = ['Hello', 1000, 'JavaScript', true];
console.log(arr2);
// object:
const obj = {
    name: 'Hello',
    age: 200,
    country: true
};
console.log(obj);
obj.name = 'Hello';
console.log(obj);
console.log('-------------------------------------------');
/* ====== TypeScript Explicit and Union Types ====== */
// string type:
let mm;
mm = 'Nihan';
console.log(mm);
// number type:
let nn;
nn = 1020;
console.log(nn);
// boolean type:
let bb;
bb = true;
console.log(bb);
// any type:
let an;
an = 'Hello js';
console.log(an);
an = 1234230;
console.log(an);
// Union type:
let un;
an = 'Hello HTML';
console.log(an);
an = 340;
console.log(an);
an = true;
console.log(an);
// array string type:
let arr1 = [];
arr1 = ['a', 'b', 'c'];
arr1.unshift('Hello');
console.log(arr1);
// array number type:
let arr3 = [];
arr3.push(1, 2, 3, 4, 5, 6, 7);
console.log(arr3);
// array boolean type:
let bool = [];
bool.push(true, false, true, false);
console.log(bool);
// array any type:
let ann = [];
ann.push('hh', 'ff', 554, true, false, 6869, 'll', 'mm');
console.log(ann);
// array union type:
let uni = [];
uni.push('Hello', 'Get', 'Rif', 400, 560, true, false, 'Jasim');
console.log(uni);
// array object:
let arr4;
arr4 = ['hh', 'dd', 560, true, 'hh', 'dd'];
console.log(arr4);
// object type and property string, number, boolean type:
let obj2 = {
    name: 'Abu',
    age: 20,
    country: 'Ban'
};
console.log(obj2);
// How add property in object:
const myObject = {
    property: 'value'
};
myObject.property2 = 'value2';
myObject.property3 = 43;
console.log(myObject);
// object schema:
let obj3;
obj3 = {
    name: 'ABUUU',
    age: 300,
    country: 'India',
    adult: true
};
console.log(obj3);
// Object property union type:
let obj4;
obj4 = {
    id: 'ddd2344',
    name: 'Jhone',
    age: 40,
    adult: 'true',
    friends: ['Hello', 344]
};
console.log(obj4);
// add new property in obj:
let myObjs = {
    name: 'Jhone',
    age: 20
};
myObjs.property1 = 'Value1';
myObjs.property2 = 'Value2';
myObjs.property3 = 'Value3';
console.log(myObjs);
// function type
let myNewFunc;
myNewFunc = () => {
    console.log('hello this is my new func.');
};
myNewFunc();
// function number type:
let myNewFunc2;
myNewFunc2 = () => {
    console.log('Gooooooooooooooooooo');
    return 0;
};
myNewFunc2();
// function string type:
let myNewFunc3;
myNewFunc3 = () => {
    console.log('10000000000000000000000');
    return 'GOOOOOOOOOOO';
};
myNewFunc3();
// function return type void:
let myNewFunc4;
myNewFunc4 = () => {
    console.log('Vooooooooooooiiiiiiiiiddddddddddddd');
};
myNewFunc4();
// function string type:
let myNewFunc5 = (a) => {
    return a;
};
console.log(myNewFunc5('Heello this is my new function.'));
// function number type:
let myNewFunc6 = (a) => {
    return a;
};
console.log(myNewFunc6(100003333000));
// function void type:
let myNewFunc7 = (b) => {
    console.log('Void my type.');
};
console.log(myNewFunc7);
// function object type:
let myNewFunc8 = (a) => {
    return a;
};
console.log(myNewFunc8({
    name: 'Abdul',
    age: 300
}));
let newObj = {
    name: 'Siful',
    age: 20,
    country: 'Fine'
};
console.log(myNewFunc8(newObj));
/* ===== Dynamic Type or Any Type ===== */
// string object boolean type 
let dn;
dn = 100;
console.log(dn);
dn = 'Hello JavaScript';
console.log(dn);
dn = true;
console.log(dn);
// array any type:
let arr5 = [];
arr5 = [
    1, 'hello', 'two', 3, 4, true,
    {
        name: 'Jasim'
    },
    [1, 2, 3, 4, 'five', true]
];
console.log(arr5);
// object any type and property any type:
let obj5 = {
    name: 'Rayhan',
    age: 30
};
console.log(obj5);
let obj6;
obj6 = {
    name: 'Hasnat',
    age: 40,
    country: 'Bang'
};
console.log(obj6);
let func1;
func1 = (a) => {
    return a;
};
console.log(func1(100));
let func2 = (a) => {
    return a;
};
console.log(func2('Three'));
// TypeScript Function:
let func4;
func4 = (a) => {
    console.log(a);
};
func4(12520);
let func5 = (a, b) => {
    console.log(a + ' ' + b);
};
func5(1000, 'Hello');
let func6 = (a, b, optional) => {
    console.log(a, b, optional);
};
func6(100, 'Jahid', true);
let func7 = (a, b) => {
    return a;
};
console.log(func7(1020));
let func8;
func8 = (a) => {
    return a;
};
console.log(func8(8));
/* ==== Type Aliases ==== */
