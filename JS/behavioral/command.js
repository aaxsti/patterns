class Driver {
    constructor(command) {
        this.command = command;
    }

    execute() {
        this.command.execute();
    }
}

// BLL
class Engine {
    constructor() {
        this.state = false;
    }

    on() {
        this.state = true;
    }

    off() {
        this.state = false;
    }
}

// Command
class OnStartCommand {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.on();
    }
}

class OnSwitchOffCommand {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.off();
    }
}

const engine = new Engine();
console.log(engine);

const onStartCommand = new OnStartCommand(engine);
// Передаём команду
const driver = new Driver(onStartCommand);
// Выполняем
driver.execute();
console.log(engine);
