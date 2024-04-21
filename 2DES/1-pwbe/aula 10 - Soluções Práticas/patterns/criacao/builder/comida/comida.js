class Ingrediente {
    constructor(descricao) {
      this.descricao = descricao;
    }
  }

  // Classe Comida
class Comida {
    constructor(nome, tipo, peso) {
        this.nome = nome;
        this.tipo = tipo;
        this.peso = peso;
        this.ingredientes = [];
    }

    adicionarIngrediente(ingrediente) {
        this.ingredientes.push(ingrediente);
    }

    descrever() {
        console.log(`Nome: ${this.nome}, Tipo: ${this.tipo}, Peso: ${this.peso}, Ingredientes: ${this.ingredientes.map(ingrediente => ingrediente.descricao).join(', ')}`);
    }
}

// Interface ComidaBuilder
class ComidaBuilder {
    constructor(nome, tipo, peso) {
        this.comida = new Comida(nome, tipo, peso);
    }

    adicionarIngrediente(ingrediente) {
        this.comida.adicionarIngrediente(ingrediente);
        return this;
    }

    build() {
        return this.comida;
    }
}
// Concrete Builder para Comida Salgada
class ComidaSalgadaBuilder extends ComidaBuilder {
    constructor(nome, peso) {
        super(nome, 'Salgada', peso);
    }
}

// Concrete Builder para Comida Doce
class ComidaDoceBuilder extends ComidaBuilder {
    constructor(nome, peso) {
        super(nome, 'Doce', peso);
    }
}

// Criando comidas salgadas
const comidaSalgada1 = new ComidaSalgadaBuilder('Pizza', 300)
.adicionarIngrediente(new Ingrediente('Queijo'))
.adicionarIngrediente(new Ingrediente('Presunto'))
.build();

const comidaSalgada2 = new ComidaSalgadaBuilder('Hambúrguer', 200)
.adicionarIngrediente(new Ingrediente('Carne'))
.adicionarIngrediente(new Ingrediente('Alface'))
.adicionarIngrediente(new Ingrediente('Tomate'))
.build();

    const comidaSalgada3 = new ComidaSalgadaBuilder('Lasanha', 350)
    .adicionarIngrediente(new Ingrediente('Massa'))
    .adicionarIngrediente(new Ingrediente('Molho de Tomate'))
    .adicionarIngrediente(new Ingrediente('Queijo'))
    .build();

const comidaSalgada4 = new ComidaSalgadaBuilder('Sopa de Legumes', 200)
    .adicionarIngrediente(new Ingrediente('Batata'))
    .adicionarIngrediente(new Ingrediente('Cenoura'))
    .adicionarIngrediente(new Ingrediente('Abobrinha'))
    .build();

    const comidaSalgada5 = new ComidaSalgadaBuilder('Sushi', 150)
    .adicionarIngrediente(new Ingrediente('Arroz'))
    .adicionarIngrediente(new Ingrediente('Peixe'))
    .adicionarIngrediente(new Ingrediente('Alga Nori'))
    .build();

// Criando comidas doces
const comidaDoce1 = new ComidaDoceBuilder('Bolo de Chocolate', 400)
    .adicionarIngrediente(new Ingrediente('Chocolate'))
    .adicionarIngrediente(new Ingrediente('Farinha'))
    .adicionarIngrediente(new Ingrediente('Açúcar'))
    .build();

const comidaDoce2 = new ComidaDoceBuilder('Sorvete de Morango', 250)
    .adicionarIngrediente(new Ingrediente('Morango'))
    .adicionarIngrediente(new Ingrediente('Leite'))
    .adicionarIngrediente(new Ingrediente('Açúcar'))
    .build();

    const comidaDoce3 = new ComidaDoceBuilder('Torta de Limão', 350)
    .adicionarIngrediente(new Ingrediente('Limão'))
    .adicionarIngrediente(new Ingrediente('Leite Condensado'))
    .adicionarIngrediente(new Ingrediente('Bolacha'))
    .build();

const comidaDoce4 = new ComidaDoceBuilder('Pudim de Leite', 300)
    .adicionarIngrediente(new Ingrediente('Leite'))
    .adicionarIngrediente(new Ingrediente('Açúcar'))
    .adicionarIngrediente(new Ingrediente('Ovos'))
    .build();

    const comidaDoce5 = new ComidaDoceBuilder('Cupcake de Baunilha', 120)
    .adicionarIngrediente(new Ingrediente('Farinha de Trigo'))
    .adicionarIngrediente(new Ingrediente('Açúcar'))
    .adicionarIngrediente(new Ingrediente('Ovos'))
    .adicionarIngrediente(new Ingrediente('Baunilha'))
    .build();

// Lista de todas as comidas
const listaComidas = [
    comidaSalgada1,
    comidaSalgada2,
    comidaSalgada3,
    comidaSalgada4,
    comidaSalgada5,
    comidaDoce1,
    comidaDoce2,
    comidaDoce3,
    comidaDoce4,
    comidaDoce5
];

// Exibindo todas as comidas
listaComidas.forEach(comida => comida.descrever());
 