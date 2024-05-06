// HomeScreen.js
import React from 'react';
import { StyleSheet, Text, ImageBackground, Dimensions, TouchableOpacity, Linking, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    Linking.openURL('http://www.starwars.com/star-wars-day');
  };

  return (
    <ImageBackground source={require('../assets/image/starwars.png')} 
    style={[styles.background, { width: width, height: height }]}
    resizeMode="contain">

<Image
  source={require('../assets/image/Yoda-icon.png')}
  style={styles.icon}
/>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Ir para o site oficial</Text>
      </TouchableOpacity>
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
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: 'black',
  },
  icon: {
    width: width * 0.1, 
    height: height * 0.1, 
    marginBottom: 20, // Espaçamento entre o ícone e o botão
    borderRadius: (width * 0.5) / 2, 
    overflow: 'hidden', 
  },
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    marginVertical: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;
