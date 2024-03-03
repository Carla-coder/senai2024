
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import MaskInput from 'react-native-mask-input';

const { width, height } = Dimensions.get('screen');

const users = [

  { username: 'user1', pass: '123456' },
  { username: 'user2', pass: '654321' }

];

export default function LoginForm({ navigation }) {

  const [username, setUsername] = React.useState('user1');
  const [pass, setPass] = React.useState('123456');


  const validaUsuario = () => {

    const foundUser = users.find(user => user.username === username && user.pass === pass);

    if (foundUser) {

      navigation.navigate("CadastroUsuario"); 

    }

  };

  return (

    <ImageBackground

      source={require('./image/inicio.jpg')}

      style={styles.backgroundImage} 
    >

    <View style={styles.container}>

      <Text style={styles.title}>Formulário de login</Text>

      <View style={styles.form}>

        {/* USERNAME */}

        <MaskInput

          style={styles.textInput}
          onChangeText={(masked, unmasked) => setUsername(masked)}
          value={username}
          placeholder="Digite seu username"

        />

        {/* SENHA */}

        <MaskInput

          mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
          style={styles.textInput}
          onChangeText={(masked, unmasked) => setPass(masked)}
          value={pass}
          placeholder="Digite sua senha"
          keyboardType="numeric"

        />

        <TouchableOpacity onPress={validaUsuario}>

          <Text>Login</Text>

        </TouchableOpacity>

      </View>

    </View>

   </ImageBackground>

);

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: width * 0.8,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  textInput: {
    padding: 5,
    height: 40,
    width: 200,
    borderColor: '#fff',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginBottom: 10,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  
});