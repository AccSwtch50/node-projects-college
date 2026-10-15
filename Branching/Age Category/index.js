const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

function ageToCat(ageNum) {
    let category = "Senior"

    if (ageNum < 60) {
        category = "Adult"
    }

    if (ageNum < 18) {
        category = "Teenager"
    }

    if (ageNum < 13) {
        category = "Child"
    }

    if (ageNum < 6) {
        category = "Toddler"
    }

    if (ageNum < 0) {
        category = "Unborn"
    }

    return category;
}

async function mainFunction() {
    const readlineInterface = readline.createInterface({ input, output });

    const age = Number(await readlineInterface.question("Input age number: "));

    console.log(`The age category is ${ageToCat(age).toLowerCase()}.`);
    readlineInterface.close();
}

mainFunction();
