import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground
} from 'react-native'

export default function CalculoIdade () {
  const [dataNascimento, setDataNascimento] = useState('')
  const [dataAtual, setDataAtual] = useState('')
  const [idade, setIdade] = useState(null)

  const calcularIdade = () => {
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/

    if (!regex.test(dataNascimento) || !regex.test(dataAtual)) {
      Alert.alert(
        'Erro',
        'Por favor, insira datas válidas no formato DD/MM/AAAA'
      )
      return
    }

    const dataNascimentoArray = dataNascimento.split('/').map(Number)
    const dataAtualArray = dataAtual.split('/').map(Number)

    const anoNascimento = dataNascimentoArray[2]
    const mesNascimento = dataNascimentoArray[1] - 1
    const diaNascimento = dataNascimentoArray[0]

    const anoAtual = dataAtualArray[2]
    const mesAtual = dataAtualArray[1] - 1
    const diaAtual = dataAtualArray[0]

    const dataNascimentoObj = new Date(
      anoNascimento,
      mesNascimento,
      diaNascimento
    )
    const dataAtualObj = new Date(anoAtual, mesAtual, diaAtual)

    const idadeEmMilissegundos = dataAtualObj - dataNascimentoObj
    const milissegundosEmAno = 1000 * 60 * 60 * 24 * 365.25
    const idadeCalculada = Math.floor(idadeEmMilissegundos / milissegundosEmAno)

    setIdade(idadeCalculada)
  }
  return (

    <ImageBackground 
      source={require('./image/pessoas.jpg')} 
      style={styles.backgroundImage}
    >

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Data de Nascimento (DD/MM/AAAA)'
          value={dataNascimento}
          onChangeText={text => setDataNascimento(text)}
        />

        <TextInput
          style={styles.input}
          placeholder='Data Atual (DD/MM/AAAA)'
          value={dataAtual}
          onChangeText={text => setDataAtual(text)}
        />

        <TouchableOpacity style={styles.button} onPress={calcularIdade}>
          <Text style={styles.buttonText}>Calcular Idade</Text>
        </TouchableOpacity>

        {idade !== null && (
          <Text style={styles.ageText}>Sua idade é: {idade} anos</Text>
        )}
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  input: {
    width: '20%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  ageText: {
    marginTop: 20,
    fontSize: 20,
    color: '#000',
  }
})
