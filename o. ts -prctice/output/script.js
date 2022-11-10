import { Person5 } from "./Persons/Person.js";
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
let datas;
datas = 'Hello PHP';
console.log(datas);
datas = 202010;
console.log(datas);
let datas2 = {
    name: 'Mahin',
    age: 300,
    country: 3900
};
console.log(datas2);
let newFunc = (a) => {
    return a;
};
console.log(newFunc(1202));
let myNewFunc9 = (a, opt) => {
    console.log(opt);
    return a;
};
console.log(myNewFunc9(100200300, {
    name: 'Rahim',
    age: 30,
    country: 'India',
}));
let objVar = {
    name: 'Sirik',
    age: 32,
    country: 'Srilanka',
};
console.log(myNewFunc9(103, objVar));
let arrData = [10, 's', 10];
arrData.push('Hello');
console.log(arrData);
/* ==== Function Signature ==== */
// function return string type: 
let myNewFun1;
myNewFun1 = (a, b) => {
    return a + b;
};
console.log(myNewFun1(1202, 'Hello TypeScript'));
// function return number type:
let myNewFun2;
myNewFun2 = (a) => {
    return a;
};
console.log(myNewFun2(12150));
// function return boolean type:
let myNewFun3;
myNewFun3 = (a) => {
    return a;
};
console.log(myNewFun3(true));
// function return object type:
let myNewFun4;
myNewFun4 = (a) => {
    return a;
};
console.log(myNewFun4({
    name: 'Mahin',
    age: 20
}));
// function return object schema type:
let myNewFun5;
myNewFun5 = (a) => {
    return a;
};
console.log(myNewFun5({
    name: 'Karim',
    age: 30,
    country: 'India'
}));
let myNewFu1;
myNewFu1 = (a) => {
    return a;
};
let newObj23 = {
    name: 'Abdul',
    age: 40,
    country: 'Italy'
};
console.log(myNewFu1(newObj23));
// normal function return type number:
function myFu2(a) {
    return a;
}
console.log(myFu2(100));
// normal function return type string:
function myFu3(a) {
    return a;
}
console.log(myFu3('Hello TypeScript'));
// normal function return type boolean:
function myFu4(a) {
    return a;
}
console.log(myFu4(true));
// normal function return union type:
function myFu5(b) {
    return b;
}
console.log(myFu5('Ek Lakh'));
// normal function return any type:
function myFu6(b) {
    return b;
}
console.log(myFu6('Hello Any Type.'));
// function return array type:
let myF = (a) => {
    return a;
};
console.log(myF([1, 2, 3, 4]));
/* ======= typescript class ======= */
class Person {
    constructor(n, a, c) {
        this.name = n,
            this.age = a,
            this.country = c;
    }
    play() {
        console.log(`${this.name} is playing. He lives in ${this.country}. He is ${this.age} years old.`);
    }
}
const sakib = new Person('Sabik Khan', 30, 'India');
console.log(sakib);
const classArrData = [];
classArrData.push(sakib);
console.log(classArrData);
/* ======= TypeScript Access Modifiers ======= */
class Person2 {
    constructor(n, a, c) {
        this.name = n,
            this.age = a,
            this.country = c;
    }
    play() {
        console.log(`${this.name} is playing. He lives in ${this.country}. He is ${this.age} years old.`);
    }
}
const rahim = new Person2('Rahim Khan', 40, 'Pakistan');
console.log(rahim);
// access modifiers type:
class Person4 {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} he is playing. He lives in ${this.country}. He is an ${this.age} years old.`);
    }
}
const karim = new Person4('Karim Khan', 40, 'Bangladesh');
console.log(karim);
/* ===== TypeScript Module System ===== */
const rihab = new Person5('Rihab Uddin', 14, 'India', 7);
console.log(rihab);
let myNewObj = {
    name: 'Habib',
    age: 30,
    country: 'MIT'
};
console.log(myNewObj);
const myNewObj2 = {
    status: 25,
    age: 24,
    time: 20
};
console.log(myNewObj2);
function myNewAsFunction(option) {
    return option;
}
console.log(myNewAsFunction({
    name: 'Noman',
    age: 255,
    country: 'Bangladesh'
}));
function myOneFunction(opt) {
    return opt;
}
let oneObj2 = {
    name: 'Rahi',
    age: 26,
    country: 'India',
    adult: true,
    sss: 'fdf'
};
console.log(myOneFunction(oneObj2));
class Player {
    constructor(name, age, adult, country) {
        this.name = name;
        this.age = age;
        this.adult = adult;
        this.country = country;
    }
    getPriority() {
        return this.name;
    }
    play() {
        console.log(` ${this.name} is playing. He lives in ${this.country}. He is not ${this.adult}. He is an ${this.age} years old.`);
    }
}
const halim = new Player('Halim', 25, true, 'Pakistan');
console.log(halim);
const arrFunc = [];
arrFunc.push(halim);
console.log(arrFunc);
// use generic:
// use generic for function. Do not use generic type:
const myArrowFunc = (opt) => {
    const id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, opt), { id });
};
const arrowData = myArrowFunc({
    name: 'Nadim',
    age: 30,
});
console.log(arrowData);
// use generic for function. Use generic type:
const myArrowFunc1 = (opt) => {
    const id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, opt), { id });
};
const myArr = myArrowFunc1({
    name: 'Kamal',
    age: 30,
    county: 'Feni'
});
console.log(myArr);
// use generic for function. Use generic type schema:
const myArrowFunc2 = (opt) => {
    const id = Math.floor(Math.random() * 100);
    return Object.assign({ id }, opt);
};
const myArr3 = myArrowFunc2({
    name: 'sss',
    age: 333
});
console.log(myArr3);
const myArrowFunc3 = (opt) => {
    const id = Math.floor(Math.random() * 100);
    return Object.assign({ id }, opt);
};
let interSchemaData = {
    status: 'Hello',
    type: 2412,
    age: 45
};
const myArrFunFunc = myArrowFunc3(interSchemaData);
console.log(myArrFunFunc.status);
const objDataSch = {
    status: 54,
    type: 'Rahim',
    data: {
        name: 'Rahi',
        age: 300,
        datas: '3333'
    }
};
console.log(objDataSch);
;
const dataObjData = {
    status: 125,
    type: 'Success',
    data: {
        name: 'Jisan',
        age: 2050
    }
};
console.log(dataObjData);
/* ===== Use enum type ===== */
var rType;
(function (rType) {
    rType[rType["SUCCESS"] = 0] = "SUCCESS";
    rType[rType["FAILURE"] = 1] = "FAILURE";
    rType[rType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    rType[rType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(rType || (rType = {}));
const dataAsData = {
    status: 120,
    type: rType.FORBIDDEN,
    data: {
        name: 'Halim',
        age: 200
    }
};
console.log(dataAsData);
/* ==== Use tuples ==== */
const myFirstArr = [120, 'JavaScript', true, { name: 'BMW', price: '3 lakh' }];
console.log(myFirstArr);
