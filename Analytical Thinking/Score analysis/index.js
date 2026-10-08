const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function processScores(studentName, assignment, midterm, finalExam) {
    const weightedAssignment = assignment * 0.3
    const weightedMidterm = midterm * 0.3
    const weightedFinalExam = finalExam * 0.4
    const finalScore = weightedAssignment + weightedMidterm + weightedFinalExam;

    const passedString = finalScore >= 85 ? "Excellent" : finalScore >= 70 ? "Good" : "Failed";

    console.log(`Student: ${studentName}`);
    console.log(`Assignment: ${assignment}`);
    console.log(`Midterm: ${midterm}`);
    console.log(`Final Exam: ${finalExam}`);
    console.log(`Final Score: ${finalScore}`);
    console.log(`Status: ${passedString === "Failed" ? "Failed" : "Passed"}`);
    console.log(`Category: ${passedString}`);
}

async function mainFunction() {
    const readlineInterface = readline.createInterface({ input, output });
    let studentName, assignment, midterm, finalExam;

    while(true) {
        studentName = await readlineInterface.question('Student name: ');

        assignment = Number(await readlineInterface.question('Assignment score: '));
        midterm = Number(await readlineInterface.question('Midterm exam score: '));
        finalExam = Number(await readlineInterface.question('Final exam score: '));
        console.log("");
        processScores(studentName, assignment, midterm, finalExam);
        console.log("");
        if ((await readlineInterface.question('Process more students? (Y/N) ')).toLowerCase() !== "y") break;
    }

    readlineInterface.close();
    return;
}

mainFunction();
