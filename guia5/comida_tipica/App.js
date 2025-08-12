import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Card, Button, Icon } from '@rneui/themed';
import DATA from './src/platillos.json';

const FlipCard = ({ title, img, ingredientes, calorias }) => {
  const [flipped, setFlipped] = useState(false);
  const animatedValue = new Animated.Value(0);
  let value = 0;

  animatedValue.addListener(({ value: v }) => (value = v));

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg']
  });

  const flipCard = () => {
    if (value >= 90) {
      Animated.spring(animatedValue, { toValue: 0, useNativeDriver: true }).start();
      setFlipped(false);
    } else {
      Animated.spring(animatedValue, { toValue: 180, useNativeDriver: true }).start();
      setFlipped(true);
    }
  };

  return (
    <TouchableOpacity onPress={flipCard}>
      <View>
        {/* Frente */}
        <Animated.View style={[styles.flipCard, { transform: [{ rotateY: frontInterpolate }] }]}>
          <Card>
            <Card.Title>{title}</Card.Title>
            <Card.Image source={{ uri: img }} />
          </Card>
        </Animated.View>

        {/* Reverso */}
        <Animated.View
          style={[
            styles.flipCard,
            styles.flipCardBack,
            { transform: [{ rotateY: backInterpolate }] }
          ]}
        >
          <Card>
            <Card.Title>{title}</Card.Title>
            <Text style={{ marginBottom: 5 }}>Ingredientes:</Text>
            {ingredientes.map((ing, i) => (
              <Text key={i}>• {ing}</Text>
            ))}
            <Text style={{ marginTop: 5 }}>Calorías: {calorias}</Text>
          </Card>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  const renderItem = ({ item }) => (
    <FlipCard
      title={item.nombre}
      img={item.imagen}
      ingredientes={item.ingredientes || []}
      calorias={item.calorias}
    />
  )

  return (
    <View style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.nombre} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flipCard: {
    backfaceVisibility: 'hidden'
  },
  flipCardBack: {
    position: 'absolute',
    top: 0
  }
});