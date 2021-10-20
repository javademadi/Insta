import React from 'react';
import SearchTab from '../TabComponents/SearchTab';
import {createStackNavigator} from '@react-navigation/stack';
import Searchbar from './Searchbar';
export default function SearchNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SearchTab" component={SearchTab} />
      <Stack.Screen name="Searchbar" component={Searchbar} />
    </Stack.Navigator>
  );
}
