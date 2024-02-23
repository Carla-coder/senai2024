import React, { useState } from 'react';
import { StyleSheet, View, Image, Switch, Text, TouchableOpacity } from 'react-native';

const sunIcon = require('./assets/sun.png');
const moonIcon = require('./assets/full-moon.png');

export default function App() {
  const [habilitado, setHabilitado] = useState(false);

  const habilitar = () => {
    setHabilitado(!habilitado);
  };

  const saudacao = habilitado ? 'Boa Noite' : 'Bom Dia';

  return (
    <View style={styles.container}>
      <Image source={habilitado ? moonIcon : sunIcon} style={styles.icon} />

      <Switch value={habilitado} onValueChange={habilitar} />

      <TouchableOpacity onPress={habilitar}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{saudacao}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
