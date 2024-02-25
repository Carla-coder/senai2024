import React, { useState } from 'react'
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  Switch
} from 'react-native'

const sunIcon = './assets/sun.png'
const moonIcon = './assets/full-moon.png'

export default function App () {
  const [habilitado, setHabilitado] = new useState(false)
  const habilitar = () => {
    setHabilitado(!habilitado)
  }

  const [isDia, setIsDia] = new useState(true)

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
        source={{
          uri: habilitado ? sunIcon : moonIcon
        }}
        resizeMode='contain'
        style={styles.icon}
      />

      <Switch value={habilitado} onValueChange={habilitar} />

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
    height: 200,
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
