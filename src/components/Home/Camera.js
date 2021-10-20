import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Animated,
  Pressable,
  TextInput,
} from 'react-native';
import {VStack, Stack, Center, Text, Box} from 'native-base';
import {renderFooter, renderHeader} from './function';
import {TabView, SceneMap} from 'react-native-tab-view';

export default function Camera({navigation}) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'TYPE'},
    {key: 'second', title: 'LIVE'},
    {key: 'third', title: 'NORMAL'},
    {key: 'forth', title: 'BOOMRANG'},
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
          const color = index === i ? '#fff' : '#a1a1aa';
          const borderColor = index === i ? '#000' : 'coolGray.200';

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
    <Center flex={1}>
      <TextInput
        style={styles.textInput}
        underlineColorAndroid="transparent"
        placeholder="Tap to Type"
        placeholderTextColor="#9e9e9e"
        multiline={true}
        numberOfLines={10}
      />
    </Center>
  );
  const SecondRoute = () => (
    <Center flex={1}>
      <Text>Live</Text>
    </Center>
  );
  const thirdRoute = () => (
    <VStack p={2}>
      <Text>Normal</Text>
    </VStack>
  );
  const forthRoute = () => (
    <VStack p={2}>
      <Text>Boomrang</Text>
    </VStack>
  );

  const initialLayout = {width: Dimensions.get('window').width};
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: thirdRoute,
    forth: forthRoute,
  });
  return (
    <Stack style={styles.mainContainer}>
      {renderHeader(index)}
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        tabBarPosition="bottom"
      />
      {renderFooter(index)}
    </Stack>
  );
}

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
  textInput: {
    width: '95%',
    textAlign: 'left',
    height: 150,
    paddingHorizontal: '2.5%',
    color: '#fff',
  },
});
