import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import AddMediaHome from './AddMediaHome';
import EditImage from './EditImage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Icon} from 'native-base';
export default function AddMediaNavigator({navigation}) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="AddMediaHome"
        component={AddMediaHome}
        options={{
          headerLeft: () => (
            <Icon
              name="camera-outline"
              as={Ionicons}
              style={{marginLeft: 10}}
              onPress={() => navigation.navigate('Camera')}
            />
          ),
          headerRight: () => (
            <Icon
              as={FontAwesome}
              name="send-o"
              style={{marginRight: 10}}
              size={6}
              onPress={() => navigation.navigate('Direct')}
            />
          ),
          headerStyle: {
            height: 40,
          },
          headerTitleAlign: 'center',
          title: 'Instagram',
          tabBarStyle: {display: 'none'},
        }}
      />
      <Stack.Screen
        name="EditImage"
        component={EditImage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
