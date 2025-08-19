import React, { useState } from "react";
import { 
  View, 
  Text, 
  Image, 
  Dimensions, 
  TouchableOpacity, 
  StyleSheet, 
  Modal 
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import planetas from "./src/Planetas.json";

const { width } = Dimensions.get("window");

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [planetaSeleccionado, setPlanetaSeleccionado] = useState({});
  const [planetaIndex, setPlanetaIndex] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <Text style={styles.title}>Sistema Solar</Text>

      {!modalVisible && (
        <Carousel
          loop
          width={width}
          height={500}
          data={planetas}
          defaultIndex={planetaIndex}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.8,
            parallaxScrollingOffset: 70,
          }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                setPlanetaIndex(index);          // 👈 guardamos el índice
                setPlanetaSeleccionado(item);
                setModalVisible(true);
              }}
              style={styles.card}
            >
              <Image source={{ uri: item.url }} style={styles.image} />
              <Text style={styles.text}>{item.nombre}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <Text style={styles.subtitle}>Desliza para ver los planetas</Text>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{planetaSeleccionado?.nombre}</Text>
            <Text style={styles.modalText}>Masa: {planetaSeleccionado?.masa}</Text>
            <Text style={styles.modalText}>Diámetro: {planetaSeleccionado?.diametro}</Text>
            <Text style={styles.modalText}>
              Distancia al Sol: {planetaSeleccionado?.distancia}
            </Text>
            <Text style={styles.modalText}>{planetaSeleccionado?.caracteristicas}</Text>

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.btnClose}
            >
              <Text style={{ color: "#fff" }}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#ccc",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    color: "#fff",
    fontSize: 22,
    marginTop: 10,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)", 
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "85%",
    backgroundColor: "#1a1a1a",
    padding: 20,
    borderRadius: 15,
    elevation: 10,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalText: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 12,
  },
  btnClose: {
    backgroundColor: "#444",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
});