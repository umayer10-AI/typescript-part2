"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class A {
    _name = "Umayer";
    _email = "Umayer@gmail";
    get name() {
        return "MR. " + this._name;
    }
    get email() {
        return "MR. " + this._email;
    }
}
const a = new A();
console.log(a.name);
console.log(a.email);
//# sourceMappingURL=get_set.js.map