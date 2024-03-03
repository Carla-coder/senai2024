
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CadastroUsuario({ navigation }) {

  const goToCalculoIdade = () => {

    navigation.navigate('CalculoIdade');

  };

  const goToCalculoJuros = () => {

    navigation.navigate('CalculoJuros');

  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}> O que você gostaria de calcular hoje?</Text>

      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button} onPress={goToCalculoIdade}>

          <Text style={styles.buttonText}>Idade</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToCalculoJuros}>

          <Text style={styles.buttonText}>Juros</Text>

        </TouchableOpacity>

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
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  
});