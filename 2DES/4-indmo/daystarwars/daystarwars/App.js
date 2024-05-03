// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import Saga1Screen from './screens/Saga1Screen';
import Saga2Screen from './screens/Saga2Screen';
import Saga3Screen from './screens/Saga3Screen';
import ContatoScreen from './screens/ContatoScreen';

// const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        activeColor="#a52a2a"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#C1FFC1' }}
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
          component={Saga1Screen}
          options={{
            tabBarLabel: 'Saga1',
            tabBarIcon: ({ color }) => (
              <Ionicons name="information-circle" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Search"
          component={Saga2Screen}
          options={{
            tabBarLabel: 'Saga3',
            tabBarIcon: ({ color }) => (
              <Ionicons name="information-circle" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Search"
          component={Saga3Screen}
          options={{
            tabBarLabel: 'Saga2',
            tabBarIcon: ({ color }) => (
              <Ionicons name="information-circle" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Contact"
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



