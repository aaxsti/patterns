class TeslaCar {
    constructor(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }

    // clone method
    produce() {
        return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
    }
}

// Base auto (эталон)
const prototypeCar = new TeslaCar('S', 80000, 'black', false);

// Cloning of base auto
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// Changes for particular auto
car1.interior = "white";
car2.autopilot = true;
car3.model = 'A';

console.log(car1);
console.log(car2);
console.log(car3);
