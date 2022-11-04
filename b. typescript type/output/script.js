"use strict";
// string type declaration:---------
let naming = 'Abdullah';
console.log(naming); // output: Abdullah;
// naming = 20; // error. because naming is a string type variable;
naming = 'Al Nomaan';
console.log(naming); // output: Al Nomaan;
// number type declaration:---------
let numbering = 200;
console.log(numbering); // output: 200;
// numbering = 'Abdullah Al Nomaan'; // error. because numbering is a number type variable;
numbering = 10000;
console.log(numbering); // output: 10000;
// declaration in any type:---------
let anyType;
anyType = 1000;
console.log(anyType); // output: 1000;
anyType = 'Abdul Galib';
console.log(anyType); // output: Abdul Galib; 
// function parameter type:---------
function myFunc(num1, stringy, anyIngNum, anyIngString) {
    console.log('----------------------');
    console.log(num1);
    console.log(stringy);
    console.log(anyIngNum);
    console.log(anyIngString);
}
myFunc(100, 'Abul Khayer', 500000, 'String is any');
// array declaration in string type:---------
const array1 = ['one', 'two', 'three', 'four', 'five'];
console.log(array1); // output: ['one', 'two', 'three', 'four', 'five']
// array1.push(10000); // error. because array all element in string type;
array1.push('Abul Kasem');
console.log(array1); // error.  ['one', 'two', 'three', 'four', 'five', 'Abul Kasem'];
// array declaration in number type:---------
const array2 = [1, 2, 3, 4, 5, 6, 7];
console.log(array2); // output: [1, 2, 3, 4, 5, 6, 7];
// array2.push('Any Khan');  // error because array all element in number type;
array2.push(1000000);
console.log(array2); // output:  [1, 2, 3, 4, 5, 6, 7, 1000000];
// array declaration in any type:---------
const anyIngArr = [];
anyIngArr.push('Hello Js');
anyIngArr.push(1000);
anyIngArr.push(true);
anyIngArr.push({
    myName: 'Abdullah'
});
console.log(anyIngArr);
/* Output:---
['Hello Js',
 1000,
 true,
 {
    myName:'Abdullah'
}]
*/
// number and string type array:--------- 
const twoType = [1, 2, 3, 4, 'Hello', 'JavaScript'];
console.log(twoType); // [1, 2, 3, 4, 'Hello', 'JavaScript'];
twoType.push('PHP');
twoType.push(2000);
// twoType.push(true); // error. because this array is number and string type;
console.log(twoType); // output: [1, 2, 3, 4, 'Hello', 'JavaScript', 'PHP', 2000];
// object type:---------
const obj1 = {
    myName: 'Hello js',
    age: 100,
    collage: 'abc'
};
// obj1.addData = 'Abu'; // do not add property on object;
// obj1.myName = 10000;  // do not change array property value type;
// obj1.age = 'hello my friend';  // do not change array property value type;
console.log(obj1); // output: {myName: 'Hello js', age: 100, collage: 'abc'}
