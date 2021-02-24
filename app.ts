import { Category } from "./enums";

import { Book } from "./interfaces";

// type Book = {
//   id: number;
//   title: string;
//   author: string;
//   available: boolean;
//   category: Category;
// };

function GetAllBooks(): Book[] {
  let books: Book[] = [
    {
      id: 1,
      title: "Ulysses",
      author: "James Joyce",
      available: true,
      category: Category.Fiction,
    },
    {
      id: 2,
      title: "A Farewell to Arms",
      author: "Ernest Hemingway",
      available: false,
      category: Category.Fiction,
    },
    {
      id: 3,
      title: "I Know Why the Caged Bird Sings",
      author: "Maya Angelou",
      available: true,
      category: Category.Poetry,
    },
    {
      id: 4,
      title: "Moby Dick",
      author: "Herman" + " Melville",
      available: true,
      category: Category.Fiction,
    },
  ];
  return books;
}

function LogFirstAvailableBook(books: Book[]): void {
  let numberOfBooks: number = books.length;
  let firstAvailableBook: string = "";
  for (let currentBook of books) {
    if (currentBook.available) {
      firstAvailableBook = currentBook.title;
      break;
    }
  }
  console.log("Total Books: ", numberOfBooks);
  console.log("First available: " + firstAvailableBook);
}

function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {
  const allBooks: Array<Book> = GetAllBooks();
  const filteredBooks: Book[] = allBooks.filter(
    (currentBook: Book): boolean => currentBook.category === categoryFilter
  );
  const filteredTitles: string[] = [];
  for (let currentBook of filteredBooks) {
    filteredTitles.push(currentBook.title);
  }
  return filteredTitles;
}

function GetBookTitlesByCategory1(
  categoryFilter: Category = Category.Fiction
): Array<string> {
  const allBooks: Array<Book> = GetAllBooks();
  const filteredTitles: Array<string> = [];
  for (let currentBook of allBooks) {
    if (currentBook.category === categoryFilter) {
      filteredTitles.push(currentBook.title);
    }
  }
  return filteredTitles;
}

const allBooks: Array<Book> = GetAllBooks();
LogFirstAvailableBook(allBooks);

let fictionBooks = GetBookTitlesByCategory(Category.Fiction);
console.log(fictionBooks);

fictionBooks.forEach((val, idx, arr) => {
  console.log(++idx + "-" + val);
});

function GetBookByID(id: number): Book {
  const allBooks = GetAllBooks();
  return allBooks.filter((currentBook) => currentBook.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
  return name + id;
}

function CreateCustomer(
  name: string,
  age?: number | string,
  city?: string
): void {
  console.log("CreateCustomer: " + name);
  if (age) {
    console.log("Age: " + age);
  }
  if (city) {
    console.log("City: " + city);
  }
}

function CheckoutBooks(customer: string, ...bookIDs: Array<number>): string[] {
  console.log("Checking out books for " + customer);

  let booksCheckedOut: string[] = [];
  for (let id of bookIDs) {
    let book = GetBookByID(id);
    if (book.available) {
      booksCheckedOut.push(book.title);
    }
  }
  return booksCheckedOut;
}

let myBooks: string[] = CheckoutBooks("Thorne", 1, 3, 4);
myBooks.forEach((title) => {
  console.log(title);
});

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
  const allBooks = GetAllBooks();
  const foundTitles: string[] = [];

  if (typeof bookProperty === "string") {
    //
    for (let book of allBooks) {
      if (book.author === bookProperty) {
        foundTitles.push(book.title);
      }
    }
  } else if (typeof bookProperty == "boolean") {
    for (let book of allBooks) {
      if (book.available === bookProperty) {
        foundTitles.push(book.title);
      }
    }
  }
  return foundTitles;
}

function PrintBook(book: Book): void {
  console.log("PrintBook: " + book.title + "by" + book.author);
}

let myBook = {
  id: 5,
  title: "Pride and Prejudice",
  author: "Jane Austen",
  available: true,
  category: Category.Fiction,
  year: "1813",
  copies: 3,
};

PrintBook(myBook);

//********************************************************

let hermansBooks = GetTitles("Herman Melville");
hermansBooks.forEach((title) => {
  console.log("GetTitles: ", title);
});

interface Duck {
  walk(): void;
  swim(): void;
  quack(): void;
}

let probablyDuck = {
  walk: () => {
    console.log("walking like a duck");
  },
  swim: () => {
    console.log("swimming like a duck");
  },
  quack: () => {
    console.log("quack like a duck");
  },
};

function flyOverWater(bird: Duck) {}
flyOverWater(probablyDuck);

CreateCustomer("Michelle");

let xx: number;
let IdGenerator: (chars: string, nums: number) => string;
IdGenerator = (name: string, id: number) => name + id;

let myId: string = IdGenerator("stas", 15);

console.log(CreateCustomer("Stas"));

function GetBooksReadForCust(name: string, ...bookID: Array<number>) {}

let books = GetBooksReadForCust("Stas", 3, 4, 5);

//
// console.log(CreateCustomerID("Stas", 39));
// console.log(
//   allBooks.filter((book: book): boolean => book.author === "Herman Melville")
// );
//
