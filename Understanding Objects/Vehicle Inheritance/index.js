class Vehicle {
    engineRunning = false;
    constructor(brand) {
        this.brand = brand;
    }
    toggleEngineStatus() {
        this.engineRunning = !this.engineRunning;
    }
    getInfo() {
        return {
            brand: this.brand,
            engineRunning: this.engineRunning
        }
    }
}

class Car extends Vehicle {
    doors = {
        door1: false,
        door2: false
    }
    toggleDoor(door) {
        if (!this.doors.hasOwnProperty(door)) return;
        this.doors[door] = !this.doors[door];
    }
    seeOpenedDoors() {
        return this.doors;
    }
}

const car1 = new Car("Nissan");
const car2 = new Car("Ford");
const genericVehicle1 = new Vehicle("Cat");

console.log(genericVehicle1.getInfo());
genericVehicle1.toggleEngineStatus();
console.log(genericVehicle1.getInfo());
genericVehicle1.toggleEngineStatus();
console.log(genericVehicle1.getInfo());

console.log(car1.getInfo());
car1.toggleEngineStatus();
console.log(car1.getInfo());
console.log(car1.seeOpenedDoors());
car1.toggleDoor("door1");
console.log(car1.seeOpenedDoors());

console.log(`car1.getInfo === car2.getInfo is: ${car1.getInfo === car2.getInfo}`);
console.log(`car1.getInfo === genericVehicle1.getInfo is: ${car1.getInfo === genericVehicle1.getInfo}`);
console.log(`car1.seeOpenedDoors === car2.seeOpenedDoors is: ${car1.seeOpenedDoors === car2.seeOpenedDoors}`);
