
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function CalculoJuros() {

  // Estados para armazenar o valor, taxa de juros e o valor total após o cálculo 
  const [valor, setValor] = useState('');
  const [taxaJuros, setTaxaJuros] = useState('');
  const [valorTotal, setValorTotal] = useState(null);

  // Função para calcular juros com base no valor e na taxa de juros inseridos
  const calcularJuros = () => {
    // Calcula o valor total com base na fórmula de juros simples
    const valorCalculado = parseFloat(valor) + (parseFloat(valor) * parseFloat(taxaJuros) / 100);
    // Atualiza o estado do valor total, limitando o número de casas decimais a 2
    setValorTotal(valorCalculado.toFixed(2));

  };

  return (
    // Componente de imagem de fundo
    <ImageBackground
    source={require('./image/juros.jpg')}
    style={styles.backgroundImage}
    >

    <View style={styles.container}>

      <TextInput

        style={styles.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={text => setValor(text)}

      />

      <TextInput

        style={styles.input}
        placeholder="Porcentagem de Juros"
        keyboardType="numeric"
        value={taxaJuros}
        onChangeText={text => setTaxaJuros(text)}

      />

      <TouchableOpacity style={styles.button} onPress={calcularJuros}>

        <Text style={styles.buttonText}>Calcular Juros</Text>

      </TouchableOpacity>

      {valorTotal !== null && (

        <Text style={styles.resultText}>Resultado do Cálculo de Juros: R$ {valorTotal}</Text>

      )}

    </View>
    </ImageBackground>
  );

}

// Estilos para os componentes
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  resultText: {
    marginTop: 20,
    fontSize: 20,
    color: '#000',
  },

});