import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function JurosScreen() {
  const [valorProduto, setValorProduto] = React.useState('');
  const [porcentagemJuros, setPorcentagemJuros] = React.useState('');
  const [valorTotal, setValorTotal] = React.useState('');

  const calcularJuros = () => {
    const valor = parseFloat(valorProduto);
    const juros = parseFloat(porcentagemJuros) / 100;

    if (!isNaN(valor) && !isNaN(juros)) {
      const total = valor + (valor * juros);
      setValorTotal(total.toFixed(2));
    }
  };

  return (
    <ImageBackground source={require('../componentes/image/juros.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Tela de Juros</Text>
        <TextInput
          placeholder="Valor do produto"
          value={valorProduto}
          onChangeText={text => setValorProduto(text)}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Porcentagem de juros"
          value={porcentagemJuros}
          onChangeText={text => setPorcentagemJuros(text)}
          keyboardType="numeric"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={calcularJuros}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        {valorTotal !== '' && <Text style={styles.result}>Total a pagar: R$ {valorTotal}</Text>}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adiciona um fundo branco semi-transparente para melhor legibilidade do texto
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: '#000', // Define a cor do texto para branco
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 10,
    width: 200,
    borderRadius: 5,
    backgroundColor: '#fff', // Define a cor de fundo do TextInput para branco
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    marginVertical: 10,
    width: 200,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  result: {
    fontSize: 20,
    marginTop: 20,
    color: '#fff',
  },
});
