
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
