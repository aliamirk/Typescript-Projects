"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let questionMCQ = [
    {
        question: "1: Where Is The Second Largest Mountain In The World Located",
        choices: ["USA", "PAKISTAN", "INDIA", "NEPAL"],
        answer: "PAKISTAN"
    },
    {
        question: "2: When Will Be Shaheen Recovering From His Knee Injury",
        choices: ["FEBRAURY", "MAY", "APRIL", "MARCH"],
        answer: "MARCH"
    },
    {
        question: "3: When Will Be ICC ODI WORLD CUP 2023 Played",
        choices: ["SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"],
        answer: "OCTOBER"
    },
    {
        question: "4: HOW RUNS DID BABAR SCORE IN 2022",
        choices: ["2598", "1899", "900", "1354"],
        answer: "2598"
    },
    {
        question: '5: Second largest mountain of the world is place at? ',
        choices: ['Mumbai', 'USA', 'Austria', 'Pakistan'],
        answer: 'Pakistan'
    },
    {
        question: '6: The Indian Institute of Science is located at ',
        choices: ['Kerala', 'Madras', 'Bangalore', 'New Delhi'],
        answer: 'Bangalore'
    },
    {
        question: '7: who won the last asia cup final: ',
        choices: ['Pakistan', 'Afganistan', 'India', 'Srilanka'],
        answer: 'Srilanka'
    },
    {
        question: '8: The Centre for Cellular and Molecular Biology in India is situated at: ',
        choices: ['New Delhi', 'Hyderabad', 'Amritsar', 'Mumbai'],
        answer: 'Hyderabad'
    },
    {
        question: '9: National Institute of Aeronautical Engineering is located at ',
        choices: ['Delhi', 'Dehradun', 'Lucknow', 'Gandhinagar'],
        answer: 'Delhi'
    },
    {
        question: '10: Who wrote the famous book - "We the people"? ',
        choices: ['T.N.Kaul', 'J.R.D. Tata', 'Nani Palkhivala', 'Khushwant Singh'],
        answer: 'Nani Palkhivala'
    },
];
let Score = 0;
let index = 0;
let i = questionMCQ.length;
const Questions = await inquirer_1.default.prompt([
    {
        type: "list",
        name: "Questions",
        message: `${questionMCQ[index].question}`,
        choices: [`
        
        ${questionMCQ[index].choices[0]},
        ${questionMCQ[index].choices[1]},
        ${questionMCQ[index].choices[2]},
        ${questionMCQ[index].choices[3]}
        
        `]
    }
]);
