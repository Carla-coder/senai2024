// Saga2Screen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Saga2Screen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/image/space-background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Segunda Trilogia</Text>
          <Text style={styles.summary}>
            A Trilogia Sequela de Star Wars, composta por "O Despertar da Força",
            "Os Últimos Jedi" e "A Ascensão Skywalker", continua a saga épica
            iniciada na Trilogia Original. A história se passa décadas após os
            eventos do Retorno de Jedi, com a galáxia enfrentando uma nova ameaça: a
            Primeira Ordem, uma organização militar inspirada no antigo Império
            Galáctico. Nesse novo capítulo, somos apresentados a uma nova geração de
            personagens, incluindo Rey, Finn e Poe Dameron, bem como a volta de
            figuras familiares como Leia Organa, Han Solo e Luke Skywalker. Rey, uma
            jovem desertora do planeta Jakku, descobre que tem uma conexão com a
            Força e se torna uma peça central na luta contra a Primeira Ordem.
            Enquanto isso, Kylo Ren, o enigmático líder da Primeira Ordem e filho de
            Han Solo e Leia Organa, luta para encontrar seu lugar no universo e lida
            com o conflito entre o lado luminoso e o lado sombrio da Força. Ao longo
            da trilogia, somos levados a uma jornada de descoberta, redenção e
            confronto, enquanto os heróis lutam para derrotar a Primeira Ordem e
            restaurar a paz na galáxia. A Trilogia Sequela é marcada por momentos de
            ação emocionante, revelações surpreendentes e um forte foco nos laços
            familiares e na luta entre o bem e o mal. Com uma combinação de novos
            personagens cativantes, efeitos visuais impressionantes e uma narrativa
            envolvente, a Trilogia Sequela expande o universo de Star Wars e
            continua a encantar fãs de todas as idades.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparente',
    paddingHorizontal: width * 0.05,
  },
  title: {
    fontSize: width * 0.1,
    fontWeight: 'bold',
    marginBottom: height * 0.05,
    color: '#4169E1',
    fontFamily: 'Star Jedi', // Fonte inspirada em Star Wars
  },
  summary: {
    textAlign: 'center',
    marginBottom: height * 0.02,
    color: '#FFD700',
    fontSize: width * 0.04,
    fontWeight: 'bold',
    fontFamily: 'Star Jedi',
  },
});

export default Saga2Screen;
