import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/home';
import BuscarScreen from './screens/buscar';
import ContatoScreen from './screens/contato';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#3b5998"
        inactiveColor="#fff"
        barStyle={{ backgroundColor: '#5d8aa8' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Search"
          component={BuscarScreen}
          options={{
            tabBarLabel: 'Links',
            tabBarIcon: ({ color }) => (
              <Ionicons name="search" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="About"
          component={ContatoScreen}
          options={{
            tabBarLabel: 'Contato',
            tabBarIcon: ({ color }) => (
              <Ionicons name="information-circle" color={color} size={26} />
            ),
          }}
        />

      </Tab.Navigator>

    </NavigationContainer>

  );
}


