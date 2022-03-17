import * as React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import BookScreen from'./BookScreen';
import CartScreen from'./CartScreen';
import store from './store'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ShoppingCartIcon from './components/ShoppingCartIcon';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'white' }}>
        <Tab.Screen name="Books" component={BookScreen} options={{
          tabBarLabel: 'Home',
         
        }} />
        <Tab.Screen name="Cart" component={CartScreen} 
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: props => <ShoppingCartIcon/>
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}