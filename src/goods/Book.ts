import TradeGood, { GoodType } from "../TradeGood";

export default class Book extends TradeGood {
    constructor(quantity: number, isImported: boolean, price: number) {
        super(
            GoodType.Book,
            quantity,
            isImported,
            price,
            "book");
    }
}