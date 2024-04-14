import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View,Image, Pressable, Linking } from 'react-native';

export default function App () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome My Page</Text>

      <Image
        style={styles.logo}
        source={{
          uri: 'https://carla-coder.github.io/images/beecountrylogo.png'
        }}
      />
      <StatusBar style='auto' />

      <Text style={styles.h2}>
        NICE TO MEET YOU, <span style={styles.span}> I'M CARLA MOZENA.</span>
      </Text>

      <Image
        style={styles.images}
        source={{
          uri: 'https://gifdb.com/images/high/cute-whirling-bee-v9h9cuie1dl3mhu1.gif'
        }}
      />

      <Text style={styles.p}>
        Currently 54 years old and studying FullStack Systems Development.
        Transitioning careers to the Technology field. Specialized in HTML, CSS,
        JavaScript, Node.js, React, and React-Native.
      </Text>

      <Pressable
        onPress={() => Linking.openURL('https://github.com/Carla-coder')}
      >
        <Text style={[styles.links, styles.btn]}>GitHub: /Carla-coder</Text>
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          @2024 by Carla-coder All rights reserved.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 25,
    color: '#fff'
  },

  logo: {
    width: 180,
    height: 200,
    marginBottom: 20,
  },

  h2: {
    color: '#fdf5e6',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Roboto',
    marginVertical: 20,
  },

  span: {
    color: '#5d8aa8'
  },

  images: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20
  },

  p: {
    fontFamily: 'Roboto',
    color: '#fdf5e6',
    fontSize: 20,
    textAlign: 'center',
    maxWidth: '80%',
    marginBottom: 20,
  },

  links: {
    color: '#5d8aa8',
    fontSize: 20,
  },

  btn: {
    padding: 20,
    borderRadius: 20,
    cursor: 'pointer',
    backgroundColor: '#5d8aa8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  footer: {
    backgroundColor: '#000000',
    width: '100%',
    paddingVertical: 10, 
  },
  footerText: {
    color: '#fdf5e6',
    fontSize: 18,
    textAlign: 'center'
  },
});

  


