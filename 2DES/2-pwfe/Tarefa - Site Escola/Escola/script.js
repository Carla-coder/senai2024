// script.js

$(document).ready(function () {
    // Adiciona rolagem suave para os links da barra de navegação
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});
