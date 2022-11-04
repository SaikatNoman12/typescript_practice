// declare string type variable:---------
let a: string;
a = 'Abdullah Al Nomaan';
console.log(a);


// declare number type variable:---------
let b: number;
b = 1000;
console.log(b);


// declare number and string type variable:---------
let c: (number | string);
c = 'Abdullah Al Nomaan';
console.log(c);

c = 2000;
console.log(c);

let d: number | string | boolean;
d = 3000;
console.log(d);

d = 'Abdullah Al Nomaan';
console.log(d);

d = true;
console.log(d);


// declare array type variable:---------
let array: string[] = [];

array = ['a', 'b', 'c', 'd'];
console.log(array);

array.push('hello', 'javaScript', 'angular');
console.log(array);


// declare array number, string & boolean type:--------- 
let array2: (string | number | boolean | object)[] = [];

array2 = [1, 'aaa', 'bbb', 2, 3, true, false, { named: 'hello', age: 20 }];

console.log(array2);


// declare object type:---------
let object1: object;

object1 = {
    name: 'Abdullah Al Nomaan',
    age: 300,
    adult: false
}
console.log(object1);


// declare object  number string & boolean type:--------- 
let object3: {
    named: string,
    age: number,
    adult: boolean
}

object3 = {
    named: 'Abdullah',
    age: 30,
    adult: true
};
console.log(object3);


let data: string | number[] | boolean;

data = 'Hello';
console.log(data);

data = [1, 3, 4]
console.log(data);

data = true;
console.log(data);


// declare object use array:--------- 
let object4: object;

object4 = [1, 2, 3, 4, 5, 6];
console.log(object4);










