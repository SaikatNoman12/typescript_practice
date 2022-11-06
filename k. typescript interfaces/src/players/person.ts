import { IsPlayer , IsPlayer2} from '../interface/interface.js';

export class Person implements IsPlayer {
    constructor(
        private name: string,
        public age: number,
        readonly country: string
    ) { }

    play() {

        console.log(`${this.name} is playing. He lives in ${this.country}`);

    }
}


export class Player2 implements IsPlayer2{
    
    constructor(
        private name:string,
        public age:number,
        readonly country:string
    ){}

    myPlay(){
        console.log(`${this.name} is a good player. He is ${this.age} years old.`);
    }

    getPrivate(){
        return this.name;
    }

}