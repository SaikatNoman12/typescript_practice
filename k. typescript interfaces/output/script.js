import { Person, Player2 } from './players/person.js';
const sakib = new Person('Sakib', 40, 'Bangladesh');
console.log(sakib.play());
const mahin = new Person('Mahin', 50, 'Bangladesh');
console.log(mahin);
function myFunc(option) {
    let w = option.width;
    console.log(w);
    let h = option.height;
    console.log(h);
}
myFunc({
    width: 30,
    height: 100,
});
function myFunc2(option) {
    let w = option.width;
    console.log(w);
    let h = option.height;
    console.log(h);
    console.log();
}
let def = {
    width: 100000,
    height: 50000,
    line: 40000
};
myFunc2(def);
let rahim;
rahim = new Player2('Rahim', 30, 'India');
console.log(rahim);
let players = [];
players.push(rahim);
console.log(players);
