import Buyble from "./Buyble";

export default class Cart {
    private _items: Buyble[] = []

    add(item: Buyble): void {
        this._items.push(item)
    }

    get items(): Buyble[] {
        return [...this._items]
    }

    summPrice(): number {
        return this._items.reduce(
            (acum: number, current: Buyble) => acum + current.price, 0
        )
    }

    summPriceDiscount(discout: number): number {
        let total = this.summPrice();
        return total - total * (discout / 100);
    }
    deleteId(id: number): void {
        this._items = this._items.filter( (item: Buyble)  => item.id !== id )
    }
}
