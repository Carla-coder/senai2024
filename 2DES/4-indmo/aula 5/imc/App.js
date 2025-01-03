//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenIMC from './components/FormIMC';
import LoginForm from './components/loginForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        component={LoginForm}
        options={{titlle: 'Bem Vindo'}} />

        <Stack.Screen 
        name="telaIMC" 
        component={ScreenIMC}
        options={{titlle: 'Calcule seu IMC'}} />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
  }


