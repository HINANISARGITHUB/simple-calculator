#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtruction", "Multiplication", "Division"],
    }
]);
if (answer.operator === "Addition") {
    console.log(chalk.blue(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtruction") {
    console.log(chalk.magentaBright(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.green(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Division") {
    console.log(chalk.gray(answer.firstNumber / answer.secondNumber));
}
else {
    console.log(chalk.red("Please select valid operator"));
}
