"use strict";
// class P {
//     public isCart = false
//     constructor(public name: string, public price:number, public id: number){}
Object.defineProperty(exports, "__esModule", { value: true });
//     getData() {
//         this.isCart = true
//     }
//     buyData() {
//         if(this.isCart){
//             return `${this.name} takar malik holo ${this.price}`
//         }
//         else{
//             return "Process not available"
//         }
//     }
// }
// const a = new P("umayer", 10000, 10)
// // a.name = "Ahmad"
// a.getData()
// console.log(a.buyData())
// class P {
//     public isCart = false
//     constructor(public name: string, private price:number, public id: number){}
//     getData() {
//         return this.price
//     }
//     buyData() {
//         return this.getData()
//     }
// }
// const a = new P("umayer", 10000, 10)
// // a.name = "Ahmad"
// // console.log(a.getData())
// console.log(a.buyData())
class P {
    name;
    price;
    id;
    isCart = false;
    constructor(name, price, id) {
        this.name = name;
        this.price = price;
        this.id = id;
    }
    getData() {
        return this.id;
    }
    buyData() {
        return this.getData();
    }
}
class A extends P {
    getUser() {
        console.log(this.id, "hello");
    }
}
const a = new P("umayer", 10000, 10);
const b = new A("umayer", 10000, 10);
// a.id = 1
b.getUser();
console.log(a.buyData());
//# sourceMappingURL=c1.js.map