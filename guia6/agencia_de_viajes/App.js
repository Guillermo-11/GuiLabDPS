import React, {useState} from 'react';
import { StyleSheet, Image, View, ScrollView, Text, Modal, Button, TouchableHighlight } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');

  return (
    <>
      <ScrollView>
        <Modal transparent={true} animationType="slide" visible={modalVisible} onRequestClose={() => {alert('Modal has been closed.');}} >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>{modalTitle}</Text>
              <Text>{modalText}</Text>
              <Button title="Cerrar" onPress={() => {setModalVisible(!modalVisible)}} ></Button>
            </View>
          </View>
        </Modal>

        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.banner} source={require('./src/img/bg.jpg')} />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>¿Qué hacer en El Salvador?</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight onPress={() => {setModalVisible(!modalVisible); setModalTitle('Ir a la Playa'); setModalText('El Salvador cuenta con hermosas playas a nivel de Centroamérica.')}}>
                <Image style={styles.ciudad} source={require('./src/img/actividad1.jpg')} />
              </TouchableHighlight>
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./src/img/actividad2.jpg')} />
            </View>

            <View>
              <Image style={styles.ciudad} source={require('./src/img/actividad3.jpg')} />
            </View>

            <View>
              <Image style={styles.ciudad} source={require('./src/img/actividad4.jpg')} />
            </View>

            <View>
              <Image style={styles.ciudad} source={require('./src/img/actividad5.jpg')} />
            </View>
          </ScrollView>

          <Text style={styles.titulo}>Platillos Salvadoreños</Text>
          <View>
            <View>
              <TouchableHighlight onPress={() => {setModalVisible(!modalVisible); setModalTitle('Comer unas Pupusas'); setModalText('Es el platillo más icónico y popular de El Salvador y se pueden disfrutar de diferentes ingredientes, de frijol con queso, chicharrón, pollo, etc. Siempre acompañadas con su salsa de tomate y curtido.')}}>
                <Image style={styles.mejores} source={require('./src/img/mejores1.jpg')} />
              </TouchableHighlight>
            </View>
            
            <View>
              <Image style={styles.mejores} source={require('./src/img/mejores2.jpg')} />
            </View>
            
            <View>
              <Image style={styles.mejores} source={require('./src/img/mejores3.jpg')} />
            </View>
          </View>

          <Text style={styles.titulo}>Rutas Turísticas</Text>
          <View style={styles.listado}>
            <View style={styles.listaItem}>
              <TouchableHighlight onPress={() => {setModalVisible(!modalVisible); setModalTitle('Visitar Ataco'); setModalText('Una ruta llena de muchos lugares coloridos, donde se pueden ver los famosos murales e Ataco, los cuales representan escenas del folclore salvadoreño, paisajes típicos y figuras íconicas.')}}>
                <Image style={styles.mejores} source={require('./src/img/ruta1.jpg')} />
              </TouchableHighlight>
            </View>
            
            <View style={styles.listaItem}>
              <Image style={styles.mejores} source={require('./src/img/ruta2.jpg')} />
            </View>

            <View style={styles.listaItem}>
              <Image style={styles.mejores} source={require('./src/img/ruta3.jpg')} />
            </View>

            <View style={styles.listaItem}>
              <Image style={styles.mejores} source={require('./src/img/ruta4.jpg')} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  },
});
