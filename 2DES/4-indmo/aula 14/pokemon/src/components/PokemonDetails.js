import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PokemonDetails = ({ pokemon }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pokemon.name}</Text>
      <Image source={{ uri: pokemon.image }} style={styles.pokemonImageLarge} />
      <Text>ID: {pokemon.id}</Text>
      <Text>Height: {pokemon.height}</Text>
      <Text>Weight: {pokemon.weight}</Text>
      <Text>Abilities: {pokemon.abilities}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pokemonImageLarge: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default PokemonDetails;