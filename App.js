import React, { useEffect, useState } from 'react';
import { StatusBar, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Inicio from './Inicio';
import Calendar from './Calendar';
import Person from './Person';
import LoginForm from './Login'; // Importe o componente LoginForm
import CadastroForm from './Cadastro'; // Importe o componente CadastroForm

const Stack = createStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState(null);

  // Verifique se o usuário está logado quando o aplicativo é iniciado
  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      setInitialRoute(isLoggedIn ? 'Inicio' : 'Login');
    };

    checkLoginStatus();
  }, []);

  if (initialRoute === null) {
    // Renderize algo enquanto estamos verificando o status de login
    return <View />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Person" component={Person} />
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Cadastro" component={CadastroForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


