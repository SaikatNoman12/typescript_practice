export class Person5 {
    constructor(name, age, country, classes) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.classes = classes;
    }
    play() {
        console.log(`${this.name} is playing. He lives in ${this.country}. He is ${this.age} years old. He read in ${this.classes}.`);
    }
}
