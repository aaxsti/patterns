class Car {
    constructor() {
        this.price = 10000;
        this.model = 'Car';
    }
    getPrice() {
        return this.price;
    }
    getDescription() {
        return this.model;
    }
}

class Tesla extends Car {
    constructor() {
        super();
        this.price = 25000;
        this.model = 'Tesla';
    }
}

class Audi extends Car {
    constructor() {
        super();
        this.price = 20000;
        this.model = 'Audi';
    }
}

// Class-Decorator
class Autopilot {
    constructor(car) {
        this.car = car;
    }
    getPrice() {
        return this.car.getPrice() + 5000;
    }
    getDescription() {
        return `${this.car.getDescription()} with autopilot`
    }
}

// Class-Decorator
class Parktronic {
    constructor(car) {
        this.car = car;
    }
    getPrice() {
        return this.car.getPrice() + 3000;
    }
    getDescription() {
        return `${this.car.getDescription()} with parktronic`
    }
}

let tesla = new Tesla();
let audi = new Audi();

tesla = new Autopilot(tesla);
audi = new Autopilot(audi);

console.log(tesla.getPrice(), tesla.getDescription());
console.log(audi.getPrice(), audi.getDescription())
