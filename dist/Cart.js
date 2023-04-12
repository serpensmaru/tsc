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
        return this._items.reduce((acum, current) => acum + current.price, 0);
    }
    summPriceDiscount(discout) {
        let total = this.summPrice();
        return total - total * (discout / 100);
    }
    deleteId(id) {
        this._items = this._items.filter(item => item.id !== id);
    }
}
exports.default = Cart;
