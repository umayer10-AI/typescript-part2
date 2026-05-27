interface Type {
    name: string,
    displayName(): void,
    getStudent(v:string): string,
}

class A implements Type {
    constructor(public name: string){}

    displayName(): void {
        console.log("Lalalalalala")
    }
    getStudent(v: string): string {
        return v
    }
}

const a = new A("Umayer")
a.displayName()
console.log(a)
console.log(a.getStudent("Hola"))