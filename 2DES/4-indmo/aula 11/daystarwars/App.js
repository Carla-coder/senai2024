// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Saga1Screen from './screens/Saga1Screen';
import Saga2Screen from './screens/Saga2Screen';
import Saga3Screen from './screens/Saga3Screen';
import ContatoScreen from './screens/ContatoScreen';
import DarthVaderScreen from './screens/DarthVaderScreen';

// imagens dos ícones
import iconHome from './assets/image/home.png';
import iconSaga1 from './assets/image/sw-1.png';
import iconSaga2 from './assets/image/sw-2.png';
import iconSaga3 from './assets/image/sw-4.png';
import iconContato from './assets/image/contato.png';
import iconDarthVader from './assets/image/sw-5.png';

// const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        activeColor="#FFD700"
        inactiveColor="#ffffff"
        barStyle={{ backgroundColor: '#000000' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Image source={iconHome} style={{ tintColor: color, width: 26, height: 26 }} />
            ),
          }}
        />
       
        <Tab.Screen
          name="Saga1"
          component={Saga1Screen}
          options={{
            tabBarLabel: 'Saga1',
            tabBarIcon: ({ color }) => (
              <Image source={iconSaga1} style={{ tintColor: color, width: 26, height: 26 }} />
            ),
          }}
        />

        <Tab.Screen
          name="Saga2"
          component={Saga2Screen}
          options={{
            tabBarLabel: 'Saga2',
            tabBarIcon: ({ color }) => (
              <Image source={iconSaga2} style={{ tintColor: color, width: 26, height: 26 }} />
            ),
          }}
        />

        <Tab.Screen
          name="Saga3"
          component={Saga3Screen}
          options={{
            tabBarLabel: 'Saga3',
            tabBarIcon: ({ color }) => (
              <Image source={iconSaga3} style={{ tintColor: color, width: 26, height: 26 }} /> 
            ),
          }}
        />

        <Tab.Screen
          name="Contato"
          component={ContatoScreen}
          options={{
            tabBarLabel: 'Contato',
            tabBarIcon: ({ color }) => (
              <Image source={iconContato} style={{ tintColor: color, width: 26, height: 26 }} />
            ),
          }}
        />

<Tab.Screen 
          name="DarthVader" 
          component={DarthVaderScreen} 
          options={{
            tabBarLabel: 'Darth Vader',
            tabBarIcon: ({ color, size }) => (
              <Image source={iconDarthVader} style={{ tintColor: color, width: 26, height: 26 }} />
            ),
          }}
        />

      </Tab.Navigator>
      
    </NavigationContainer>
  );
}



