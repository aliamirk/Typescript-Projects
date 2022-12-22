// IMPORTING DEPENDENCIES

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { userInfo } from "os";

// RAINBIOW ANIMATION WELCOME TAG

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function welcome() {
  let rainbowTitle = chalkAnimation.rainbow("Currency--Converter By @aliamir");
  rainbowTitle.start();
  await sleep();
  rainbowTitle.stop();
}

await welcome();

// TAKING PKR AS THE DEFUALT CURRENCY

interface mainCurrency {
  Currency: string;
  Currency_Name: string;
}

let default_PKR: mainCurrency = {
  Currency: "PKR",
  Currency_Name: "Pakistani Rupee",
};

// CREATING AN ARRAY OF AVAILABLE CURRENCIES

interface currency {
  Currency: string;
  Currency_Name: string;
  Conversion_Rate: number;
}

let currencies: currency[] = [];

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

async function Conversion_Operations() {
  let UserCurrency = await inquirer.prompt([
    {
      type: "list",
      name: "Currency",
      message: "Select Currency To Convert From PKR To ? \n",
      choices: ["USD (US-DOLLAR)", "SAR (SAUDI RIYAL)", "INR (INDIAN RUPEE)"],
    },
  ]);

  // ASKING THE USER FOR AMOUNT TO EXCHANGE

  let UserAmount = await inquirer.prompt([
    {
      name: "Amount",
      type: "number",
      message: "Enter Amount :",
    },
  ]);

  // PERFORMING CONVERSON OPERATIONS

  if (UserAmount.Amount <= 0 || UserAmount.Amount == 0) {
    console.log("Amount Cannot Be Less Than Or Equal To Zero ('0')");
  } else {
    // FOR US DOLLAR

    if (UserCurrency.Currency == "USD (US-DOLLAR)") {
      console.log(
        "-----------------------------------------------------------------------------------"
      );
      console.log(`USD CONVERSION RATE IS ` + currencies[0].Conversion_Rate);
      console.log(
        "-----------------------------------------------------------------------------------"
      );
      console.log(
        "US-DOLLAR 'USD' TO PKR IS " +
          UserAmount.Amount / currencies[0].Conversion_Rate
      );
      console.log(
        "-----------------------------------------------------------------------------------"
      );
    }

    // FOR SAUDI RIYAL
    else if (UserCurrency.Currency == "SAR (SAUDI RIYAL)") {
      console.log(
        "-----------------------------------------------------------------------------------"
      );
      console.log(`SAR CONVERSION RATE IS ` + currencies[1].Conversion_Rate);
      console.log(
        "-----------------------------------------------------------------------------------"
      );
      console.log(
        "SAUDI RIYAL 'SAR' TO PKR IS " +
          UserAmount.Amount / currencies[1].Conversion_Rate
      );
      console.log(
        "-----------------------------------------------------------------------------------"
      );

      //  FOR INDIAN RUPEE INR
    } else {
      console.log(
        "-----------------------------------------------------------------------------------"
      );
      console.log(`INR CONVERSION RATE IS ` + currencies[2].Conversion_Rate);
      console.log(
        "-----------------------------------------------------------------------------------"
      );
      console.log(
        "INDIAN RUPEE 'INR' TO PKR IS " +
          UserAmount.Amount / currencies[2].Conversion_Rate
      );
      console.log(
        "-----------------------------------------------------------------------------------"
      );
    }
  }
}


// ASKING TO RESTART THE CURRENCY CONVERTER

async function startAgain() {

  do {
    
   await Conversion_Operations();
    
    var again = await inquirer.prompt({

      type: "input",
      name: "restart",
      message: chalk.blue("Do You Want To Continue? Press Y or N :"),
    });
  
} while (
    again.restart == "y"   ||
    again.restart == "yes" ||
    again.restart == "Yes" ||
    again.restart == "Y"

    );
};

await Conversion_Operations();
startAgain();
