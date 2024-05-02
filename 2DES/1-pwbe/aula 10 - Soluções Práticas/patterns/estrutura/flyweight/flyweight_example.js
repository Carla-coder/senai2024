// FlyweightFactory - Gerencia os flyweights e garante sua reutilização
class FlyweightFactory {
    constructor() {
        this.flyweights = {};
    }

    getFlyweight(key) {
        if (!this.flyweights[key]) {
            this.flyweights[key] = new Flyweight(key);
        }
        return this.flyweights[key];
    }

    getTotalFlyweights() {
        return Object.keys(this.flyweights).length;
    }
}

// Flyweight - Representa o objeto compartilhado
class Flyweight {
    constructor(key) {
        this.key = key;
    }

    operation() {
        console.log(`Operação executada com a chave ${this.key}`);
    }
}

// Exemplo de uso
const factory = new FlyweightFactory();

const flyweightA = factory.getFlyweight('A');
flyweightA.operation(); // Saída: Operação executada com a chave A

const flyweightB = factory.getFlyweight('B');
flyweightB.operation(); // Saída: Operação executada com a chave B

console.log(factory.getTotalFlyweights()); // Saída: 2 (total de flyweights criados)
