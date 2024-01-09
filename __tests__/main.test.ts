import TaxCollector from '../src/TaxCollector';
import TradeGood, { GoodType } from '../src/TradeGood';
import Book from '../src/goods/Book';
import BottlePerfume from '../src/goods/BottlePerfume';
import ChocolateBar from '../src/goods/ChocolateBar';
import ChocolateBox from '../src/goods/ChocolateBox';
import HeadachePills from '../src/goods/HeadachePills';
import MusicCd from '../src/goods/MusicCd';


describe('calculate taxes on products', () => {
  function getRandomPrice(max: number): number {
    const random = Math.random() * max;
    const result = Math.round((random + Number.EPSILON) * 100.0) / 100.0;
    return result
  }
  const taxCollector = new TaxCollector();

  it('Given the first basket in the description, then the tax amount must be 1,50 and total must be 42,32', () => {
    taxCollector.clear();
    const book = new Book(2, false, 12.49);
    const cd = new MusicCd(1, false, 14.99);
    const chocolateBar = new ChocolateBar(1, false, 0.85);

    taxCollector.add(book);
    taxCollector.add(cd);
    taxCollector.add(chocolateBar);
    expect(taxCollector.getTaxAmount()).toBe(1.50);
    expect(taxCollector.calculateBasketTotal()).toBe(42.32);
  });

  it('Given the second basket in the description, then the tax amount must be 7,65 and total must be 65,15', () => {
    taxCollector.clear();
    const importedBoxChocolates = new ChocolateBox(1, true, 10.00);
    const importedPerfume = new BottlePerfume(1, true, 47.50);

    taxCollector.add(importedBoxChocolates);
    taxCollector.add(importedPerfume);

    expect(taxCollector.getTaxAmount()).toBe(7.65);
    expect(taxCollector.calculateBasketTotal()).toBe(65.15);
  });

  it('Given the third basket in the description, then the tax amount must be 7,90 and total must be 98,38', () => {
    taxCollector.clear();
    const importedPerfume = new BottlePerfume(1, true, 27.99);
    const perfume = new BottlePerfume(1, false, 18.99);
    const headachePills = new HeadachePills(1, false, 9.75);
    const importedBoxChocolates = new ChocolateBox(3, true, 11.25);

    taxCollector.add(importedBoxChocolates);
    taxCollector.add(importedPerfume);
    taxCollector.add(perfume);
    taxCollector.add(headachePills);

    expect(taxCollector.getTaxAmount()).toBe(7.90);
    expect(taxCollector.calculateBasketTotal()).toBe(98.38);
  });

  it('Given a Food type trade good of any price the sales taxes must be 0', () => {
    taxCollector.clear();
    const boxChocolates = new TradeGood(GoodType.Food, 1, false, Math.random() * 100);
    taxCollector.add(boxChocolates);

    expect(taxCollector.getTaxAmount()).toBe(0);

  });

  it('Given an imported Food type trade good of any price the sales taxes must be the 5% of the price ', () => {
    taxCollector.clear();
    const price = getRandomPrice(100);
    const boxChocolates = new TradeGood(GoodType.Food, 1, true, price);
    taxCollector.add(boxChocolates);

    expect(taxCollector.getTaxAmount()).toBeCloseTo(price * 0.05, 1);

  });

  it('Given a Medical type trade good of any price the sales taxes must be 0', () => {
    taxCollector.clear();
    const price = getRandomPrice(100);
    const headachePills = new TradeGood(GoodType.Medical, 1, false, price);
    taxCollector.add(headachePills);

    expect(taxCollector.getTaxAmount()).toBe(0);

  });

  it('Given an imported Medical type trade good of any price the sales taxes must be the 5% of the price ', () => {
    taxCollector.clear();
    const price = getRandomPrice(100);
    const headachePills = new TradeGood(GoodType.Medical, 1, true, price);
    taxCollector.add(headachePills);

    expect(taxCollector.getTaxAmount()).toBeCloseTo(price * 0.05, 1);

  });

  it('Given a Book type trade good of any price the sales taxes must be 0', () => {
    taxCollector.clear();
    const price = getRandomPrice(100);
    const book = new TradeGood(GoodType.Book, 1, false, price);
    taxCollector.add(book);

    expect(taxCollector.getTaxAmount()).toBe(0);

  });

  it('Given an imported Book type trade good of any price the sales taxes must be the 5% of the price ', () => {
    taxCollector.clear();
    const price = getRandomPrice(100);
    const book = new TradeGood(GoodType.Book, 1, true, price);
    taxCollector.add(book);

    expect(taxCollector.getTaxAmount()).toBeCloseTo(price * 0.05, 1);

  });

  it('Given an Other type trade good of any price the sales taxes must be 10% of the price', () => {
    taxCollector.clear();
    const price = getRandomPrice(100);
    const otherItem = new TradeGood(GoodType.Other, 1, false, price);
    taxCollector.add(otherItem);

    expect(taxCollector.getTaxAmount()).toBeCloseTo(price * 0.10, 1);

  });

  it('Given an imported Other type trade good of any price the sales taxes must be the 15% of the price ', () => {
    taxCollector.clear();
    const price = getRandomPrice(100);
    const otherItem = new TradeGood(GoodType.Other, 1, true, price);
    taxCollector.add(otherItem);

    expect(taxCollector.getTaxAmount()).toBeCloseTo(price * 0.15, 1);

  });

  it('Given an Item with a price of 27,99 sales tax must be 4,20', () => {
    taxCollector.clear();
    const price = 27.99;
    const otherItem = new TradeGood(GoodType.Other, 1, true, price);
    taxCollector.add(otherItem);

    expect(taxCollector.getTaxAmount()).toBe(4.20);

  });

  it('Given an Item, sales tax must be a multiple of 0.05', () => {
    taxCollector.clear();
    const price = getRandomPrice(100);
    const otherItem = new TradeGood(GoodType.Other, 1, true, price);
    taxCollector.add(otherItem);

    expect((taxCollector.getTaxAmount() * 100) % 5).toBe(0);

  });
});
