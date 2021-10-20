import React, {useState} from 'react';
import {Text, Dimensions, Animated, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Foundation from 'react-native-vector-icons/Foundation';

import ProfilePost from '../Profile/post';
import {
  VStack,
  Button,
  Image,
  HStack,
  Icon,
  Avatar,
  ScrollView,
  Stack,
} from 'native-base';

const Images = [
  require('../../assets/1.jpg'),
  require('../../assets/3.jpg'),
  require('../../assets/2.jpg'),
  require('../../assets/4.jpg'),
  require('../../assets/5.jpg'),
  require('../../assets/1.jpg'),
  require('../../assets/2.jpg'),
  require('../../assets/5.jpg'),
  require('../../assets/4.jpg'),
];

const {width, height} = Dimensions.get('window');

const Sliding_Drawer_Width = 270;
let Sliding_Drawer_Toggle;
export default ProfileTab = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showBox, setShowBox] = useState(false);
  const [Animation, setAnimation] = useState(new Animated.Value(0));

  const segmentClicked = index => {
    setActiveIndex(index);
  };
  const showSlidingDrawer = () => {
    if (Sliding_Drawer_Toggle === true) {
      Animated.timing(Animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        Sliding_Drawer_Toggle = false;
      });
    } else {
      Animated.timing(Animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        Sliding_Drawer_Toggle = true;
      });
    }
  };

  const renderSectionOne = () => {
    return Images.map((image, index) => {
      return (
        <Stack
          my={1}
          key={index}
          style={[
            {width: width / 3},
            {height: width / 3},
            index % 3 !== 0 ? {paddingLeft: 3} : {paddingLeft: 0},
          ]}>
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            py={2}
            source={image}
            alt="khar"
          />
        </Stack>
      );
    });
  };
  const renderSection = () => {
    if (activeIndex === 0) {
      return <HStack style={{flexWrap: 'wrap'}}>{renderSectionOne()}</HStack>;
    } else if (activeIndex === 1) {
      return (
        <HStack>
          <ProfilePost />
        </HStack>
      );
    } else if (activeIndex === 2) {
      return <HStack style={{flexWrap: 'wrap'}}>{renderSectionOne()}</HStack>;
    } else if (activeIndex === 3) {
      navigation.navigate('SavedPost');
    }
  };

  const renderBoxAccount = () => {
    if (showBox) {
      return (
        <VStack bg="#fff" w="100%" style={{position: 'absolute', zIndex: 10}}>
          <HStack
            px={3}
            py={2}
            bg="#fff"
            justifyContent="space-between"
            alignItems="center"
            style={{
              borderBottomWidth: 2,
              borderTopWidth: 2,
              borderColor: '#eee',
            }}>
            <HStack space={6} alignItems="center">
              <Avatar source={require('../../assets/Thumbnail-2.jpg')} />
              <Text style={{fontWeight: 'bold'}}>Varzesh3</Text>
            </HStack>
            <Icon name="check-circle" color="blue.600" as={MaterialIcons} />
          </HStack>
          <HStack
            px={4}
            py={2}
            style={{
              borderBottomColor: '#eee',
              borderBottomWidth: 2,
            }}
            space={6}
            alignItems="center">
            <Icon name="add" as={MaterialIcons} />
            <Text style={{fontWeight: 'bold'}}>Add Account</Text>
          </HStack>
        </VStack>
      );
    }
  };

  const Animation_Interpolate = Animation.interpolate({
    inputRange: [0, 1],
    outputRange: [Sliding_Drawer_Width, 0],
  });
  return (
    <ScrollView>
      <VStack style={{flex: 1, backgroundColor: '#fff'}}>
        <HStack
          style={{
            backgroundColor: '#fff',
            height: 45,
            paddingHorizontal: 5,
            borderBottomColor: '#dddd',
            borderBottomWidth: 2,
          }}
          justifyContent="space-between"
          alignItems="center">
          <HStack alignItems="center">
            <Text
              style={{fontWeight: 'bold'}}
              onPress={() => setShowBox(!showBox)}>
              Varzesh3
            </Text>
            <Icon
              name="arrow-drop-down"
              as={MaterialIcons}
              style={{color: '#757575', fontSize: 23}}
              onPress={() => setShowBox(!showBox)}
            />
          </HStack>
          <HStack alignItems="center">
            <Icon
              name="ios-timer-outline"
              as={Ionicons}
              style={{color: '#757575', fontSize: 23}}
            />
            <Icon
              name="add-user"
              as={Entypo}
              style={{color: '#757575', fontSize: 23}}
              onPress={() => navigation.navigate('Suggest')}
            />
            <Icon
              name="more-vertical"
              as={Feather}
              style={{color: '#757575', fontSize: 23}}
              onPress={() => navigation.navigate('Setting')}
            />
            <Icon
              name="ios-menu"
              as={Ionicons}
              style={{color: '#757575', fontSize: 23}}
              onPress={showSlidingDrawer}
            />
          </HStack>
        </HStack>
        <Animated.View
          style={[
            styles.Root_Sliding_Drawer_Container,
            {transform: [{translateX: Animation_Interpolate}]},
          ]}>
          <View style={styles.Main_Sliding_Drawer_Container}>
            <View
              style={{
                width: '100%',
                height: 40,
                flexDirection: 'row',
                marginTop: 3,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="logo-instagram" as={Ionicons} />
              </View>
              <View
                style={{
                  flex: 4,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text>NameTag</Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: 40,
                flexDirection: 'row',
                marginTop: 3,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="tag" as={EvilIcons} />
              </View>
              <View
                style={{
                  flex: 4,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text>Saved</Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: 40,
                flexDirection: 'row',
                marginTop: 3,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="list-bullet" as={Foundation} />
              </View>
              <View
                style={{
                  flex: 4,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text>Close Friends</Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: 40,
                flexDirection: 'row',
                marginTop: 3,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="add-user" as={Entypo} />
              </View>
              <View
                style={{
                  flex: 4,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text>Find People</Text>
              </View>
            </View>
          </View>
        </Animated.View>
        <HStack space={5} alignItems="center" py={2}>
          {renderBoxAccount()}

          <HStack px={2}>
            <Avatar
              source={require('../../assets/Thumbnail-2.jpg')}
              height={75}
              width={75}
            />
          </HStack>

          <VStack flex={1} space={2} px={2}>
            <HStack justifyContent="space-around">
              <VStack space={1} alignItems="center">
                <Text>1505</Text>
                <Text>Posts</Text>
              </VStack>
              <VStack space={1} alignItems="center">
                <Text>1.9 m</Text>
                <Text>Follower</Text>
              </VStack>
              <VStack space={1} alignItems="center">
                <Text>565</Text>
                <Text>Following</Text>
              </VStack>
            </HStack>
            <HStack>
              <Button
                onPress={() => navigation.navigate('EditProfile')}
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  borderColor: '#dddd',
                  borderWidth: 2,
                  height: 40,
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                  Edit Profile
                </Text>
              </Button>
            </HStack>
          </VStack>
        </HStack>

        <VStack px={2} alignItems="flex-start" space={1}>
          <Text>ورزش 3</Text>
          <HStack>
            <Text>Varzesh3.com</Text>
            <Text style={{color: 'blue'}}> #varzesh3</Text>
          </HStack>
          <Text style={{color: '#0d47a1'}}>t.me/varzesh3</Text>
        </VStack>
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
              <VStack
                justifyContent="center"
                alignItems="center"
                style={{
                  borderColor: 'gray',
                  borderWidth: 2,
                  borderRadius: 50,
                  height: 65,
                  width: 65,
                }}>
                <Icon name="add" as={Ionicons} />
              </VStack>
              <Text style={{color: '#000', fontSize: 13}}>Add</Text>
            </VStack>

            <VStack justifyContent="center" alignItems="center">
              <Avatar
                style={{
                  borderColor: 'gray',
                  borderWidth: 2,
                  paddingEnd: 30,
                }}
                source={require('../../assets/Thumbnail-1.jpg')}
                marginX={1}
                size="lg"
              />
              <Text style={{color: '#000', fontSize: 13}}>Highlight</Text>
            </VStack>
            <VStack justifyContent="center" alignItems="center">
              <Avatar
                style={{borderColor: 'gray', borderWidth: 2}}
                source={require('../../assets/Thumbnail-2.jpg')}
                marginX={1}
                size="lg"
              />
              <Text style={{color: '#000', fontSize: 13}}>Highlight</Text>
            </VStack>
            <VStack justifyContent="center" alignItems="center">
              <Avatar
                style={{borderColor: 'gray', borderWidth: 2}}
                source={require('../../assets/Thumbnail-3.jpg')}
                mx={1}
                size="lg"
              />
              <Text style={{color: '#000', fontSize: 13}}>Highlight</Text>
            </VStack>
            <VStack justifyContent="center" alignItems="center">
              <Avatar
                style={{borderColor: 'gray', borderWidth: 2}}
                source={require('../../assets/Thumbnail-4.jpg')}
                mx={1}
                size="lg"
              />
              <Text style={{color: '#000', fontSize: 13}}>Highlight</Text>
            </VStack>
            <VStack justifyContent="center" alignItems="center">
              <Avatar
                style={{borderColor: 'gray', borderWidth: 2}}
                source={require('../../assets/Thumbnail-5.jpg')}
                mx={1}
                size="lg"
              />
              <Text style={{color: '#000', fontSize: 13}}>Highlight</Text>
            </VStack>
            <VStack justifyContent="center" alignItems="center">
              <Avatar
                style={{
                  borderColor: 'gray',
                  borderWidth: 2,
                  paddingEnd: 30,
                }}
                source={require('../../assets/Thumbnail-1.jpg')}
                marginX={1}
                size="lg"
              />
              <Text style={{color: '#000', fontSize: 13}}>Highlight</Text>
            </VStack>
            <VStack justifyContent="center" alignItems="center">
              <Avatar
                style={{borderColor: 'gray', borderWidth: 2}}
                source={require('../../assets/Thumbnail-2.jpg')}
                marginX={1}
                size="lg"
              />
              <Text style={{color: '#000', fontSize: 13}}>Highlight</Text>
            </VStack>
            <VStack justifyContent="center" alignItems="center">
              <Avatar
                style={{borderColor: 'gray', borderWidth: 2}}
                source={require('../../assets/Thumbnail-3.jpg')}
                mx={1}
                size="lg"
              />
              <Text style={{color: '#000', fontSize: 13}}>Highlight</Text>
            </VStack>
            <VStack justifyContent="center" alignItems="center">
              <Avatar
                style={{borderColor: 'gray', borderWidth: 2}}
                source={require('../../assets/Thumbnail-4.jpg')}
                mx={1}
                size="lg"
              />
              <Text style={{color: '#000', fontSize: 13}}>Highlight</Text>
            </VStack>
            <VStack justifyContent="center" alignItems="center">
              <Avatar
                style={{borderColor: 'gray', borderWidth: 2}}
                source={require('../../assets/Thumbnail-5.jpg')}
                mx={1}
                size="lg"
              />
              <Text style={{color: '#000', fontSize: 13}}>Highlight</Text>
            </VStack>
          </ScrollView>
        </HStack>
        <VStack>
          <HStack
            p={2}
            style={{borderTopWidth: 1, borderTopColor: '#eae5e5'}}
            justifyContent="space-around"
            alignItems="center">
            <Icon
              name="md-apps"
              as={Ionicons}
              size={6}
              style={activeIndex === 0 ? {} : {color: '#a5a5a5'}}
              onPress={() => segmentClicked(0)}
              active={activeIndex === 0}
            />
            <Icon
              name="list-outline"
              as={Ionicons}
              style={activeIndex === 1 ? {} : {color: '#a5a5a5'}}
              onPress={() => segmentClicked(1)}
              active={activeIndex === 1}
            />
            <Icon
              name="people-outline"
              as={Ionicons}
              style={activeIndex === 2 ? {} : {color: '#a5a5a5'}}
              onPress={() => segmentClicked(2)}
              active={activeIndex === 2}
            />
            <Icon
              name="ios-bookmark-outline"
              as={Ionicons}
              size={6}
              style={activeIndex === 3 ? {} : {color: '#a5a5a5'}}
              onPress={() => segmentClicked(3)}
              active={activeIndex === 3}
            />
          </HStack>
          {renderSection()}
        </VStack>
      </VStack>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Root_Sliding_Drawer_Container: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    bottom: 0,
    width: Sliding_Drawer_Width,
    zIndex: 50000,
    top: 46,
  },
  Main_Sliding_Drawer_Container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
});
