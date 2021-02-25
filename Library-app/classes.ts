// import { Librarian } from './interfaces';

import * as Interfaces from './interfaces';
import { sealed, logger } from './decorators';

@logger
@sealed('UniversityLibrarian')
class UniversityLibrarian implements Interfaces.Librarian {
    name: string = '';
    email: string = '';
    department: string = '';

    // constructor(
    //     public name: string = 'Librarian',
    //     public email: string = 'noemail@email.com',
    //     public department: string = 'some department'
    // ) {}

    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }

    assistFaculty() {
        console.log('Assisting faculty');
    }
}
@logger
export class PublicLibrarian implements Interfaces.Librarian {
    name: string = '';
    email: string = '';
    department: string = '';

    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }
    assistFaculty() {
        console.log('Assisting faculty');
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

export { UniversityLibrarian, ReferenceItem, Journal };

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
