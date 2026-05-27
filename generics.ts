const a = <T>(name: T): T => {
    return name
}
console.log(a("Hello"))
console.log(a<number>(100))
console.log(a(true))