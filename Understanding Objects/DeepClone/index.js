function deepClone(passedValue) {
    if (passedValue === null || typeof passedValue !== "object") return passedValue;

    const clonedObject = Array.isArray(passedValue) ? [] : {};

    for (const [key, value] of Object.entries(passedValue)) {
        clonedObject[key] = deepClone(value);
    }

    return clonedObject
}

class Address {
    constructor(street, city, postalCode) {
        this.street = street;
        this.city = city;
        this.postalCode = postalCode;
    }
}

class Employee {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

let exampleEmployee = new Employee("Andri", new Address("Jalan Kancil", "Surabaya", "33245"));
exampleEmployee.address = { ...exampleEmployee.address }
exampleEmployee = { ...exampleEmployee }

const exampleEmployee2 = deepClone(exampleEmployee);

console.log(`exampleEmployee:`);
console.log(exampleEmployee);
console.log(`exampleEmployee2:`);
console.log(exampleEmployee2);

exampleEmployee.address.city = "Borobudur";
exampleEmployee2.address.city = "Cisaat";

console.log(`exampleEmployee:`);
console.log(exampleEmployee);
console.log(`exampleEmployee2:`);
console.log(exampleEmployee2);
