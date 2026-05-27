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


// const a = (v: string | number) => {
//     if(typeof v === "number"){
//         console.log("Number")
//     }
//     else{
//         console.log("String")
//     }
// }
// a("10")


// class A {

// }
// const a = new A()

// class B {

// }
// const b = new B()

// const c = (v: A | B) => {
//     if(v instanceof A){
//         console.log("Order")
//     }
//     else{
//         console.log("Product")
//     }
// }
// c(b)

interface A {
    name: string,
    city: string
}
interface B {
    id: number,
    email: string
}

let d1: A | B = {
    name: "Umayer",
    city: "Fatullah"
}
let d2: A | B = {
    id: 100,
    email: "umayer@yahoo.com"
}

const c = (v: A | B) => {
    if((v as A).name !== undefined){
        console.log("name -> city")
    }
    else{
        console.log("id -> email")
    }
}
c(d1)