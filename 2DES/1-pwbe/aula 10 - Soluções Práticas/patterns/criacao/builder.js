// Patterns Builder (Construtor) 
 
class Carro {
    constructor(modelo, marca, ano) {
        this.modelo = modelo == undefined ? '': modelo;
        this.marca = marca == undefined ? '': marca;
        this.ano = ano == undefined ? new Date().getFullYear() : ano; // if ternário 
    }
}

class Argo {
    constructor(ano) {
        this.modelo = 'Argo'; 
        this.marca = 'Fiat';
        this.ano = ano == undefined ? new Date().getFullYear() : ano; // if ternário
    }
}

class Gol {
    constructor(ano) {
        this.modelo = 'Gol'; 
        this.marca = 'VW';
        this.ano = ano == undefined ? new Date().getFullYear() : ano; // if ternário 
    }
}

class Turbo {
    constructor(marca) {
        this.marca = marca == undefined ? 'Genérica' : marca;
    }
}

    //Classe Builder - Complexa
    class CarroBuilder {
        constructor(modelo, marca, ano) {
            this.if(modelo && marca && ano) {
            if(modelo = 'Argo') {
                this.carro = new Argo(ano);
            } else if(modelo == 'Gol') {
                this.carro = new Gol(ano);
            } else {
                this.carro = new Carro(modelo, marca, ano);
            }
        } else if(modelo && marca) {
            if(modelo == 'Argo') {
            this.carro = new Argo();
        } else if(modelo == 'Gol') {
            this.carro = new Gol();
        } else {
            this.carro = new Carro(modelo, marca);
        }
        } else {
            this.carro = new Carro();
        }

        }
    }

    // Criando um carro com o builder
    const carro1 new CarroBuilder('Argo', 'Fiat', 2020);
    
        


// const carro1 = new Carro('Fusca', 'Volkswagem');
// console.log(carro1);
