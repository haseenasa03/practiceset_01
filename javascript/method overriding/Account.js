class Account {
    get_Account() {
        console.log("savings account details");
    }

}
class Savings_Account extends Account {
    get_Account() 
    {
        
        console.log("savings account details");
    }
}
let a1 = new Savings_Account();
a1.get_Account();
//console.log(a1);