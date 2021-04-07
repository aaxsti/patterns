function TechShop() {
    this.construct = function (builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}

function PCBuilder() {
    this.pc = null;

    this.step1 = function () {
        this.pc = new PC();
    };

    this.step2 = function () {
        this.pc.addParts();
    };

    this.get = function () {
        return this.pc;
    };
}

function SmartHomeSetBuilder() {
    this.smartHome = null;

    this.step1 = function () {
        this.smartHome = new SmartHomeSet();
    };

    this.step2 = function () {
        this.smartHome.addParts();
    };

    this.get = function () {
        return this.smartHome;
    };
}

function PC() {
    this.RAM = 0;

    this.addParts = function () {
        this.RAM = 8;
    };

    this.say = function () {
        console.log("It`s a PC with " + this.RAM + " GB RAM");
    };
}

function SmartHomeSet() {
    this.sensors = 0;

    this.addParts = function () {
        this.sensors = 2;
    };

    this.say = function () {
        console.log("It`s a Smart Home system with " + this.sensors + " sensors");
    };
}

function run() {
    let shop = new TechShop();
    let pcBuilder = new PCBuilder();
    let smartHomeBuilder = new SmartHomeSetBuilder();
    let pc = shop.construct(pcBuilder);
    let smartHome = shop.construct(smartHomeBuilder);

    pc.say();
    smartHome.say();
}

run();