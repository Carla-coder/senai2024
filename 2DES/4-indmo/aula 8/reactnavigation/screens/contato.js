import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'

const Contato = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  const handleEnviarMensagem = () => {
    // Aqui você pode adicionar lógica para enviar a mensagem
    console.log(`Nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`)
    // Limpar campos após enviar mensagem
    setNome('')
    setEmail('')
    setMensagem('')
  }

  return (
      <View style={styles.container}>
        <Text style={styles.text}>Entre em Contato</Text>
        <TextInput
          style={styles.input}
          placeholder='Nome'
          value={nome}
          onChangeText={text => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder='Mensagem'
          multiline
          numberOfLines={4}
          value={mensagem}
          onChangeText={text => setMensagem(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleEnviarMensagem}>
          <Text style={styles.buttonText}>Enviar Mensagem</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  input: {
    width: '30%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#d3d3d3',
    color: '#000',
  },
  button: {
    width: '30%',
    height: 40,
    backgroundColor: '#5d8aa8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  }
})

export default Contato;
