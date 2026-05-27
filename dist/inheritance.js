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
const a = new S();
console.log(a.result(24));
console.log(a.login());
//# sourceMappingURL=inheritance.js.map