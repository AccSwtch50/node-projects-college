const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

function checkScholarshipStatus(score, attendance, income, active) {
    let result = "No scholarship";

    if (score >= 75 && attendance >= 80 && income <= 8000000) {
        result = "Partial scholarship";
    }

    if (score >= 85 && attendance >= 90 && income <= 5000000 && active) {
        result = "Full scholarship";
    }

    return result;
}

async function mainFunction() {
    const readlineInterface = readline.createInterface({ input, output });

    const score = Number(await readlineInterface.question("Enter student score: "));
    const attendance = Number(await readlineInterface.question("Enter student attendance: "));
    const income = Number(await readlineInterface.question("Enter student's parent income: Rp"));
    const active = (await readlineInterface.question("Is the student active? (y/n) ")).toLowerCase() === "y" ? true : false;

    console.log(checkScholarshipStatus(score,attendance,income,active));
    readlineInterface.close();
}

mainFunction();
