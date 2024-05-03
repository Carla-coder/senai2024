// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Ir para Saga 1"
        onPress={() => navigation.navigate('Saga1')}
      />
      <Button
        title="Ir para Saga 2"
        onPress={() => navigation.navigate('Saga2')}
      />
      <Button
        title="Ir para Saga 3"
        onPress={() => navigation.navigate('Saga3')}
      />
      <Button
        title="Ir para Contato"
        onPress={() => navigation.navigate('Contato')}
      />
    </View>
  );
};

export default HomeScreen;
