// ContatoScreen.js
import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity, 
  ImageBackground,
  Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window');

const ContatoScreen = ({ navigation }) => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [mensagemEnviada, setMensagemEnviada] = useState(false)

  const handleSubmit = () => {
    if (!nome || !email || !mensagem) {
      Alert.alert('Aviso', 'Por favor, preencha todos os campos.')
    } else {
      // Aqui você pode adicionar a lógica para enviar o formulário
      // Por exemplo, enviar os dados para um servidor
      console.log('Nome:', nome)
      console.log('Email:', email)
      console.log('Mensagem:', mensagem)
      // Limpar os campos após o envio
      setNome('')
      setEmail('')
      setMensagem('')
      setMensagemEnviada(true)
    }
  }

  return (
    <ImageBackground
    source={require('../assets/image/DV.jpg')} 
    style={styles.background}
    resizeMode="cover" 
  >
    <View style={styles.container}>
      <Text style={styles.title}>Entre em Contato com Darth Vader</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome'
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder='Mensagem'
        value={mensagem}
        onChangeText={setMensagem}
        multiline={true}
        numberOfLines={4}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Enviar Mensagem</Text>
      </TouchableOpacity>
      {mensagemEnviada && (
        <Text style={styles.successMessage}>Mensagem enviada com sucesso!</Text>
      )}
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: width * 0.1,
  },
  title: {
    textAlign: 'center',
    fontSize: width * 0.08,
    fontWeight: 'bold',
    marginBottom: height * 0.03,
    color: '#FFD700',
    fontFamily: 'Star Jedi' // Fonte inspirada em Star Wars
  },
  input: {
    width: '100%',
    height: height * 0.05,
    backgroundColor: '#333333',
    paddingHorizontal: 10,
    marginBottom: height * 0.02,
    borderRadius: 5,
    color: '#FFD700'
  },
  messageInput: {
    height: height * 0.15, 
    fontSize: width * 0.04, 
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.05,
    backgroundColor: '#FFD700',
    borderRadius: 5,
    marginTop: height * 0.01,
  },
  buttonText: {
    color: '#333',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    fontFamily: 'Star Jedi'
  },
  successMessage: {
    marginTop: height * 0.01,
    color: 'green',
    fontSize: width * 0.04,
  }
})

export default ContatoScreen
