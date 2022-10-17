class Draft {
    min_Bal = 500;
    open_Account() {
        console.log("Account Opened Successfully")
    }
    deposit_Amount() {
        console.log("Deposit Sucessfully")
    }
    get_St() {
        console.log("Printer is not working")
    }
    get_Bal() { console.log("Server is busy !") }
    withdrawl_Amount() {
        console.log("Insufficient Balace")
    }
    close_Account() {
        console.log("Close Immidiately")
    }
}
let a1 = new Draft();
console.log(a1)
console.log(a1.min_Bal)
a1.open_Account()
a1.deposit_Amount()
a1.get_St()
a1.get_Bal()
a1.withdrawl_Amount()
a1.close_Account()