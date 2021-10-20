import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TabView, SceneMap} from 'react-native-tab-view';
import {
  VStack,
  Image,
  HStack,
  Icon,
  ScrollView,
  Stack,
  Center,
  Box,
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
  require('../../assets/4.jpg'),
  require('../../assets/5.jpg'),
  require('../../assets/1.jpg'),
  require('../../assets/2.jpg'),
  require('../../assets/5.jpg'),
];

const {width, height} = Dimensions.get('window');
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

export default SavedPost = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'All'},
    {key: 'second', title: 'Collection'},
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
              alignItems="center"
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
    <ScrollView>
      <VStack flex={1} justifyContent="center" alignItems="center" py={3}>
        <Text>Only you can see what you saved</Text>
        <HStack py={1} style={{flexWrap: 'wrap'}}>
          {renderSectionOne()}
        </HStack>
      </VStack>
    </ScrollView>
  );
  const SecondRoute = () => (
    <Center flex={1}>
      <View
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          borderWidth: 2,
          borderColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="bookmark-outline" as={Ionicons} />
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          marginTop: 10,
          color: '#000',
        }}>
        Save Collection
      </Text>
      <Text style={{fontSize: 15, marginTop: 10}}>
        Collection group things to save together tap +
      </Text>
      <Text style={{fontSize: 15, marginTop: 2}}>
        to start your first collection
      </Text>
      <Text
        style={{fontSize: 15, marginTop: 10, color: 'blue'}}
        onPress={() => navigation.navigate('CreateCollection')}>
        Create Collection
      </Text>
    </Center>
  );
  const initialLayout = {width: Dimensions.get('window').width};
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  return (
    <Stack style={styles.mainContainer}>
      <HStack justifyContent="space-between" alignItems="center" p={2}>
        <Icon
          name="long-arrow-left"
          as={FontAwesome}
          onPress={() => navigation.goBack()}
        />
        <Text>Saved</Text>
        <Icon
          name="add"
          as={Ionicons}
          onPress={() => navigation.navigate('CreateCollection')}
        />
      </HStack>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
