import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import { TouchableOpacity, Text } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Oculta o cabeçalho padrão
        />
        <Stack.Screen 
          name="Chat" 
          component={ChatScreen} 
          options={({ navigation }) => ({
            headerTitle: 'Chat',
            headerStyle: { backgroundColor: '#35797d' }, // Cor do cabeçalho
            headerTintColor: '#fff', // Cor do texto do cabeçalho
            headerTitleStyle: { fontWeight: 'bold' },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{ color: '#fff', marginRight: 10 }}>Sair</Text>
              </TouchableOpacity>
            ),
          })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
