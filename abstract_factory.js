function Laptop(name) {
    this.say = function () {
        console.log("You chose a laptop: " + name);
    };
}

function LaptopFactory() {
    this.create = function (name) {
        return new Laptop(name);
    };
}

function Smartphone(name) {
    this.say = function () {
        console.log("You chose a smartphone: " + name);
    };
}

function SmartphoneFactory() {
    this.create = function (name) {
        return new Smartphone(name);
    };
}

function run() {
    let models = [];
    let laptopFactory = new LaptopFactory();
    let smartphoneFactory = new SmartphoneFactory();

    models.push(laptopFactory.create("Lenovo V17"));
    models.push(laptopFactory.create("ASUS X543BA"));
    models.push(smartphoneFactory.create("iPhone 5"));
    models.push(smartphoneFactory.create("Samsung Galaxy S8"));

    for (let i = 0; i < models.length; i++) {
        models[i].say();
    }
}

run();