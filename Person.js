import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';

function Person() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/Foto de perfil da pessoa.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Ana Camargo Drumond</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.textSubtitle}>CPF</Text>
        <Text style={styles.text}>737.835.678-66</Text>
        <Text style={styles.textSubtitle}>Email</Text>
        <Text style={styles.text}>anacamargo@gmail.com</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  infoContainer: {
    marginBottom: 30,
  },
  textSubtitle: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#d9534f',
  },
});

export default Person;