// Classe protótipo
class Ovelha {
    constructor(name, weight) {
      this.name = name;
      this.weight = weight;
    }
  
    clone() {}
  }
  
  // Implementação concreta do Ovelha
  class BlackOvelha extends Ovelha {
    constructor(name, weight) {
      super(name, weight);
      this.color = 'black';
    }
  
    clone() {
      return new BlackOvelha(this.name, this.weight);
    }
  }
  
  // Exemplo de uso:
  
  const blackOvelha = new BlackOvelha('Dolly', 50);
  const clonedOvelha = blackOvelha.clone();
  
  console.log(clonedOvelha.name); // Saída: Dolly
  console.log(clonedOvelha.weight); // Saída: 50
  console.log(clonedOvelha.color); // Saída: black