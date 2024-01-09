import TradeGood, { GoodType } from "../TradeGood";

export default class HeadachePills extends TradeGood {
    constructor(quantity: number, isImported: boolean, price: number) {
        super(
            GoodType.Medical,
            quantity,
            isImported,
            price,
            "packet of headache pills");
    }
}