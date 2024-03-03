import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginForm from './componentes/LoginForm'
import CadastroUsuario from './componentes/CadastroUsuario'
import CalculoIdadeScreen from './componentes/CalculoIdadeScreen'
import CalculoJurosScreen from './componentes/CalculoJurosScreen'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    
    <NavigationContainer>
      
      <Stack.Navigator>
        
        <Stack.Screen
          name='Login'
          component={LoginForm}
          options={{ title: 'Bem Vindo' }}
        />
        
        <Stack.Screen
          name='CadastroUsuario'
          component={CadastroUsuario}
          options={{ title: 'Cadastrar Usuario' }}
        />
        
        <Stack.Screen
          name='CalculoIdade'
          component={CalculoIdadeScreen}
          options={{ title: 'Idade' }}
        />
        
        <Stack.Screen
          name='CalculoJuros'
          component={CalculoJurosScreen}
          options={{ title: 'Juros Compostos' }}
        />
      
      </Stack.Navigator>
    
    </NavigationContainer>
  )
}
