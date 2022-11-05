// function signature not a arrow function:---------
let myFunc: (x: number, y: number) => number;


myFunc = (num1: number, num2: number) => {
    return num1 + num2;
}
console.log(myFunc(100, 300));


// function signature use case:---------
let add: (x: number, y: number, z: number) => number;

add = (num1: number, num2: number, num3: number) => {

    return num1 + (num2 * num3);

}
console.log(add(10, 20, 30));



// function signature use case:---------
let calculation: (id: number | string, user: { name: string; age: number; adult: boolean }) => void;


calculation = (id: number | string, user: { name: string, age: number, adult: boolean }) => {
    return id + ' ' + user.name + ' ' + user.age + ' ' + user.adult;
}

const calc = calculation(112, { name: 'Abu', age: 20, adult: true });
console.log(calc);



// function signature use case:---------
let addition: (x: number, y: number, z?: string) => number;

addition = (num1: number, num2: number, z?: string) => {
    if(z === 'add'){
        return num1 - num2;
    }
    else if(z){
        return num1 + num2;
    }
    else{
        return num1 * num2;
    }
}
const adding2 = addition(10, 20, 'not matched');
console.log(adding2); // -10;

const adding = addition(10, 20, 'add');
console.log(adding);  // 30;


const adding3 = addition(10, 20);
console.log(adding3); // 200;

