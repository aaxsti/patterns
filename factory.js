function TechShopFactory() {
    this.createProduct = function (type) {
        let product;

        if (type === "Laptop") {
            product = new Laptop();
        } else if (type === "Smartphone") {
            product = new Smartphone();
        } else if (type === "Tablet") {
            product = new Tablet();
        } else if (type === "Printer") {
            product = new Printer();
        }

        product.type = type;

        product.say = function () {
            console.log("You chose the " + this.productName + " category")
        }

        return product;
    }
}

let Laptop = function () {
    this.productName = "Laptops";
};

let Smartphone = function () {
    this.productName = "Smartphones";
};

let Tablet = function () {
    this.productName = "Tablets";
};

let Printer = function () {
    this.productName = "Printers";
};

function run() {
    let products = [];
    let factory = new TechShopFactory();

    products.push(factory.createProduct("Laptop"));
    products.push(factory.createProduct("Smartphone"));
    products.push(factory.createProduct("Tablet"));
    products.push(factory.createProduct("Printer"));

    for (let i = 0; i < products.length; i++) {
        products[i].say();
    }
}

run();