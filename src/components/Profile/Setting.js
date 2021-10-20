import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {VStack, HStack, Icon, ScrollView, Text, Switch} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Setting({navigation}) {
  const [switchValue, setSwitchValue] = useState(false);

  const handle_Logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Auth');
  };
  return (
    <ScrollView>
      <VStack style={styles.mainContainer}>
        <HStack
          alignItems="center"
          p={2}
          style={{borderBottomWidth: 2, borderBottomColor: '#ccc'}}>
          <Icon
            name="long-arrow-left"
            as={FontAwesome}
            onPress={() => navigation.goBack()}
          />
          <Text px={6} style={{fontSize: 18, fontWeight: 'bold'}}>
            Settings
          </Text>
          <Text />
        </HStack>
        <Text p={2} style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
          Invite Friends
        </Text>
        <HStack alignItems="center" py={2} px={6}>
          <Icon name="facebook-official" as={FontAwesome} color="blue.800" />
          <Text px={6} style={{fontSize: 16, color: '#5a5a5a'}}>
            Invite Facebook Friends
          </Text>
        </HStack>
        <Text p={6} style={{fontSize: 16, color: '#5a5a5a'}}>
          Invite Friends
        </Text>
        <Text p={2} style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
          Follow People
        </Text>
        <HStack alignItems="center" py={2} px={6}>
          <Icon name="facebook-official" as={FontAwesome} color="blue.800" />
          <Text px={6} style={{fontSize: 16, color: '#5a5a5a'}}>
            Facebook Friends
          </Text>
        </HStack>
        <HStack
          alignItems="center"
          py={2}
          px={6}
          style={{borderBottomWidth: 2, borderBottomColor: '#ccc'}}>
          <Icon name="user" as={FontAwesome} color="blue.800" />
          <Text px={6} style={{fontSize: 16, color: '#5a5a5a'}}>
            Contacts
          </Text>
        </HStack>
        <Text p={2} style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
          Account
        </Text>
        <Text px={8} py={3} style={{fontSize: 16, color: '#5a5a5a'}}>
          Password
        </Text>
        <Text px={8} py={3} style={{fontSize: 16, color: '#5a5a5a'}}>
          Saved
        </Text>
        <Text px={8} py={3} style={{fontSize: 16, color: '#5a5a5a'}}>
          Payments
        </Text>
        <HStack alignItems="center" p={2} justifyContent="space-between">
          <Text px={6} style={{fontSize: 16, color: '#5a5a5a'}}>
            Private Information
          </Text>
          <Switch
            value={switchValue}
            onValueChange={() => setSwitchValue(!switchValue)}
          />
        </HStack>
        <HStack alignItems="center" p={2} justifyContent="space-between">
          <Text
            onPress={handle_Logout}
            px={6}
            style={{fontSize: 18, color: 'blue', fontWeight: 'bold'}}>
            Log Out
          </Text>
        </HStack>
      </VStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
