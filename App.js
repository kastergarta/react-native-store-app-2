import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/products';
import ProductsOverviewScreen from './screens/shop/ProductsOverviewScreen';
import CustomersOverviewScreen from './screens/shop/CustomersOverviewScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
  <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigation>
        <Drawer.Screen name='AllScreens' component={ProductsOverviewScreen} />
        <Drawer.Screen name='AllCustomers' component={CustomersOverviewScreen} />
      </Drawer.Navigation>
    </NavigationContainer>
  </Provider>
    
  );
}
