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

const nextCharForNumberString = (str: string): string => {
    const trimmed = str.trim();
    const number = parseInt(trimmed);
    const nextNumber = number + 1;
    return String.fromCharCode(nextNumber);
};
{
    type User = {
        name: string;
        age?: number;
        gender?: string;
    };

    const user: Required<User> = {
        name: 'John Smith',
        age: 23,
        gender: 'male',
    };
}

{
    type User = {
        name: string;
        age: number;
        gender: string;
    };
    // type PartialUser = {
    //     name?: string;
    //     age?: number;
    //     gender?: string
    // };

    type PartialUser = Partial<User>;

    const user: PartialUser = {};
}

{
    type Item = {
        name: string;
        description: string;
        price: number;
        currency: string;
        image: string;
    };

    type ItemPreview = Pick<Item, 'name' | 'image'>;

    const item: ItemPreview = {
        name: 'Macbook',
        // description: 'Macbook Pro',
        // price: 3923,
        // currency: 'USD',
        image: 'http://placehold.it',
    };

    console.log(item);
}

{
    type Item = {
        name: string;
        description: string;
        price: number;
        currency: string;
    };

    type PricelessItem = Omit<Item, 'price' | 'currency'>;

    const item: PricelessItem = {
        name: 'Macbook',
        description: 'Macbook Pro',
        // price: 3923,
        // currency: 'USD',
    };
}

{
    const user = {
        name: 'John Doe',
        age: 26,
        education: {
            degree: 'SE',
        },
    } as const;

    // user.education.degree = 'James Doe';
    console.log(user);

    const skills = ['Js', 'Ts'] as const;
}

{
    type User = {
        readonly name: string;
        readonly age: number;
        readonly education: {
            readonly degree: string;
        };
    };

    const user: User = {
        name: 'John Smith',
        age: 26,
        education: { degree: 'SE' },
    };

    // user.name = 'Jane Doe';
    // user.age = 22;
    // user.education.degree = 'FE';
    console.log(user);
}
