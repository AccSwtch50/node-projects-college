const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function mainFunction() {
    const readlineInterface = readline.createInterface({ input, output });

    const firstNumber = Number(await readlineInterface.question('First Number: '));

    const secondNumber = Number(await readlineInterface.question('Second Number: '));

    console.log("Valid operations: ");
    console.log("1. Divide");
    console.log("2. Multiply");
    console.log("3. Add");
    console.log("4. Subtract");
    const mathOperation = (await readlineInterface.question('Operation: ')).toLowerCase();

    let result;
    switch (true) {
        case mathOperation === "divide":
            result = firstNumber / secondNumber;
            break;
        case mathOperation === "multiply":
            result = firstNumber * secondNumber;
            break;
        case mathOperation === "add":
            result = firstNumber + secondNumber;
            break;
        case mathOperation === "subtract":
            result = firstNumber - secondNumber;
            break;
        default:
            console.error("Invalid operation!");
            break;
    }
    console.log(`Result: ${result}`);
    readlineInterface.close();
    return;
}

mainFunction();
