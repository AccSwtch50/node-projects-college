const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

function evaluateStudent(score, attendance) {
    let failReason = 0;

    if (score < 60) {
        failReason = failReason | 1;
    }

    if (attendance < 75) {
        failReason = failReason | 2;
    }

    return failReason;
}

async function mainFunction() {
    const readlineInterface = readline.createInterface({ input, output });

    const score = Number(await readlineInterface.question("Enter Student Score: "));
    const attendance = Number(await readlineInterface.question("Enter Student Attendance Rate: "));

    const studentFail = evaluateStudent(score, attendance);

    console.log(studentFail === 0 ? "Pass" : "Fail");
    if (studentFail !== 0) {
        console.log("");
        process.stdout.write("Because the student has ");
        if ((studentFail & 1) === 1) process.stdout.write("a score less than 60");
        if (studentFail === 3) process.stdout.write(" and ");
        if ((studentFail & 2) === 2) process.stdout.write("an attendance rate of less than 75%");
        process.stdout.write(".\n");
    }

    readlineInterface.close();
}

mainFunction();
