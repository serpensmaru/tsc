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
        let total: number = 0;
        this._items.forEach((item) => {
            total += item.price;
        });
        return total;
    }

    summPriceDiscount(discout: number): number {
        let total: number = this.summPrice();
        total = total - total * (discout / 100);
        return total;
    }
    deleteId(id: number): void {
        this._items = this._items.filter( item  => item.id !== id )
    }
}
