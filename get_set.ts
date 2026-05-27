class A {
    public _name: string = "Umayer"
    public _email: string = "Umayer@gmail"

    get name(): string {
        return "MR. "+ this._name
    }
    get email() : string {
        return "MR. "+this._email
    }

}

const a = new A()
console.log(a.name)
console.log(a.email)