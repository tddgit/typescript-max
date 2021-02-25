import { ReferenceItem } from './classes';

export default class Encyclopedia extends ReferenceItem {
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
