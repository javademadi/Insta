import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HStack, Icon, Stack, Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
export const renderHeader = currentTab => {
  if (currentTab === 0) {
    return (
      <HStack justifyContent="space-between" alignItems="center" p={4}>
        <HStack space={2} alignItems="center">
          <Icon name="align-left" as={Foundation} color="#fff" />
          <View
            style={{
              borderWidth: 1,
              width: 23,
              height: 23,
              borderRadius: 5,
              borderColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff'}}>A</Text>
          </View>
        </HStack>
        <HStack
          style={{
            borderWidth: 1,
            height: 25,
            borderRadius: 25,
            borderColor: '#fff',
          }}>
          <Text px={3} style={{color: '#fff'}}>
            TYPEWRITER
          </Text>
        </HStack>
        <Text mr={10} />
      </HStack>
    );
  } else {
    return (
      <HStack justifyContent="space-between" alignItems="center" p={4}>
        <Icon name="ios-settings" as={Ionicons} color="#fff" />
        <Icon name="long-arrow-right" as={FontAwesome} color="#fff" />
      </HStack>
    );
  }
};
export const renderFooter = currentTab => {
  switch (currentTab) {
    case 0:
      return (
        <HStack style={styles.footer}>
          <HStack
            style={styles.boxStyle}
            alignItems="center"
            justifyContent="space-between">
            <Stack
              mx={10}
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: '#fff',
                backgroundColor: '#000',
              }}
            />
            <Stack
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                borderWidth: 1,
                borderColor: '#fff',
                backgroundColor: '#000',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="chevron-right" as={MaterialIcons} color="#fff" />
            </Stack>
            <HStack mr={5} space={8} alignItems="center">
              <Icon name="autorenew" as={MaterialIcons} color="#fff" />
              <Icon name="ios-camera-outline" as={Ionicons} color="#fff" />
            </HStack>
          </HStack>
        </HStack>
      );
    case 1:
      return (
        <HStack style={styles.footer}>
          <HStack
            px={5}
            style={styles.boxStyle}
            alignItems="center"
            justifyContent="space-between">
            <Stack
              alignItems="center"
              justifyContent="center"
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: '#fff',
                backgroundColor: '#000',
              }}>
              <Icon name="ios-flash" as={Ionicons} color="#fff" size={5} />
            </Stack>
            <Stack
              style={{
                width: 200,
                height: 50,
                borderRadius: 25,
                borderWidth: 1,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text color="#030303">Start Live Video</Text>
            </Stack>
            <HStack alignItems="center">
              <Icon name="autorenew" as={MaterialIcons} color="#fff" />
            </HStack>
          </HStack>
        </HStack>
      );
    case 2:
      return (
        <HStack style={styles.footer}>
          <HStack
            px={5}
            style={styles.boxStyle}
            alignItems="center"
            justifyContent="space-between">
            <Icon name="image-outline" as={Ionicons} color="#fff" />
            <Stack
              alignItems="center"
              justifyContent="center"
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: '#fff',
                backgroundColor: '#000',
              }}>
              <Icon name="ios-flash" as={Ionicons} color="#fff" size={5} />
            </Stack>
            <Stack
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 1,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <Icon name="autorenew" as={MaterialIcons} color="#fff" />
            <Icon name="emoji-happy" as={Entypo} color="#fff" />
          </HStack>
        </HStack>
      );
    case 3:
      return (
        <HStack style={styles.footer}>
          <HStack
            px={5}
            style={styles.boxStyle}
            alignItems="center"
            justifyContent="space-between">
            <Icon name="image-outline" as={Ionicons} color="#fff" />
            <Stack
              alignItems="center"
              justifyContent="center"
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: '#fff',
                backgroundColor: '#000',
              }}>
              <Icon name="ios-flash" as={Ionicons} color="#fff" size={5} />
            </Stack>
            <Stack
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 1,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="infinity" as={Entypo} style={{color: 'red'}} />
            </Stack>
            <Icon name="autorenew" as={MaterialIcons} color="#fff" />
            <Icon name="emoji-happy" as={Entypo} color="#fff" />
          </HStack>
        </HStack>
      );
    default:
      return (
        <HStack style={styles.footer}>
          <HStack
            style={styles.boxStyle}
            alignItems="center"
            justifyContent="space-between">
            <Stack
              mx={10}
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: '#fff',
                backgroundColor: '#000',
              }}
            />
            <Stack
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                borderWidth: 1,
                borderColor: '#fff',
                backgroundColor: '#000',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="chevron-right" as={MaterialIcons} color="#fff" />
            </Stack>
            <HStack mr={5} space={8} alignItems="center">
              <Icon name="autorenew" as={MaterialIcons} color="#fff" />
              <Icon name="ios-camera-outline" as={Ionicons} color="#fff" />
            </HStack>
          </HStack>
        </HStack>
      );
  }
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#000',
    flex: 1,
  },
  footer: {
    width: '100%',
    height: 60,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 50,
    backgroundColor: '#000',
  },
  boxStyle: {
    flex: 1,
  },
});
