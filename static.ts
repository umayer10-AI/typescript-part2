class A {
    static name: string = "Hello"

    static getName() {
        // return "Umayer"
        return this.name
    }
}
const a = new A()
// console.log(a.name)
console.log(A.name)
console.log(A.getName())