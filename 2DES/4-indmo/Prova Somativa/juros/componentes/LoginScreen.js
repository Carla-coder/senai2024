import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState('');

  const handleLogin = () => {
    if (username === 'usuario') { // usuário válido
      navigation.navigate('Escolha');
    } else {
      alert('Usuário inválido');
    }
  };

  return (
    <ImageBackground source={require('../componentes/image/inicio.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder="Nome de usuário"
          value={username}
          onChangeText={text => setUsername(text)}
          style={styles.input}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  button: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});


