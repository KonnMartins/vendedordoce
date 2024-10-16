import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DoceItem({ doce }) {
  return (
    <View style={styles.item}>
      <Text style={styles.nome}>{doce.nome}</Text>
      <Text>Estoque: {doce.estoque}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  nome: {
    fontSize: 18,
  },
});
