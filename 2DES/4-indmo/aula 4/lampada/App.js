import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
=======
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Switch } from 'react-native';

const icon = require('./assets/icon.png');

export default function App() {
  const [habilitado, setHabilitado] = new useState(false);
  const habilitar = () => {
    setHabilitado(!habilitado);
  }
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={styles.icon}
      />

      <Switch
        value={habilitado}
        onValueChange={habilitar}
      />

      <Image
        source={{
          uri: (habilitado)
            ? "./assets/lampadaon.png.png"
            : "./assets/lampadaoff.png.png"
        }}
        style={[styles.lampada, { opacity: 0.8 }]} //opacity tira um pouco o brilho da imagem//
      />


>>>>>>> 515ee9268b359804ce284ee6ccbeeb2935ff3f1d
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
=======
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px'
  },

  icon: {
    width: '68px',
    height: '68px'
  },

  lampada: {
    width: '200px',
    height: '200px'
  },

>>>>>>> 515ee9268b359804ce284ee6ccbeeb2935ff3f1d
});
