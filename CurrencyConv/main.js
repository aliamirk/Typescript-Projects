"use strict";
// IMPORTING DEPENDENCIES
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
// RAINBIOW ANIMATION WELCOME TAG
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
function welcome() {
    return __awaiter(this, void 0, void 0, function* () {
        let rainbowTitle = chalk_animation_1.default.rainbow("Currency--Converter By @aliamir");
        rainbowTitle.start();
        yield sleep();
        rainbowTitle.stop();
    });
}
await welcome();
let default_PKR = {
    Currency: "PKR",
    Currency_Name: "Pakistani Rupee",
};
let currencies = [];
currencies.push({
    Currency: "USD",
    Currency_Name: "US DOLLAR",
    Conversion_Rate: 226.18,
});
currencies.push({
    Currency: "SAR",
    Currency_Name: "Saudi Riyal",
    Conversion_Rate: 60.14,
});
currencies.push({
    Currency: "INR",
    Currency_Name: "Indian Rupee",
    Conversion_Rate: 2.73,
});
// ASKING THE USER FOR CHOOSING CURRENCY
function Conversion_Operations() {
    return __awaiter(this, void 0, void 0, function* () {
        let UserCurrency = yield inquirer_1.default.prompt([
            {
                type: "list",
                name: "Currency",
                message: "Select Currency To Convert From PKR To ? \n",
                choices: ["USD (US-DOLLAR)", "SAR (SAUDI RIYAL)", "INR (INDIAN RUPEE)"],
            },
        ]);
        // ASKING THE USER FOR AMOUNT TO EXCHANGE
        let UserAmount = yield inquirer_1.default.prompt([
            {
                name: "Amount",
                type: "number",
                message: "Enter Amount :",
            },
        ]);
        // PERFORMING CONVERSON OPERATIONS
        if (UserAmount.Amount <= 0 || UserAmount.Amount == 0) {
            console.log("Amount Cannot Be Less Than Or Equal To Zero ('0')");
        }
        else {
            // FOR US DOLLAR
            if (UserCurrency.Currency == "USD (US-DOLLAR)") {
                console.log("-----------------------------------------------------------------------------------");
                console.log(`USD CONVERSION RATE IS ` + currencies[0].Conversion_Rate);
                console.log("-----------------------------------------------------------------------------------");
                console.log("US-DOLLAR 'USD' TO PKR IS " +
                    UserAmount.Amount / currencies[0].Conversion_Rate);
                console.log("-----------------------------------------------------------------------------------");
            }
            // FOR SAUDI RIYAL
            else if (UserCurrency.Currency == "SAR (SAUDI RIYAL)") {
                console.log("-----------------------------------------------------------------------------------");
                console.log(`SAR CONVERSION RATE IS ` + currencies[1].Conversion_Rate);
                console.log("-----------------------------------------------------------------------------------");
                console.log("SAUDI RIYAL 'SAR' TO PKR IS " +
                    UserAmount.Amount / currencies[1].Conversion_Rate);
                console.log("-----------------------------------------------------------------------------------");
                //  FOR INDIAN RUPEE INR
            }
            else {
                console.log("-----------------------------------------------------------------------------------");
                console.log(`INR CONVERSION RATE IS ` + currencies[2].Conversion_Rate);
                console.log("-----------------------------------------------------------------------------------");
                console.log("INDIAN RUPEE 'INR' TO PKR IS " +
                    UserAmount.Amount / currencies[2].Conversion_Rate);
                console.log("-----------------------------------------------------------------------------------");
            }
        }
    });
}
// ASKING TO RESTART THE CURRENCY CONVERTER
function startAgain() {
    return __awaiter(this, void 0, void 0, function* () {
        do {
            yield Conversion_Operations();
            var again = yield inquirer_1.default.prompt({
                type: "input",
                name: "restart",
                message: chalk_1.default.blue("Do You Want To Continue? Press Y or N :"),
            });
        } while (again.restart == "y" ||
            again.restart == "yes" ||
            again.restart == "Yes" ||
            again.restart == "Y");
    });
}
;
await Conversion_Operations();
startAgain();
