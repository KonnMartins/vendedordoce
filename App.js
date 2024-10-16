import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EstoqueScreen from './screens/EstoqueScreen';
import CardapioScreen from './screens/CardapioScreen';
import VendasScreen from './screens/VendasScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cardápio">
        <Stack.Screen name="Estoque" component={EstoqueScreen} />
        <Stack.Screen name="Cardápio" component={CardapioScreen} />
        <Stack.Screen name="Controle de Vendas" component={VendasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
