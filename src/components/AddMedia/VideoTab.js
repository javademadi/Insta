import React from 'react';
import {StyleSheet, View} from 'react-native';
import {VStack, HStack, Icon, Text, Image} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function VideoTab({navigation}) {
  return (
    <VStack style={styles.mainContainer}>
      <HStack
        alignItems="center"
        space={6}
        p={2}
        style={{borderBottomWidth: 2, borderBottomColor: '#ccc'}}>
        <Icon
          size={6}
          name="close"
          as={Ionicons}
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Video</Text>
      </HStack>
      <VStack flex={4}>
        <Image
          source={require('../../assets/3.jpg')}
          alt="dd"
          w="100%"
          h="100%"
        />
        <Icon
          size={7}
          name="autorenew"
          as={MaterialIcons}
          style={{position: 'absolute', color: '#fff', left: 10, bottom: 10}}
        />
        <Icon
          size={6}
          name="ios-flash"
          as={Ionicons}
          style={{position: 'absolute', color: '#fff', right: 10, bottom: 10}}
        />
      </VStack>

      <VStack
        flex={2}
        justifyContent="center"
        alignItems="center"
        style={{backgroundColor: '#fff'}}>
        <View
          style={{
            width: 75,
            height: 75,
            borderRadius: 37.5,
            borderWidth: 10,
            borderColor: '#f1f1f1',
          }}
        />
      </VStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
