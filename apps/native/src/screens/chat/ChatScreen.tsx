import {FlashList} from '@shopify/flash-list';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import TextMessage from './components/messages/TextMessage';
import {useShizu, useShizu2} from '@shizu/sdk';
import Background from './components/Background';
import Header from './components/Header';
import SendMessage from './components/send-message/SendMessage';
import {FlatList, Gesture, GestureDetector} from 'react-native-gesture-handler';

const Chat = () => {
  const [messages, setMessages] = React.useState<any[]>([]);
  const shizu = useShizu();
  const shizu2 = useShizu2();
  const renderItem = ({item}: any) => {
    if (item.type === 'text') {
      return <TextMessage message={item} />;
    }
    return null;
  };

  const load = async () => {
    // const chats = await shizu.getChat('670997c14e1369ee9e04e1fc');
    const chats = await shizu2.getChat('670997c14e1369ee9e04e1fc');
    setMessages(chats.messages);
    // console.log('chats', JSON.stringify(chats, null, 2));
  };

  useEffect(() => {
    load();
  }, []);

  const sendMessage = (message: any) => {
    setMessages([message, ...messages]);
    shizu.sendMessage('670997c14e1369ee9e04e1fc', {
      type: 'text',
      text: message.text,
    });
  };

  const onSubmit = (text: string) => {
    // console.log(text);
    sendMessage({
      id: messages.length + 1,
      message: text,
      from: {
        id: 1,
        name: 'Walter White',
        image:
          'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
        me: true,
      },
      chat: {
        id: 1,
        name: 'Walter White',
        image:
          'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
      },
      date: new Date().getTime(),
      type: 'text',
      text: text,
    });
  };

  const flatlistRef = React.useRef<FlashList<any> | null>(null);
  const lastTouchPosition = React.useRef<number>(0);
  const pan = Gesture.Pan().onBegin(e => {
    console.log('onBegin', e);
  });

  return (
    // <GestureDetector gesture={pan}>
    <View style={{flex: 1}}>
      <Background />
      <Header />
      <FlatList
        // ref={flatlistRef}
        renderItem={renderItem}
        // estimatedItemSize={50}
        inverted
        data={messages}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 10}}
      />
      <SendMessage onSubmit={onSubmit} />
    </View>
    // </GestureDetector>
  );
};

const ChatScreen = () => {
  return <Chat />;
  return (
    <View>
      <Text>Chat Screen</Text>
    </View>
  );
};

export default ChatScreen;
