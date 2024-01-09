import TradeGood, { GoodType } from "./TradeGood";
import roundUpPrice from "./utils";

export default class TaxCollector {
    private tradeGoodList: TradeGood[] = [];

    public add(tradeGood: TradeGood): void {
        this.tradeGoodList.push(tradeGood);
    }

    public getTaxAmount(): number {
        let tax = 0;

        for (let i = 0; i < this.tradeGoodList.length; i++) {
            const good = this.tradeGoodList[i];
            tax += this.getTax(good);
        }

        return roundUpPrice(tax, 20);
    }

    public getTax(good: TradeGood): number {
        switch (good.goodType) {
            case GoodType.Food:
            case GoodType.Medical:
            case GoodType.Book:
                return roundUpPrice(good.price * (good.isImported ? 0.05 : 0), 20) * good.quantity;
            case GoodType.Other:
                return roundUpPrice(good.price * (good.isImported ? 0.15 : 0.1), 20) * good.quantity;
        }
    }
    public clear(): void {
        this.tradeGoodList = [];
    }

    public calculateBasketTotal(): number {
        let total = 0;

        for (let i = 0; i < this.tradeGoodList.length; i++) {
            const good = this.tradeGoodList[i];
            total += this.calculateItemTotal(good);
        }
        return total;
    }

    public calculateItemTotal(good: TradeGood): number {
        return (good.price * good.quantity) + this.getTax(good);
    }

    public toString(): string {
        let result = "";
        this.tradeGoodList.forEach(good => {
            result += `${good.quantity} ${good.description}: ${this.calculateItemTotal(good).toFixed(2)}\n`;
        });
        result += `Sales Taxes: ${this.getTaxAmount().toFixed(2)}\n`;
        result += `Total: ${this.calculateBasketTotal().toFixed(2)}\n`;
        return result;
    }
}