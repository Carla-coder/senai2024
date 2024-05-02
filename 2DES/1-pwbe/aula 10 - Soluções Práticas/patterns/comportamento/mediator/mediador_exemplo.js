// Mediador
class Mediador {
    constructor() {
      this.colega2 = null;
      this.colega3 = null;
      this.bloqueado = false;
    }
  
    setColega2(colega2) {
      this.colega2 = colega2;
    }
  
    setColega3(colega3) {
      this.colega3 = colega3;
    }
  
    enviar(mensagem, remetente) {
      if (!this.bloqueado) {
        if (remetente === this.colega2) {
          this.colega3.receber(mensagem);
        } else if (remetente === this.colega3) {
          this.colega2.receber(mensagem);
        }
      } else {
        console.log("Comunicação bloqueada!");
      }
    }
  
    bloquearComunicacao() {
      this.bloqueado = true;
      console.log("Comunicação bloqueada!");
    }
  }
  
  // Colega
  class Colega {
    constructor(nome, mediador) {
      this.nome = nome;
      this.mediador = mediador;
    }
  
    enviar(mensagem) {
      this.mediador.enviar(mensagem, this);
    }
  
    receber(mensagem) {
      console.log(`${this.nome} recebeu: ${mensagem}`);
    }
  }
  
  // Uso
  const mediador = new Mediador();
  
  const colega2 = new Colega("Colega 2", mediador);
  const colega3 = new Colega("Colega 3", mediador);
  
  mediador.setColega2(colega2);
  mediador.setColega3(colega3);
  
  colega2.enviar("Oi, tudo bem?");
  // Sem resposta entre colega2 e colega3, o mediador bloqueia a comunicação
  mediador.bloquearComunicacao();
  
  colega2.enviar("Você está aí?");
  colega3.enviar("Sim, estou aqui!");
  