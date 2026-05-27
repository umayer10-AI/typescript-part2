"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class A {
    static name = "Hello";
    static getName() {
        // return "Umayer"
        return this.name;
    }
}
const a = new A();
// console.log(a.name)
console.log(A.name);
console.log(A.getName());
//# sourceMappingURL=static.js.map