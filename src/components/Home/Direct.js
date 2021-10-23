import React, {useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {
  VStack,
  HStack,
  Icon,
  Text,
  Stack,
  Input,
  List,
  Avatar,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Direct({navigation}) {
  const [state, setState] = useState({
    text: '',
    dataSource: [
      {
        id: 0,
        username: 'javademadi',
        name: 'shanbe',
        avatar: require('../../assets/Thumbnail-1.jpg'),
      },
      {
        id: 1,
        username: 'varzesh3',
        name: 'varzesh3',
        avatar: require('../../assets/Thumbnail-2.jpg'),
      },
      {
        id: 2,
        username: 'Tourism_iran',
        name: 'iran',
        avatar: require('../../assets/Thumbnail-3.jpg'),
      },
      {
        id: 3,
        username: 'boomgardi',
        name: 'Boomgardi',
        avatar: require('../../assets/Thumbnail-4.jpg'),
      },
      {
        id: 4,
        username: 'javademadi',
        name: 'shanbe',
        avatar: require('../../assets/Thumbnail-1.jpg'),
      },
      {
        id: 5,
        username: 'varzesh3',
        name: 'varzesh3',
        avatar: require('../../assets/Thumbnail-2.jpg'),
      },
      {
        id: 6,
        username: 'Tourism_iran',
        name: 'iran',
        avatar: require('../../assets/Thumbnail-3.jpg'),
      },
      {
        id: 7,
        username: 'boomgardi',
        name: 'Boomgardi',
        avatar: require('../../assets/Thumbnail-4.jpg'),
      },
    ],
  });
  const [arrayHolder, setArrayHolder] = useState([
    {
      id: 0,
      username: 'javademadi',
      name: 'shanbe',
      avatar: require('../../assets/Thumbnail-1.jpg'),
    },
    {
      id: 1,
      username: 'varzesh3',
      name: 'varzesh3',
      avatar: require('../../assets/Thumbnail-2.jpg'),
    },
    {
      id: 2,
      username: 'Tourism_iran',
      name: 'iran',
      avatar: require('../../assets/Thumbnail-3.jpg'),
    },
    {
      id: 3,
      username: 'boomgardi',
      name: 'Boomgardi',
      avatar: require('../../assets/Thumbnail-4.jpg'),
    },
    {
      id: 4,
      username: 'javademadi',
      name: 'shanbe',
      avatar: require('../../assets/Thumbnail-1.jpg'),
    },
    {
      id: 5,
      username: 'varzesh3',
      name: 'varzesh3',
      avatar: require('../../assets/Thumbnail-2.jpg'),
    },
    {
      id: 6,
      username: 'Tourism_iran',
      name: 'iran',
      avatar: require('../../assets/Thumbnail-3.jpg'),
    },
    {
      id: 7,
      username: 'boomgardi',
      name: 'Boomgardi',
      avatar: require('../../assets/Thumbnail-4.jpg'),
    },
  ]);
  const searchFilterFunction = text => {
    const newData = arrayHolder.filter(item => {
      const itemData = item.username.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setState({
      dataSource: newData,
      text: text,
    });
  };
  return (
    <Stack style={styles.mainContainer}>
      <HStack
        style={{
          backgroundColor: '#fff',
          height: 45,
          paddingHorizontal: 5,
          borderBottomColor: '#dddd',
          borderBottomWidth: 2,
        }}
        justifyContent="space-between"
        alignItems="center"
        px={2}>
        <HStack alignItems="center">
          <Text
            style={{fontWeight: 'bold'}}
            onPress={() => setShowBox(!showBox)}>
            javademadi
          </Text>
        </HStack>
        <HStack alignItems="center">
          <Icon
            name="add"
            as={Ionicons}
            style={{color: '#757575', fontSize: 28}}
          />
        </HStack>
      </HStack>
      <HStack p={2} alignItems="center">
        <Input
          flex={1}
          placeholder="Search"
          variant="underlined"
          style={{fontSize: 14}}
          value={state.text}
          onChangeText={text => searchFilterFunction(text)}
          InputLeftElement={
            <Icon
              name="ios-search"
              as={Ionicons}
              style={{color: '#ccc', fontSize: 20}}
            />
          }
        />
      </HStack>
      <HStack>
        <FlatList
          data={state.dataSource}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <>
              <List.Item
                key={index}
                onPress={() =>
                  navigation.navigate('Chat', {
                    username: item.username,
                    avatar: item.avatar,
                  })
                }>
                <HStack
                  justifyContent="space-between"
                  alignItems="center"
                  p={1}>
                  <Avatar source={item.avatar} />
                  <VStack px={3}>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                      {item.username}
                    </Text>
                    <Text style={{fontSize: 12, color: '#5a5a5a'}}>
                      {item.name}
                    </Text>
                    <Text style={{fontSize: 12, color: '#5a5a5a'}}>
                      New in Instagram
                    </Text>
                  </VStack>
                  {/* <HStack flex={1} justifyContent="flex-end">
                    <Button style={{width: 80, backgroundColor: '#0f0cc9'}}>
                      <Text style={{fontSize: 12, color: '#fff'}}>Follow</Text>
                    </Button>
                    <Icon name="more-vertical" as={Feather} />
                  </HStack> */}
                </HStack>
              </List.Item>
            </>
          )}
        />
      </HStack>
    </Stack>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
