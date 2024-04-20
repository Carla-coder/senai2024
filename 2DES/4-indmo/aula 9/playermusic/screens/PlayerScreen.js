import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Audio } from 'expo-av'

export default function PlayerScreen () {
  const [sound, setSound] = useState(null)
  const [playlist, setPlaylist] = useState([
    {
      title: 'Song 1',
      artist: 'Alok',
      albumCover: require('../image/cover3.jpg'),
      audioFile: require('../audio/song1.mp3')
    },
    {
      title: 'Song 2',
      artist: 'Alok',
      albumCover: require('../image/cover2.jpg'),
      audioFile: require('../audio/song2.mp3')
    },
    {
      title: 'Song 3',
      artist: 'Alok',
      albumCover: require('../image/cover1.jpg'),
      audioFile: require('../audio/song3.mp3')
    },
    {
      title: 'Song 4',
      artist: 'Alok',
      albumCover: require('../image/cover4.jpg'),
      audioFile: require('../audio/song4.mp3')
    },
    {
      title: 'Song 5',
      artist: 'Alok',
      albumCover: require('../image/cover5.jpg'),
      audioFile: require('../audio/song5.mp3')
    },
    {
      title: 'Song 6',
      artist: 'Alok',
      albumCover: require('../image/cover6.jpg'),
      audioFile: require('../audio/song6.mp3')
    },
    {
      title: 'Song 7',
      artist: 'Queen',
      albumCover: require('../image/cover7.jpg'),
      audioFile: require('../audio/song7.mp3')
    },
    {
      title: 'Song 8',
      artist: 'Queen',
      albumCover: require('../image/cover8.jpg'),
      audioFile: require('../audio/song8.mp3')
    },
    {
      title: 'Song 9',
      artist: 'Queen',
      albumCover: require('../image/cover9.jpg'),
      audioFile: require('../audio/song9.mp3')
    }
  ])

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

  // Função para carregar e reproduzir o áudio
  const playAudio = async () => {
    try {
      if (sound) {
        await sound.unloadAsync()
      }
      const { sound: newSound } = await Audio.Sound.createAsync(
        playlist[currentTrackIndex].audioFile
      )
      setSound(newSound)
      await newSound.playAsync()
    } catch (error) {
      console.log('Erro ao reproduzir o áudio:', error)
    }
  }

  // Função para pausar o áudio
  const pauseAudio = async () => {
    try {
      if (sound) {
        await sound.pauseAsync()
      }
    } catch (error) {
      console.log('Erro ao pausar o áudio:', error)
    }
  }

  const previousTrack = async () => {
    const previousIndex =
      (currentTrackIndex - 1 + playlist.length) % playlist.length
    setCurrentTrackIndex(previousIndex)
    try {
      if (sound) {
        await sound.unloadAsync()
      }
      const { sound: newSound } = await Audio.Sound.createAsync(
        playlist[previousIndex].audioFile
      )
      setSound(newSound)
      await newSound.playAsync()
    } catch (error) {
      console.log('Erro ao reproduzir o áudio:', error)
    }
  }

  const nextTrack = async () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length
    setCurrentTrackIndex(nextIndex)
    try {
      if (sound) {
        await sound.unloadAsync()
      }
      const { sound: newSound } = await Audio.Sound.createAsync(
        playlist[nextIndex].audioFile
      )
      setSound(newSound)
      await newSound.playAsync()
    } catch (error) {
      console.log('Erro ao reproduzir o áudio:', error)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Escuta Aí!</Text>
      </View>

      {/* Player Controls */}
      <View style={styles.playerContainer}>
        <Image
          source={playlist[currentTrackIndex].albumCover}
          style={styles.albumCover}
        />
        <Text style={styles.songTitle}>
          {playlist[currentTrackIndex].title}
        </Text>
        <Text style={styles.artist}>{playlist[currentTrackIndex].artist}</Text>

        {/* Controles de reprodução */}
        <View style={styles.controls}>
          <TouchableOpacity style={styles.controlButton} onPress={playAudio}>
            <Text style={styles.controlButtonText}>▶️</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton} onPress={pauseAudio}>
            <Text style={styles.controlButtonText}>⏸️</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.controlButton}
            onPress={previousTrack}
          >
            <Text style={styles.controlButtonText}>⏮️</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton} onPress={nextTrack}>
            <Text style={styles.controlButtonText}>⏭️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#B22222'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 32,
    color: '#f2f2f2'
  },
  playerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  albumCover: {
    width: 200,
    height: 200,
    marginBottom: 20,
    shadowColor: '#000',
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#B22222'
  },
  songTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  artist: {
    fontSize: 20,
    marginBottom: 20
  },
  controls: {
    flexDirection: 'row'
  },
  controlButton: {
    backgroundColor: '#B22222',
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 10
  },
  controlButtonText: {
    fontSize: 24,
    color: '#fff'
  }
})
