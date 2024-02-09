import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
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

  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#000000',
    color: '#fff',
    left: 0,
    bottom: 0,
    width: '100%',
    color: '#fff',
    fontSize: '18px',
  },

});
