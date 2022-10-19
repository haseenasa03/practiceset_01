class Parent {
    constructor() {
         console.log("parent class");
         } 
    }


class Child extends Parent {
    constructor() {
        super();
        console.log("child class");

    }
    
}
let a1 = new Child()
console.log(a1);
a1.print();
