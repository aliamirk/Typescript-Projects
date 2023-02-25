"use strict";
// declaring basic functions of atm
class _BankAccount {
    get accountBalance() {
        return this._accountBalance;
    }
    set accountBalance(val) {
        this._accountBalance = val;
    }
    constructor() {
        this._accountBalance = 100;
    }
    Debit(amount) {
        let statement;
        if (amount > 0) {
            if (this._accountBalance > amount) {
                this.accountBalance = this._accountBalance - amount;
                statement = "Transaction Successfull New Account Balance Is " + this._accountBalance;
            }
            else {
                statement = "Sorry You Have Insufficient Balance";
            }
        }
        else {
            statement = "The Amount You Entered Is Wrong";
        }
        return statement;
    }
    Credit(amount) {
        let statement;
        if (amount > 0) {
            this._accountBalance = this._accountBalance + amount;
            statement = "Your Account Is  Credited Successfully New Balance Is " + (this._accountBalance);
        }
        else {
            statement = "The Amount Entered Is Incorrect";
        }
        return statement;
    }
}
// declaring customer properties
class customer {
    // using accessors to set properties
    get firstName() {
        return this._firstName;
    }
    set firstName(val) {
        this._firstName = val;
    }
    get lastname() {
        return this._lastName;
    }
    set lastname(val) {
        this._lastName = val;
    }
    get gender() {
        return this._gender;
    }
    set gender(val) {
        this._gender = val;
    }
    get Age() {
        return this._age;
    }
    set Age(val) {
        this._age = val;
    }
    get mobileNum() {
        return this._mobileNumber;
    }
    set mobileNum(val) {
        this._mobileNumber = val;
    }
    get BAnkAccount() {
        return this._bankaccount;
    }
    set BAnkAccount(val) {
        this._bankaccount = val;
    }
    customerInfo() {
        return `
        Name: ${this._firstName} ${this._lastName}
        Gender: ${this._gender}
        Age: ${this._age}
        mobile Number: ${this._mobileNumber}
        Account Balance: $ ${this._bankaccount.accountBalance}       
        `;
    }
}
// testing code by making customer objects
const c1 = new customer();
c1.firstName = "Ali";
c1.lastname = "Amir";
c1.Age = 17;
c1.mobileNum = 223230020;
c1.gender = "Male";
const accountofc1 = new _BankAccount();
c1.BAnkAccount = accountofc1;
console.log(c1.customerInfo());
console.log(c1.BAnkAccount.Credit(190));
console.log(c1.BAnkAccount.Debit(120));
console.log(c1.BAnkAccount.Debit(1200));
console.log(c1.BAnkAccount.accountBalance);
