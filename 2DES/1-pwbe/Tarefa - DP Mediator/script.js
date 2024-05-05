document
  .getElementById('user-input')
  .addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      sendMessage()
    }
  })

// Mediator pattern implementation
const ChatMediator = (function () {
  let messages = []

  return {
    sendMessage: function (message) {
      messages.push(message)
      ChatUI.updateChat()
    },
    getMessages: function () {
      return messages
    }
  }
})()

// UI controller
const ChatUI = (function () {
  const chatBox = document.getElementById('chat-box')

  return {
    updateChat: function () {
      chatBox.innerHTML = ''
      ChatMediator.getMessages().forEach(message => {
        const messageElement = document.createElement('div')
        messageElement.textContent = message
        chatBox.appendChild(messageElement)
      })
    }
  }
})()

// Controller
function sendMessage () {
  const userInput = document.getElementById('user-input')
  const message = userInput.value
  if (message.trim() !== '') {
    ChatMediator.sendMessage(message)
    userInput.value = ''
  }
}

// Initial chat display
ChatUI.updateChat()
