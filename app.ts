type book = {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
};

function GetAllBooks(): book[] {
  let books: book[] = [
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

function LogFirstAvailableBook(books: book[]): void {
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

enum Category {
  Biography,
  Poetry,
  Fiction,
  History,
  Children,
}

function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {
  const allBooks: Array<book> = GetAllBooks();
  const filteredBooks: book[] = allBooks.filter(
    (currentBook: book): boolean => currentBook.category === categoryFilter
  );
  const filteredTitles: string[] = [];
  for (let currentBook of filteredBooks) {
    filteredTitles.push(currentBook.title);
  }
  return filteredTitles;
}

function GetBookTitlesByCategory1(categoryFilter: Category): Array<string> {
  const allBooks: Array<book> = GetAllBooks();
  const filteredTitles: Array<string> = [];
  for (let currentBook of allBooks) {
    if (currentBook.category === categoryFilter) {
      filteredTitles.push(currentBook.title);
    }
  }
  return filteredTitles;
}

//********************************************************

const allBooks: Array<book> = GetAllBooks();
LogFirstAvailableBook(allBooks);

let fictionBooks = GetBookTitlesByCategory(Category.Fiction);
console.log(fictionBooks);

fictionBooks.forEach((val, idx, arr) => {
  console.log(++idx + "-" + val);
});


// function CreateCustomerID(name: string, id: number): string {
//   return name + id;
// }
//
// console.log(CreateCustomerID("Stas", 39));
// console.log(
//   allBooks.filter((book: book): boolean => book.author === "Herman Melville")
// );
//
