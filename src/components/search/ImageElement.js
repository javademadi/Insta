import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {VStack, HStack, Icon, Button} from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ImageElement({ImageSource}) {
  return (
    <VStack style={styles.mainContainer}>
      <HStack>
        <Image source={ImageSource} alt="sdsf" style={styles.imageStyle} />
      </HStack>
      <HStack justifyContent="space-between">
        <HStack>
          <Button style={{backgroundColor: 'transparent', width: 40}}>
            <Icon
              name="heart-outline"
              as={Ionicons}
              style={{color: '#000', fontSize: 23}}
            />
          </Button>
          <Button style={{backgroundColor: 'transparent', width: 40}}>
            <Icon
              name="chatbubbles-outline"
              as={Ionicons}
              style={{color: '#000', fontSize: 23}}
            />
          </Button>
          <Button style={{backgroundColor: 'transparent', width: 40}}>
            <Icon
              name="send-o"
              as={FontAwesome}
              style={{color: '#000', fontSize: 23}}
            />
          </Button>
        </HStack>

        <Button style={{backgroundColor: 'transparent'}}>
          <Icon
            name="bookmark-outline"
            as={Ionicons}
            style={{color: '#000', fontSize: 23}}
          />
        </Button>
      </HStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
  },
  imageStyle: {
    width: null,
    flex: 1,
    height: 460,
  },
});
