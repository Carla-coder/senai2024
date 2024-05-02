// Interface Componente
class Cafe {
    preco() {
        return 10;
    }
}

// Decorador abstrato
class CafeDecorator extends Cafe {
    constructor(cafe) {
        super();
        this.cafe = cafe;
    }

    preco() {
        return this.cafe.preco();
    }
}

// Decoradores concretos
class Leite extends CafeDecorator {
    constructor(cafe) {
        super(cafe);
    }

    preco() {
        return this.cafe.preco() + 3;
    }
}

class Chocolate extends CafeDecorator {
    constructor(cafe) {
        super(cafe);
    }

    preco() {
        return this.cafe.preco() + 5;
    }
}

// Exemplo de uso
let meuCafe = new Cafe();
console.log("Café simples:", meuCafe.preco());

meuCafe = new Leite(meuCafe);
console.log("Café com leite:", meuCafe.preco());

meuCafe = new Chocolate(meuCafe);
console.log("Café com leite e chocolate:", meuCafe.preco());
