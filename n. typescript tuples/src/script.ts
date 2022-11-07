
// normal array:------------
const arr1: (number | string | object)[] = [2, 'world', { t: 'hello' }];
console.log(arr1);


// tuples array:------------
const arr2: [number, string, object] = [100, 'hello', { test: 'good' }]
console.log(arr2);

// dot not use array method in tuples.
