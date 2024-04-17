const compositeClientes = (lista) => {
    const listaComposta = [];
    let cpf = 0;
    lista.forEach(c => {
        if (cpf !== c.cpf) {
            c.telefones = []; //Cria uma lista de telefones
            c.telefones.push(c.telefone); //Acrescenta o telefone na lista
            delete c.telefone; //remover o campo telefone
            listaComposta.push(c);
            cpf = c.cpf;
        }else{
            listaComposta[listaComposta.length - 1].telefones.push(c.telefone);
        }
    });
    return listaComposta;
}

module.exports = {
    compositeClientes
}