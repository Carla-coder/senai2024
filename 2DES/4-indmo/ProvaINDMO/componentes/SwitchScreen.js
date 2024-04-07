import { View, Text, Button, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function SwitchScreen() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    require('../componentes/image/bom dia.jpg'),
    require('../componentes/image/boa noite.jpg'),
  ];

  const toggleImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Switch</Text>
      <Button title="Alternar Imagem" onPress={toggleImage} />
      <Image source={images[imageIndex]} style={styles.image} />
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
  image: {
    width: 400,
    height: 400,
    marginTop: 20,
  },
  button: {
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
  },
  input2: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
  },

});
