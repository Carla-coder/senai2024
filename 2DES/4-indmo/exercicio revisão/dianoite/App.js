import React, { useState } from 'react'
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'

const sunIcon = require('./assets/sun.png')
const moonIcon = require('./assets/full-moon.png')

export default function App () {
  const [isDia, setIsDia] = useState(true)

  const alternarDiaNoite = () => {
    setIsDia(!isDia)
  }

  const alternarSaudacao = () => {
    return isDia ? 'Bom Dia' : 'Boa Noite'
  }

  const cordeFundo = () => {
    return isDia ? 'lightyellow' : 'lightblue'
  }

  const handleButtonClick = () => {
    alternarDiaNoite()
  }

  return (
    <View style={[styles.container, { backgroundColor: cordeFundo() }]}>
      <Image
        source={
          isDia
            ? require('./assets/sun.png')
            : require('./assets/full-moon.png')
        }
        resizeMode='contain'
      />

      <Text onPress={alternarDiaNoite}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Clique Aqui!</Text>
        </View>
      </Text>

      <Pressable onPress={handleButtonClick}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{alternarSaudacao()}</Text>
        </View>
      </Pressable>

      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 200,
    height:200,
    resizeMode: 'contain',
    marginVertical: 20
  },
  button: {
    backgroundColor: '#949494',
    padding: 20,
    marginTop: 20,
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }
})
