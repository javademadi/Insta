import React from 'react';
import {StyleSheet, Dimensions, Animated, Pressable} from 'react-native';

import {TabView, SceneMap} from 'react-native-tab-view';
import {
  VStack,
  Image,
  HStack,
  Avatar,
  ScrollView,
  Text,
  Box,
  Badge,
} from 'native-base';

const suggestedItems = [
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
];

export default function LikesTab({navigation}) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'FOLLOWING'},
    {key: 'second', title: 'YOU'},
  ]);
  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });
          const color = index === i ? '#1f2937' : '#a1a1aa';
          const borderColor = index === i ? 'cyan.500' : 'coolGray.200';

          return (
            <Box
              key={i}
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              height={10}
              alignItems="center"
              justifyContent="center"
              cursor="pointer">
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}>
                <Animated.Text style={{color}}>{route.title}</Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };
  const FirstRoute = () => (
    <ScrollView>
      <VStack px={4}>
        <HStack justifyContent="space-between" alignItems="center" py={2}>
          <Avatar source={require('../../assets/Thumbnail-1.jpg')} size="lg" />
          <VStack px={8} space={1}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              javademadi liked 3 posts
            </Text>
            <HStack space={1}>
              <Image
                width={55}
                height={55}
                source={require('../../assets/3.jpg')}
                alt="fff"
              />
              <Image
                width={55}
                height={55}
                source={require('../../assets/4.jpg')}
                alt="fff"
              />
              <Image
                width={55}
                height={55}
                source={require('../../assets/5.jpg')}
                alt="fff"
              />
            </HStack>
          </VStack>
          <HStack flex={1} justifyContent="flex-end" />
        </HStack>
        <HStack justifyContent="space-between" alignItems="center" py={2}>
          <Avatar source={require('../../assets/Thumbnail-2.jpg')} size="lg" />
          <VStack px={8}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              peyman_kg start folllowing
            </Text>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>alireza</Text>
          </VStack>
          <HStack flex={1} justifyContent="flex-end" />
        </HStack>
        <HStack justifyContent="space-between" alignItems="center" py={2}>
          <Avatar source={require('../../assets/Thumbnail-3.jpg')} size="lg" />
          <VStack px={8}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              peyman_karegar Liked
            </Text>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Ramin Post</Text>
          </VStack>
          <HStack flex={1} justifyContent="flex-end">
            <Image
              width={65}
              height={65}
              source={require('../../assets/5.jpg')}
              alt="fff"
            />
          </HStack>
        </HStack>
        <HStack justifyContent="space-between" alignItems="center" py={2}>
          <Avatar source={require('../../assets/Thumbnail-1.jpg')} size="lg" />
          <VStack px={8} space={1}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              javademadi liked 3 posts
            </Text>
            <HStack space={1}>
              <Image
                width={55}
                height={55}
                source={require('../../assets/3.jpg')}
                alt="fff"
              />
              <Image
                width={55}
                height={55}
                source={require('../../assets/4.jpg')}
                alt="fff"
              />
              <Image
                width={55}
                height={55}
                source={require('../../assets/5.jpg')}
                alt="fff"
              />
            </HStack>
          </VStack>
          <HStack flex={1} justifyContent="flex-end" />
        </HStack>
        <HStack justifyContent="space-between" alignItems="center" py={2}>
          <Avatar source={require('../../assets/Thumbnail-2.jpg')} size="lg" />
          <VStack px={8}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              peyman_kg start folllowing
            </Text>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>alireza</Text>
          </VStack>
          <HStack flex={1} justifyContent="flex-end" />
        </HStack>
        <HStack justifyContent="space-between" alignItems="center" py={2}>
          <Avatar source={require('../../assets/Thumbnail-3.jpg')} size="lg" />
          <VStack px={8}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              peyman_karegar Liked
            </Text>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Ramin Post</Text>
          </VStack>
          <HStack flex={1} justifyContent="flex-end">
            <Image
              width={65}
              height={65}
              source={require('../../assets/5.jpg')}
              alt="fff"
            />
          </HStack>
        </HStack>
        <HStack justifyContent="space-between" alignItems="center" py={2}>
          <Avatar source={require('../../assets/Thumbnail-1.jpg')} size="lg" />
          <VStack px={8} space={1}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              javademadi liked 3 posts
            </Text>
            <HStack space={1}>
              <Image
                width={55}
                height={55}
                source={require('../../assets/3.jpg')}
                alt="fff"
              />
              <Image
                width={55}
                height={55}
                source={require('../../assets/4.jpg')}
                alt="fff"
              />
              <Image
                width={55}
                height={55}
                source={require('../../assets/5.jpg')}
                alt="fff"
              />
            </HStack>
          </VStack>
          <HStack flex={1} justifyContent="flex-end" />
        </HStack>
        <HStack justifyContent="space-between" alignItems="center" py={2}>
          <Avatar source={require('../../assets/Thumbnail-2.jpg')} size="lg" />
          <VStack px={8}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              peyman_kg start folllowing
            </Text>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>alireza</Text>
          </VStack>
          <HStack flex={1} justifyContent="flex-end" />
        </HStack>
        <HStack justifyContent="space-between" alignItems="center" py={2}>
          <Avatar source={require('../../assets/Thumbnail-3.jpg')} size="lg" />
          <VStack px={8}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              peyman_karegar Liked
            </Text>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Ramin Post</Text>
          </VStack>
          <HStack flex={1} justifyContent="flex-end">
            <Image
              width={65}
              height={65}
              source={require('../../assets/5.jpg')}
              alt="fff"
            />
          </HStack>
        </HStack>
      </VStack>
    </ScrollView>
  );
  const SecondRoute = () => (
    <ScrollView>
      <VStack px={4}>
        <HStack justifyContent="space-between" alignItems="center" py={3}>
          <VStack>
            <Badge
              colorScheme="danger"
              rounded="999px"
              mb={-4}
              mr={-2}
              zIndex={1}
              variant="solid"
              alignSelf="flex-end"
              _text={{
                fontSize: 10,
              }}>
              5
            </Badge>
            <Avatar source={require('../../assets/Thumbnail-3.jpg')} />
          </VStack>

          <VStack px={8}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              Follow Requests
            </Text>
            <Text style={{fontSize: 12, color: '#5a5a5a'}}>
              Approve or ignores Requests
            </Text>
          </VStack>
          <HStack flex={1} justifyContent="flex-end" />
        </HStack>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Activity</Text>
        <HStack justifyContent="space-between" alignItems="center" py={2}>
          <HStack>
            <Avatar source={require('../../assets/Thumbnail-3.jpg')} />
            <Avatar
              ml={-6}
              mt={2}
              source={require('../../assets/Thumbnail-4.jpg')}
            />
          </HStack>
          <VStack px={8}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              javademadi,peyman_kg
            </Text>
            <Text style={{fontSize: 12, color: '#5a5a5a'}}>and 85 others</Text>
            <Text style={{fontSize: 12, color: '#5a5a5a'}}>
              liked your post
            </Text>
          </VStack>
          <HStack flex={1} justifyContent="flex-end">
            <Image
              width={55}
              height={55}
              source={require('../../assets/3.jpg')}
              alt="fff"
            />
          </HStack>
        </HStack>
        <HStack justifyContent="space-between" alignItems="center" py={2}>
          <Avatar source={require('../../assets/Thumbnail-3.jpg')} />
          <HStack px={8} space={2}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>javademadi</Text>
            <Text style={{fontSize: 14, color: '#5a5a5a'}}>
              liked your photo
            </Text>
          </HStack>
          <HStack flex={1} justifyContent="flex-end">
            <Image
              width={55}
              height={55}
              source={require('../../assets/5.jpg')}
              alt="fff"
            />
          </HStack>
        </HStack>
        <HStack justifyContent="space-between" alignItems="center" py={2}>
          <Avatar source={require('../../assets/Thumbnail-3.jpg')} />
          <VStack px={8}>
            <HStack space={2}>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>javademadi</Text>
              <Text style={{fontSize: 12, color: '#5a5a5a'}}>mentioned</Text>
            </HStack>
            <Text style={{fontSize: 12, color: '#5a5a5a'}}>
              you in a comment :
            </Text>
            <Text style={{fontSize: 12, color: 'blue'}}>@reactapp_ir</Text>
          </VStack>
          <HStack flex={1} justifyContent="flex-end">
            <Image
              width={55}
              height={55}
              source={require('../../assets/4.jpg')}
              alt="fff"
            />
          </HStack>
        </HStack>
        <HStack justifyContent="space-between" alignItems="center" py={2}>
          <HStack>
            <Avatar source={require('../../assets/Thumbnail-3.jpg')} />
            <Avatar
              ml={-6}
              mt={2}
              source={require('../../assets/Thumbnail-4.jpg')}
            />
          </HStack>
          <VStack px={8}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              javademadi,peyman_kg
            </Text>
            <Text style={{fontSize: 12, color: '#5a5a5a'}}>and 85 others</Text>
            <Text style={{fontSize: 12, color: '#5a5a5a'}}>
              liked your post
            </Text>
          </VStack>
          <HStack flex={1} justifyContent="flex-end">
            <Image
              width={55}
              height={55}
              source={require('../../assets/3.jpg')}
              alt="fff"
            />
          </HStack>
        </HStack>
        <HStack justifyContent="space-between" alignItems="center" py={2}>
          <Avatar source={require('../../assets/Thumbnail-3.jpg')} />
          <HStack px={8} space={2}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>javademadi</Text>
            <Text style={{fontSize: 14, color: '#5a5a5a'}}>
              liked your photo
            </Text>
          </HStack>
          <HStack flex={1} justifyContent="flex-end">
            <Image
              width={55}
              height={55}
              source={require('../../assets/5.jpg')}
              alt="fff"
            />
          </HStack>
        </HStack>
        <HStack justifyContent="space-between" alignItems="center" py={2}>
          <Avatar source={require('../../assets/Thumbnail-3.jpg')} />
          <VStack px={8}>
            <HStack space={2}>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>javademadi</Text>
              <Text style={{fontSize: 12, color: '#5a5a5a'}}>mentioned</Text>
            </HStack>
            <Text style={{fontSize: 12, color: '#5a5a5a'}}>
              you in a comment :
            </Text>
            <Text style={{fontSize: 12, color: 'blue'}}>@reactapp_ir</Text>
          </VStack>
          <HStack flex={1} justifyContent="flex-end">
            <Image
              width={55}
              height={55}
              source={require('../../assets/4.jpg')}
              alt="fff"
            />
          </HStack>
        </HStack>
      </VStack>
    </ScrollView>
  );

  const initialLayout = {width: Dimensions.get('window').width};
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  return (
    <VStack style={styles.mainContainer}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </VStack>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
