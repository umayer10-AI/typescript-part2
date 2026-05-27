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


const a = (v: string | number) => {
    if(typeof v === "number"){
        console.log("Number")
    }
    else{
        console.log("String")
    }
}
a("10")