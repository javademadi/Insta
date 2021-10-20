import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Animated,
  Pressable,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabView, SceneMap} from 'react-native-tab-view';
import {
  VStack,
  HStack,
  Icon,
  Avatar,
  Text,
  List,
  Box,
  Input,
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
export default function Searchbar() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Top'},
    {key: 'second', title: 'People'},
    {key: 'third', title: 'Tags'},
    {key: 'fourth', title: 'Places'},
  ]);

  const renderPlaceholder = () => {
    switch (index) {
      case 0:
        return <Input placeholder="Search" flex={1} />;
      case 1:
        return <Input placeholder="Search People" flex={1} />;
      case 2:
        return <Input placeholder="Search Hashtags" flex={1} />;
      case 3:
        return <Input placeholder="Search Places" flex={1} />;

      default:
        return <Input placeholder="Search People" flex={1} />;
    }
  };
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
            </HStack>
          </List.Item>
        </>
      )}
    />
  );
  const SecondRoute = () => (
    <FlatList
      data={suggestedItems}
      keyExtractor={item => item.id}
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
            </HStack>
          </List.Item>
        </>
      )}
    />
  );
  const thirdRoute = () => (
    <FlatList
      data={suggestedItems}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => (
        <>
          <List.Item key={index}>
            <HStack justifyContent="space-between" alignItems="center" p={1}>
              <View
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 27.5,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon size={5} name="hashtag" as={FontAwesome} />
              </View>
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
            </HStack>
          </List.Item>
        </>
      )}
    />
  );
  const forthRoute = () => (
    <FlatList
      data={suggestedItems}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => (
        <>
          <List.Item key={index}>
            <HStack justifyContent="space-between" alignItems="center" p={1}>
              <View
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 27.5,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon size={6} name="location-outline" as={Ionicons} />
              </View>
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
            </HStack>
          </List.Item>
        </>
      )}
    />
  );
  const initialLayout = {width: Dimensions.get('window').width};
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: thirdRoute,
    fourth: forthRoute,
  });
  return (
    <VStack style={styles.mainContainer}>
      <HStack
        alignItems="center"
        space={3}
        p={2}
        style={{borderBottomWidth: 2, borderBottomColor: '#ccc'}}>
        <Icon name="ios-search" as={Ionicons} />
        {renderPlaceholder()}
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
