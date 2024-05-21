import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Cadastro" onPress={() => navigation.navigate('Register')} />
      <Button title="Calendário" onPress={() => navigation.navigate('Calendar')} />
      <Button title="Perfil" onPress={() => navigation.navigate('Profile')} />
      <Button title="Mensagens" onPress={() => navigation.navigate('Messages')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default Home;