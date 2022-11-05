// access modifiers in analog:---------
class Person {
    private name: string;
    public age: number;
    readonly country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }

    play() {

        console.log(`${this.name} is playing. He lives in ${this.country}`);

    }

}


const sakib = new Person('Sakib', 40, 'Bnagladesh');
console.log(sakib);

// console.log(sakib.name); // error. because this is private;



// access modifiers in digital system:---------
class Person1 {

    team:string;

    constructor(
        private name: string,
        public age:number,
        readonly country:string,
        t:string 
    ) { 
        this.team = t;
    }

    play(){
        console.log(`${this.name} is playing. He lives in ${this.country}`);
    }

}

const mahin = new Person1('Mahin Khan', 40, 'Italy', 'Bangladesh BFF');
console.log(mahin);





