const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function mainFunction() {
    const readlineInterface = readline.createInterface({ input, output });

    const number = Number(await readlineInterface.question("Input Number: "));

    console.log(`Sign of number is ${ number < 0 ? "Negative" : "Positive"}`);
    readlineInterface.close()
}

mainFunction()
