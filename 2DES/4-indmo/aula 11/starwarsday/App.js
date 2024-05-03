// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/native-material-bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Saga1Screen from './screens/Saga1Screen';
import Saga2Screen from './screens/Saga2Screen';
import Saga3Screen from './screens/Saga3Screen';
import ContatoScreen from './screens/ContatoScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Saga1" component={Saga1Screen} />
        <Stack.Screen name="Saga2" component={Saga2Screen} />
        <Stack.Screen name="Saga3" component={Saga3Screen} />
        <Stack.Screen name="Contato" component={ContatoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

