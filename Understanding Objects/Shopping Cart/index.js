const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const readlineInterface = readline.createInterface({ input, output });

const product_prices = {
    Soap: 30000,
    Toothbrush: 3000,
    Plate: 10000,
    Clock: 20000,
    "Extension Cable": 80000
}

class Cart {
    products = {};
    add_product(product, quantity) {
        if (!product_prices.hasOwnProperty(product)) {
            console.error("Product not registered");
            return;
        }
        if (this.products.hasOwnProperty(product)) {
            this.products[product] += quantity;
            return;
        }
        this.products[product] = quantity;
    }
    remove_product(product, quantity) {
        if (this.products.hasOwnProperty(product)) {
            this.products[product] -= quantity;
            if (this.products[product] <= 0) {
                delete this.products[product]
            }
            return;
        }
    }
    calculate_total() {
        let basePrice;
        let total = 0;
        for (const product in this.products) {
            basePrice = product_prices[product];
            total += basePrice * this.products[product];
        }
        return total;
    }
}

function list_products() {
    let counter = 1;
    for (const product in product_prices) {
        console.log(`${counter}. ${product} (Rp${product_prices[product]})`);
        counter++;
    }
}

async function add_product(cart) {
    console.log("Products:");
    list_products();
    const chosen_product = await readlineInterface.question("Enter product: ");
    const quantity = Number(await readlineInterface.question("Product amount: "));
    cart.add_product(chosen_product, quantity);
}

async function remove_product(cart) {
    console.log("Products:");
    list_products();
    const chosen_product = await readlineInterface.question("Enter product: ");
    const quantity = Number(await readlineInterface.question("Product amount: "));
    cart.remove_product(chosen_product, quantity);
}

function calculate_total(cart) {
    console.log(`Total: ${cart.calculate_total()}`);
}

async function mainFunction() {
    const cart = new Cart();
    let choice;

    while (true) {
        console.log("Select an option:");
        console.log("1. Add products to cart");
        console.log("2. Remove products on cart");
        console.log("3. Calculate Total");
        console.log("4. Exit");

        choice = Number(await readlineInterface.question("Select: "));

        switch (choice){
            case 1:
                await add_product(cart);
                break;
            case 2:
                await remove_product(cart);
                break;
            case 3:
                calculate_total(cart);
                break;
            default:
                readlineInterface.close();
                return;
        }
    }

}

mainFunction();
