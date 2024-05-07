// Mediator pattern implementation
const ChatMediator = (function() {

    let messages = [];

    return {

         // Enviar mensagem para o chat

        sendMessage: function(sender, message) {

            messages.push({ id: generateId(), sender, message }); // Adiciona uma nova mensagem ao array

            ChatUI.updateChat(); // Atualiza a interface do chat
        },

        // Obter todas as mensagens

        getMessages: function() {

            return messages;

        }

    };

})();

// Função para gerar IDs únicos

function generateId() {

    return '_' + Math.random().toString(36).substr(2, 9);

}

// UI controller

const ChatUI = (function() {

    // Elemento da interface de chat

    const chatBox = document.getElementById('chat-box');

    return {

        // Atualiza a interface do chat

        updateChat: function() {

            chatBox.innerHTML = ''; // Limpa o conteúdo atual do chat

            // Para cada mensagem, cria um elemento HTML e adiciona ao chat

            ChatMediator.getMessages().forEach(({ id, sender, message }) => {

                const messageElement = document.createElement('div');

                messageElement.textContent = `${sender}: ${message}`;
                messageElement.classList.add('message');
                messageElement.dataset.messageId = id;

                // Adiciona classes de estilo com base no remetente da mensagem

                if (sender === ' Leticia') {

                    messageElement.classList.add('amiga-message');

                } else if (sender === ' Carla') {

                    messageElement.classList.add('amiga-message2');

                } else {

                    messageElement.classList.add('mediator-message');

                }

                chatBox.appendChild(messageElement); // Adiciona a mensagem ao chat

            });

        }

    };

})();

// Função para enviar uma mensagem

function sendMessage() {

    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message !== '') {

        // Envia uma mensagem do remetente "Leticia"

        ChatMediator.sendMessage(' Leticia', message); // Changed sender name to "Amiga Leticia"

        simulateReply(message); // Simula a resposta de uma amiga virtual

        userInput.value = ''; // Limpa o campo de entrada

    }

}

// Simula a resposta de uma amiga virtual

function simulateReply(message) {

    let replyMessage = '';

    // Simula respostas com base na mensagem recebida

    if (message.toLowerCase() === 'oi') {

        replyMessage = 'Oi! Tudo bem?';

    } else if (message.toLowerCase() === 'oi tudo bem?') {

        replyMessage = 'Oi! Estou bem e você?';

    } else if (message.toLowerCase() === 'q bom') {

        replyMessage = 'Mensagem bloqueada.';
        blockFriend(); // Desativa a entrada do usuário após o envio de "q bom"

    } else {

        replyMessage = 'Desculpe, não entendi. Poderia repetir?';

    }

    // Envia a resposta da amiga virtual com um atraso

    setTimeout(() => {

        ChatMediator.sendMessage(' Carla', replyMessage); // Changed sender name to "Amiga Carla"

    }, 2000); // Resposta atrasada da amiga virtual

    // Inicia um temporizador para verificar a resposta

    startTimer();

}

let timer;

// Função para iniciar o temporizador de verificação de resposta

function startTimer() {

    clearTimeout(timer); // Limpa o temporizador anterior, se houver

    timer = setTimeout(() => {

        console.log("Tempo esgotado! Leticia bloqueada.");
        blockFriend(); // Bloqueia a amiga virtual "Leticia" por não responder

    }, 5000); // 10 segundos de tempo limite

}

// Função para bloquear a amiga virtual

function blockFriend() {

    // Envia uma mensagem informando sobre o bloqueio

    const replyMessage = 'Neste código minha função é facilitar a comunicação entre vocês, gerenciando  suas trocas de mensagens,  garantindo que cada mensagem seja destribuida para o outro indiretamente, sendo assim mais flexivel.';
    ChatMediator.sendMessage('Mediator', replyMessage);

}

// Ouvinte de evento para a tecla "Enter"

document.getElementById('user-input').addEventListener('keypress', function(event) {

    if (event.key === 'Enter') {

        sendMessage();

    }
    
});

// Exibição inicial do chat
ChatUI.updateChat();
