document.addEventListener('DomContentLoaded', function() {
    const button = document.querySelectorAll(".btn-details");

    buttons.forEach(function(button) {
        button.addEventListener("click", function(e) {
          const targetModalId = button.getAttribute('data-bs-target')
        });
        const modal = document.querySelector(targetModalId);

        if (modal) {
            const modalBS = new boostrap.Modal(modal);
            modaslBS.show();
        }
    });
});