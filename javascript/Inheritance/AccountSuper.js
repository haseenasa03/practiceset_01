class Account {
    constructor(name, email) {
        this.acc_name = name;
        this.acc_email = email;
    }
}
class Savings_Account extends Account 
{
    constructor(id, name, email, amount) 
    {
        super(name, email)

        this.acc_id = id;
        this.acc_amount = amount;
    }
}
let a1 = new Savings_Account(101,"haseena","haseena@gmail.com",12000)
console.log(a1);