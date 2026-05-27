"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class S {
    login(name, password) {
        if (name && password) {
            return "Student Login";
        }
        else {
            return "Student Not Allowed";
        }
    }
    result(marks) {
        if (marks > 33) {
            return "Pass";
        }
        else {
            return "Fail";
        }
    }
}
class SS extends S {
}
const a = new S();
const b = new SS();
console.log(a.result(24));
console.log(a.login());
console.log(b.login("Umayer", "12345678"));
//# sourceMappingURL=inheritance.js.map