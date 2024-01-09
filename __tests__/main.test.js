"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaxCollector_1 = __importDefault(require("../src/TaxCollector"));
const TradeGood_1 = __importStar(require("../src/TradeGood"));
const taxCollector = new TaxCollector_1.default();
describe('calculate taxes on products', () => {
    it('Given the first basket in the description, then the tax amount must be 1,50 and total must be 42,32', () => {
        taxCollector.clear();
        const book = new TradeGood_1.default(TradeGood_1.GoodType.Book, 2, false, 12.49);
        const cd = new TradeGood_1.default(TradeGood_1.GoodType.Other, 1, false, 14.99);
        const chocolateBar = new TradeGood_1.default(TradeGood_1.GoodType.Food, 1, false, 0.85);
        taxCollector.add(book);
        taxCollector.add(cd);
        taxCollector.add(chocolateBar);
        expect(taxCollector.getTaxAmount()).toBe(1.50);
        expect(taxCollector.calculateBasketTotal()).toBe(42.32);
    });
    it('Given the second basket in the description, then the tax amount must be 7,65 and total must be 65,15', () => {
        taxCollector.clear();
        const importedBoxChocolates = new TradeGood_1.default(TradeGood_1.GoodType.Food, 1, true, 10.00);
        const importedPerfume = new TradeGood_1.default(TradeGood_1.GoodType.Other, 1, true, 47.50);
        taxCollector.add(importedBoxChocolates);
        taxCollector.add(importedPerfume);
        expect(taxCollector.getTaxAmount()).toBe(7.65);
        expect(taxCollector.calculateBasketTotal()).toBe(65.15);
    });
    it('Given the third basket in the description, then the tax amount must be 7,90 and total must be 98,38', () => {
        taxCollector.clear();
        const importedPerfume = new TradeGood_1.default(TradeGood_1.GoodType.Other, 1, true, 27.99);
        const perfume = new TradeGood_1.default(TradeGood_1.GoodType.Other, 1, false, 18.99);
        const headachePills = new TradeGood_1.default(TradeGood_1.GoodType.Medical, 1, false, 9.75);
        const importedBoxChocolates = new TradeGood_1.default(TradeGood_1.GoodType.Food, 3, true, 11.25);
        taxCollector.add(importedBoxChocolates);
        taxCollector.add(importedPerfume);
        taxCollector.add(perfume);
        taxCollector.add(headachePills);
        expect(taxCollector.getTaxAmount()).toBe(7.90);
        expect(taxCollector.calculateBasketTotal()).toBe(98.38);
    });
});
