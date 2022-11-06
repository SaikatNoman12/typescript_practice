export interface IsPlayer {

    age: number;
    country: string;

    play(): void;

}

export interface IsPlayer2 {
    age:number
    readonly country: string;

    myPlay(): void;

    getPrivate() : string;
}