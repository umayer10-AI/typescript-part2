import S from './inheritance'
import User from './type/type'

let a : User = {
    name: "Umayer",
    age: 21,
    email: "umayer@gmail.com",
    password: "12345678"
}
console.log(a)


class A extends S {

}
const b = new A()
console.log(b.result(30))