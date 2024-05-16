import React from 'react';
import { StatusBar, Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import Calendar from './Calendar';
import Person from './Person';

export default function Data({navigation})  {
  return ( 
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/Foto de perfil da pessoa.png')}
          style={styles.profileImage}
        />
        <Text style={styles.headerText}>Olá, Ana</Text>
      </View>

      <View style={styles.rectangle}>
        <Text style={styles.nextConsultationText}>Próxima consulta</Text>
        <Text style={styles.dateText}>15/10/2024</Text>
        <Text style={styles.timeText}>09h00</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/Careca falando algo.png')}
          style={styles.carecaImage}
        />
      </View>

      <View style={styles.explorar}>
        <Text style={styles.explorer}>Explorar Serviços</Text>
      </View>

      <View style={styles.servicesContainer}>
        <TouchableOpacity style={styles.serviceItem}>
          <Image
            source={require('./assets/Consultas.png')}
            style={styles.serviceImage}
          />
          <Text style={styles.serviceText}>Consultas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceItem}>
          <Image
            source={require('./assets/Emergencia.png')}
            style={styles.serviceImage}
          />
          <Text style={styles.serviceText}>Emergência</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceItem}>
          <Image
            source={require('./assets/Medicamentos.png')}
            style={styles.serviceImage}
          />
          <Text style={styles.serviceText}>Medicamentos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.iconsMenu} onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('./assets/home.png')}
            style={styles.menuImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconsMenu} onPress={() => navigation.navigate('Calendar')}>
          <Image
            source={require('./assets/calendar_month.png')}
            style={styles.menuImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconsMenu} onPress={() => navigation.navigate('Chat')}>
          <Image
            source={require('./assets/chat.png')}
            style={styles.menuImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconsMenu} onPress={() => navigation.navigate('Person')}>        
          <Image
            source={require('./assets/person.png')}
            style={styles.menuImage}
          />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  rectangle: {
    backgroundColor: '#4CAF50',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  nextConsultationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  timeText: {
    fontSize: 16,
    color: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  carecaImage: {
    width: '80%',
    height: 200,
    resizeMode: 'contain',
  },
  explorar: {
    alignItems: 'center',
    marginTop: 30,
  },
  explorer: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  serviceItem: {
    alignItems: 'center',
  },
  serviceImage: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
  serviceText: {
    fontSize: 16,
    color: '#333',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  iconsMenu: {
    alignItems: 'center',
  },
  menuImage: {
    width: 30,
    height: 30,
  },
});