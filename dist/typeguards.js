"use strict";
// let t:string | number | boolean = "Umayer"
// // t = true
// if(typeof t==="boolean"){
//     console.log("Boolean")
// }
// else if(typeof t==="string"){
//     console.log("String")
// }
// else{
//     console.log("Number")
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const a = (v: string | number) => {
//     if(typeof v === "number"){
//         console.log("Number")
//     }
//     else{
//         console.log("String")
//     }
// }
// a("10")
class A {
}
const a = new A();
class B {
}
const b = new B();
const c = (v) => {
    if (v instanceof A) {
        console.log("Order");
    }
    else {
        console.log("Product");
    }
};
c(b);
//# sourceMappingURL=typeguards.js.map