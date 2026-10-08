const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

function calculateTotal(price, quantity, discount) {
    const subtotal = price * quantity;
    const discountFactor = subtotal * (discount / 100);
    const discountPrice = subtotal - discountFactor;

    return { subtotal: subtotal, discountFactor: discountFactor, discountPrice: discountPrice };
}

async function mainFunction() {
    const readlineInterface = readline.createInterface({ input, output });

    const priceParams = require('./global_pricing_adjustments.json');

    const customerName = await readlineInterface.question('Customer Name: ');

    const productPrice = Number(await readlineInterface.question('Price of Product: Rp'));
    const quantity = Number(await readlineInterface.question('Quantity of Product: '));
    const discountPercent = priceParams.discountPercent;
    const shippingCost = priceParams.shippingCost;

    console.log("");

    const { subtotal, discountFactor, discountPrice } = calculateTotal(productPrice, quantity, discountPercent);

    const calculateShipping = (total) => {
        if (total >= 500000) {
            return 0;
        }
        return shippingCost;
    };

    const currentShippingCost = calculateShipping(discountPrice);

    console.log(`Customer: ${customerName}`);
    console.log(`Product Price: Rp${productPrice}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Subtotal: Rp${subtotal}`);
    console.log(`Discount: Rp${discountFactor}`);
    console.log(`After Discount: Rp${discountPrice}`);
    console.log(`Shipping: Rp${currentShippingCost}`);
    console.log(`Total Payment: Rp${discountPrice + currentShippingCost}`);

    readlineInterface.close();
    return;
}

mainFunction();
