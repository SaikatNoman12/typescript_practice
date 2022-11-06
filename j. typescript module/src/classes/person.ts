export class Person {

    constructor(
        private name: string,
        public age: number,
        readonly country: string
    ) { }

    play() {
        console.log(`${this.name} is playing. He lives in ${this.country}`);
    }

}
