"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class A {
    _name = "Umayer";
    _email = "Umayer@gmail";
    get name() {
        return "MR. " + this._name;
    }
    set email(v) {
        this._email = this._email + v;
    }
    get lol() {
        return "Hello";
    }
    set nameUser(v) {
        this._name = this._name + " " + v;
    }
}
const a = new A();
console.log(a.name);
a.email = ".com";
console.log(a._email);
a.nameUser = "Ahmad";
console.log(a._name);
//# sourceMappingURL=get_set.js.map