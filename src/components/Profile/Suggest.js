import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Animated,
  Pressable,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TabView, SceneMap} from 'react-native-tab-view';

import {
  VStack,
  Button,
  HStack,
  Icon,
  Avatar,
  Center,
  Text,
  List,
  Box,
  Divider,
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

export default function Suggest({navigation}) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'SUGGESTED'},
    {key: 'second', title: 'FACEBOOK'},
    {key: 'third', title: 'CONTACT'},
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
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              height={10}
              alignItems="center"
              justifyContent="center"
              cursor="pointer">
              <Pressable
                onPress={() => {
                  console.log(i);
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
    <FlatList
      data={suggestedItems}
      keyExtractor={item => item.id}
      ListHeaderComponent={
        <>
          <List.Item>
            <HStack justifyContent="space-between" alignItems="center" p={1}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderColor: 'blue',
                  borderWidth: 1,
                  borderRadius: 37.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="facebook-official"
                  as={FontAwesome}
                  color="blue.800"
                />
              </View>
              <VStack px={3}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                  Connect To Facebook
                </Text>
                <Text style={{fontSize: 12, color: '#5a5a5a'}}>
                  Follow Your Friends
                </Text>
              </VStack>
              <HStack flex={1} justifyContent="flex-end" px={8}>
                <Button
                  style={{
                    width: 80,
                    backgroundColor: '#0f0cc9',
                  }}>
                  <Text style={{fontSize: 12, color: '#fff'}}>Connect</Text>
                </Button>
              </HStack>
            </HStack>
          </List.Item>
          <Divider w="100%" my={1} />
        </>
      }
      renderItem={({item, index}) => (
        <>
          <List.Item key={index}>
            <HStack justifyContent="space-between" alignItems="center" p={1}>
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
              <HStack flex={1} justifyContent="flex-end">
                <Button style={{width: 80, backgroundColor: '#0f0cc9'}}>
                  <Text style={{fontSize: 12, color: '#fff'}}>Follow</Text>
                </Button>
                <Icon name="more-vertical" as={Feather} />
              </HStack>
            </HStack>
          </List.Item>
          <Divider w="100%" my={1} />
        </>
      )}
    />
  );
  const SecondRoute = () => (
    <Center flex={1}>
      <View
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          borderWidth: 2,
          borderColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="facebook-official" as={FontAwesome} color="blue.800" />
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          marginTop: 10,
          color: '#000',
        }}>
        Find Facebook Friends
      </Text>
      <Text style={{fontSize: 15, marginTop: 10}}>
        You Chosse What Friends to Follow. We Never Post to
      </Text>
      <Text style={{fontSize: 15, marginTop: 2}}>
        Facebook Without Your Permission
      </Text>
      <Button my={4} w="90%" style={{backgroundColor: '#0f0cc9'}}>
        <Text style={{fontSize: 15, color: '#fff'}}>Connect To Facebook</Text>
      </Button>
    </Center>
  );
  const thirdRoute = () => (
    <VStack p={2}>
      <FlatList
        data={suggestedItems}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <>
            <VStack alignItems="center">
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginTop: 10,
                  color: '#000',
                }}>
                23 Of Your Contacts Are On Instagram
              </Text>
              <Text style={{fontSize: 15, marginTop: 10, color: '#5a5a5a'}}>
                Folow Them To See Their Photos & Videos
              </Text>

              <Button my={4} w="90%" style={{backgroundColor: '#0f0cc9'}}>
                <Text style={{fontSize: 15, color: '#fff'}}>Follow All</Text>
              </Button>
            </VStack>
            <Divider w="100%" my={1} />
          </>
        }
        renderItem={({item, index}) => (
          <>
            <List.Item key={index}>
              <HStack justifyContent="space-between" alignItems="center" p={1}>
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
                <HStack flex={1} justifyContent="flex-end">
                  <Button style={{width: 80, backgroundColor: '#0f0cc9'}}>
                    <Text style={{fontSize: 12, color: '#fff'}}>Follow</Text>
                  </Button>
                  <Icon name="more-vertical" as={Feather} />
                </HStack>
              </HStack>
            </List.Item>
            <Divider w="100%" my={1} />
          </>
        )}
      />
    </VStack>
  );
  const initialLayout = {width: Dimensions.get('window').width};
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: thirdRoute,
  });
  return (
    <VStack style={styles.mainContainer}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        p={2}
        style={{borderBottomWidth: 2, borderBottomColor: '#ccc'}}>
        <Icon
          name="long-arrow-left"
          as={FontAwesome}
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Discover People</Text>
        <Text />
      </HStack>
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
