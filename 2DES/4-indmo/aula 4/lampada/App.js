import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Image, Switch } from 'react-native';

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
            ? "./assets/lampadaon.png"
            : "./assets/lampadaoff.png"
        }}
        style={[styles.lampada, { opacity: 0.8 }]} //opacity tira um pouco o brilho da imagem//
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

});
