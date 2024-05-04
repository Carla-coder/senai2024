// Saga3Screen.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const Saga3Screen = ({ navigation }) => {
  return (
    <ImageBackground
    source={require('../assets/image/space-background.jpg')} 
    style={styles.background}
    resizeMode="cover" 
  >
    <View style={styles.container}>
      <Text style={styles.title}>Terceira Trilogia</Text>
      <Text style={styles.summary}>
        Nesta emocionante continuação, somos apresentados a uma nova geração de
        heróis, como Rey, Finn e Poe Dameron, enquanto eles enfrentam a ameaça
        da Primeira Ordem, uma organização sinistra que surgiu das cinzas do
        Império Galáctico. Ao longo da trilogia, testemunhamos o desenvolvimento
        dos personagens, a descoberta de novos poderes e habilidades, e a
        batalha final entre a luz e a escuridão. Enquanto Rey busca seu lugar no
        universo e confronta seu passado misterioso, Kylo Ren luta com conflitos
        internos e o legado de sua linhagem. A história culmina em uma batalha
        épica entre o bem e o mal, onde os destinos de todos os personagens
        estão em jogo. Com uma combinação de ação emocionante, momentos de
        suspense e reviravoltas inesperadas, a Trilogia Sequela de Star Wars
        oferece uma conclusão satisfatória para a saga Skywalker, ao mesmo tempo
        que abre caminho para novas histórias e aventuras dentro do universo de
        Star Wars.
      </Text>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparente',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 80,
    color: '#4169E1', 
    fontFamily: 'Star Jedi', // Fonte inspirada em Star Wars
  },
  summary: {
    textAlign: 'center',
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Star Jedi',
  },
});

export default Saga3Screen;
