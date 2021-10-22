import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {VStack, HStack, Icon, Text, Stack, ScrollView} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'react-native-image-picker';
const {width} = Dimensions.get('window');
export default function GalleryTab({navigation}) {
  const [source, setSource] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    const handle_ImagePicker = () => {
      ImagePicker.launchImageLibrary(
        {
          mediaType: 'mixed',
          quality: 1,
          selectionLimit: 5,
          maxHeight: 800,
          maxWidth: 600,
        },
        Response => {
          setPhotos(Response?.assets);
        },
      );
    };
    handle_ImagePicker();
  }, []);

  const renderSectionOne = () => {
    return photos.map((image, index) => {
      return (
        <HStack
          my={1}
          key={index}
          style={[
            {width: width / 4},
            {height: width / 4},
            index % 4 !== 0 ? {paddingLeft: 3} : {paddingLeft: 0},
          ]}>
          <TouchableWithoutFeedback onPress={() => setSource(image.uri)}>
            <Image
              style={{flex: 1, width: undefined, height: undefined}}
              py={2}
              source={{uri: image.uri}}
              alt="khar"
            />
          </TouchableWithoutFeedback>
        </HStack>
      );
    });
  };
  const renderBox = () => {
    if (showBox) {
      return (
        <VStack style={{position: 'absolute', zIndex: 10}}>
          <HStack
            w="140px"
            h="40px"
            left="50px"
            alignItems="center"
            bg="#fff"
            style={{
              borderBottomWidth: 1,
              borderColor: '#ccc',
            }}>
            <Text mx={3}>Gallery</Text>
          </HStack>
          <HStack
            w="140px"
            h="40px"
            left="50px"
            alignItems="center"
            bg="#fff"
            style={{
              borderBottomWidth: 1,
              borderColor: '#ccc',
            }}>
            <Text mx={3}>Videos</Text>
          </HStack>
          <HStack
            w="140px"
            h="40px"
            left="50px"
            alignItems="center"
            bg="#fff"
            style={{
              borderBottomWidth: 1,
              borderColor: '#ccc',
            }}>
            <Text mx={3}>Telegram</Text>
          </HStack>
          <HStack
            w="140px"
            h="40px"
            left="50px"
            alignItems="center"
            bg="#fff"
            style={{
              borderBottomWidth: 1,
              borderColor: '#ccc',
            }}>
            <Text mx={3}>WhatsApp Images</Text>
          </HStack>
        </VStack>
      );
    }
  };
  return (
    <Stack style={styles.mainContainer}>
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
        <HStack alignItems="center">
          <Text
            style={{fontWeight: 'bold'}}
            onPress={() => setShowBox(!showBox)}>
            Gallery
          </Text>
          <Icon
            name="arrow-drop-down"
            as={MaterialIcons}
            style={{fontSize: 23}}
            onPress={() => setShowBox(!showBox)}
          />
        </HStack>
      </HStack>
      <HStack flex={2}>
        {renderBox()}
        <Image
          source={{uri: source}}
          alt="dd"
          style={{width: '100%', height: '100%'}}
        />
        <HStack
          w="100%"
          h="40px"
          style={{
            position: 'absolute',
            bottom: 0,
          }}>
          <HStack
            w="15%"
            h="40px"
            style={{
              position: 'absolute',
              left: 5,
              bottom: 5,
            }}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#212121',
                borderColor: '#f1f1f1',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="resize"
                size={6}
                as={Ionicons}
                style={{
                  color: '#fff',
                }}
              />
            </View>
          </HStack>
          <HStack
            w="45%"
            h="40px"
            justifyContent="space-around"
            alignItems="center"
            style={{
              position: 'absolute',
              bottom: 5,
              right: 5,
            }}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#212121',
                borderColor: '#f1f1f1',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="ios-infinite"
                size={6}
                as={Ionicons}
                style={{
                  color: '#fff',
                }}
              />
            </View>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#212121',
                borderColor: '#f1f1f1',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="logo-buffer"
                size={6}
                as={Ionicons}
                style={{
                  color: '#fff',
                }}
              />
            </View>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#212121',
                borderColor: '#f1f1f1',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="page-multiple"
                size={6}
                as={Foundation}
                style={{
                  color: '#fff',
                }}
              />
            </View>
          </HStack>
        </HStack>
      </HStack>
      <ScrollView flex={2}>
        <Stack
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}>
          {renderSectionOne()}
        </Stack>
      </ScrollView>
    </Stack>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
