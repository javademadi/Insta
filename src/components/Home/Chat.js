import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, Send} from 'react-native-gifted-chat';
import {StyleSheet, View} from 'react-native';
import {VStack, HStack, Icon, Avatar, Stack, Text} from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function chatComponent({navigation, route}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <Stack style={styles.mainContainer}>
      <HStack
        style={{
          backgroundColor: '#fff',
          height: 60,
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
        <VStack alignItems="center">
          <Avatar source={route.params.avatar} width={35} height={35} />
          <Text fontSize={10} mb={1}>
            {route.params.username}
          </Text>
        </VStack>
        <HStack alignItems="center">
          <Icon
            name="ios-videocam-outline"
            as={Ionicons}
            style={{color: '#757575', fontSize: 28}}
          />
        </HStack>
      </HStack>
      <GiftedChat
        messages={messages}
        showUserAvatar={true}
        renderSend={props => (
          <Send {...props}>
            <View
              style={{marginRight: 10, marginBottom: 5, alignItems: 'center'}}>
              <Icon size={7} name="ios-send-outline" as={Ionicons} />
            </View>
          </Send>
        )}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
          avatar: 'https://placeimg.com/140/140/any',
        }}
      />
    </Stack>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
