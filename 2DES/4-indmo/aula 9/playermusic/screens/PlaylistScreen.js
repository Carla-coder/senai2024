import React from 'react'
import { View, Text, FlatList, StyleSheet, Image } from 'react-native'

const playlists = [
  {
    id: 1,
    title: 'Playlist 1',
    image: require('../image/cover3.jpg'),
    songs: ['song 1', 'song 2', 'song 3']
  },
  {
    id: 2,
    title: 'Playlist 2',
    image: require('../image/cover2.jpg'),
    songs: ['song 4', 'song 5', 'song 6']
  },
  {
    id: 3,
    title: 'Playlist 3',
    image: require('../image/cover7.jpg'),
    songs: ['song 7', 'song 8', 'song 9']
  }
]

export default function PlaylistScreen () {
  return (
    <View style={styles.container}>
      <FlatList
        data={playlists}
        renderItem={({ item }) => (
          <View style={styles.playlist}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              {item.songs.map((song, index) => (
                <Text key={index} style={styles.songText}>
                  {song}
                </Text>
              ))}
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={1} // Definindo colunas
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  playlist: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%'
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 10,
    borderRadius: 5
  },
  details: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 18
  },
  songText: {
    fontSize: 16
  }
})
