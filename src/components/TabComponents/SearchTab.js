import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  VStack,
  HStack,
  Icon,
  Text,
  Stack,
  ScrollView,
  Avatar,
  Badge,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import ImageElement from '../search/ImageElement';
const {width} = Dimensions.get('window');
export default function SearchTab({navigation}) {
  const [state, setState] = useState({
    modalVisible: false,
    modalImage: require('../../assets/1.jpg'),
    Images: [
      require('../../assets/1.jpg'),
      require('../../assets/3.jpg'),
      require('../../assets/2.jpg'),
      require('../../assets/4.jpg'),
      require('../../assets/5.jpg'),
      require('../../assets/1.jpg'),
      require('../../assets/2.jpg'),
      require('../../assets/5.jpg'),
      require('../../assets/4.jpg'),
      require('../../assets/1.jpg'),
      require('../../assets/3.jpg'),
      require('../../assets/2.jpg'),
      require('../../assets/4.jpg'),
      require('../../assets/5.jpg'),
      require('../../assets/1.jpg'),
      require('../../assets/2.jpg'),
      require('../../assets/5.jpg'),
      require('../../assets/4.jpg'),
    ],
  });
  const showModalHandler = imageKey => {
    setState({
      ...state,
      modalVisible: true,
      modalImage: state.Images[imageKey],
    });
  };
  const renderSectionOne = () => {
    return state.Images?.map((image, index) => {
      return (
        <TouchableWithoutFeedback
          key={index}
          onLongPress={() => showModalHandler(index)}>
          <HStack
            my={1}
            style={[
              {width: width / 3},
              {height: width / 3},
              index % 3 !== 0 ? {paddingLeft: 3} : {paddingLeft: 0},
            ]}>
            <Image
              style={{flex: 1, width: undefined, height: undefined}}
              py={1}
              source={image}
              alt="khar"
            />
          </HStack>
        </TouchableWithoutFeedback>
      );
    });
  };
  return (
    <VStack style={styles.mainContainer}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Searchbar')}>
        <HStack
          alignItems="center"
          space={6}
          p={2}
          style={{borderBottomWidth: 2, borderBottomColor: '#ccc'}}>
          <Icon
            name="ios-search"
            as={Ionicons}
            size={6}
            onPress={() => navigation.goBack()}
          />
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Search</Text>
        </HStack>
      </TouchableWithoutFeedback>
      <HStack py={2}>
        <ScrollView
          contentContainerStyle={{
            paddingStart: 5,
            paddingEnd: 5,
            alignItems: 'center',
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <VStack justifyContent="center" alignItems="center">
            <Avatar
              style={styles.avatarStyle}
              source={require('../../assets/Thumbnail-1.jpg')}
              marginX={1}
              size="lg"
            />
            <Badge
              colorScheme="danger"
              mt={-4}
              mr={0}
              zIndex={1}
              variant="solid"
              alignSelf="center"
              _text={{
                fontSize: 9,
              }}>
              Live
            </Badge>
            <Text style={{color: '#000', fontSize: 13}}> Live</Text>
          </VStack>
          <VStack justifyContent="center" alignItems="center">
            <Avatar
              style={styles.avatarStyle}
              source={require('../../assets/Thumbnail-2.jpg')}
              marginX={1}
              size="lg"
            />
            <View
              style={{
                width: 22,
                height: 22,
                borderRadius: 11,

                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 16,
                right: 6,
              }}>
              <Icon
                size={4}
                color="#fff"
                name="location-on"
                as={MaterialIcons}
              />
            </View>

            <Text style={{color: '#000', fontSize: 13}}>Location</Text>
          </VStack>
          <VStack justifyContent="center" alignItems="center">
            <Avatar
              style={styles.avatarStyle}
              source={require('../../assets/Thumbnail-3.jpg')}
              mx={1}
              size="lg"
            />
            <Text style={{color: '#000', fontSize: 13}}>Highlight</Text>
          </VStack>
          <VStack justifyContent="center" alignItems="center">
            <Avatar
              style={styles.avatarStyle}
              source={require('../../assets/Thumbnail-4.jpg')}
              mx={1}
              size="lg"
            />
            <Text style={{color: '#000', fontSize: 13}}>Highlight</Text>
          </VStack>
          <VStack justifyContent="center" alignItems="center">
            <Avatar
              style={styles.avatarStyle}
              source={require('../../assets/Thumbnail-5.jpg')}
              mx={1}
              size="lg"
            />
            <Text style={{color: '#000', fontSize: 13}}>Highlight</Text>
          </VStack>
          <VStack justifyContent="center" alignItems="center">
            <Avatar
              style={styles.avatarStyle}
              source={require('../../assets/Thumbnail-1.jpg')}
              marginX={1}
              size="lg"
            />
            <Text style={{color: '#000', fontSize: 13}}>Highlight</Text>
          </VStack>
          <VStack justifyContent="center" alignItems="center">
            <Avatar
              style={styles.avatarStyle}
              source={require('../../assets/Thumbnail-2.jpg')}
              marginX={1}
              size="lg"
            />
            <Text style={{color: '#000', fontSize: 13}}>Highlight</Text>
          </VStack>
          <VStack justifyContent="center" alignItems="center">
            <Avatar
              style={styles.avatarStyle}
              source={require('../../assets/Thumbnail-3.jpg')}
              mx={1}
              size="lg"
            />
            <Text style={{color: '#000', fontSize: 13}}>Highlight</Text>
          </VStack>
          <VStack justifyContent="center" alignItems="center">
            <Avatar
              style={styles.avatarStyle}
              source={require('../../assets/Thumbnail-4.jpg')}
              mx={1}
              size="lg"
            />
            <Text style={{color: '#000', fontSize: 13}}>Highlight</Text>
          </VStack>
          <VStack justifyContent="center" alignItems="center">
            <Avatar
              style={styles.avatarStyle}
              source={require('../../assets/Thumbnail-5.jpg')}
              mx={1}
              size="lg"
            />
            <Text style={{color: '#000', fontSize: 13}}>Highlight</Text>
          </VStack>
        </ScrollView>
      </HStack>
      <HStack>
        <VStack h="200px" flex={1}>
          <HStack h="100px">
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('../../assets/4.jpg')}
              alt="d"
            />
          </HStack>
          <HStack h="100px" pt="1">
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('../../assets/2.jpg')}
              alt="d"
            />
          </HStack>
        </VStack>
        <HStack h="200px" flex={2} ml={1}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../../assets/3.jpg')}
            alt="d"
          />
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              borderWidth: 3,
              borderColor: '#f1f1f1',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              margin: 5,
            }}>
            <Icon
              name="play"
              size={5}
              as={Ionicons}
              style={{
                color: '#fff',
              }}
            />
          </View>
          <View
            style={{
              width: '100%',
              height: 60,
              bottom: 0,
              position: 'absolute',
              paddingLeft: 10,
            }}>
            <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>
              Watch
            </Text>
            <Text style={{color: '#fff', fontSize: 13, fontWeight: 'bold'}}>
              Watch You Might Like
            </Text>
          </View>
        </HStack>
      </HStack>
      <ScrollView>
        <Stack
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}>
          <Modal
            style={styles.modal}
            isVisible={state.modalVisible}
            onBackdropPress={() => setState({...state, modalVisible: false})}
            backdropColor="black">
            <HStack style={styles.modal}>
              <ImageElement ImageSource={state.modalImage} />
            </HStack>
          </Modal>
          {renderSectionOne()}
        </Stack>
      </ScrollView>
    </VStack>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  avatarStyle: {
    borderColor: 'red',
    borderWidth: 2,
  },
  modal: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
