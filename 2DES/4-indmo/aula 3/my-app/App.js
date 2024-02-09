import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <p></p>
      <Text style={styles.text}>Primeira Aula de EXPO</Text>
      <p></p>
    
    <Image 
    style={styles.logo}
    source={{
      uri: 'https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!sw800'}} />
    <StatusBar style="auto" />

    <Text style={styles.text}>Senai 2024</Text>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Cursive',
    alignContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },

  logo: {
    width: 200,
    height:200,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
