import React from 'react';
import HomeTab from '../TabComponents/HomeTab';
import {createStackNavigator} from '@react-navigation/stack';
import Direct from './Direct';
import {Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Camera from './Camera';
import chatComponent from './Chat';
import commentComponent from './Comment';

export default function HomeNavigator({navigation, route}) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        tabBarStyle: {display: 'none', opacity: 0},
        tabBarStyle: {display: 'none'},
      }}>
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
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
        }}
      />
      <Stack.Screen
        name="Direct"
        component={Direct}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat"
        component={chatComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Comment"
        component={commentComponent}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
