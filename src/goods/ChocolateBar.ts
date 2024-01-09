import TradeGood, { GoodType } from "../TradeGood";

export default class ChocolateBar extends TradeGood {
    constructor(quantity: number, isImported: boolean, price: number) {
        super(
            GoodType.Food,
            quantity,
            isImported,
            price,
            "chocolate bar")
    }
}