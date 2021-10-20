import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VideoTab from './VideoTab';
import PhotoTab from './PhotoTab';
import GalleryTab from './GalleryTab';

export default function AddMediaHome() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Photo"
      swipeEnabled={true}
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#b5b5b5',
        tabBarIconStyle: {display: 'none'},

        tabBarLabelStyle: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          textAlignVertical: 'center',
          fontWeight: '500',
          fontSize: 15,
        },
      }}>
      <Tab.Screen
        name="Gallery"
        component={GalleryTab}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Photo"
        component={PhotoTab}
        options={{
          headerShown: false,

          // tabBarIcon: ({color}) => (
          //   <Icon name="diff-added" as={Octicons} color={color} />
          // ),
        }}
      />

      <Tab.Screen
        name="Video"
        component={VideoTab}
        options={{
          headerShown: false,
          // tabBarIcon: ({color}) => (
          //   <Icon name="search-outline" as={Ionicons} color={color} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
}
