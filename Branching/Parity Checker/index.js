const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function mainFunction() {
    const readlineInterface = readline.createInterface({ input, output });

    const number = Number(await readlineInterface.question("Input Number: "));

    console.log(`Your number is ${(number % 2) === 0 ? "even" : "odd"}.`);
    readlineInterface.close();
}

mainFunction();
