import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PokemonCard = ({ pokemon }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name}</Text>
      <TouchableOpacity onPress={toggleDetails} style={styles.button}>
        <Text style={styles.buttonText}>Detalhes</Text>
      </TouchableOpacity>

      {showDetails && (
        <View style={styles.detailsContainer}>
          <Text>ID: {pokemon.id}</Text>
          <Text>Altura: {pokemon.height}</Text>
          <Text>Peso: {pokemon.weight}</Text>
          <Text>Habilidades: {pokemon.abilities.join(', ')}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#d1ecf3',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 18, 
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center', 
    color: '#333', 
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  detailsContainer: {
    marginTop: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
  detailsText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    fontFamily: 'Roboto',
  },
});

export default PokemonCard;

