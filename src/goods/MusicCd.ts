import TradeGood, { GoodType } from "../TradeGood";

export default class MusicCd extends TradeGood {
    constructor(quantity: number, isImported: boolean, price: number) {
        super(
            GoodType.Other,
            quantity,
            isImported,
            price,
            "music cd");
    }
}