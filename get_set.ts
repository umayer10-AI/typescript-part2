class A {
    public _name: string = "Umayer"

    get name(): string {
        return "MR. "+ this._name
    }

}

const a = new A()
console.log(a.name)