class Account
{
    min_bal=500;
    get_Account_Details()
    {
        console.log("Displaying account");
    }

}
class Savings_Account extends Account
{
  deposit_Amount(amount)
  {
    console.log(this.min_bal+amount);
  }
  }
let a1= new Savings_Account();
a1.get_Account_Details();
console.log(a1);
a1.deposit_Amount(1000);
console.log(a1);

class Current_Account extends Account{
    min_bal=1400;
    deposit_Amount(amount)
  {
    console.log(this.min_bal+amount);
  }
}
let a2=new Current_Account();
a2.get_Account_Details();
a2.deposit_Amount(2000)
console.log(a2);
