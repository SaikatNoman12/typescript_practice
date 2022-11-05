
// function type:---------
let myFunc: Function;

// myFunc = 'abu ahmed' // error. because this variable type is function;

myFunc = (a: number, b: string) => {
    console.log(a);
    console.log(b);
}
myFunc(200, 'Abu Ahmed');



// function optional parameter. c is a optional:---------
const myFunc2 = (a: string, b: number, c?: number) => {
    console.log(a);
    console.log(b);
}
myFunc2('Rahim', 1999);



// function parameter default value. c parm is a default value parameter:---------
const myFunc3 = (a: number, b: string, c: boolean = true) => {
    console.log(a);
    console.log(b);
    return a + b;
}
console.log(myFunc3(1001, 'Rahim'));



// set function return type:---------
const myFunc4 = (a: number): number => {
    return a;
}

// myFunc4('annnujd'); // error because this function return number type data; 

console.log(myFunc4(2000000002));



// function default return void:---------
const myFunc5 = (a: number):number => {
    console.log(a);
    return a;
}

console.log(myFunc5(100));





