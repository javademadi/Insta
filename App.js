import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon, NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './src/components/MainScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SavedPost from './src/components/Profile/savedPost';
import CreateCollection from './src/components/Profile/CreateCollection';
import Suggest from './src/components/Profile/Suggest';
import Setting from './src/components/Profile/Setting';
import EditProfile from './src/components/Profile/Edit';
const App = () => {
  const Stack = createStackNavigator();

  return (
    <NativeBaseProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="SavedPost" component={SavedPost} />
        <Stack.Screen name="CreateCollection" component={CreateCollection} />
        <Stack.Screen name="Suggest" component={Suggest} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

export default App;
