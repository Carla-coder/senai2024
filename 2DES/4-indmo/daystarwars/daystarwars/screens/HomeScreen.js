// HomeScreen.js
import React from 'react';
import { StyleSheet, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/image/starwars.png')} 
    style={[styles.background, { width: width, height: height }]}
    resizeMode="contain">
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    maxWidth: width, // Define a largura máxima para a imagem
    maxHeight: height, // Define a altura máxima para a imagem
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});

export default HomeScreen;
