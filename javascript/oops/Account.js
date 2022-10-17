class Account
{
    min_bal=1000;
    open_Account()
    {
        console.log("Acount open successfully");

    }
    deposit_acc()
    {
        console.log("amount has to deposit");

    }
    get_statement()
    {
        console.log("we need to take bank statement");
    }
    get_bal()
    {
        console.log("minimum bal is 1000");

    }
    withdraw_amount()
    {
        console.log("no bal");

    }
    close_account()
    {
        console.log("close account successfully");

    }
}
let a1=new Account()
console.log(a1.min_bal);
a1.open_Account();
a1.deposit_acc();
a1.get_statement();
a1.get_bal();
a1.withdraw_amount();
a1.close_account();

