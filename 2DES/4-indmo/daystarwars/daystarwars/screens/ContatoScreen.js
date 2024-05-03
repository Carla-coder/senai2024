// ContatoScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ContatoScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Tela de Contato</Text>
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
        title="Ir para Saga 3"
        onPress={() => navigation.navigate('Saga3')}
      />
    </View>
  );
};

export default ContatoScreen;
