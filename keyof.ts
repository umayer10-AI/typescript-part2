type P = {
    name: string,
    age: number,
    free: boolean
}
let a: P = {
    name: "Umayer",
    age: 21,
    free: true,
}
console.log(a)

type B = keyof P
let b: B;
b = "name"
b = "age"
b = "free"

let c:keyof typeof a = "name"