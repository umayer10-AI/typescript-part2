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
let d1 = {
    name: "Umayer",
    city: "Fatullah"
};
let d2 = {
    id: 100,
    email: "umayer@yahoo.com"
};
const c = (v) => {
    if (v.name !== undefined) {
        console.log("name -> city");
    }
    else {
        console.log("id -> email");
    }
};
c(d1);
//# sourceMappingURL=typeguards.js.map