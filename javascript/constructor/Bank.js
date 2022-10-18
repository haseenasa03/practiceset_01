class Bank {
    constructor(id, name, amount) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }
    get_bal() {
        return this.amount
    }
}
let a1 = new Bank(101, "haseena", 20000)
console.log(a1);
console.log(a1.get_bal());

let a2 = new Bank(102, "azaan", 30000)
console.log(a2);
console.log(a2.get_bal());