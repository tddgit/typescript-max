import { Category } from './enums';

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

let refBook: Encyclopedia = {
    catalogNumber: 1234,
    title: 'The Book of Everything',
    volume: 1,
};

interface Inventory<T> {
    getNewestItem: () => T;
    addItem: (newItem: T) => void;
    getAllItems: () => Array<T>;
}

class Catalog<T> implements Inventory<T> {
    private catalogItems = new Array<T>();
    addItem(newItem: T) {
        this.catalogItems.push(newItem);
    }
}

let bookCatalog = new Catalog<Book>();

interface Magazine {
    title: string;
    publisher: string;
}

// interface CatalogItem {
//     catalogNumber: number;
// }
//
// class Catalog1<T extends CatalogItem> implements Inventory<T> {
//     catalogNumber= 1
// }

// let bookInventory: Inventory<Book>;
//
// let allBooks: Array<Book>= bookInventory.getAllItems()

export { Book, DamageLogger as Logger, Author, Librarian, Magazine };

// interface Periodical {
//     issueNumber: number;
// }
//
// class Magazine implements Periodical {}
//
// function GetMagazineByTitle(title: string): Magazine {}
//
// export { Periodical, Magazine, GetMagazineByTitle as GetMag };

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
