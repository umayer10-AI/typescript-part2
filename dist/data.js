"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class A {
    name;
    constructor(name) {
        this.name = name;
    }
    displayName() {
        console.log("Lalalalalala");
    }
    getStudent(v) {
        return v;
    }
    getArray() {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
}
const a = new A("Umayer");
a.displayName();
console.log(a);
console.log(a.getStudent("Hola"));
console.log(a.getArray());
//# sourceMappingURL=data.js.map