"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function Contact(email, name, phone) {
        if (name === void 0) { name = "no email"; }
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.age = 0;
        this.age = 35;
        if (phone > 0) {
        }
    }
    Object.defineProperty(Contact.prototype, "password", {
        get: function () {
            if (!this.passwordVal) {
                this.passwordVal = Math.round(Math.random() * 1e14).toString(32);
            }
            return this.passwordVal;
        },
        enumerable: false,
        configurable: true
    });
    return Contact;
}());
exports.Contact = Contact;
var AbstractContact = /** @class */ (function () {
    function AbstractContact(name, email) {
        this.name = name;
        this.email = email;
    }
    return AbstractContact;
}());
var ConcreteContact = /** @class */ (function (_super) {
    __extends(ConcreteContact, _super);
    function ConcreteContact(phone, name, email) {
        var _this = _super.call(this, name, email) || this;
        _this.phone = phone;
        return _this;
    }
    ConcreteContact.prototype.sendEmail = function () {
        console.log("sending email");
    };
    return ConcreteContact;
}(AbstractContact));
var val = { value: "sfadf" };
val.value;
var fil = function (x) { return true; };
[""].filter(fil);
//FUNDAMENTALS
var medals = ["gold", "silver", "bronze"];
var first = medals[0], second = medals[1], third = medals[2];
var person = {
    name: "Audrey",
    address: "123 Main Street",
    phone: "555-1212"
};
var name = person.name, address = person.address, phone = person.phone;
//
// const osPrefix: string = "os_";
//
// let support = {
//   [osPrefix + "Windows"]: isSupported("Windows"),
//   [osPrefix + "iOS"]: isSupported("iOS"),
//   [osPrefix + "Android"]: isSupported("Android"),
// };
// function isSupported(os: string) {
//   return Math.random() >= 0.5;
// }
//
// let _a;
// let support1 =
//   ((_a = {}),
//   (_a[osPrefix + "Windows"] = isSupported("Windows")),
//   (_a[osPrefix + "iOS"] = isSupported("iOS")),
//   (_a[osPrefix + "Android"] = isSupported("Android")),
//   _a);
// console.log(support1);
