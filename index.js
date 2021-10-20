import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthLoadingScreen from './src/components/sign/authLoading';
import Signin from './src/components/sign/Signin';
import {NativeBaseProvider} from 'native-base';

export default function AuthFlow() {
  const Stack = createStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AuthLoading"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
          <Stack.Screen name="Auth" component={Signin} />
          <Stack.Screen name="app" component={App} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

AppRegistry.registerComponent(appName, () => AuthFlow);
