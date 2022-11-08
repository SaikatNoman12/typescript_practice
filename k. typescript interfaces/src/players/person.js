export class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is playing. He lives in ${this.country}`);
    }
}
export class Player2 {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    myPlay() {
        console.log(`${this.name} is a good player. He is ${this.age} years old.`);
    }
    getPrivate() {
        return this.name;
    }
}
