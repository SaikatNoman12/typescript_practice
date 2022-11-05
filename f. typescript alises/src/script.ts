type numOrString = number | string;

type userData = {
    name: string;
    age: number;
};



const getAll = (id: numOrString, user: userData) => {

    console.log(user);

    return `My id is ${id}. My name is ${user.name}. Our age ${user.age}.`;

};

console.log(
    getAll('3222',
        {
            name: 'ddd',
            age: 30
        })
);


const showData = (id: string | number, user: { name: string; age: number }) => {

    console.log(user);

    return `My id is ${id}. My name is ${user.name}. Our age ${user.age}`;

};

console.log(
    showData('abb22',
        {
            name: 'Karim Uddin',
            age: 30
        })
);
