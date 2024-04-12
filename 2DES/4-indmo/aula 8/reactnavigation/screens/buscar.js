import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Buscar = () => {
    const abrirFacebook = () => {
        Linking.openURL('https://www.facebook.com/atelieemarcenariabeecountry');
      };
    
      const abrirInstagram = () => {
        Linking.openURL('https://www.instagram.com/Carla_coder2023');
      };
    
      const abrirLinkedIn = () => {
        Linking.openURL('https://www.linkedin.com/in/carlamozena');
      };
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Bem Vindo às Minhas Mídias Sociais</Text>
    <View style={styles.socialContainer}>
      <TouchableOpacity style={styles.iconContainer} onPress={abrirFacebook}>
        <Ionicons name="logo-facebook" size={30} color="#3b5998" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={abrirInstagram}>
        <Ionicons name="logo-instagram" size={30} color="#c13584" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={abrirLinkedIn}>
        <Ionicons name="logo-linkedin" size={30} color="#0077b5" />
      </TouchableOpacity>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  iconContainer: {
    marginHorizontal: 10,
  },
});

export default Buscar;