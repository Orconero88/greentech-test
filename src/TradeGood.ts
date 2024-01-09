class TradeGood {

    private readonly _quantity: number;
    private readonly _goodType: GoodType;
    private readonly _isImported: boolean;
    private readonly _price: number;
    private readonly _description: string;

    constructor(goodType: GoodType, quantity: number, isImported: boolean, price: number, descripton: string = "") {
        this._goodType = goodType;
        this._quantity = quantity;
        this._isImported = isImported;
        this._price = price;
        this._description = descripton;
    }

    public get quantity(): number { return this._quantity; }
    public get goodType(): GoodType { return this._goodType; }
    public get isImported(): boolean { return this._isImported; }
    public get price(): number { return this._price; }
    public get description(): string { return this._description; }

    public toString(): string {
        return `${this.quantity}${this.isImported ? " imported " : " "}${this.description} at ${this.price.toFixed(2)}`;
    }

}

export enum GoodType {
    Food = 'Food',
    Medical = 'Medical',
    Book = 'Book',
    Other = 'Other'
}

export default TradeGood;