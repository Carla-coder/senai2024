// Interface Subject
class Subject {
    request() {}
}

// RealSubject - Implementação concreta de Subject
class RealSubject extends Subject {
    request() {
        console.log("RealSubject: Requisição feita.");
    }
}

// Proxy - Controla o acesso ao RealSubject
class Proxy extends Subject {
    constructor(realSubject) {
        super();
        this.realSubject = realSubject;
    }

    request() {
        if (this.checkAccess()) {
            this.realSubject.request();
        } else {
            console.log("Proxy: Acesso negado.");
        }
    }

    checkAccess() {
        // Verifica se o acesso é permitido
        return true;
    }
}

// Exemplo de uso
const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);

proxy.request(); // Acesso permitido
