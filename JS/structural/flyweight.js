// Класс легковеса (что будет кешироваться)
class Auto {
    constructor(model) {
        this.model = model;
    }
}

class AutoFactory {
    constructor(name) {
        this.models = {};
    }

    create(name) {
        let model = this.models[name];
        if (model) return model;
        console.count('model')
        this.models[name] = new Auto(name);
        return this.models.name;
    }
    getModels() {
        console.table(this.models);
    }
}

const factory = new AutoFactory();
const bmw = factory.create('BMW')
const audi = factory.create('audi')
const tesla = factory.create('Tesla')
const blackTesla = factory.create('Tesla')

console.log(factory.getModels());
