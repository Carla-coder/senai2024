// Saga2Screen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Saga2Screen = ({ navigation }) => {
  return (
    <View>
      <Text>Saga 2 Screen</Text>
      <Button
        title="Voltar para a Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Ir para Saga 1"
        onPress={() => navigation.navigate('Saga1')}
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

export default Saga2Screen;
