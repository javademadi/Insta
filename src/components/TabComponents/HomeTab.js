import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {VStack, Icon, Avatar} from 'native-base';
import CardComponent from '../CardComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import Story from '../Home/Story';

const HomeTab = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState(null);
  const [storyVisible, setStoryVisible] = useState(false);
  const [storyImage, setStoryImage] = useState(false);
  const [cardItems, setCarditems] = useState([
    {
      id: 0,
      username: 'javademadi',
      location: 'Shiraz,Iran',
      avatar: require('../../assets/Thumbnail-1.jpg'),
      image: require('../../assets/1.jpg'),
      likes: 101,
      caption: 'وبسایت رسمی خبرگزاری استارتاپی ها ',
      likePost: true,
    },
    {
      id: 1,
      username: 'varzesh3',
      location: 'paris,France',
      avatar: require('../../assets/Thumbnail-2.jpg'),
      image: require('../../assets/2.jpg'),
      likes: 7250,
      caption: 'پیروزی سروقامتان ایرانی در دومین گام',
      likePost: false,
    },
    {
      id: 2,
      username: 'tourism_iran',
      location: 'Mazandaran',
      avatar: require('../../assets/Thumbnail-3.jpg'),
      image: require('../../assets/3.jpg'),
      likes: 1250,
      caption: 'بهشت ایران',
      likePost: false,
    },
    {
      id: 3,
      username: 'dehgardi',
      location: 'Kholin Darreh, Golestān, Iran',
      avatar: require('../../assets/Thumbnail-4.jpg'),
      image: require('../../assets/4.jpg'),
      likes: 1250,
      caption: 'به جنگل برویم برای یک گشت و گذار رویایی و آرام',
      likePost: false,
    },
    {
      id: 4,
      username: 'nikodemus_s',
      location: 'Sanfransisco',
      avatar: require('../../assets/Thumbnail-5.jpg'),
      image: require('../../assets/5.jpg'),
      likes: 89,
      caption: '',
      likePost: false,
    },
  ]);

  const handleStoryClick = avatar => {
    setStoryVisible(true);
    setStoryImage(avatar);

    setTimeout(() => {
      setStoryVisible(false);
    }, 10000);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const addLike = item => {
    const newData = {...cardItems};
    newData[item.id].likePost = !cardItems[item.id].likePost;
    setCarditems([...cardItems, newData]);
  };
  const showComments = item => {
    navigation.navigate('Comment', {
      caption: item.caption,
      username: item.username,
      avatar: item.avatar,
    });
  };
  const avatarSource = [
    require('../../assets/Thumbnail-3.jpg'),
    require('../../assets/Thumbnail-5.jpg'),
    require('../../assets/Thumbnail-1.jpg'),
    require('../../assets/Thumbnail-2.jpg'),
    require('../../assets/Thumbnail-4.jpg'),
    require('../../assets/Thumbnail-1.jpg'),
    require('../../assets/Thumbnail-2.jpg'),
    require('../../assets/Thumbnail-3.jpg'),
    require('../../assets/Thumbnail-4.jpg'),
    require('../../assets/Thumbnail-5.jpg'),
  ];

  return (
    <VStack style={styles.mainContainer}>
      <View style={{height: 110}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 12,
            paddingVertical: 5,
          }}>
          <Text style={{color: '#000', fontWeight: 'bold'}}>Stories</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="play" as={Ionicons} size={4} />
            <Text style={{color: '#000', fontWeight: 'bold'}}> Watch All</Text>
          </View>
        </View>
        <View style={{flex: 3, paddingHorizontal: 8}}>
          <ScrollView
            contentContainerStyle={{
              paddingStart: 5,
              paddingEnd: 5,
              alignItems: 'center',
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {avatarSource.map((avatar, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => handleStoryClick(avatar)}>
                  <Avatar
                    style={{
                      borderColor: 'red',
                      borderWidth: 2,
                    }}
                    source={avatar}
                    marginX={1}
                    size="lg"
                  />
                </TouchableWithoutFeedback>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <FlatList
        data={cardItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CardComponent
            username={item.username}
            location={item.location}
            image={item.image}
            likes={item.likes}
            caption={item.caption}
            avatar={item.avatar}
            toggleModal={toggleModal}
            likePost={item.likePost}
            addLike={() => addLike(item)}
            showComments={() => showComments(item)}
          />
        )}
      />
      <Story
        isOpen={storyVisible}
        storyImage={storyImage}
        onClose={() => setStoryVisible(false)}
      />
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        backdropColor="black">
        <VStack space={5} bg="#fff" borderRadius="5px" p={5}>
          <Text>Report {name}</Text>
          <Text>Copy Link</Text>
          <Text>Turn On Post Notification</Text>
          <Text>Share on Whatsapp</Text>
          <Text>UnFollow</Text>
          <Text>Mute</Text>
        </VStack>
      </Modal>
    </VStack>
  );
};
export default HomeTab;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
