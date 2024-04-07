#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellowBright("\nXXXXX WELCOME TO CHANGE CURRENCY CONVERTER OF BJ XXXXXX\n"));
const currency: any = {
    USD: 1, // 1 USD = 1 USD
    EUR: 0.8, // 1 USD = 0.84 EUR
    PKR: 166, // 1 USD = 166.23 PKR
    INR: 73, // 1 USD = 73.18 INR
}
let Answer: any = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.bgBlueBright("\nChange Currency Amount:\n"),
        choices:["PKR", "USD", "INR", "EUR"],
       

    },
    {
        name: "to",
        type: "list",
        message: chalk.bgBlueBright("\nWhat currency do you want to convert from?\n"),
        choices: ["PKR", "USD", "INR", "EUR"],
    },

    {
        name: "amount",
        type: "number",
        message: chalk.bgGray("\nInput your amout that you want to convert:"),
    },
]);
let from_amount: any = currency[Answer.from];
let to_amount: any = currency[Answer.to];
let ui_amount = Answer.amount;
let output_amount = ui_amount / from_amount;
let desired_amount = output_amount * to_amount;
console.log("$"+output_amount);