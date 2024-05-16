import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import axios from 'axios';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');

  const cadastrarUsuario = async () => {
    try {
      await axios.post('http://localhost:8081/cadastro', {
        nome,
        idade,
        email
      });
      // Limpar os campos após o cadastro
      setNome('');
      setIdade('');
      setEmail('');
      Alert.alert('Cadastro realizado com sucesso');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      Alert.alert('Erro ao cadastrar usuário');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={text => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={text => setIdade(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <Button
        title="Cadastrar"
        onPress={cadastrarUsuario}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});