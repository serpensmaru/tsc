import Buyble from "./Buyble";

export default class Book implements Buyble {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly pages: number,
        readonly price: number
        ) {}
}


