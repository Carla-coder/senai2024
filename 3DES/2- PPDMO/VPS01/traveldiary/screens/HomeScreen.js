
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Criar Nova Entrada" onPress={() => navigation.navigate('CreateEntry')} />
      <Button title="Ver Entradas" onPress={() => navigation.navigate('ViewEntry')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
});

export default HomeScreen;
