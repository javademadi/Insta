import React from 'react';
import {StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  VStack,
  HStack,
  Icon,
  Avatar,
  ScrollView,
  Center,
  Text,
  FormControl,
  Input,
  Select,
} from 'native-base';
export default function EditProfile({navigation}) {
  let [gender, setGender] = React.useState('');
  return (
    <ScrollView>
      <VStack style={styles.mainContainer}>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          p={2}
          style={{borderBottomWidth: 2, borderBottomColor: '#ccc'}}>
          <HStack alignItems="center">
            <Icon
              name="long-arrow-left"
              as={FontAwesome}
              onPress={() => navigation.goBack()}
            />
            <Text px={6} style={{fontSize: 18, fontWeight: 'bold'}}>
              Edit Profile
            </Text>
          </HStack>
          <Icon
            name="check"
            color="blue.600"
            as={FontAwesome}
            onPress={() => navigation.goBack()}
          />
        </HStack>
        <Center py={3}>
          <Avatar
            height={70}
            width={70}
            source={require('../../assets/Thumbnail-2.jpg')}
          />
          <Text py={2} style={{fontSize: 16, color: 'blue'}}>
            Change Photo
          </Text>
        </Center>
        <HStack alignItems="center" py={2} px={6}>
          <FormControl>
            <FormControl.Label m={0}>Name</FormControl.Label>
            <Input
              variant="underlined"
              placeholder="Enter your name"
              p={0}
              marginBottom={3}
            />
            <FormControl.Label m={0}>Username</FormControl.Label>
            <Input
              p={0}
              marginBottom={3}
              variant="underlined"
              placeholder="Enter your username"
            />
            <FormControl.Label m={0}>Website</FormControl.Label>
            <Input
              p={0}
              marginBottom={3}
              variant="underlined"
              value="www.varzesh3.com"
            />
            <FormControl.Label m={0}>Bio</FormControl.Label>
            <Input
              p={0}
              variant="underlined"
              value="The best sport news site"
            />
          </FormControl>
        </HStack>
        <Text
          py={2}
          px={6}
          style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
          Private Information
        </Text>
        <HStack alignItems="center" py={2} px={6}>
          <FormControl>
            <FormControl.Label m={0}>E-mail Address</FormControl.Label>
            <Input
              variant="underlined"
              placeholder="Enter your mail"
              p={0}
              marginBottom={3}
            />
            <FormControl.Label m={0}>Phone Number</FormControl.Label>
            <Input
              p={0}
              marginBottom={3}
              variant="underlined"
              placeholder="Enter your phone"
            />
          </FormControl>
        </HStack>
        <FormControl.Label m={0} px={6}>
          Gender
        </FormControl.Label>
        <Select
          mx={5}
          mb={10}
          selectedValue={gender}
          width="90%"
          height={10}
          variant="underlined"
          placeholder="Choose Gender"
          _selectedItem={{
            bg: 'teal.600',
          }}
          mt={1}
          onValueChange={itemValue => setGender(itemValue)}>
          <Select.Item label="Male" />
          <Select.Item label="Female" />
          <Select.Item label="Not Specified" />
        </Select>
      </VStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
