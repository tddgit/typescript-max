import { Book, DamageLogger, Author, Librarian } from "./interfaces";

class UniversityLibrarian implements Librarian {
  // name: string;
  // email: string;
  // department: string;

  constructor(
    public name: string,
    public email: string,
    public department: string
  ) {}

  assistCustomer(custName: string) {
    console.log(this.name + " is assisting " + custName);
  }
}

export { UniversityLibrarian };
