import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, NativeBaseProvider, Text} from 'native-base';
import NetInfo from '@react-native-community/netinfo';
import MainScreen from './src/components/MainScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SavedPost from './src/components/Profile/savedPost';
import CreateCollection from './src/components/Profile/CreateCollection';
import Suggest from './src/components/Profile/Suggest';
import Setting from './src/components/Profile/Setting';
import EditProfile from './src/components/Profile/Edit';
import {ToastAndroid} from 'react-native';

const App = () => {
  const Stack = createStackNavigator();

  const [connected, setConnected] = useState(null);

  useEffect(() => {
    NetInfo.fetch().then(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      setConnected(state.isConnected);
    });
  }, []);

  if (connected !== null && !connected) {
    ToastAndroid.showWithGravity(
      'Check Your Intenrnet Connection !',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
    );
    return null;
  }

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
