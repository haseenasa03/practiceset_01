class Account {
    min_bal = 500;
    amount;
    open_acc() {
        console.log("account opened successfully");
    }
    deposit_amount(a) {
        console.log("amount deposit");
        this.amount = a
    }
    get_bal() {
        return this.amount + this.min_bal
    }
}
let a1 = new Account();
a1.open_acc();
a1.deposit_amount(1300);
console.log(a1.get_bal());

let a2 = new Account();
a2.open_acc();
a2.deposit_amount(100);
console.log(a2.get_bal());
