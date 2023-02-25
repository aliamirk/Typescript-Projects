"use strict";
// IMPORTING MODULES
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const chalk_animation_1 = __importDefault(require("chalk-animation"));
// RAINBOW TITLE
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
function welcome() {
    return __awaiter(this, void 0, void 0, function* () {
        let rainbowTitle = chalk_animation_1.default.rainbow("Welcome To Typescript Powered ATM");
        rainbowTitle.start();
        yield sleep();
        rainbowTitle.stop();
    });
}
await welcome();
let accounts = [];
accounts.push({
    username: "Ali",
    password: 1111,
    customerName: "Ali Amir",
    customerBalance: 55000
});
accounts.push({
    username: "Haris",
    password: 2222,
    customerName: "Haris Ansari",
    customerBalance: 75000
});
accounts.push({
    username: "Usman",
    password: 3333,
    customerName: "Usman Khan",
    customerBalance: 37000
});
//  ASKING FOR USERNAME AND PASSWORD
let userNameInput = await inquirer_1.default.prompt([
    {
        name: "inputUser",
        type: "string",
        message: "Input User Name :"
    }
]);
let userpasswordInput = await inquirer_1.default.prompt([
    {
        name: "inputPassword",
        type: "number",
        message: "Input Password :"
    }
]);
// for (i = 0, i < accounts.length; i++)
// FORWARDING TO THE USER ACCOUNT BY TAKING USER ID AND PASSWORD AND ASKING WHICH OPERATION USER WANTS
// CHECKING THE USER'S ID AND PASSWORD
if (userNameInput.inputUser == "Ali" || userNameInput.inputUser == "ali" && userpasswordInput.inputPassword == 1111 ||
    userNameInput.inputUser == "Haris" || userNameInput.inputUser == "haris" && userpasswordInput.inputPassword == 2222 ||
    userNameInput.inputUser == "Usman" || userNameInput.inputUser == "usman" && userpasswordInput.inputPassword == 3333) {
    // FOR ALI'S ACCOUNT
    if (userNameInput.inputUser == "Ali" || userNameInput.inputUser == "ali" && userpasswordInput.inputPassword == 1111) {
        console.log(chalk_1.default.blue("Welcome Ali Amir"));
        // TAKING OPERATION INPUT
        let userOperation = await inquirer_1.default.prompt([
            {
                type: "list",
                name: "Service",
                message: "Which Service Do You Want ? \n",
                choices: ["CASH WITHDRAWAL", "CASH DEPOSIT", "BALANCE CHECK"]
            },
        ]);
        if (userOperation.Service == "CASH WITHDRAWAL") {
            // TAKING AMOUNT INPUT
            let service = await inquirer_1.default.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter Amount",
                },
            ]);
            console.log("--------------------------------------------------------");
            console.log(chalk_1.default.bold.green(" You Have Withdrawed $ " + service.amount + " Sucessfully"));
            console.log("--------------------------------------------------------");
            console.log(chalk_1.default.bold.green("Your Remaining Balance Is $ " + `${accounts[0].customerBalance - service.amount}`));
            console.log("--------------------------------------------------------");
        }
        else if (userOperation.Service == "CASH DEPOSIT") {
            // TAKING AMOUNT INPUT
            let service = await inquirer_1.default.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter Amount",
                },
            ]);
            console.log("--------------------------------------------------------");
            console.log(chalk_1.default.bold.green(" You Have Deposited $ " + service.amount + " Sucessfully"));
            console.log("--------------------------------------------------------");
            console.log(chalk_1.default.bold.green("Your New Balance Is $ " + `${accounts[0].customerBalance + service.amount}`));
            console.log("--------------------------------------------------------");
        }
        else if (userOperation.Service == "BALANCE CHECK") {
            console.log("--------------------------------------------------------");
            console.log(chalk_1.default.bold.green("Your Current Balance Is $ " + accounts[0].customerBalance));
            console.log("--------------------------------------------------------");
        }
        else {
            console.log("--------------------------------------------------------");
            console.log(chalk_1.default.bgRed("PLEASE CHOOSE A VALID OPERATION"));
            console.log("--------------------------------------------------------");
        }
    }
    // FOR HARIS'S ACCOUNT
    if (userNameInput.inputUser == "Haris" || userNameInput.inputUser == "haris" && userpasswordInput.inputPassword == 2222) {
        console.log(chalk_1.default.blue("Welcome Haris Ansari"));
        // TAKING OPERATION INPUT
        let userOperation = await inquirer_1.default.prompt([
            {
                type: "list",
                name: "Service",
                message: "Which Service Do You Want ? \n",
                choices: ["CASH WITHDRAWAL", "CASH DEPOSIT", "BALANCE CHECK"]
            },
        ]);
        if (userOperation.Service == "CASH WITHDRAWAL") {
            // TAKING AMOUNT INPUT
            let service = await inquirer_1.default.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter Amount",
                },
            ]);
            console.log("--------------------------------------------------------");
            console.log(chalk_1.default.bold.green(" You Have Withdrawed $ " + service.amount + " Sucessfully"));
            console.log("--------------------------------------------------------");
            console.log(chalk_1.default.bold.green("Your Remaining Balance Is $ " + `${accounts[1].customerBalance - service.amount}`));
            console.log("--------------------------------------------------------");
        }
        else if (userOperation.Service == "CASH DEPOSIT") {
            // TAKING AMOUNT INPUT
            let service = await inquirer_1.default.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter Amount",
                },
            ]);
            console.log("--------------------------------------------------------");
            console.log(chalk_1.default.bold.green(" You Have Deposited $ " + service.amount + " Sucessfully"));
            console.log("--------------------------------------------------------");
            console.log(chalk_1.default.bold.green("Your New Balance Is $ " + `${accounts[1].customerBalance + service.amount}`));
            console.log("--------------------------------------------------------");
        }
        else if (userOperation.Service == "BALANCE CHECK") {
            console.log("--------------------------------------------------------");
            console.log(chalk_1.default.bold.green("Your Current Balance Is $ " + accounts[1].customerBalance));
            console.log("--------------------------------------------------------");
        }
        else {
            console.log("--------------------------------------------------------");
            console.log(chalk_1.default.bgRed("PLEASE CHOOSE A VALID OPERATION"));
            console.log("--------------------------------------------------------");
        }
    }
    // FOR USMAN'S ACCOUNT 
    if (userNameInput.inputUser == "Usman" || userNameInput.inputUser == "usman" && userpasswordInput.inputPassword == 3333) {
        console.log(chalk_1.default.blue("Welcome Usman Khan"));
        // TAKING OPERATION INPUT
        let userOperation = await inquirer_1.default.prompt([
            {
                type: "list",
                name: "Service",
                message: "Which Service Do You Want ? \n",
                choices: ["CASH WITHDRAWAL", "CASH DEPOSIT", "BALANCE CHECK"]
            },
        ]);
        if (userOperation.Service == "CASH WITHDRAWAL") {
            // TAKING AMOUNT INPUT
            let service = await inquirer_1.default.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter Amount",
                },
            ]);
            console.log("--------------------------------------------------------");
            console.log(chalk_1.default.bold.green(" You Have Withdrawed $ " + service.amount + " Sucessfully"));
            console.log("--------------------------------------------------------");
            console.log(chalk_1.default.bold.green("Your Remaining Balance Is $" + `${accounts[2].customerBalance - service.amount}`));
            console.log("--------------------------------------------------------");
        }
        else if (userOperation.Service == "CASH DEPOSIT") {
            // TAKING AMOUNT INPUT
            let service = await inquirer_1.default.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter Amount",
                },
            ]);
            console.log("--------------------------------------------------------");
            console.log(chalk_1.default.bold.green(" You Have Deposited $ " + service.amount + " Sucessfully"));
            console.log("--------------------------------------------------------");
            console.log(chalk_1.default.bold.green("Your New Balance Is $ " + `${accounts[2].customerBalance + service.amount}`));
            console.log("--------------------------------------------------------");
        }
        else if (userOperation.Service == "BALANCE CHECK") {
            console.log("--------------------------------------------------------");
            console.log(chalk_1.default.bold.green("Your Current Balance Is $ " + accounts[2].customerBalance));
            console.log("--------------------------------------------------------");
        }
        else {
            console.log("--------------------------------------------------------");
            console.log(chalk_1.default.bgRed("PLEASE CHOOSE A VALID OPERATION"));
            console.log("--------------------------------------------------------");
        }
    }
    ;
}
else {
    console.log(chalk_1.default.red("Please Enter Valid Details"));
}
