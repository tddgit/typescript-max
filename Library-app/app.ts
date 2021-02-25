import { Category } from './enums';

import { Book, Logger, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, PublicLibrarian, ReferenceItem } from './classes';

import Encyclopedia from './encyclopedia';
import Shelf from './shelf';

import * as util from './lib/utilityFunction';
// let encyclop = new Encyclopedia('Fact Book', 2016, 1);

// type Book = {
//   id: number;
//   title: string;
//   author: string;
//   available: boolean;
//   category: Category;
// };

// let poetryBooks: Book[];
// let fictionBooks: Array<Book>
// let historyBooks = new Array<Book>(5)

// function LogAndReturn<T>(thing: T): T {
//     console.log(thing);
//     return thing;
// }
// let someString: string = LogAndReturn<string>('Log This');
//
// let newMag: Magazine = { title: 'Web Dev Monthly' };

function PrintBookInfo(item: Book): void {
    console.log(`${item.title} was authored by ${item.author}`);
}

// let [book1, book2] = util.GetAllBooks();

function uielement(target: Function) {
    //
}
function deprecated(target: any, property: string, d: PropertyDescriptor) {
    console.log('This method will go away soon.');
}

@uielement
class ContactForm {
    @deprecated
    someOldMethod() {
        //
    }
}

function uielement1(element: string) {
    return function (target: Function) {
        console.log(`Creating new element: ${element}`);
    };
}

@uielement1('SimpleContactForm')
class ContactForm1 {}

let lib1 = new UniversityLibrarian();
let lib2 = new PublicLibrarian();

function GetAllBooks(): Book[] {
    return [
        {
            id: 1,
            title: 'Ulysses',
            author: 'James Joyce',
            available: true,
            category: Category.Fiction,
        },
        {
            id: 2,
            title: 'A Farewell to Arms',
            author: 'Ernest Hemingway',
            available: false,
            category: Category.Fiction,
        },
        {
            id: 3,
            title: 'I Know Why the Caged Bird Sings',
            author: 'Maya Angelou',
            available: true,
            category: Category.Poetry,
        },
        {
            id: 4,
            title: 'Moby Dick',
            author: 'Herman' + ' Melville',
            available: true,
            category: Category.Fiction,
        },
    ];
}

function LogFirstAvailableBook(books: Book[]): void {
    let numberOfBooks: number = books.length;
    let firstAvailableBook: string = '';
    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailableBook = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ', numberOfBooks);
    console.log('First available: ' + firstAvailableBook);
}

function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {
    const allBooks: Array<Book> = GetAllBooks();
    const filteredBooks: Book[] = allBooks.filter(
        (currentBook: Book): boolean => currentBook.category === categoryFilter
    );
    const filteredTitles: string[] = [];
    for (const currentBook of filteredBooks) {
        filteredTitles.push(currentBook.title);
    }
    return filteredTitles;
}

const allBooks: Array<Book> = GetAllBooks();
LogFirstAvailableBook(allBooks);

let fictionBooks = GetBookTitlesByCategory(Category.Fiction);
console.log(fictionBooks);

fictionBooks.forEach((val, idx) => {
    console.log(++idx + '-' + val);
});

function GetBookByID(id: number): Book {
    const allBooks = GetAllBooks();
    return allBooks.filter((currentBook) => currentBook.id === id)[0];
}

// function CreateCustomerID(name: string, id: number): string {
//     return name + id;
// }

// function CreateCustomer(
//     name: string,
//     age?: number | string,
//     city?: string
// ): void {
//     console.log('CreateCustomer: ' + name);
//     if (age) {
//         console.log('Age: ' + age);
//     }
//     if (city) {
//         console.log('City: ' + city);
//     }
// }

function CheckoutBooks(customer: string, ...bookIDs: Array<number>): string[] {
    console.log('Checking out books for ' + customer);

    let booksCheckedOut: string[] = [];
    for (let id of bookIDs) {
        let book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}

let myBooks: string[] = CheckoutBooks('Thorne', 1, 3, 4);
myBooks.forEach((title) => {
    console.log(title);
});

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if (typeof bookProperty === 'string') {
        //
        for (let book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    } else if (typeof bookProperty == 'boolean') {
        for (let book of allBooks) {
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}

function PrintBook(book: Book): void {
    console.log('PrintBook: ' + book.title + 'by' + book.author);
}

// let ref = new ReferenceItem("Facts and Figures", 2012);
// // ref.title = "Facts and Figures";
// // ref.year = 1991;
// ref.printItem();
// ref.publisher;
// ref.publisher = "Random Data Publishing";
// console.log(ref.publisher);

let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 2021, 10);
refBook.printItem();

let Newspaper = class extends ReferenceItem {
    printCitation(): void {
        console.log(`Newspaper: ${this.title} ${this.year}`);
    }
};

let myPaper = new Newspaper('Pravda', 1918);
myPaper.printCitation();

class Novel extends class {
    title: string = 'Not assigned';
} {
    mainCharacter: string = 'Not assigned';
}

let favoriteNovel = new Novel();
favoriteNovel.title = '1984';
favoriteNovel.mainCharacter = 'Ben Wilson';

//***********************************************

let myBook: Book = {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    available: true,
    category: Category.Fiction,
    pages: 250,
    markDamaged: (reason: string) => {
        console.log('Damaged: ' + reason);
    },
};

PrintBook(myBook);
console.log(myBook.pages);
console.log(myBook);

let logDamage: Logger;
logDamage = (damage: string) => {
    console.log('Damage' + ' reported ' + damage);
};
logDamage('backcover is missing');

// let favoriteAuthor: Author = {}
// let favoriteLibrarian: Librarian = new UniversityLibrarian(
//     'Sharon',
//     'sharon@gmail.com',
//     'University Library'
// );
//
// favoriteLibrarian.assistCustomer('Lynda');
//********************************************************

let hermansBooks = GetTitles('Herman Melville');
hermansBooks.forEach((title) => {
    console.log('GetTitles: ', title);
});

import { Purge } from './lib/utilityFunction';

let inventory: Array<Book> = [
    {
        id: 10,
        title: 'The C Programming Language',
        author: 'K & R',
        available: true,
        category: Category.Software,
    },
    {
        id: 11,
        title: 'Code Complete',
        author: 'Steve McConnell',
        available: true,
        category: Category.Software,
    },
    {
        id: 12,
        title: '8-Bit Graphics with Cobol',
        author: 'A. B.',
        available: true,
        category: Category.Software,
    },
    {
        id: 13,
        title: 'Cool autoexec.bat Scripts!',
        author: 'C. D.',
        available: true,
        category: Category.Software,
    },
];

let bookShelf: Shelf<Book> = new Shelf<Book>();

inventory.forEach((book) => bookShelf.add(book));

let firstBook: Book = bookShelf.getFirst();

let magazines: Array<Magazine> = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' },
];

let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();

magazines.forEach((magazine) => magazineShelf.add(magazine));
let firstMagazine: Magazine = magazineShelf.getFirst();

magazineShelf.printTitles();
let softwareBook = bookShelf.find('Code Complete');
console.log(`${softwareBook.title} (${softwareBook.author})`);

let medals: string[] = ['gold', 'silver', 'bronze'];
const [first, second, third] = medals;
let person = {
    name: 'Audrey',
    address: '123 Main Street',
    phone: '555-12-12',
};
let { name, address, phone } = person;

// let numberShelf: Shelf<number> = new Shelf<number>();
// [5, 10, 15].forEach((number) => numberShelf.add(number));

// let purgedBooks: Array<Book> = Purge(inventory);
// purgedBooks.forEach((book) => {
//     console.log(book.title);
// });

//
// interface Duck {
//     walk(): void;
//     swim(): void;
//     quack(): void;
// }

// let probablyDuck = {
//     walk: () => {
//         console.log('walking like a duck');
//     },
//     swim: () => {
//         console.log('swimming like a duck');
//     },
//     quack: () => {
//         console.log('quack like a duck');
//     },
// };

// function flyOverWater(bird: Duck) {}
// flyOverWater(probablyDuck);

// CreateCustomer('Michelle');
//
// let xx: number;
// let IdGenerator: (chars: string, nums: number) => string;
// IdGenerator = (name: string, id: number) => name + id;
//
// let myId: string = IdGenerator('stas', 15);
//
// console.log(CreateCustomer('Stas'));
//
// function GetBooksReadForCust(name: string, ...bookID: Array<number>) {}
//
// let books = GetBooksReadForCust('Stas', 3, 4, 5);
//
// //
// // console.log(CreateCustomerID("Stas", 39));
// // console.log(
// //   allBooks.filter((book: book): boolean => book.author === "Herman Melville")
// // );
// //
