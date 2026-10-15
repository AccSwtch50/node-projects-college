const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const freeThreshold = 100000;
const shippingFee = 5000;

async function mainFunction() {
    const readlineInterface = readline.createInterface({ input, output });

    const price = Number(await readlineInterface.question("What's price of the product? Rp"));
    const isMember = (await readlineInterface.question("Is the customer a member? (y/n) ")).toLowerCase() === "y" ? true : false;

    const appliedShipFee = (isMember || (price >= freeThreshold)) ? 0 : shippingFee;
    const totalFee = price + appliedShipFee;

    console.log(`Price: ${price}`);
    console.log(`Customer is member: ${isMember ? "Yes" : "No"}`);
    console.log(`Shipping fee: ${appliedShipFee}`);
    console.log(`Total price: ${totalFee}`);

    readlineInterface.close();
}

mainFunction();
