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
const a = (v) => {
    if (typeof v === "number") {
        console.log("Number");
    }
    else {
        console.log("String");
    }
};
a("10");
//# sourceMappingURL=typeguards.js.map