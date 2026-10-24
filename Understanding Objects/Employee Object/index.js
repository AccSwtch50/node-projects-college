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

console.log(exampleEmployee);

exampleEmployee.address.city = "Borobudur";

console.log(exampleEmployee);
