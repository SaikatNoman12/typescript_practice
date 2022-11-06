import { Person, Player2 } from './players/person.js';
import { IsPlayer2, IsPlayer } from './interface/interface.js';

const sakib = new Person('Sakib', 40, 'Bangladesh');
console.log(sakib.play());


const mahin = new Person('Mahin', 50, 'Bangladesh');
console.log(mahin);



// interface stright  mode:---------
interface widthHeight {
    width: number,
    height: number
}

function myFunc(option: widthHeight) {
    let w = option.width;
    console.log(w);

    let h = option.height;
    console.log(h);
}

myFunc({
    width: 30,
    height: 100,
});



// interface normal mode:---------

interface onHW {
    width: number,
    height: number
}

function myFunc2(option: onHW) {
    let w = option.width
    console.log(w);

    let h = option.height;
    console.log(h);

    console.log();
}

let def = {
    width: 100000,
    height: 50000,
    line: 40000
}

myFunc2(def);



let rahim: IsPlayer2;
rahim = new Player2('Rahim', 30, 'India');
console.log(rahim);


let players: IsPlayer2[] = [];

players.push(rahim);
console.log(players);





