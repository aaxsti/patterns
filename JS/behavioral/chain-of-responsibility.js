class Account {
    pay(orderPrice) {
        if (this.canPay(orderPrice)) {
            // Если есть балланс на счете
            console.log(`Paid ${orderPrice} using ${this.name}`)
        } else if (this.incomer) {
            // Если есть преемник (вложенная система)
            console.log(`Cannot pay using ${this.name}`);
            this.incomer.pay(orderPrice);
        } else {
            console.log('Unfortunately, not enough money');
        }
    }
    canPay(amount) {
        return this.balance >= amount;
    }
    setNext(account) {
        this.incomer = account;
    }
    show() {
        console.log(this);
    }
}

class MasterCard extends Account {
    constructor(balance) {
        super();
        this.name = 'Master Card';
        this.balance = balance;
    }
}

class Paypal extends Account {
    constructor(balance) {
        super();
        this.name = 'Paypal';
        this.balance = balance;
    }
}

class Qiwi extends Account {
    constructor(balance) {
        super();
        this.name = 'Qiwi';
        this.balance = balance;
    }
}

// Set system balance
const masterCard = new MasterCard(100)
const paypal = new Paypal(200)
const qiwi = new Qiwi(500)

// Define chain (создаем цепочку преемников)
masterCard.setNext(paypal)
paypal.setNext(qiwi)

// Start payment
masterCard.pay(438)

masterCard.show();
