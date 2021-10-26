import React, {useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, ImageBackground} from 'react-native';
import {Icon, Modal, HStack, Avatar, Input, Progress} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
let tm;
export default function Story({isOpen, onClose, storyImage}) {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (isOpen && seconds < 11) {
      tm = setTimeout(() => {
        setSeconds(seconds + 1);
      }, 800);
    } else {
      setSeconds(0);
      clearTimeout(tm);
    }
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      alignItems="flex-start"
      justifyContent="flex-start"
      style={{backgroundColor: '#000'}}>
      <ImageBackground
        source={storyImage}
        resizeMode="stretch"
        style={{
          height: '93%',
          width: '100%',
        }}>
        <Progress bg="#ccc" size="xs" value={seconds} min={0} max={10} m={3} />

        <HStack
          p={3}
          style={{
            justifyContent: 'space-between',
            width: '100%',
          }}
          alignItems="center">
          <HStack space={2} alignItems="center">
            <Avatar
              source={require('../../assets/Thumbnail-1.jpg')}
              marginX={1}
              size="sm"
            />
            <Text style={{color: '#fff'}}>javademadi</Text>
            <Text style={{color: '#ccc', fontSize: 12}}>2h</Text>
          </HStack>
          <Icon name="more-vertical" as={Feather} size={5} color="#fff" />
        </HStack>
      </ImageBackground>
      <HStack
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        px={3}
        space={2}>
        <Input
          style={{width: '90%', height: 40}}
          variant="rounded"
          placeholder="Send Message"
          color="#fff"
          placeholderTextColor="#fff"
        />
        <Icon name="send" as={Feather} size={6} color="#fff" />
      </HStack>
    </Modal>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
