import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Saga1Screen = ({ navigation }) => {
  return (

    <ImageBackground
      source={require('../assets/image/space-background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Primeira Trilogia</Text>
          <Text style={styles.summary}>
            A Trilogia Original de Star Wars, composta por "Episódio IV: Uma Nova
            Esperança", "Episódio V: O Império Contra-Ataca" e "Episódio VI: O
            Retorno de Jedi", é uma história épica que segue as aventuras de Luke
            Skywalker, Princesa Leia, Han Solo e seus aliados na luta contra o
            malvado Império Galáctico, liderado pelo sombrio Darth Vader e pelo
            Imperador Palpatine. A narrativa se desenrola em um universo vasto,
            repleto de planetas, raças alienígenas, batalhas espaciais e intrigas
            políticas. No centro da trama está o conflito entre o lado luminoso e o
            lado sombrio da Força, uma energia mística que permeia o universo e
            concede poderes extraordinários aos seus usuários. Ao longo da trilogia,
            testemunhamos o amadurecimento de Luke Skywalker, um jovem fazendeiro
            destinado a se tornar um Cavaleiro Jedi e enfrentar seu destino como o
            herói que irá restaurar o equilíbrio na galáxia. Ao mesmo tempo, somos
            apresentados aos dilemas morais de Darth Vader, um antigo Jedi
            corrompido pelo lado sombrio da Força, e às intrigas da Rebelião, uma
            aliança de planetas lutando pela liberdade contra a tirania imperial.
            Com uma mistura de ação, aventura, drama e momentos emocionantes, a
            Trilogia Original de Star Wars captura a imaginação dos espectadores e
            se tornou um marco na cultura pop, deixando um legado duradouro que
            continua a inspirar gerações.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>


  );
};

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
    backgroundColor: 'transparent',
    paddingHorizontal: width * 0.05,
    // paddingTop: height * 0.1, // adicionado recentemente
  },
  title: {
    fontSize: width * 0.1,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
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

export default Saga1Screen;
