"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cart {
    constructor() {
        this._items = [];
    }
    add(item) {
        this._items.push(item);
    }
    get items() {
        return [...this._items];
    }
    summPrice() {
        let total = 0;
        this._items.forEach((item) => {
            total += item.price;
        });
        return total;
    }
    summPriceDiscount(discout) {
        let total = this.summPrice();
        total = total - total * (discout / 100);
        return total;
    }
    deleteId(id) {
        this._items = this._items.filter(item => item.id !== id);
    }
}
exports.default = Cart;
