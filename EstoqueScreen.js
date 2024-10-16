import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DoceItem from '../components/DoceItem';

export default function EstoqueScreen() {
  const [doces, setDoces] = useState([]);
  const [nomeDoce, setNomeDoce] = useState('');
  const [estoque, setEstoque] = useState('');

  useEffect(() => {
    const carregarDoces = async () => {
      const docesSalvos = await AsyncStorage.getItem('doces');
      if (docesSalvos) {
        setDoces(JSON.parse(docesSalvos));
      }
    };
    carregarDoces();
  }, []);

  const adicionarDoce = async () => {
    const novoDoce = {
      id: Date.now().toString(),
      nome: nomeDoce,
      estoque: parseInt(estoque),
    };
    const novosDoces = [...doces, novoDoce];
    setDoces(novosDoces);
    await AsyncStorage.setItem('doces', JSON.stringify(novosDoces));
    setNomeDoce('');
    setEstoque('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estoque de Doces</Text>
      <TextInput
        placeholder="Nome do Doce"
        value={nomeDoce}
        onChangeText={setNomeDoce}
        style={styles.input}
      />
      <TextInput
        placeholder="Quantidade em Estoque"
        value={estoque}
        onChangeText={setEstoque}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Adicionar ao Estoque" onPress={adicionarDoce} />
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
});
