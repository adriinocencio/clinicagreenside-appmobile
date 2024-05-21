import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Perfil</Text>
      <Text style={styles.label}>Nome: John Doe</Text>
      <Text style={styles.label}>Email: johndoe@example.com</Text>
      <Button title="Voltar para Início" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f0f5',
  },
  header: {
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Profile;