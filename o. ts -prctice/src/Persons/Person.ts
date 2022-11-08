export class Person5{
    constructor(
        private name:string,
        public age:number,
        readonly country:string,
        private classes:number
    ){}

    play(){
        console.log(`${this.name} is playing. He lives in ${this.country}. He is ${this.age} years old. He read in ${this.classes}.`);
    }

}