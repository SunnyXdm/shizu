import {useShizu} from '@repo/sdk';
// import {FlashList} from '@shopify/flash-list';
import React, {useEffect} from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import ChatListItem from '../../components/ChatListItem';
import { NavigationProp } from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const HomeScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [chats, setChats] = React.useState<any[]>([]);
  const shizu = useShizu();

  const createChat = async () => {
    const chat = await shizu.newChat('6709978d4e1369ee9e04e1f1');
    console.log('chat', JSON.stringify(chat, null, 2));
  };

  const load = async () => {
    const chats = await shizu.getChats();
    setChats([
      ...chats,
      ...chats,
      ...chats,
      ...chats,
      ...chats,
      ...chats,
      ...chats,
      ...chats,
      ...chats,
      ...chats,
      ...chats,
      ...chats,
      ...chats,
    ]);
    console.log('chats', JSON.stringify(chats, null, 2));
  };

  useEffect(() => {
    load();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // height,
        // width,
        // backgroundColor: 'grey',
      }}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            padding: 20,
            textAlign: 'center',
          }}>
          Shizu
        </Text>
      </View>

      <FlatList
        data={chats}
        style={{width: '100%'}}
        // estimatedItemSize={100}
        renderItem={props => (
          <ChatListItem navigation={navigation} {...props} />
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
