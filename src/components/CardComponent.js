import React, {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  VStack,
  Box,
  Text,
  Button,
  Image,
  HStack,
  Icon,
  Card,
  Avatar,
  Input,
} from 'native-base';

const CardComponent = ({
  username,
  location,
  image,
  likes,
  caption,
  avatar,
  toggleModal,
  likePost,
  addLike,
  showComments,
}) => {
  let lastTap = null;
  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 400;
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      addLike();
    } else {
      lastTap = now;
    }
  };
  const [focus, setFocus] = useState(false);
  const focusHandler = focus => {
    setFocus(focus);
  };
  return (
    <VStack space={4}>
      <Card>
        <HStack justifyContent="space-between">
          <HStack py={1}>
            <Avatar source={avatar} alt="react-native" />
            <Box px={4}>
              <Text>Shanbe Mag</Text>
              <Text style={{color: '#dddd'}}>{location}</Text>
            </Box>
          </HStack>

          <Icon
            name="more-vertical"
            as={Feather}
            size="7"
            onPress={toggleModal}
          />
        </HStack>
        <TouchableWithoutFeedback onPress={handleDoubleTap}>
          <HStack justifyContent="center">
            <Image
              source={image}
              alt="react-native2"
              style={{height: 200, flex: 1}}
            />
          </HStack>
        </TouchableWithoutFeedback>
        <HStack justifyContent="space-between">
          <HStack>
            <Button style={{backgroundColor: 'transparent', width: 40}}>
              {likePost ? (
                <Icon
                  name="heart"
                  as={Ionicons}
                  style={{color: 'red', fontSize: 23}}
                  onPress={addLike}
                />
              ) : (
                <Icon
                  name="heart-outline"
                  as={Ionicons}
                  style={{color: '#000', fontSize: 23}}
                  onPress={addLike}
                />
              )}
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
        <HStack px={3}>
          <Text>{likes} Likes</Text>
        </HStack>
        <HStack px={3}>
          <Text style={{fontSize: 12}}>
            <Text style={{fontWeight: 'bold'}}>{username} </Text>
            {caption}
          </Text>
        </HStack>
        <HStack px={3}>
          <Text onPress={showComments} style={{fontSize: 12}}>
            View All 8 Comments
          </Text>
        </HStack>
        <HStack space={2} justifyContent="space-between" alignItems="center">
          <Avatar source={image} width={35} height={35} />
          <Input
            variant="underlined"
            flex={1}
            placeholder="Add a comment ..."
            placeholderTextColor="#ccc"
            style={{fontSize: 14}}
            onFocus={() => focusHandler(true)}
          />
          {focus ? (
            <Text style={{fontSize: 14, color: 'blue', fontWeight: 'bold'}}>
              Post
            </Text>
          ) : null}
        </HStack>
      </Card>
    </VStack>
  );
};

export default CardComponent;
