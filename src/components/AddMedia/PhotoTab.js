import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  Pressable,
} from 'react-native';
import {VStack, HStack, Icon, Text, Image, Box, ScrollView} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'react-native-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RNCamera} from 'react-native-camera';
import {TabView, SceneMap} from 'react-native-tab-view';

const PendingView = () => (
  <View
    style={{
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Waiting</Text>
  </View>
);

export default function PhotoTab({navigation}) {
  const [ImageSource, setImageSource] = useState(null);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Filter'},
    {key: 'second', title: 'Edit'},
  ]);
  takePicture = async function (camera) {
    const options = {quality: 1, base64: true};
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    // console.log(data.uri);
    setImageSource(data.uri);
    navigation.navigate('EditImage', {ImageSource: ImageSource});
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
          source={{uri: ImageSource}}
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
          source={{uri: ImageSource}}
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
          source={{uri: ImageSource}}
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
          source={{uri: ImageSource}}
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
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({camera, status, recordAudioPermissionStatus}) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View style={styles.captureBox}>
              <TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.capture}
              />
            </View>
          );
        }}
      </RNCamera>

      {/* <VStack style={styles.mainContainer}>
        <VStack flex={4}>
          <Image source={{uri: ImageSource}} alt="dd" w="100%" h="100%" />
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
      </VStack> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    borderWidth: 10,
    backgroundColor: '#f1f1f1',
  },
  captureBox: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
