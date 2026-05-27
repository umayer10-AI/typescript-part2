"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inheritance_1 = __importDefault(require("./inheritance"));
let a = {
    name: "Umayer",
    age: 21,
    email: "umayer@gmail.com",
    password: "12345678"
};
console.log(a);
class A extends inheritance_1.default {
}
const b = new A();
console.log(b.result(30));
//# sourceMappingURL=module.js.map