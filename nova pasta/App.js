import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'; // Importar axios para fazer solicitações HTTP

import Inicio from '../Inicio';
import Calendar from '../Calendar';
import Person from '../Person';
import LoginForm from '../Login';
import CadastroForm from './Cadastro';

const Stack = createStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState(null);

  // Verificar o status de login quando o aplicativo é iniciado
  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      setInitialRoute(isLoggedIn ? 'Inicio' : 'Login');
    };

    checkLoginStatus();
  }, []);

  if (initialRoute === null) {
    // Renderizar algo enquanto verifica o status de login
    return <View />;
  }

  // Função para lidar com o cadastro de usuário
  const cadastrarUsuario = async (dados) => {
    try {
      // Enviar os dados para o servidor
      await axios.post('http://localhost:3000/cadastrar', dados);
      // Se o cadastro for bem-sucedido, redirecionar para a tela de login
      setInitialRoute('Login');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      // Lidar com o erro, se necessário
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Person" component={Person} />
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen
          name="Cadastro"
          // Passar a função cadastrarUsuario como prop para o componente CadastroForm
          // para que ele possa ser usado para realizar o cadastro de usuário
          component={() => <CadastroForm cadastrarUsuario={cadastrarUsuario} />}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}