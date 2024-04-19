import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const playlists = [
  { id: 1, title: 'Playlist 1', image: require('../assets/images/playlist1.jpg'), songs: ['Song 1', 'Song 2', 'Song 3'] },
  { id: 2, title: 'Playlist 2', image: require('../assets/playlist2.jpg'), songs: ['Song 4', 'Song 5', 'Song 6'] },
  { id: 3, title: 'Playlist 3', image: require('../assets/playlist3.jpg'), songs: ['Song 7', 'Song 8', 'Song 9'] },
];

export default function PlaylistScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={playlists}
        renderItem={({ item }) => (
          <View style={styles.playlist}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.songs.join(', ')}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playlist: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
