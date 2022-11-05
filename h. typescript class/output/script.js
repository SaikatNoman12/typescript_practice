"use strict";
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} playing form ${this.country}.`);
    }
}
const siful = new Player('Siful Emon', 40, 'Bangladesh');
siful.play();
const mahin = new Player('Mahin Khan', 22, 'England');
mahin.play();
// Player class is a type:---------
const players = [];
players.push(siful);
players.push(mahin);
console.log(players);
/* Output:--
{
    name: 'Siful Emon',
    age: 40,
    country: 'Bangladesh'
}
{
    name: 'Mahin Khan',
    age: 22,
    country: 'England'
}
*/
