// let x: {
//     user: {
//         name: string;
//         address?: {
//             street: string;
//             city: string;
//         };
//     };
// } = undefined as any;
//
// console.log(x.user.address?.city);
//
{
    class Foo {
        #name: string;

        constructor(rawName?: string) {
            this.#name = rawName || '(no name)';
        }

        log() {
            console.log(this.name);
        }
    }
}
type Foo<T extends any[]> = [boolean, ...T, boolean];

type Address = [
    streetNumber: number,
    city: string,
    state: string,
    postal: number
];

function printAddress(...address: Address) {}

type JSONValue = string | number | boolean | null;

interface JSONArray extends Array<JSONValue> {}
