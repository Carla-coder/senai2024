import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DestaquesScreen from './screens/DestaquesScreen';
import BuscaScreen from './screens/BuscaScreen';
import IndicacaoScreen from './screens/IndicacaoScreen';
import ContatoScreen from './screens/ContatoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Busca"
        activeColor="#FFD700"
        inactiveColor="#ffffff"
        barStyle={{ backgroundColor: '#000000' }}
      >
        <Tab.Screen
          name="Busca"
          component={BuscaScreen}
          options={{
            tabBarLabel: 'Buscar',

          }}
        />

        <Tab.Screen
          name="Contato"
          component={ContatoScreen}
          options={{
            tabBarLabel: 'Contato',

          }}
        />

        <Tab.Screen
          name="Destaques"
          component={DestaquesScreen}
          options={{
            tabBarLabel: 'Destaques',

          }}
        />

        <Tab.Screen
          name="Indicacao"
          component={IndicacaoScreen}
          options={{
            tabBarLabel: 'Indicação',

          }}
        />

      </Tab.Navigator>

    </NavigationContainer>
  );
}

