import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import PlayerScreen from './screens/PlayerScreen'
import PlaylistScreen from './screens/PlaylistScreen'
import QuemSomosScreen from './screens/QuemSomosScreen'
import PecaSuaMusicaScreen from './screens/PecaSuaMusicaScreen'

const Tab = createMaterialBottomTabNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Quem Somos'
        activeColor='#000'
        inactiveColor='#fff'
        barStyle={{ backgroundColor: '#8B0000' }} // '#B22222'
      >
        <Tab.Screen
          name='QuemSomos'
          component={QuemSomosScreen}
          options={{
            tabBarLabel: 'Quem Somos',
            tabBarIcon: ({ color }) => (
              <Ionicons name='information-circle' color={color} size={26} />
            )
          }}
        />

        <Tab.Screen
          name='Playlist'
          component={PlaylistScreen}
          options={{
            tabBarLabel: 'Playlist',
            tabBarIcon: ({ color }) => (
              <Ionicons name='ios-albums' color={color} size={26} />
            )
          }}
        />

        <Tab.Screen
          name='Player'
          component={PlayerScreen}
          options={{
            tabBarLabel: 'Player',
            tabBarIcon: ({ color }) => (
              <Ionicons name='ios-musical-notes' color={color} size={26} />
            )
          }}
        />

        <Tab.Screen
          name='PecaSuaMusica'
          component={PecaSuaMusicaScreen}
          options={{
            tabBarLabel: 'Peça Sua Musica',
            tabBarIcon: ({ color }) => (
              <Ionicons name='ios-create' color={color} size={26} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
