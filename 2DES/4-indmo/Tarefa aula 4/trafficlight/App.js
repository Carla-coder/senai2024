import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Switch } from 'react-native';
import React, { useState, useEffect } from 'react';

const icon = require('./assets/guardatransito.png');
const greenLight = require('./assets/greenlight.png');
const redLight = require('./assets/yellowlight.png');
const yellowLight = require('./assets/redlight.png');


export default function App() {
  const [habilitado, setHabilitado] = useState(false);
  const [corAtual, setcorAtual] = useState('vermelho');

  const habilitar = () => {
    setHabilitado(!habilitado);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (habilitado) {
        switch (corAtual) {
          case 'vermelho':
            setcorAtual('verde');
            break;
          case 'verde':
            setcorAtual('amarelo');
            break;
            case 'amarelo':
              setcorAtual('vermelho');
              break;
          default:
              break;
          }
        }
      }, 2000); // tempo de mudança da cor do LED em ms   
    
    return () => {
     clearInterval(interval);
  }; 
}, [habilitado, corAtual]);

   return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />

      <Switch value={habilitado} onValueChange={habilitar} />

      <Image
      source={corAtual === 'verde' ? greenLight : corAtual === 'amarelo' ? yellowLight : redLight}
      style={[styles.trafficLight]}
      resizeMode="contain"
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
    gap: 32
  },

  icon: {
    width: 350,
    height: 350
  },

  trafficLight: {
    width: 150,
    height: 150,
    aspectRatio: 1,
    resizeMode: 'contain'
  },
});
