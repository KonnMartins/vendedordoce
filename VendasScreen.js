import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VendasScreen() {
  const [doces, setDoces] = useState([]);
  const [quantidadeVendida, setQuantidadeVendida] = useState('');
  const [lucro, setLucro] = useState(0);

  useEffect(() => {
    const carregarDoces = async () => {
      const docesSalvos = await AsyncStorage.getItem('doces');
      if (docesSalvos) {
        setDoces(JSON.parse(docesSalvos));
      }
    };
    carregarDoces();
  }, []);

  const calcularLucro = (precoVenda, custo, quantidade) => {
    return (precoVenda - custo) * quantidade;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Vendas</Text>
      <FlatList
        data={doces}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.nome}</Text>
            <TextInput
              placeholder="Quantidade Vendida"
              value={quantidadeVendida}
              onChangeText={setQuantidadeVendida}
              keyboardType="numeric"
              style={styles.input}
            />
            <Button
              title="Calcular Lucro"
              onPress={() => {
                const lucroObtido = calcularLucro(item.precoVenda, item.custo, quantidadeVendida);
                setLucro(lucroObtido);
              }}
            />
            <Text>Lucro: R${lucro}</Text>
          </View>
        )}
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
  itemContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
});
