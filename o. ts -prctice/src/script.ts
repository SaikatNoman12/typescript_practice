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
function myFunc(dd: string, bb: number, cc: any, ...args: any) {
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
let mm: string;
mm = 'Nihan';
console.log(mm);


// number type:
let nn: number;
nn = 1020;
console.log(nn);


// boolean type:
let bb: boolean;
bb = true;
console.log(bb);


// any type:
let an: any;

an = 'Hello js';
console.log(an);

an = 1234230;
console.log(an);


// Union type:
let un: number | string | boolean;

an = 'Hello HTML';
console.log(an);

an = 340;
console.log(an);

an = true;
console.log(an);



// array string type:
let arr1: string[] = [];

arr1 = ['a', 'b', 'c']
arr1.unshift('Hello');
console.log(arr1);


// array number type:
let arr3: number[] = [];

arr3.push(1, 2, 3, 4, 5, 6, 7);
console.log(arr3);


// array boolean type:
let bool: boolean[] = [];

bool.push(true, false, true, false);
console.log(bool);


// array any type:
let ann: any[] = [];

ann.push('hh', 'ff', 554, true, false, 6869, 'll', 'mm');
console.log(ann);


// array union type:
let uni: (number | string | boolean)[] = [];

uni.push('Hello', 'Get', 'Rif', 400, 560, true, false, 'Jasim');
console.log(uni);


// array object:
let arr4: object;

arr4 = ['hh', 'dd', 560, true, 'hh', 'dd'];
console.log(arr4);



// object type and property string, number, boolean type:
let obj2: object = {
    name: 'Abu',
    age: 20,
    country: 'Ban'
};
console.log(obj2);


// How add property in object:
const myObject: { [key: string]: any } = {
    property: 'value'
};

myObject.property2 = 'value2';
myObject.property3 = 43;
console.log(myObject);


// object schema:
let obj3: {
    name: string;
    age: number;
    country: string;
    adult: boolean
};

obj3 = {
    name: 'ABUUU',
    age: 300,
    country: 'India',
    adult: true
}
console.log(obj3);


// Object property union type:
let obj4: {
    id: string | number;
    name: string | number;
    age: string | number;
    adult: boolean | string | number;
    friends: (string | number)[]
};

obj4 = {
    id: 'ddd2344',
    name: 'Jhone',
    age: 40,
    adult: 'true',
    friends: ['Hello', 344]
};
console.log(obj4);


// add new property in obj:
let myObjs: {
    [key: string]: any;
    name: string;
    age: number;
} = {
    name: 'Jhone',
    age: 20
};

myObjs.property1 = 'Value1';
myObjs.property2 = 'Value2';
myObjs.property3 = 'Value3';
console.log(myObjs);


// function type
let myNewFunc: Function;
myNewFunc = () => {
    console.log('hello this is my new func.');
}
myNewFunc();


// function number type:
let myNewFunc2: () => number;

myNewFunc2 = () => {
    console.log('Gooooooooooooooooooo');
    return 0;
}
myNewFunc2();


// function string type:
let myNewFunc3: () => string;

myNewFunc3 = () => {
    console.log('10000000000000000000000');
    return 'GOOOOOOOOOOO';
}
myNewFunc3();


// function return type void:
let myNewFunc4: () => void;
myNewFunc4 = () => {
    console.log('Vooooooooooooiiiiiiiiiddddddddddddd');
}
myNewFunc4();



// function string type:
let myNewFunc5 = (a: string): string => {
    return a;
};
console.log(myNewFunc5('Heello this is my new function.'));



// function number type:
let myNewFunc6 = (a: number): number => {
    return a;
}

console.log(myNewFunc6(100003333000));



// function void type:
let myNewFunc7 = (b: object): void => {
    console.log('Void my type.');
};
console.log(myNewFunc7);


// function object type:
let myNewFunc8 = (a: {
    name: string,
    age: number
}): object => {

    return a;

};
console.log(myNewFunc8(
    {
        name: 'Abdul',
        age: 300
    }
));

let newObj = {
    name: 'Siful',
    age: 20,
    country: 'Fine'
}

console.log(myNewFunc8(newObj));



/* ===== Dynamic Type or Any Type ===== */

// string object boolean type 
let dn: any;

dn = 100;
console.log(dn);

dn = 'Hello JavaScript';
console.log(dn);

dn = true;
console.log(dn);


// array any type:
let arr5: any[] = [];

arr5 = [
    1, 'hello', 'two', 3, 4, true,
    {
        name: 'Jasim'
    },
    [1, 2, 3, 4, 'five', true]
];

console.log(arr5);



// object any type and property any type:
let obj5: any = {
    name: 'Rayhan',
    age: 30
}

console.log(obj5);


let obj6: {
    name: any,
    age: any,
    country: any
};

obj6 = {
    name: 'Hasnat',
    age: 40,
    country: 'Bang'
}
console.log(obj6);



let func1: (a: any) => any;
func1 = (a: any) => {
    return a;
};

console.log(func1(100));


let func2 = (a: any): any => {
    return a;
}
console.log(func2('Three'));


// TypeScript Function:
let func4: Function;
func4 = (a: number) => {
    console.log(a);
}
func4(12520);


let func5: Function = (a: number, b: string) => {
    console.log(a + ' ' + b);
}
func5(1000, 'Hello');


let func6 = (a: number, b: string, optional?: any) => {
    console.log(a, b, optional);
}
func6(100, 'Jahid', true);


let func7: Function = (a: number, b?: any): number => {
    return a;
}

console.log(func7(1020));


let func8: (a: number) => number;
func8 = (a: number) => {
    return a;
}
console.log(func8(8));


/* ==== Type Aliases ==== */

type numOrStr = number | string;

let datas: numOrStr;

datas = 'Hello PHP';
console.log(datas);

datas = 202010;
console.log(datas);



type onj2 = {
    name: string,
    age: number,
    country: numOrStr
}

let datas2: onj2 = {
    name: 'Mahin',
    age: 300,
    country: 3900
};
console.log(datas2);


// function type:
type myOBJFunc = (a: number) => number;

let newFunc: myOBJFunc = (a: number) => {
    return a;
}
console.log(newFunc(1202));


// function parameter type:
type obj4 = {
    name: string;
    age: number;
    country: string;
}

type num = number;
type funcAll = (a: num, opt: obj4) => num;

let myNewFunc9: funcAll = (a: num, opt: obj4) => {
    console.log(opt);
    return a;
}


console.log(myNewFunc9(100200300, {
    name: 'Rahim',
    age: 30,
    country: 'India',
}));




let objVar: obj4 = {
    name: 'Sirik',
    age: 32,
    country: 'Srilanka',
}

console.log(myNewFunc9(103, objVar));


type arTy = [num, string, num]

let arrData: arTy = [10, 's', 10];

arrData.push('Hello');
console.log(arrData);



/* ==== Function Signature ==== */

// function return string type: 
let myNewFun1: (a: number, b: string) => string;

myNewFun1 = (a: number, b: string) => {
    return a + b;
}
console.log(
    myNewFun1(1202, 'Hello TypeScript')
);


// function return number type:
let myNewFun2: (a: number) => number;

myNewFun2 = (a: number) => {
    return a;
}
console.log(
    myNewFun2(12150)
);


// function return boolean type:
let myNewFun3: (a: boolean) => boolean;
myNewFun3 = (a: boolean) => {
    return a;
}
console.log(
    myNewFun3(true)
);


// function return object type:
let myNewFun4: (a: object) => object;

myNewFun4 = (a: object) => {
    return a;
}

console.log(
    myNewFun4(
        {
            name: 'Mahin',
            age: 20
        }
    )
);


// function return object schema type:
let myNewFun5: (a: {
    name: string;
    age: number;
    country: string;
}) => object;

myNewFun5 = (a: {
    name: string;
    age: number;
    country: string;
}) => {
    return a;
};

console.log(myNewFun5({
    name: 'Karim',
    age: 30,
    country: 'India'
}));


// function return object schema type:
type obj33 = {
    name: string,
    age: number,
    country: string
}

let myNewFu1: (a: obj33) => (any | void);

myNewFu1 = (a: obj33) => {
    return a;
}


let newObj23: obj33 = {
    name: 'Abdul',
    age: 40,
    country: 'Italy'
};

console.log(myNewFu1(newObj23));


// normal function return type number:
function myFu2(a: number): number {
    return a;
}
console.log(myFu2(100));



// normal function return type string:
function myFu3(a: string): string {
    return a;
}
console.log(myFu3('Hello TypeScript'));


// normal function return type boolean:
function myFu4(a: boolean): boolean {
    return a;
}
console.log(myFu4(true));


// normal function return union type:
function myFu5(b: (number | string)): (string | number) {
    return b;
}
console.log(myFu5('Ek Lakh'));


// normal function return any type:
function myFu6(b: any): any {
    return b;
}
console.log(myFu6('Hello Any Type.'));


// function return array type:
let myF = (a: number[]): any[] => {
    return a;
}

console.log(myF(
    [1, 2, 3, 4]
));



/* ======= typescript class ======= */
class Person {
    name: string;
    age: number;
    country: string;
    constructor(n: string, a: number, c: string) {
        this.name = n,
            this.age = a,
            this.country = c
    }

    play() {
        console.log(`${this.name} is playing. He lives in ${this.country}. He is ${this.age} years old.`);
    }

}


const sakib = new Person('Sabik Khan', 30, 'India');
console.log(sakib);


const classArrData: Person[] = [];
classArrData.push(sakib);

console.log(classArrData);


/* ======= TypeScript Access Modifiers ======= */
class Person2 {
    private name: string;
    public age: number;
    readonly country: string;

    constructor(n: string, a: number, c: string) {

        this.name = n,
            this.age = a,
            this.country = c

    }


    play() {
        console.log(`${this.name} is playing. He lives in ${this.country}. He is ${this.age} years old.`);
    }

}

const rahim = new Person2('Rahim Khan', 40, 'Pakistan');
console.log(rahim);



// access modifiers type:
class Person4 {
    constructor(
        private name: string,
        public age: number,
        readonly country: string
    ) { }

    play() {
        console.log(`${this.name} he is playing. He lives in ${this.country}. He is an ${this.age} years old.`);
    }
}

const karim = new Person4('Karim Khan', 40, 'Bangladesh');
console.log(karim);































