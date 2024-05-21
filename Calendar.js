import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';

const consultations = [
  { id: '1', doctor: 'Tania Quintella', specialty: 'Pneumologista', time: '10:00 AM' },
  { id: '2', doctor: 'João Silva', specialty: 'Cardiologista', time: '11:00 AM' },
  { id: '3', doctor: 'Maria Oliveira', specialty: 'Dermatologista', time: '12:00 PM' },
  // Adicione mais consultas aqui
];

const Calendar = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.consultationCard}>
      <Text style={styles.doctorName}>{item.doctor}</Text>
      <Text style={styles.specialty}>{item.specialty}</Text>
      <Text style={styles.time}>{item.time}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Agendar Consulta</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Consultas Agendadas</Text>
      <FlatList
        data={consultations}
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
  consultationCard: {
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
  doctorName: {
    fontSize: 24,
    marginBottom: 5,
  },
  specialty: {
    fontSize: 20,
    color: '#666',
    marginBottom: 10,
  },
  time: {
    fontSize: 18,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#008000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Calendar;