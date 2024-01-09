import TradeGood, { GoodType } from "../TradeGood";

export default class ChocolateBox extends TradeGood {
    constructor(quantity: number, isImported: boolean, price: number) {
        super(
            GoodType.Food,
            quantity,
            isImported,
            price,
            "box of chocolate");
    }
}