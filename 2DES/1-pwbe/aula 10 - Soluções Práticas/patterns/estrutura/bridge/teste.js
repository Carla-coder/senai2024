// Implementação da implementação da forma (Bridge)
class ImplementadorForma {
    desenharForma() {}
}

// Implementações concretas da implementação da forma
class ImplementadorJanela extends ImplementadorForma {
    desenharForma() {
        console.log("Desenhando na janela.");
    }
}

class ImplementadorArquivo extends ImplementadorForma {
    desenharForma() {
        console.log("Desenhando em um arquivo.");
    }
}

// Abstração da forma (Abstração)
class Forma {
    constructor(implementador) {
        this._implementador = implementador;
    }

    desenhar() {}
}

// Abstrações concretas de formas
class Circulo extends Forma {
    desenhar() {
        console.log("Desenhando um círculo.");
        this._implementador.desenharForma();
    }
}

class Quadrado extends Forma {
    desenhar() {
        console.log("Desenhando um quadrado.");
        this._implementador.desenharForma();
    }
}

// Exemplo de uso
const implementadorJanela = new ImplementadorJanela();
const implementadorArquivo = new ImplementadorArquivo();

const forma1 = new Circulo(implementadorJanela);
forma1.desenhar();

const forma2 = new Quadrado(implementadorArquivo);
forma2.desenhar();
