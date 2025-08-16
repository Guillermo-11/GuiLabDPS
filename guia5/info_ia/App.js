import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, FlatList, Dimensions } from "react-native";
import { Card } from "@rneui/themed";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

const { width } = Dimensions.get("window");

const categories = [
  {
    id: "1",
    title: "Salud",
    img: "https://img.icons8.com/color/96/medical-doctor.png",
    description: "La IA ayuda en diagnósticos, análisis de imágenes médicas y tratamientos personalizados."
  },
  {
    id: "2",
    title: "Educación",
    img: "https://cdn-icons-png.freepik.com/512/7905/7905878.png",
    description: "Facilita la enseñanza personalizada, tutorías automáticas y generación de contenido educativo."
  },
  {
    id: "3",
    title: "Finanzas",
    img: "https://img.icons8.com/color/96/money-bag.png",
    description: "La IA detecta fraudes, recomienda inversiones y analiza riesgos financieros."
  },
  {
    id: "4",
    title: "Transporte",
    img: "https://cdn-icons-png.flaticon.com/512/6554/6554920.png",
    description: "Conduce vehículos autónomos, optimiza rutas y mejora la seguridad vial."
  }
];

const FlipCard = ({ title, img, description }) => {
  const rotate = useSharedValue(0);
  const [flipped, setFlipped] = useState(false);

  const frontStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${rotate.value}deg` }],
    opacity: rotate.value < 90 ? 1 : 0,
    backfaceVisibility: "hidden"
  }));

  const backStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${rotate.value + 180}deg` }],
    opacity: rotate.value > 90 ? 1 : 0,
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 0
  }));

  const flipCard = () => {
    setFlipped(!flipped);
    rotate.value = withTiming(flipped ? 0 : 180, { duration: 500 });
  };

  return (
    <TouchableWithoutFeedback onPress={flipCard}>
      <View style={{ width: width * 0.8, height: 220 }}>
        <Animated.View style={[styles.card, frontStyle]}>
          <Card containerStyle={styles.cardContainer}>
            <Card.Title>{title}</Card.Title>
            <Card.Image source={{ uri: img }} style={{ height: 100, resizeMode: "contain" }} />
          </Card>
        </Animated.View>

        <Animated.View style={[styles.card, backStyle]}>
          <Card containerStyle={styles.cardContainer}>
            <Card.Title>{title}</Card.Title>
            <Text style={styles.description}>{description}</Text>
          </Card>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información de IA</Text>
      <Text style={styles.subtitle}>
        La inteligencia artificial (IA) es la simulación de procesos de inteligencia humana por máquinas, especialmente sistemas informáticos.
      </Text>

      <Text style={styles.title}>Categorías de Uso</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FlipCard title={item.title} img={item.img} description={item.description} />
        )}
        contentContainerStyle={{ alignItems: "center", paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#F3F4F6",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    color: "#111827",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
    color: "#374151",
  },
  card: {
    width: width * 0.8,
    height: 220,
  },
  cardContainer: {
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  description: {
    fontSize: 14,
    color: "#374151",
    textAlign: "center",
  },
});
