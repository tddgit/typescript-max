import { Category } from "./enums";
import { Book, Logger, Author, Librarian, Magazine } from "./interfaces";
import { UniversityLibrarian, ReferenceItem } from "./classes";
import * as util from "./lib/utilityFunctions";

function PrintBookInfo(item: Book): void {
  console.log(`${item.title} was athored by ${item.author}`);
}
let [book1, book2] = util.GetAllBooks();
