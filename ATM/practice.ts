// 
// IMPORTING MODULES

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

// RAINBOW TITLE

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    })
}


async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Welcome To Typescript Powered ATM")
    rainbowTitle.start();
    await sleep();
    rainbowTitle.stop();

}

await welcome();


//  CREATING ACCOUNTS

interface account {
    "username": string
    "password": number
    "customerName": string
    "customerBalance": number
}

let accounts: account[] = [];

accounts.push(
    {
        username: "Ali",
        password: 1111,
        customerName: "Ali Amir",
        customerBalance: 55000
    })

accounts.push(
    {
        username: "Haris",
        password: 2222,
        customerName: "Haris Ansari",
        customerBalance: 75000
    })


accounts.push(
    {
        username: "Usman",
        password: 3333,
        customerName: "Usman Khan",
        customerBalance: 37000
    })

//  ASKING FOR USERNAME AND PASSWORD


let userNameInput = await inquirer.prompt([

    {
        name: "inputUser",
        type: "string",
        message: "Input User Name :"
    }
])


let userpasswordInput = await inquirer.prompt([
    {
        name: "inputPassword",
        type: "number",
        message: "Input Password :"
    }


]);

// for (i = 0, i < accounts.length; i++)

// FORWARDING TO THE USER ACCOUNT BY TAKING USER ID AND PASSWORD AND ASKING WHICH OPERATION USER WANTS

// CHECKING THE USER'S ID AND PASSWORD


if (
    userNameInput.inputUser == "Ali"   || userNameInput.inputUser == "ali"   && userpasswordInput.inputPassword == 1111 ||

    userNameInput.inputUser == "Haris" || userNameInput.inputUser == "haris" && userpasswordInput.inputPassword == 2222 ||

    userNameInput.inputUser == "Usman" || userNameInput.inputUser == "usman" && userpasswordInput.inputPassword == 3333
) {

    // FOR ALI'S ACCOUNT

    if (userNameInput.inputUser == "Ali" || userNameInput.inputUser == "ali" && userpasswordInput.inputPassword == 1111) {


        console.log(chalk.blue("Welcome Ali Amir"));

        // TAKING OPERATION INPUT

        let userOperation = await inquirer.prompt([
            {
                type: "list",
                name: "Service",
                message: "Which Service Do You Want ? \n",
                choices: ["CASH WITHDRAWAL", "CASH DEPOSIT", "BALANCE CHECK"]
            },

        ])

        if (userOperation.Service == "CASH WITHDRAWAL") {

            // TAKING AMOUNT INPUT

            let service = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter Amount",
                },
            ])
            console.log("--------------------------------------------------------");
            console.log(chalk.bold.green(" You Have Withdrawed $ " + service.amount + " Sucessfully"));
            console.log("--------------------------------------------------------");
            console.log(chalk.bold.green("Your Remaining Balance Is $ " + `${accounts[0].customerBalance - service.amount}`));
            console.log("--------------------------------------------------------");

        }
        else if (userOperation.Service == "CASH DEPOSIT") {

            // TAKING AMOUNT INPUT

            let service = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter Amount",
                },
            ])

            console.log("--------------------------------------------------------");
            console.log(chalk.bold.green(" You Have Deposited $ " + service.amount + " Sucessfully"));
            console.log("--------------------------------------------------------");
            console.log(chalk.bold.green("Your New Balance Is $ " + `${accounts[0].customerBalance + service.amount}`));
            console.log("--------------------------------------------------------");

        }

        else if (userOperation.Service == "BALANCE CHECK") {
            console.log("--------------------------------------------------------");
            console.log(chalk.bold.green("Your Current Balance Is $ " + accounts[0].customerBalance));
            console.log("--------------------------------------------------------");


        }

        else {
            console.log("--------------------------------------------------------");
            console.log(chalk.bgRed("PLEASE CHOOSE A VALID OPERATION"));
            console.log("--------------------------------------------------------");
        }
    }


    // FOR HARIS'S ACCOUNT



    if (userNameInput.inputUser == "Haris" || userNameInput.inputUser == "haris" && userpasswordInput.inputPassword == 2222) {

        console.log(chalk.blue("Welcome Haris Ansari"));

        // TAKING OPERATION INPUT

        let userOperation = await inquirer.prompt([
            {
                type: "list",
                name: "Service",
                message: "Which Service Do You Want ? \n",
                choices: ["CASH WITHDRAWAL", "CASH DEPOSIT", "BALANCE CHECK"]
            },

        ])

        if (userOperation.Service == "CASH WITHDRAWAL") {

            // TAKING AMOUNT INPUT

            let service = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter Amount",
                },
            ])
            console.log("--------------------------------------------------------");
            console.log(chalk.bold.green(" You Have Withdrawed $ " + service.amount + " Sucessfully"));
            console.log("--------------------------------------------------------");
            console.log(chalk.bold.green("Your Remaining Balance Is $ " + `${accounts[1].customerBalance - service.amount}`));
            console.log("--------------------------------------------------------");

        }
        else if (userOperation.Service == "CASH DEPOSIT") {

            // TAKING AMOUNT INPUT

            let service = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter Amount",
                },
            ])

            console.log("--------------------------------------------------------");
            console.log(chalk.bold.green(" You Have Deposited $ " + service.amount + " Sucessfully"));
            console.log("--------------------------------------------------------");
            console.log(chalk.bold.green("Your New Balance Is $ " + `${accounts[1].customerBalance + service.amount}`));
            console.log("--------------------------------------------------------");

        }

        else if (userOperation.Service == "BALANCE CHECK") {
            console.log("--------------------------------------------------------");
            console.log(chalk.bold.green("Your Current Balance Is $ " + accounts[1].customerBalance));
            console.log("--------------------------------------------------------");


        }

        else {
            console.log("--------------------------------------------------------");
            console.log(chalk.bgRed("PLEASE CHOOSE A VALID OPERATION"));
            console.log("--------------------------------------------------------");
        }
    }


    // FOR USMAN'S ACCOUNT 


    if (userNameInput.inputUser == "Usman" || userNameInput.inputUser == "usman" && userpasswordInput.inputPassword == 3333) {

        console.log(chalk.blue("Welcome Usman Khan"));

        // TAKING OPERATION INPUT

        let userOperation = await inquirer.prompt([
            {
                type: "list",
                name: "Service",
                message: "Which Service Do You Want ? \n",
                choices: ["CASH WITHDRAWAL", "CASH DEPOSIT", "BALANCE CHECK"]
            },

        ])

        if (userOperation.Service == "CASH WITHDRAWAL") {

            // TAKING AMOUNT INPUT

            let service = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter Amount",
                },
            ])
            console.log("--------------------------------------------------------");
            console.log(chalk.bold.green(" You Have Withdrawed $ " + service.amount + " Sucessfully"));
            console.log("--------------------------------------------------------");
            console.log(chalk.bold.green("Your Remaining Balance Is $" + `${accounts[2].customerBalance - service.amount}`));
            console.log("--------------------------------------------------------");

        }
        else if (userOperation.Service == "CASH DEPOSIT") {

            // TAKING AMOUNT INPUT

            let service = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter Amount",
                },
            ])

            console.log("--------------------------------------------------------");
            console.log(chalk.bold.green(" You Have Deposited $ " + service.amount + " Sucessfully"));
            console.log("--------------------------------------------------------");
            console.log(chalk.bold.green("Your New Balance Is $ " + `${accounts[2].customerBalance + service.amount}`));
            console.log("--------------------------------------------------------");

        }

        else if (userOperation.Service == "BALANCE CHECK") {
            console.log("--------------------------------------------------------");
            console.log(chalk.bold.green("Your Current Balance Is $ " + accounts[2].customerBalance));
            console.log("--------------------------------------------------------");


        }

        else {
            console.log("--------------------------------------------------------");
            console.log(chalk.bgRed("PLEASE CHOOSE A VALID OPERATION"));
            console.log("--------------------------------------------------------");
        }
    };

} else {
    console.log(chalk.red("Please Enter Valid Details"));

}
