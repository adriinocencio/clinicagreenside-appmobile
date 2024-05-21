import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Inicio'; // Certifique-se de que o caminho está correto
import CalendarScreen from './Calendar';
import RegisterScreen from './Register';
import ProfileScreen from './Profile';
import MessagesScreen from './Messages';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{ title: 'Calendário' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
        <Stack.Screen name="Messages" component={MessagesScreen} options={{ title: 'Mensagens' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;