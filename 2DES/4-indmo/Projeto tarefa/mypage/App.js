import React from 'react';
import { StatusBar, Linking } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const handleClick = () => {
    console.log('Botão clicado!');
  };

  const openGitHub = () => {
    const githubUrl = 'https://github.com/Carla-coder';
    Linking.openURL(githubUrl);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Page</Text>
      <p></p>

      <Image style={styles.logo}
      source={{uri:'https://carla-coder.github.io/images/beecountrylogo.png'
    }}
    />
      <StatusBar style="auto" />
      <p></p>
      
      <h2 style={styles.h2}>MUITO PRAZER, <span style={styles.span}> SOU CARLA MOZENA.</span></h2>

      <Image style={styles.images} 
      source={{uri:'https://gifdb.com/images/high/cute-whirling-bee-v9h9cuie1dl3mhu1.gif'}}
      />

      <p style={styles.p}>Atualmente fazendo transição de carreira para a Área de Tecnologia. Me especializando em HTML, CSS, JavaScript, MySQL, React e React-Native.</p>

      <p></p>

      <TouchableOpacity onPress={openGitHub} style={styles.boxLinks}>
        <Text style={[styles.links, styles.btn]}>GitHub: /Carla-coder</Text>
      </TouchableOpacity>
     
      <View style={styles.footer}>@2024 by Carla-coder Todos os direitos reservados.</View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 38,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },

  logo: {
    width: 180,
    height: 200,
  },

  h2: {
    color: '#fdf5e6',
    fontSize: 38,
    textAlign: 'center',
   
  },

  span: {
      color: '#5d8aa8',
  },

  images: {
     width: 100,
     height: 100,
     borderRadius: 50,
  },

  p: {
    fontFamily: 'Roboto',
    color: '#fdf5e6',
    fontSize: 35,
    textAlign: 'center',
    left: 0,
    bottom: 0,
    width: '50%',
  },

  links: {
    color: '#5d8aa8',
  },

  btn: {
      padding: 20,
      borderRadius: 20,
      cursor: 'pointer',
      backgroundColor: '#5d8aa8',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#000',
      fontSize: 30,
      bottom: 20,
  },

  footer: {
    position: 'absolute',
    backgroundColor: '#000000',
    color: '#fff',
    left: 0,
    bottom: 0,
    width: '100%',
    color: '#fdf5e6',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
