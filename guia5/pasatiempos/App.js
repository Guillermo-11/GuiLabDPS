import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import { Card } from '@rneui/themed';

const { width } = Dimensions.get("window"); // Ancho de pantalla
const CARD_WIDTH = width * 0.9; // 90% del ancho

const hobbies = [
  { id: "1", title: "⚽ Fútbol", img: "https://sps-sport.com/img/cms/Blog/diferencias%20entre%20los%20balones%20de%20futbol%20sala%20y%20los%20de%20futbol%2011.jpg", description: "Me gusta jugar fútbol siempre que haya la oportunidad, me encanta sobre todo jugar en el ataque pero también, no se me da mal, jugar de portero." },
  { id: "2", title: "🎮 Videojuegos", img: "https://catnessgames.com/wp-content/uploads/2024/12/tipos-videojuegos-consolas-y-plataformas.jpg", description: "Disfruto de los juegos de aventura y estrategia. Sobretodo, me gustan los juegos de la saga \"The Legend of Zelda\" y los juegos antiguos de Nintendo." },
  { id: "3", title: "🎵 Música", img: "https://www.infobae.com/resizer/v2/FUG54XKBEFDGFEC3IJR6KYSQIM.jpg?auth=63a912e15fc001538ae5a1e5a39929d4ef32a21b8a9641d86e37cbb2d0dba3a7&smart=true&width=350&height=197&quality=85", description: "Me encanta mucho escuchar música, hay diversos artistas que suelo escuchar, el que generalmente escucho más es \"Funky\"." }
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cont_title}>
        <Text style={styles.title}>MIS PASATIEMPOS</Text>
      </View>
      <FlatList
        data={hobbies}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <Card containerStyle={styles.card}>
              <Card.Title style={styles.card_title}>{item.title}</Card.Title>
              <Card.Image source={{ uri: item.img }} style={styles.card_img} />
              <Text style={styles.description}>{item.description}</Text>
            </Card>
          </View>
        )}
      />
      <View style={styles.bottom_cont}>
        <Text style={styles.bottom_text}>Desliza a la izquierda para ver el siguiente pasatiempo..</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    paddingVertical: 40,
  },
  cont_title: {
    marginTop: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1E293B",
    letterSpacing: 2,
  },
  cardWrapper: {
    width, // Cada slide ocupa el ancho completo de la pantalla
    alignItems: "center", // Centra la tarjeta
    justifyContent: "center",
  },
  card: {
    width: CARD_WIDTH,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
    padding: 15,
    backgroundColor: "#ffffff",
  },
  card_title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 10,
    textAlign: "center",
  },
  card_img: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: "#475569",
    textAlign: "center",
    lineHeight: 20,
  },
  bottom_cont: {
    marginTop: 5
  },
  bottom_text: {
    fontSize: 12,
    textAlign: "center"
  }
});