

// Use generic:---------
function addId<T>(obj: T) {
    const id = Math.floor(Math.random() * 100);
    return { ...obj, id };
}

let user = addId({
    name: 'Mahin',
    age: 20
});
console.log(user.name);


// use generic., And use generic type:---------
const addDataID = function <T extends object>(obj: T) {

    const id = Math.floor(Math.random() * 100);

    return { ...obj, id };

}

/* 

let useString = 'Jeno';
addDataID(useString)     // error. because this is string. 
console.log(addDataID()); 

*/

let user2 = {
    name: 'Hello JS',
    age: '40'
};
addDataID(user2);



// use generic. and generic use type schema:---------
const addDataTd2 = function
    <T extends {
        name: string,
        age: number,
        country: string
    }>
    (obj: T) {

    const rand = Math.floor(Math.random() * 100);

    return { ...obj, rand };
};

let use = {
    name: 'Abu Hasnat',
    age: 40,
    country: 'Ban',
    line: 300
}

const add = addDataTd2(use);
console.log(add);



// use generic. use interface:---------
interface APIResponse<T> {
    status: number;
    type: string;
    data: T;
};

const response1: APIResponse<object> = {
    status: 100,
    type: 'good',
    data: {
        name: 'Rahi',
        age: 300,
        datas: '3333'
    }
}

console.log(response1);


// Use generic. use schema:---------
const response2: APIResponse<{
    name: string,
    age: number
}> = {
    status: 200,
    type: 'Excellent',
    data: {
        name: 'Mahi',
        age: 300,
    }
}
console.log(response2);

