class A {
    public _name: string = "Umayer"
    public _email: string = "Umayer@gmail"

    get name(): string {
        return "MR. "+ this._name
    }
    set email(v: string) {
        this._email= this._email+v
    }

    get lol() {
        return "Hello"
    }
    set nameUser(v: string){
        this._name = this._name+" "+v
    }

}

const a = new A()
console.log(a.name)
a.email = ".com"
console.log(a._email)
a.nameUser = "Ahmad"
console.log(a._name)