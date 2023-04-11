import Buyble from "./Buyble";

export default class Movie implements Buyble {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly age: number,
        readonly slogan: string,
        readonly genre: string,
        readonly duration: number,
        ) {}
}