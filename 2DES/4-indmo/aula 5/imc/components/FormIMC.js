import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable, Dimensions } from 'react-native';
import MaskInput from 'react-native-mask-input';

const { width, height } = Dimensions.get('screen');

export default function FormIMC({ navigation }) {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');

  const calcImc = () => {
    const numberPeso = Number(peso);
    const numberAltura = Number(altura);
    setImc((numberPeso / (numberAltura ** 2)).toFixed(2));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Calculadora de IMC</Text>
     
      
      <MaskInput
        mask={[/\d/, /\d/, /\d/, '.', /\d/]}
        style={styles.textInput}
        onChangeText={(masked, unmasked) => setPeso(masked)}
        value={peso}
        placeholder='Digite seu peso'
        keyboardType='numeric'
      />
      <MaskInput
        mask={[/\d/, '.', /\d/, /\d/]}
        style={styles.textInput}
        onChangeText={(masked, unmasked) => setAltura(masked)}
        value={altura}
        placeholder='Digite sua altura'
        keyboardType='numeric'
      />

      <Pressable
        style={styles.button}
        onPress={calcImc}
      >
        <Text>Calcular</Text>
      </Pressable>

       <Text>Seu IMC é: {imc}</Text>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10, // gap não é uma propriedade válida
    flex: 1,
  },
  textInput: {
    width: 200,
    height: 40,
    borderColor: '#006eff',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    padding: 5,
    margin: 10,
  },
  button: {
    backgroundColor: '#f0f0f0',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});