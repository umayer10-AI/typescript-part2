interface Type {
    name: string,
    displayName(): void,
    getStudent(v:string): string,
    getArray(): Array<number>,
}

class A implements Type {
    constructor(public name: string){}

    displayName(): void {
        console.log("Lalalalalala")
    }
    getStudent(v: string): string {
        return v
    }
    getArray(): number[] {
        return [1,2,3,4,5,6,7,8,9,10]
    }
}

const a = new A("Umayer")
a.displayName()
console.log(a)
console.log(a.getStudent("Hola"))
console.log(a.getArray())