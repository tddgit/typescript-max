let myNullVar: null = null;
let myNullVar2: undefined = undefined;

console.log(myNullVar2, myNullVar);

interface Archer {
    kind: 'archer';
    lastName: string;
}
interface Samurai {
    kind: 'samurai';
    lastName: string;
}
interface Magician {
    kind: 'magician';
    lastName: string;
}

type WarriorChoice = Archer | Samurai | Magician;

function selectWarrior(warrior: WarriorChoice) {
    switch (warrior.kind) {
        case 'archer':
            return `Our warrior is ${warrior.kind}`;
        case 'magician':
            return `Our warrior is ${warrior.kind}`;
        default:
            return `Our warrior is Samurai`;
    }
}

let numberWarriors!: number;
function applyWarriors() {
    numberWarriors = 20;
}

applyWarriors();
console.log(numberWarriors);

interface Ninja {
    x: number;
}

interface Samurai {
    y: string;
}

function selectWarrior1(q: Ninja | Samurai) {
    if ('x' in q) {
        console.log('I must be a Ninja');
    } else {
        console.log('I must be a Samurai');
    }
}

const million = 1_000_000;
const phone = 555_734_2252;
const bytes = 0xff_0c_00_ff;
const word = 0b1100_0011_1101_0001;
console.log(million, phone, bytes, word);

let text: string | null | undefined;
text = 'Some string';
text = null;
text = undefined;

function trimAndLower(text: string | null | undefined) {
    return typeof text === 'string' ? text.trim().toLowerCase() : text;
}
trimAndLower('string');
trimAndLower(null);
trimAndLower(undefined);
console.log(trimAndLower(null));

// const containerApp = document.getElementById('app-container')!;
// containerApp.remove();

const numbers = [0, 1, 2, [3, 4], 5, [6], [7], 9, [9]];

function flatten(array: (number | number[])[]): number[] {
    const flattend: number[] = [];
    for (const element of array) {
        if (Array.isArray(element)) {
            flattend.push(...element);
        } else {
            flattend.push(element);
        }
    }
    return flattend;
}

console.table(flatten(numbers));
