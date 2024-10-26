// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

// export default function LoginScreen({ navigation }) {
//   const [name, setName] = useState('');

//   const handleLogin = () => {
//     navigation.navigate('Chat', { name });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Bem-vindo ao AppChat!</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Digite seu nome"
//         value={name}
//         onChangeText={setName}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Entrar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     justifyContent: 'center', 
//     padding: 20, 
//     backgroundColor: '#F5F5F5' 
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#35797d',
//   },
//   input: { 
//     borderBottomWidth: 1, 
//     marginBottom: 20, 
//     padding: 10, 
//     borderColor: '#35797d', 
//     fontSize: 18,
//   },
//   button: {
//     backgroundColor: '#35797d', 
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   }
// });



import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState('');

  const handleLogin = () => {
    navigation.navigate('Chat', { name });
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao AppChat!</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Centraliza o container na tela
    backgroundColor: '#F5F5F5',
  },
  container: {
    width: '90%', // Largura do container
    maxWidth: 400, // Largura máxima
    padding: 20,
    backgroundColor: '#FFFFFF', // Cor de fundo do container
    borderRadius: 10, // Bordas arredondadas
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Sombra no Android
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#35797d',
  },
  input: { 
    borderBottomWidth: 1, 
    marginBottom: 20, 
    padding: 10, 
    borderColor: '#35797d', 
    fontSize: 18,
  },
  button: {
    backgroundColor: '#35797d', 
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
