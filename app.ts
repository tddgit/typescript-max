import { HasEmail, HasPhoneNumber } from "./Examples/advanced_types";

interface CommunicationMethods {
  email: HasEmail;
  phone: HasPhoneNumber;
  fax: { fax: number };
}

function contact<K extends keyof CommunicationMethods>(
  method: K,
  contact: CommunicationMethods[K]
) {
  //
}

contact("email", { name: "foo", email: "mike@else.ru" });

type AllCommKeys = keyof CommunicationMethods;
type AllCommValues = CommunicationMethods[keyof CommunicationMethods];

const alreadyResolvedNum = Promise.resolve(4);
type ResolveType = typeof Promise.resolve;

type MayHaveEmail = Partial<HasEmail>;
const me: MayHaveEmail = {};

type PickA = Pick<{ a: 1; b: 2 }, "a">;

type OnlyStrings = Extract<"a" | "b" | 1 | 2, number>;

function foo() {}
interface bar {}
namespace baz {
  export const biz = "hello";
}

const x = foo;

const y: bar = {};

let z: bar;

baz;

export { foo, bar, baz };

const xx = 4;
const yy: typeof xx = 4;

interface Address {
  street: string;
}

// const z = Address;

class Contact {
  name: string,
  static hello = 'world'
}

Contact.hello;

const contactClass = Contact;
const contactInstance: Contact = new Contact();


class Album {
  label: Album.AlbumLabel = new Album.AlbumLabel()
}

namespace Album {
  export class AlbumLabel {}
}

interface Album {
  artist: string;
}

let al: Album;

export  { Album }
