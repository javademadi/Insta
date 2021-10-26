import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {VStack, HStack, Icon, Text, Stack, Input, Avatar} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function commentComponent({navigation, route}) {
  const [comment, setComment] = useState('');
  const [array, setArray] = useState([]);

  const addComment = () => {
    if (comment) {
      array.push({
        name: 'reactapp.ir',
        comment: comment,
      });
      setArray(array);
      setComment('');
    }
  };

  const deleteComment = key => {
    const newArray = [...array];
    newArray.splice(key, 1);
    setArray(newArray);
    setComment('');
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
        <Icon
          name="long-arrow-left"
          as={FontAwesome}
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Comments</Text>
        <Icon name="ios-send-outline" as={Ionicons} size={6} />
      </HStack>

      <HStack p={2} alignItems="center" space={1}>
        <Avatar source={route.params.avatar} />
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          {route.params.username}
        </Text>
        <Text>{route.params.caption}</Text>
      </HStack>
      {array.map((val, key) => {
        return (
          <HStack
            p={2}
            height={50}
            key={key}
            alignItems="center"
            justifyContent="space-between">
            <HStack space={3} alignItems="center">
              <Avatar
                source={require('../../assets/Thumbnail-2.jpg')}
                width={35}
                height={35}
              />
              <VStack>
                <HStack space={1} alignItems="center">
                  <Text style={{color: '#000'}}>{val.name}</Text>
                  <Text>{val.comment}</Text>
                </HStack>
                <HStack alignItems="center">
                  <Text>32 m</Text>
                  <Icon
                    name="trash"
                    as={Ionicons}
                    size={4}
                    color="#ccc"
                    ml={1}
                    onPress={() => deleteComment(key)}
                  />
                </HStack>
              </VStack>
            </HStack>

            <Icon
              name="ios-heart-outline"
              as={Ionicons}
              size={6}
              color="#ccc"
              ml={2}
            />
          </HStack>
        );
      })}
      <HStack style={styles.footer} alignItems="center" px={2}>
        <Avatar source={route.params.avatar} width={35} height={35} />
        <Input
          variant="underlined"
          flex={1}
          placeholder="Add a comment ..."
          placeholderTextColor="#ccc"
          style={{fontSize: 14}}
          value={comment}
          onChangeText={value => setComment(value)}
        />

        <Text
          onPress={addComment}
          style={{fontSize: 14, color: 'blue', fontWeight: 'bold'}}>
          Post
        </Text>
      </HStack>
    </Stack>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
});
