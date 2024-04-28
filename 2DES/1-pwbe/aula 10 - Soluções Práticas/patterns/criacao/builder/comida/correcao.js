class Ingrediente {
    constructor(descricao) {
        this.descricao = descricao;
    }
}

class Comida {
    constructor(nome, tipo, peso) {
        this.nome = nome != undefined ? nome : 'Comida Generica';
        this.tipo = tipo != undefined ? tipo : 'Tipo Generica';
        this.peso = peso != undefined ? peso : 0;
    }
}

class Salgada {
    constructor (nome, peso) {
        this.nome = nome != undefined ? nome : 'Comida Generica';
        this.tipo = 'Salgada';
        this.peso = peso != undefined ? peso : 0;
    }
}

class Doce {
    constructor (nome, peso) {
        this.nome = nome != undefined ? nome : 'Comida Generica';
        this.tipo = 'Doce';
        this.peso = peso != undefined ? peso : 0;
    }
}

class ComidaBuilder {
    constructor(nome, tipo, peso) {
        if(nome != undefined && tipo != undefined && peso != undefined) {
            if(tipo == 'Salgada'){
                this.comida = new Salgada(nome, peso);
            } else if(tipo == 'Doce'){
                this.comida = new Doce(nome, peso);
            } else {
                this.comida = new Comida(nome, tipo, peso);
            }
        } else if (nome != undefined && tipo != undefined) {
            if(tipo == 'Salgada'){
                this.comida = new Salgada(nome);
            } else if(tipo == 'Doce'){
                this.comida = new Doce(nome);
            } else {
                this.comida = new Comida(nome, tipo);
            }
        } else if (nome != undefined) {
            this.comida = new Comida(nome);
        } else {
            this.comida = new Comida();
        }
    }

    addIngrediente(Ingredientes){
        if(this.comida.ingrediente == undefined) {
            this.comida.ingrediente = [];
        }
        this.comida.ingrediente.push(Ingredientes);
        return this;
    }

    build(){
        return this.comida;
    }

}

const comidas = [
    new ComidaBuilder(),
    new ComidaBuilder("Arroz", "Salgada", 100),
    new ComidaBuilder("Feijao"),
    new ComidaBuilder("Brigadeiro", "Doce"),
    new ComidaBuilder("Bolo", "Doce", 200),
];

comidas[1].addIngrediente(new Ingrediente("Sal"));
comidas[1].addIngrediente(new Ingrediente("Alho"));
comidas[3].addIngrediente(new Ingrediente("Leite compensado"));
comidas[3].addIngrediente(new Ingrediente("Chocolate em pó do padre"));

console.log(comidas);
console.table(comidas);
console.log(JSON.stringify(comidas, null, 2));