function OrderProcessing() {
    this.login = function (credentials) { /* ... */
    };
    this.setProducts = function (products) { /* ... */
    };
    this.setDiscount = function (discount) { /* ... */
    };
    this.calculate = function () { /* ... */
        return "$1650.50";
    };
}

function OrderProcessingAdapter(credentials) {
    let order = new OrderProcessing();

    order.login(credentials);

    return {
        request: function (products, discount) {
            order.setProducts(products);
            order.setDiscount(discount);
            return order.calculate();
        }
    };
}

function run() {
    let credentials = {token: "54ht-67ab"};
    let adapter = new OrderProcessingAdapter(credentials);
    let cost = adapter.request(['Lenovo V17', 'iPhone 5'], "5%");

    console.log("Total cost: " + cost);
}

run();