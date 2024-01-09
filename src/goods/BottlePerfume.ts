import TradeGood, { GoodType } from "../TradeGood";

export default class BottlePerfume extends TradeGood {
    constructor(quantity: number, isImported: boolean, price: number) {
        super(
            GoodType.Other,
            quantity,
            isImported,
            price,
            "bottle of perfume");
    }
}