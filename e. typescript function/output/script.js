"use strict";
// function type:---------
let myFunc;
// myFunc = 'abu ahmed' // error. because this variable type is function;
myFunc = (a, b) => {
    console.log(a);
    console.log(b);
};
myFunc(200, 'Abu Ahmed');
// function optional parameter. c is a optional:---------
const myFunc2 = (a, b, c) => {
    console.log(a);
    console.log(b);
};
myFunc2('Rahim', 1999);
// function parameter default value. c parm is a default value parameter:---------
const myFunc3 = (a, b, c = true) => {
    console.log(a);
    console.log(b);
    return a + b;
};
console.log(myFunc3(1001, 'Rahim'));
// set function return type:---------
const myFunc4 = (a) => {
    return a;
};
// myFunc4('annnujd'); // error because this function return number type data; 
console.log(myFunc4(2000000002));
// function default return void:---------
const myFunc5 = (a) => {
    console.log(a);
    return a;
};
console.log(myFunc5(100));
