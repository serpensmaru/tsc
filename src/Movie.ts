import Buyble from "./Buyble";

export default class Movie implements Buyble {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly age: number,
        readonly slogan: string,
        readonly genre: string,
        readonly duration: number,
        readonly price: number
        ) {}
}