import { Category } from "./enums";

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamaged?: DamageLogger;
}

interface DamageLogger {
  (reason: string): void;
}

interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numBooksPublished: number;
}
interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string) => void;
}

interface LibraryResource {
  catalogNumber: number;
}

interface BookLibrary {
  title: string;
}

interface Encyclopedia extends BookLibrary, LibraryResource {
  volume: number;
}
export { Book, DamageLogger, Author, Librarian };

let refBook: Encyclopedia = {
  catalogNumber: 1234,
  title: "The Book of Everything",
  volume: 1,
};
//
// interface Librarian {
//   doWork: () => void;
// }
//
// class ElementarySchoolLibrarian implements Librarian {
//   doWork() {
//     console.log("Reading to and teaching children");
//   }
// }
//
// let kidsLibrarian = new ElementarySchoolLibrarian();
// kidsLibrarian.doWork();
