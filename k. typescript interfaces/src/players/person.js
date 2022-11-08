"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player2 = exports.Person = void 0;
class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is playing. He lives in ${this.country}`);
    }
}
exports.Person = Person;
class Player2 {
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
exports.Player2 = Player2;
