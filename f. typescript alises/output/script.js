"use strict";
const getAll = (id, user) => {
    console.log(user);
    return `My id is ${id}. My name is ${user.name}. Our age ${user.age}.`;
};
console.log(getAll('3222', {
    name: 'ddd',
    age: 30
}));
const showData = (id, user) => {
    console.log(user);
    return `My id is ${id}. My name is ${user.name}. Our age ${user.age}`;
};
console.log(showData('abb22', {
    name: 'Karim Uddin',
    age: 30
}));
