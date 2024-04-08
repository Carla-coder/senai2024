import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './componentes/LoginScreen';
import EscolhaScreen from './componentes/EscolhaScreen';
import SwitchScreen from './componentes/SwitchScreen';
import JurosScreen from './componentes/JurosScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        
        <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        />
        <Stack.Screen 
        name="Escolha" 
        component={EscolhaScreen} 
        />
        <Stack.Screen 
        name="Switch" 
        component={SwitchScreen} 
        />
        <Stack.Screen 
        name="Juros" 
        component={JurosScreen} 
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


