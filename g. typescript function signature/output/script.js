"use strict";
// function signature not a arrow function:---------
let myFunc;
myFunc = (num1, num2) => {
    return num1 + num2;
};
console.log(myFunc(100, 300));
// function signature use case:---------
let add;
add = (num1, num2, num3) => {
    return num1 + (num2 * num3);
};
console.log(add(10, 20, 30));
// function signature use case:---------
let calculation;
calculation = (id, user) => {
    return id + ' ' + user.name + ' ' + user.age + ' ' + user.adult;
};
const calc = calculation(112, { name: 'Abu', age: 20, adult: true });
console.log(calc);
// function signature use case:---------
let addition;
addition = (num1, num2, z) => {
    if (z === 'add') {
        return num1 - num2;
    }
    else if (z) {
        return num1 + num2;
    }
    else {
        return num1 * num2;
    }
};
const adding2 = addition(10, 20, 'not matched');
console.log(adding2); // -10;
const adding = addition(10, 20, 'add');
console.log(adding); // 30;
const adding3 = addition(10, 20);
console.log(adding3); // 200;
