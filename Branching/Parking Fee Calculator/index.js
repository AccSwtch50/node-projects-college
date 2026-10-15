const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

function calculateParkingFee(hours) {
    let parkingFee = 0;
    let workingHours = hours;
    if (workingHours < 1) return parkingFee;

    if (hours >= 1) {
        parkingFee += 5000;
        workingHours -= 1;
    }

    while (workingHours >= 1) {
        parkingFee += 3000;
        workingHours -= 1;
    }

    if (parkingFee > 20000) parkingFee = 20000;

    return parkingFee;
}

async function mainFunction() {
    const readlineInterface = readline.createInterface({ input, output });

    const parkingHours = Number(await readlineInterface.question("Enter parking hours: "));

    const parkingFee = calculateParkingFee(parkingHours);

    console.log(`The parking fee is Rp${parkingFee}.`);
    readlineInterface.close();
}

mainFunction();
