// Cada linha é comentada para fins de estudo.

/*Este trecho indica que o código dentro das chaves { ... } 
será executado assim que o DOM (Document Object Model) estiver totalmente carregado.*/
$(document).ready(function () { 
    // Adiciona rolagem suave para os links da barra de navegação
    //Seleciona todos os elementos a (links) na página e adiciona um evento de clique a eles.
    $("a").on('click', function (event) {
        //Verifica se o atributo hash do link (this.hash) não está vazio. O hash representa a parte da URL que vem após o caractere #.
        if (this.hash !== "") {
            //Impede o comportamento padrão do link quando é clicado, o que evita que a página recarregue imediatamente.
            event.preventDefault();
            //Armazena o valor do atributo hash do link na variável hash.
            var hash = this.hash;
            // Utiliza a função animate do jQuery para criar uma animação de rolagem suave.
            $('html, body').animate({ // Seleciona os elementos HTML e body.
                scrollTop: $(hash).offset().top // Anima a rolagem até a posição definida opelo elemento com o 'id' correspondente ao 'hash'
            }, 800, function () { // A duração da animação em milissegundos(neste caso, 800 milissegundos ou 0,8 segundos)
                window.location.hash = hash; // Após a conlusãoda animação, atualiza a hash na barra de endereços para corresponder ao destino do link.
            });
        }
    });
});
