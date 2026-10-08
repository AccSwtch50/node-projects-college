const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

function checkBasicReq(score, attendance) {
    let failReason = 0;

    if (score < 80) {
        failReason += 1;
    }

    if (attendance < 90) {
        failReason += 2;
    }

    return { basicReqFail: failReason, meetsBasicReq: failReason === 0 }
}

function determineCategory(basicReq, familyIncome, organizationMember) {
    let result = "Not Eligible";
    if (!(basicReq && organizationMember)) {
        return result;
    }

    if (familyIncome <= 5000000) {
        result = "Category B";
    }

    if (familyIncome <= 3000000) {
        result = "Category A";
    }

    return result;
}

function writeReasoning(basicReq, scholarshipCategory, basicReqFail, organizationMember) {
    process.stdout.write("The reason why the student is ")

    if (scholarshipCategory === "Not Eligible") {
        process.stdout.write("not elligible for a scholarship");
    } else {
        process.stdout.write(`put in ${scholarshipCategory}`);
    }

    process.stdout.write(" is because the ");

    if (!basicReq || !organizationMember) {
        process.stdout.write("student ");
        failingReasoning(basicReq, organizationMember, basicReqFail);
        process.stdout.write("\n");
        return;
    }

    process.stdout.write(`student's family income is ${scholarshipCategory === "Category A" ? "less than Rp3000000" : scholarshipCategory === "Category B" ? "less than Rp5000000" : "at least Rp5000000"}.`);
    process.stdout.write("\n");
}

function failingReasoning(basicReq, organizationMember, basicReqFail) {
    if (!basicReq) {
        process.stdout.write("failed to meet basic requiements due to them ");

        if ((basicReqFail & 1) === 1) {
            process.stdout.write("having a low score (score < 80)");
        }

        if (basicReqFail === 3) {
            process.stdout.write(" and ");
        }

        if ((basicReqFail & 2) === 2) {
            process.stdout.write("having low attendance (attendance < 90)");
        }

        process.stdout.write(".");
        return;
    }

    process.stdout.write("is not an organization member.")
}

async function mainFunction() {
    const readlineInterface = readline.createInterface({ input, output });

    const studentName = await readlineInterface.question('Student Name: ');
    const averageScore = Number(await readlineInterface.question('Average Score: '));
    const attendance = Number(await readlineInterface.question('Attendance Percentage: '));
    const familyIncome = Number(await readlineInterface.question('Income of Student\'s Family: Rp'));
    const organizationMember = (await readlineInterface.question('Is student an organization member? (Y/N) ')).toLowerCase() === "y" ? true : false;

    console.log("");

    const { basicReqFail, meetsBasicReq }  = checkBasicReq(averageScore, attendance);
    const scholarshipCategory = determineCategory(meetsBasicReq, familyIncome, organizationMember);

    console.log(`Student: ${studentName}`);
    console.log(`Average Score: ${averageScore}`);
    console.log(`Attendance: ${attendance}%`);
    console.log(`Family Income: Rp${familyIncome}`);
    console.log(`Organization Member: ${organizationMember}`);
    console.log("");
    console.log(`Basic Requirement: ${meetsBasicReq ? "Passed" : "Failed"}`);
    console.log(`Scholarship Category: ${scholarshipCategory}`);

    console.log("");

    writeReasoning(meetsBasicReq, scholarshipCategory, basicReqFail, organizationMember);
    readlineInterface.close();
    return;
}

mainFunction();
