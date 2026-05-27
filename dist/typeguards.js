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
const sound = (animal) => {
    if ("bark" in animal) {
        animal.bark();
    }
    else {
        animal.meow();
    }
};
//# sourceMappingURL=typeguards.js.map