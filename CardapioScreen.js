import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import DoceItem from '../components/DoceItem';

export default function CardapioScreen() {
  const [doces] = useState([
    { id: '1', nome: 'Brigadeiro', estoque: 20 },
    { id: '2', nome: 'Beijinho', estoque: 15 },
    { id: '3', nome: 'Quindim', estoque: 10 },
    { id: '4', nome: 'Cajuzinho', estoque: 25 },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cardápio de Doces</Text>
      <FlatList
        data={doces}
        renderItem={({ item }) => <DoceItem doce={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});
