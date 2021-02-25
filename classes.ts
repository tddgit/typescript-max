import { Librarian } from './interfaces';

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
        console.log(this.name + ' is assisting ' + custName);
    }
}

abstract class ReferenceItem {
    private _publisher: string = 'No Publisher assigned';
    static department: string = 'Research';

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem');
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {
    constructor(
        title: string,
        year: number,
        public edition: number,
        public numberInSet?: number
    ) {
        super(title, year);
    }
    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year}`);
    }
    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

class Journal extends ReferenceItem {
    constructor(
        title: string,
        year: number,
        public contribution: string[],
        public issueNumber?: number
    ) {
        super(title, year);
    }
    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

export { UniversityLibrarian, ReferenceItem, Encyclopedia, Journal };

//**********************************************************

/// <reference path = "classes.ts"/>
namespace Membership {
    export function AddMember(name: string) {}
    export namespace Cards {
        export function issueCard(memberNumber: number) {}
    }
}

/// <reference path = "classes.ts"/>
let memberName: string = 'Elaine';
let memberNumber: number = 789;

Membership.AddMember(memberName);
Membership.Cards.issueCard(memberNumber);
Membership.AddMember('Garrett');
Membership.Cards.issueCard(5544877);

// class ReferenceItem {
//   numberOfPages: number;
//   constructor(title: string, publisher?: string) {
//     //
//   }
//   get editor() {
//     //
//   }
//   set editor() {
//     //
//   }
//   printChapterTitle(chapterNum: number): void {
//     //
//   }
// }

// class Author {
//   // name: string;
//   constructor(public name: string) {
//     // this.name = authorName;
//   }
// }
//
// class Library {
//   constructor(public name: string) {}
//   static description: string = "A source of knowlegde.";
// }
//
// let lib = new Library("New York Public Library");
//
// // let encyclopedia = new ReferenceItem("Wikipedia");
