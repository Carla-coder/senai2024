import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import logo from '../image/Logo Escuta ai.png'

export default function QuemSomosScreen () {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} resizeMode='contain' />
        <Text style={styles.description}>
          {`Escuta Aí!

A Escuta Aí! é uma plataforma dedicada à promoção e facilitação da descoberta de novas músicas e artistas, bem como à criação de uma comunidade vibrante de amantes da música. Fundada com a missão de conectar pessoas através da música, a Escuta Aí! oferece uma experiência única e personalizada, adaptada aos gostos individuais de cada usuário.

Nossa plataforma permite que os usuários explorem uma vasta gama de gêneros musicais, criem e compartilhem playlists personalizadas e descubram novas músicas por meio de recomendações inteligentes e colaborativas. Além disso, incentivamos a interação entre os membros da nossa comunidade, possibilitando que compartilhem suas músicas favoritas, recomendem artistas emergentes e participem de discussões animadas sobre os mais diversos aspectos do mundo da música.

Na Escuta Aí!, acreditamos que a música é uma linguagem universal que transcende fronteiras e culturas, e estamos empenhados em proporcionar uma experiência enriquecedora e inspiradora para todos os amantes da música, independentemente de seu gosto ou origem.

Junte-se a nós na jornada de descoberta musical e compartilhe sua paixão pela música na Escuta Aí!`}
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black'
  },
  logo: {
    width: 400,
    height: 400,
    marginBottom: 20
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: '#f2f2f2'
  }
})
