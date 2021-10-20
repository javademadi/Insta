import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import LikesTab from './TabComponents/LikesTab';
import ProfileTab from './TabComponents/ProfileTab';
import SearchNavigator from './search/Routs';
import HomeNavigator from './Home/Routs';
import AddMediaNavigator from './AddMedia/Routs';

export default function MainScreen() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#b5b5b5',
        tabBarIcon: ({color}) => {
          let name;
          let as;
          if (route.name === 'Home') {
            name = 'home-outline';
            as = Ionicons;
          } else if (route.name === 'Search') {
            name = 'search-outline';
            as = Ionicons;
          } else if (route.name === 'AddMedia') {
            name = 'diff-added';
            as = Octicons;
          } else if (route.name === 'Likes') {
            name = 'heart-outline';
            as = Ionicons;
          } else if (route.name === 'Profile') {
            name = 'person-outline';
            as = Ionicons;
          }
          return <Icon name={name} as={as} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          // headerLeft: () => (
          //   <Icon
          //     name="camera-outline"
          //     as={Ionicons}
          //     style={{marginLeft: 10}}
          //     onPress={() => navigation.navigate('Camera')}
          //   />
          // ),
          // headerRight: () => (
          //   <Icon
          //     as={FontAwesome}
          //     name="send-o"
          //     style={{marginRight: 10}}
          //     size={6}
          //     onPress={() => navigation.navigate('Direct')}
          //   />
          // ),
          // headerStyle: {
          //   height: 40,
          // },
          // headerTitleAlign: 'center',
          // title: 'Instagram',
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AddMedia"
        component={AddMediaNavigator}
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name="Likes"
        component={LikesTab}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
