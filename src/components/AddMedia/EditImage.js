import React from 'react';
import {StyleSheet, View, Dimensions, Animated, Pressable} from 'react-native';
import {VStack, HStack, Icon, Text, Image, Box, ScrollView} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TabView, SceneMap} from 'react-native-tab-view';
export default function EditImage({navigation, route}) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Filter'},
    {key: 'second', title: 'Edit'},
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
    <ScrollView
      contentContainerStyle={{
        paddingStart: 5,
        paddingEnd: 5,
        alignItems: 'center',
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      <VStack>
        <Image
          source={{uri: route.params.ImageSource}}
          alt="dsdf"
          style={{
            marginHorizontal: 4,
            borderWidth: 2,
            width: 180,
            height: '80%',
          }}
        />
        <Text style={{textAlign: 'center', color: '#000'}}>Normal</Text>
      </VStack>
      <VStack>
        <Image
          source={{uri: route.params.ImageSource}}
          alt="dsdf"
          style={{
            marginHorizontal: 4,
            borderWidth: 2,
            width: 180,
            height: '80%',
          }}
        />
        <Text style={{textAlign: 'center', color: '#000'}}>Dark</Text>
      </VStack>
      <VStack>
        <Image
          source={{uri: route.params.ImageSource}}
          alt="dsdf"
          style={{
            marginHorizontal: 4,
            borderWidth: 2,
            width: 180,
            height: '80%',
          }}
        />
        <Text style={{textAlign: 'center', color: '#000'}}>Light</Text>
      </VStack>
      <VStack>
        <Image
          source={{uri: route.params.ImageSource}}
          alt="dsdf"
          style={{
            marginHorizontal: 4,
            borderWidth: 2,
            width: 180,
            height: '80%',
          }}
        />
        <Text style={{textAlign: 'center', color: '#000'}}>Original</Text>
      </VStack>
    </ScrollView>
  );
  const SecondRoute = () => (
    <ScrollView
      contentContainerStyle={{
        paddingStart: 5,
        paddingEnd: 5,
        alignItems: 'center',
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      <VStack w={100} h="80%">
        <HStack w={70} h={30} justifyContent="center" alignItems="center">
          <Text color="#000">Adjust</Text>
        </HStack>
        <View
          style={{
            borderRadius: 35,
            borderColor: '#ccc',
            width: 70,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="adjust" as={Entypo} style={{fontSize: 38}} />
        </View>
      </VStack>
      <VStack w={100} h="80%">
        <HStack w={70} h={30} justifyContent="center" alignItems="center">
          <Text color="#000">Brightness</Text>
        </HStack>
        <View
          style={{
            borderRadius: 35,
            borderColor: '#ccc',
            width: 70,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="brightness-low"
            as={MaterialIcons}
            style={{fontSize: 30}}
          />
        </View>
      </VStack>
      <VStack w={100} h="80%">
        <HStack w={70} h={30} justifyContent="center" alignItems="center">
          <Text color="#000">Structure</Text>
        </HStack>
        <View
          style={{
            borderRadius: 35,
            borderColor: '#ccc',
            width: 70,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="triangle" as={Feather} style={{fontSize: 30}} />
        </View>
      </VStack>
      <VStack w={100} h="80%">
        <HStack w={70} h={30} justifyContent="center" alignItems="center">
          <Text color="#000">Adjust</Text>
        </HStack>
        <View
          style={{
            borderRadius: 35,
            borderColor: '#ccc',
            width: 70,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="adjust" as={Entypo} style={{fontSize: 38}} />
        </View>
      </VStack>
      <VStack w={100} h="80%">
        <HStack w={70} h={30} justifyContent="center" alignItems="center">
          <Text color="#000">Brightness</Text>
        </HStack>
        <View
          style={{
            borderRadius: 35,
            borderColor: '#ccc',
            width: 70,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="brightness-low"
            as={MaterialIcons}
            style={{fontSize: 30}}
          />
        </View>
      </VStack>
      <VStack w={100} h="80%">
        <HStack w={70} h={30} justifyContent="center" alignItems="center">
          <Text color="#000">Structure</Text>
        </HStack>
        <View
          style={{
            borderRadius: 35,
            borderColor: '#ccc',
            width: 70,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="triangle" as={Feather} style={{fontSize: 30}} />
        </View>
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
      <VStack flex={4}>
        <Image
          source={{uri: route.params.ImageSource}}
          alt="dd"
          w="100%"
          h="100%"
        />
      </VStack>

      <VStack
        justifyContent="center"
        alignItems="center"
        style={{backgroundColor: '#fff'}}></VStack>
      <TabView
        style={{flex: 2}}
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        tabBarPosition="bottom"
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
