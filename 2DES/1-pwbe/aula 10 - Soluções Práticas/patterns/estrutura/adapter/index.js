// Classe existente com interface incompatível
class CalculadoraAntiga {
    multiply(a, b) {
      return a * b;
    }
  }
  
  // Interface esperada pelo cliente
  class Calculator {
    multiply(x, y) {}
  }
  
  // Adaptador que converte a interface CalculadoraAntiga em Calculator
  class CalculatorAdapter extends Calculator {
    constructor() {
      super();
      this.CalculadoraAntiga = new CalculadoraAntiga();
    }
  
    multiply(x, y) {
      return this.CalculadoraAntiga.multiply(x, y);
    }
  }
  
  // Exemplo de uso:
  
  const calculator = new CalculatorAdapter();
  
  const result = calculator.multiply(3,4);
  console.log(result); // Saída: 12