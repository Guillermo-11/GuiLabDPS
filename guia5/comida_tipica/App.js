import React from 'react';
import { Text, View, SafeAreaView, StatusBar, Image } from 'react-native';
import { Card, Button, Icon } from '@rneui/themed';

export default function App() {
  return (
    <Card>
      <Card.Title>Comida Típica</Card.Title>
      <Card.Divider/>
      <Text>Este es un ejemplo básico de una tarjeta.</Text>
    </Card>
  );
}
