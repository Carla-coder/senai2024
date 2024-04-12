import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Contato = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
  
    const handleEnviarMensagem = () => {
      // Aqui você pode adicionar lógica para enviar a mensagem
      console.log(`Nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`);
      // Limpar campos após enviar mensagem
      setNome('');
      setEmail('');
      setMensagem('');
    };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem Vindo à Tela de Contato</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={text => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mensagem"
        multiline
        numberOfLines={4}
        value={mensagem}
        onChangeText={text => setMensagem(text)}
      />
      <Button title="Enviar Mensagem" onPress={handleEnviarMensagem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
    input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
    button: {
    width: '80%',
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
    buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },





});

export default Contato;