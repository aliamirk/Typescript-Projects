#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Welcome To My Calculator");
    rainbowTitle.start();
    await sleep();
    rainbowTitle.stop();
}
await welcome();
async function askQuestion() {
    const answers = await inquirer
        .prompt([
        // Questions Are Passed Here
        {
            type: "list",
            name: "operator",
            message: "Which operation do you want to perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter Number 1 :",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Number 2 :",
        }
    ]);
    // For Feedback
    // console.log(answers);
    if (answers.operator == "Addition") {
        console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
    }
    else if (answers.operator == "Subtraction") {
        console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
    }
    else if (answers.operator == "Multiplication") {
        console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
    }
    else if (answers.operator == "Division") {
        console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
    }
}
;
askQuestion();
// async function startAgain(){
//     do{
//         await askQuestion();
//        var again = await inquirer
//         .prompt({
//             type: "input",
//             name: "restart",
//             message: chalk.blue("Do You Want To Continue? Press Y or N :")       
//         })
//     } while( again.restart == 'y' || again.restart == 'yes' || again.restart == 'Yes' || again.restart == 'Y')
// };
// startAgain();
