import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import CardComponent from '../CardComponent';

const cardItems = [
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
];
const ProfilePost = () => {
  return (
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
        />
      )}
    />
  );
};

export default ProfilePost;

const styles = StyleSheet.create({});
