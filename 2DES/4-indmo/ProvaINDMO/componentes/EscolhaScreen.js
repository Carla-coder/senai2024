import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default function EscolhaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Escolha</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Switch')}>
        <Text style={styles.buttonText}>Ir para Tela de Switch</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Juros')}>
        <Text style={styles.buttonText}>Ir para Tela de Juros</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});