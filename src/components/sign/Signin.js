import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import {VStack, HStack, Icon, Stack} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Signin({navigation}) {
  const signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'User');
    navigation.navigate('app');
  };
  return (
    <VStack style={styles.mainContainer}>
      <VStack flex={9}>
        <HStack flex={1} justifyContent="center" alignItems="center">
          <Text>English</Text>
          <Icon name="arrow-drop-down" as={MaterialIcons} />
        </HStack>
        <HStack flex={1} justifyContent="center" alignItems="flex-end">
          <Text style={{fontWeight: 'bold', fontSize: 35, fontFamily: 'cassa'}}>
            Instagram
          </Text>
        </HStack>
        <VStack flex={5} justifyContent="center" alignItems="center">
          <TextInput
            style={{
              width: '95%',
              height: 40,
              borderWidth: 1,
              borderRadius: 3,
              borderColor: '#ccc',
              marginTop: 10,
            }}
            placeholder="Username"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={{
              width: '95%',
              height: 40,
              borderWidth: 1,
              borderRadius: 3,
              borderColor: '#ccc',
              marginTop: 10,
            }}
            placeholder="Password"
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={signInAsync}
            style={{
              justifyContent: 'center',
              width: '95%',
              height: 40,
              marginTop: 10,
              backgroundColor: 'blue',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Text style={{color: '#fff'}}>Login</Text>
          </TouchableOpacity>
          <HStack space={1}>
            <Text>Forget Your Login Detail?</Text>
            <Text style={{fontWeight: 'bold'}}>Get Help Signin</Text>
          </HStack>
        </VStack>
        <HStack flex={1} justifyContent="center" alignItems="center">
          <View style={{width: '100%', height: 1, backgroundColor: '#ccc'}} />
          <Stack
            justifyContent="center"
            alignItems="center"
            backgroundColor="#fff"
            position="absolute"
            style={{width: 30, height: 30}}>
            <Text textAlign="center">OR</Text>
          </Stack>
        </HStack>
        <HStack flex={1} justifyContent="center" alignItems="center">
          <Icon
            name="logo-facebook"
            as={Ionicons}
            style={{marginLeft: 2, color: 'blue'}}
          />
          <Text fontSize={20}>Login With Facebook</Text>
        </HStack>
      </VStack>
      <HStack
        justifyContent="center"
        alignItems="center"
        style={{borderTopWidth: 1, borderTopColor: '#ccc'}}
        flex={1}
        space={0.5}>
        <Text fontSize={16}>Don't Have An Account?</Text>
        <Text style={{color: '#000', fontWeight: 'bold'}}>Sign Up</Text>
      </HStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
