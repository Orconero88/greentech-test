import TaxCollector from "./TaxCollector";
import ChocolateBox from "./goods/ChocolateBox";
import BottlePerfume from "./goods/BottlePerfume";
import ChocolateBar from "./goods/ChocolateBar";
import MusicCd from "./goods/MusicCd";
import Book from "./goods/Book";
import HeadachePills from "./goods/HeadachePills";

const taxCollector = new TaxCollector();

const book = new Book(2, false, 12.49);
const cd = new MusicCd(1, false, 14.99);
const chocolateBar = new ChocolateBar(1, false, 0.85);

taxCollector.add(book);
taxCollector.add(cd);
taxCollector.add(chocolateBar);
console.log("INPUT 1\n");
console.log(cd.toString());
console.log(book.toString());
console.log(chocolateBar.toString());
console.log("\nOUTPUT 1\n");
console.log(taxCollector.toString());

taxCollector.clear();
const importedBoxChocolates2 = new ChocolateBox(1, true, 10.00);
const importedPerfume2 = new BottlePerfume(1, true, 47.50);

taxCollector.add(importedBoxChocolates2);
taxCollector.add(importedPerfume2);

console.log("INPUT 2\n");
console.log(importedBoxChocolates2.toString());
console.log(importedPerfume2.toString());

console.log("\nOUTPUT 2\n");
console.log(taxCollector.toString());

taxCollector.clear();

const importedPerfume = new BottlePerfume(1, true, 27.99);
const perfume = new BottlePerfume(1, false, 18.99);
const headachePills = new HeadachePills(1, false, 9.75);
const importedBoxChocolates = new ChocolateBox(3, true, 11.25);

taxCollector.add(importedBoxChocolates);
taxCollector.add(importedPerfume);
taxCollector.add(perfume);
taxCollector.add(headachePills);

console.log("INPUT 3\n");
console.log(importedBoxChocolates.toString());
console.log(importedPerfume.toString());
console.log(perfume.toString());
console.log(headachePills.toString());
console.log("\nOUTPUT 3\n");
console.log(taxCollector.toString());