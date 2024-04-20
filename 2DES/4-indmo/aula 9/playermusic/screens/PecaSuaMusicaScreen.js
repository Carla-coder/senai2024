import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image
} from 'react-native'
import logo from '../image/Logo Escuta ai.png'

export default function PecaSuaMusicaScreen () {
  const [musica, setMusica] = useState('')
  const [artista, setArtista] = useState('')
  const [mensagemEnviada, setMensagemEnviada] = useState(false)

  const enviarSolicitacao = () => {
    if (musica.trim() === '' || artista.trim() === '') {
      Alert.alert('Campos vazios', 'Por favor, preencha todos os campos.')
      return
    }

    // Aqui você pode enviar a solicitação para o servidor ou fazer qualquer outra ação necessária

    setMusica('')
    setArtista('')
    setMensagemEnviada(true)
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode='contain' />
      <Text style={styles.title}>Peça sua Música</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome da Música'
        value={musica}
        onChangeText={text => setMusica(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Artista'
        value={artista}
        onChangeText={text => setArtista(text)}
      />
      <TouchableOpacity style={styles.button} onPress={enviarSolicitacao}>
        <Text style={styles.buttonText}>Enviar Solicitação</Text>
      </TouchableOpacity>
      {mensagemEnviada && (
        <Text style={styles.successMessage}>
          Solicitação enviada com sucesso!
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black'
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#f2f2f2'
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#333',
    backgroundColor: '#f2f2f2',
    fontSize: 16
  },
  button: {
    backgroundColor: '#B22222',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  successMessage: {
    marginTop: 20,
    color: 'green',
    fontWeight: 'bold'
  }
})
