import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

function DarthVaderScreen() {
  return (
    <ImageBackground
    source={require('../assets/image/space-background.jpg')}
    style={styles.background}
    resizeMode="cover"
  >
    
    <View style={styles.container}>
      <Image
        source={require('../assets/image/darkside.jpg')}
        style={styles.image}
        // resizeMode="contain"
      />
      <Text style={styles.text}>Darth Vader te saudando com um Joínha!</Text>
      {/* <Text style={styles.text}></Text> */}
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    text: {
      color: '#fff', 
      marginTop: 20,
      textAlign: 'center',
      fontSize: width * 0.1,
      fontFamily: 'Star Jedi',
      color: '#FFD700',
    },
    image: {
      width: width * 0.8,
      height: height * 0.6, 
      resizeMode: 'contain',
    },
  });
  
  export default DarthVaderScreen;