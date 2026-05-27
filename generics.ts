// const a = <T>(name: T): T => {
//     return name
// }
// console.log(a("Hello"))
// console.log(a<number>(100))
// console.log(a(true))

const a = <T>(v: T): T => {
    return v
}
const b = a([1,2,3,4,5])
console.log(b)