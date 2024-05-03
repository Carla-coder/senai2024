// Saga3Screen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Saga3Screen = ({ navigation }) => {
  return (
    <View>
      <Text>Saga 3 Screen</Text>
      <Button
        title="Voltar para a Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Ir para Saga 1"
        onPress={() => navigation.navigate('Saga1')}
      />
      <Button
        title="Ir para Saga 2"
        onPress={() => navigation.navigate('Saga2')}
      />
      <Button
        title="Ir para Contato"
        onPress={() => navigation.navigate('Contato')}
      />
    </View>
  );
};

export default Saga3Screen;
