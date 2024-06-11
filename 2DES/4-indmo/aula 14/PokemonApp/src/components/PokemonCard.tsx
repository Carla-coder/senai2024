import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonData {
  sprites: {
    front_default: string;
  };
}

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    axios.get(pokemon.url)
      .then(response => setPokemonData(response.data))
      .catch(error => console.error(error));
  }, [pokemon.url]);

  return (
    <View style={styles.card}>
      {pokemonData && (
        <>
          <Image
            style={styles.image}
            source={{ uri: pokemonData.sprites.front_default }}
          />
          <Text style={styles.text}>{pokemon.name}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default PokemonCard;
