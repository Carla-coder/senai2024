 // Classe Builder - Simples
 class Arvore{
    especie;
    altura;
    idade; 
}

// Criando um objeto simples
const arvore = new Arvore();
console.log(arvore);

// Criar várias árvores com diferentes características
const arvore1 = new Arvore();
arvore1.especie = 'Arvore';
arvore1.altura = 30;
arvore1.idade = 100;

console.log(arvore1);

const arvore2 = new Arvore();
arvore2.especie = 'Ipe';
arvore2.altura = 20;
arvore2.idade = 50;

console.log(arvore2);

// Classe  Complexa - com método Construtor
class Argo {
    constructor(ano) {
        this.modelo = 'Argo';
        this.marca = 'Fiat';
        this.ano = ano == undefined? 2024 : ano; // if ternário 
    }
}

// Criando um objeto complexo
const argos = []; // const se usa para criar objeto
for(i = 0; i < 10; i++) {   
    if(i % 2 == 0) {
        const argo = new Argo(2010+i);
        argos.push(argo);
    } else {
        const argo = new Argo();
        argos.push(argo);
    }
}

console.log(argos);