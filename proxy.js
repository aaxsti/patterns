function ProductSerialNumberDecoder() {

    this.getProduct = function(serialNumber) {

        if (serialNumber === "HBeyE6RiGdDrkiV") {
            return "ASUS X543BA";
        } else if (serialNumber === "8nGPD6Yz8h8KVof") {
            return "Samsung Galaxy S8";
        } else if (serialNumber === "65TrcAnbBvi3nCz") {
            return "iPhone 5";
        } else if (serialNumber === "u2md8eRjmyALjUK") {
            return "Lenovo V17";
        } else {
            return "";
        }
    };
}

function ProductSerialNumberProxy() {
    let SNDecoder = new ProductSerialNumberDecoder();
    let productsCache = {};

    return {
        getProduct: function(serialNumber) {
            if (!productsCache[serialNumber]) {
                productsCache[serialNumber] = SNDecoder.getProduct(serialNumber);
            }
            log.add(serialNumber + ": " + productsCache[serialNumber]);
            return productsCache[serialNumber];
        },
        getCount: function() {
            let count = 0;
            for (let num in productsCache) { count++; }
            return count;
        }
    };
}

let log = (function() {
    let log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { console.log(log); log = ""; }
    }
})();

function run() {
    let productsSerial = new ProductSerialNumberProxy();

    productsSerial.getProduct("HBeyE6RiGdDrkiV");
    productsSerial.getProduct("8nGPD6Yz8h8KVof");
    productsSerial.getProduct("65TrcAnbBvi3nCz");
    productsSerial.getProduct("u2md8eRjmyALjUK");

    log.add("\nCache size: " + productsSerial.getCount());
    log.show();
}

run();