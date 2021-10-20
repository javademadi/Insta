import React from 'react';
import {StyleSheet} from 'react-native';
import {VStack, HStack, Icon, Text, Divider, Input} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CreateCollection = ({navigation}) => {
  return (
    <VStack style={styles.mainContainer}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        p={2}
        style={{borderBottomWidth: 2, borderBottomColor: '#ccc'}}>
        <Icon
          size={6}
          name="close"
          as={Ionicons}
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Create Collection
        </Text>
        <Text style={{color: 'blue'}}>Next</Text>
      </HStack>
      <VStack p={3}>
        <Text>Name</Text>
        <Divider w="100%" my={4} />
      </VStack>

      <VStack flex={1} p={2}>
        <Input
          placeholder="Collection Name"
          style={{color: '#000', fontSize: 13}}
          autoFocus={true}
        />
      </VStack>
    </VStack>
  );
};

export default CreateCollection;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
