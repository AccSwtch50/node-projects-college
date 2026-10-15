const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

function checkLargest(num1, num2) {
    if (num1 === num2) {
        return "Both numbers are equal"
    }

    if (num1 > num2) {
        return `${num1} is bigger than ${num2}`
    }

    if (num1 < num2) {
        return `${num2} is bigger than ${num1}`
    }

    console.error("Something went wrong. (Probably incorrect types)")
    return "Something went wrong"
}

async function mainFunction() {
    const readlineInterface = readline.createInterface({ input, output });

    const number1 = Number(await readlineInterface.question("Input Number 1: "));
    const number2 = Number(await readlineInterface.question("Input Number 2: "));

    console.log(checkLargest(number1, number2));
    readlineInterface.close();
}

mainFunction();
