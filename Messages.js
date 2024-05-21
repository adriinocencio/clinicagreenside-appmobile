import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const messages = [
  { id: '1', from: 'Tania Quintella', subject: 'Consulta', message: 'Sua consulta está confirmada para amanhã às 10:00 AM.' },
  { id: '2', from: 'João Silva', subject: 'Exames', message: 'Por favor, traga seus exames para a consulta.' },
  { id: '3', from: 'Maria Oliveira', subject: 'Retorno', message: 'Seu retorno está agendado para semana que vem.' },
  // Adicione mais mensagens aqui
];

const Messages = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.messageCard}>
      <Text style={styles.from}>{item.from}</Text>
      <Text style={styles.subject}>{item.subject}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mensagens</Text>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      <Button title="Voltar para Início" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
    padding: 20,
  },
  header: {
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  messageCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  from: {
    fontSize: 18,
    marginBottom: 5,
  },
  subject: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
  },
});

export default Messages;