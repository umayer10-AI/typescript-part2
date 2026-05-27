class P {
    public isCart = false
    constructor(public name: string, public price:number, public id: number){}

    getData() {
        this.isCart = true
    }

    buyData() {
        if(this.isCart){
            return `${this.name} takar malik holo ${this.price}`
        }
        else{
            return "Process not available"
        }
    }
}
const a = new P("umayer", 10000, 10)
// a.name = "Ahmad"
a.getData()
console.log(a.buyData())