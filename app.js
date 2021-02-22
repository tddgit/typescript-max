"use strict";
exports.__esModule = true;
exports.Contact = void 0;
var x = "hello world";
x = "hello mars";
// x = 42; ERROR
var y = "hello world";
function foo(arg) { }
foo("hello mars");
var hellomars = "hello mars";
foo(hellomars);
var yObj = {
    foo: "hello"
};
var z;
z = 41;
z = "abc";
var aa = [];
aa.push(33);
// aa.push("abc");
var aaa = [6];
var bb = [
    123,
    "Fake Street",
    "Nowhere US",
    10110,
];
// bb = [1, 2, 3];
bb.push();
var cc;
cc = {
    streetName: "Fake Street",
    houseNumber: 123
};
// cc = {
//     houseNumber: 1
// }
var dd;
dd = {
    houseNumber: 123
};
var contactInfo = Math.random() > 0.5
    ? {
        name: "Mike",
        phone: 22558456
    }
    : {
        name: "Mike",
        email: "mike@example.com"
    };
contactInfo.name;
var otherContactInfo = {
    name: "Mike",
    email: "mike@example.com",
    phone: 55555555
};
otherContactInfo.name;
otherContactInfo.phone;
otherContactInfo.email;
function validateInputField(input) { }
function sendEmail(to) {
    return {
        recipient: to.name + "<" + to.email,
        body: "Youre prequalified for the loan!"
    };
}
var sendTextMessage = function (to) {
    return {
        recipient: to.name + "<" + to.phone,
        body: "Youre prequalified for the loan!"
    };
};
function getNameParts(contact) {
    var parts = contact.name.split(/\s/g);
    if (parts.length === 1) {
        return { name: parts[0] };
    }
    if (parts.length) {
        throw new Error("Can't caluculate name parts from name");
    }
    return {
        first: parts[0],
        middle: parts.length === 2
            ? undefined
            : parts.slice(1, parts.length - 2).join(""),
        last: parts[parts.length - 1]
    };
}
function contactPeople(method) {
    var people = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        people[_i - 1] = arguments[_i];
    }
    if (method === "email") {
        people.forEach(sendEmail);
    }
    else {
        people.forEach(sendTextMessage);
    }
}
contactPeople("email", { name: "foo", email: "" });
contactPeople("phone", { name: "foo", phone: 1225444 });
// contactPeople("email", { name: "foo", phone: 1225444 });
function sendMessage(prefferedMethod) {
    if (prefferedMethod === "email") {
        console.log("sendEmail");
        sendEmail(this);
    }
    else {
        console.log("sendTextMessage");
        sendTextMessage(this);
    }
}
var c = { name: "Mike", phone: 3388899, email: "mike@example.com" };
function invokeSoon(cb, timeout) {
    setTimeout(function () { return cb.call(null); }, timeout);
}
// invokeSoon(() => sendMessage("email"), 500);
var bound = sendMessage.bind(c, "email");
invokeSoon(function () { return bound(); }, 500);
invokeSoon(function () { return sendMessage.apply(c, ["phone"]); }, 500);
var xx = "adffd";
var emailer = function (_contact, _message) {
    //
};
// const d: PhoneNumberDict = {};
// if (typeof d.abc === "object") {
//   d.abc;
// }
var phoneDict = {
    office: { areaCode: 321, num: 5551212 },
    home: { areaCode: 321, num: 555442 }
};
phoneDict.home;
phoneDict.office;
phoneDict.mobile;
var Contact = /** @class */ (function () {
    function Contact(email, name) {
        if (name === void 0) { name = "no email"; }
        this.email = email;
        this.name = name;
    }
    return Contact;
}());
exports.Contact = Contact;
