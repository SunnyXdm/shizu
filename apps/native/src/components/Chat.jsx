import {FlashList} from '@shopify/flash-list';
import LottieView from 'lottie-react-native';
import React from 'react';
import {
  FlatList,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  PixelRatio,
} from 'react-native';
import {Path, Svg} from 'react-native-svg';
const data = [
  {
    id: 20,
    message: "I don't know if I can do this anymore, Mr. White.",
    from: {
      id: 2,
      name: 'Jesse Pinkman',
      image:
        'https://i.pinimg.com/564x/a1/ab/f3/a1abf323da1397097d4622e0723848d0.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700019000000,
    type: 'text',
    text: "I don't know if I can do this anymore, Mr. White.",
  },
  {},
  {
    id: 19,
    message: "You'll thank me later, Jesse. Trust me.",
    from: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700018000000,
    type: 'text',
    text: "You'll thank me later, Jesse. Trust me.",
  },
  {
    id: 18,
    message: "I don't know, Mr. White. This feels wrong.",
    from: {
      id: 2,
      name: 'Jesse Pinkman',
      image:
        'https://i.pinimg.com/564x/a1/ab/f3/a1abf323da1397097d4622e0723848d0.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700017000000,
    type: 'text',
    text: "I don't know, Mr. White. This feels wrong.",
  },
  {},
  {
    id: 17,
    message: "You're in this deep, Jesse. You can't just walk away.",
    from: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700016000000,
    type: 'text',
    text: "You're in this deep, Jesse. You can't just walk away.",
  },
  {
    id: 16,
    message: "I can't do this anymore, Mr. White.",
    from: {
      id: 2,
      name: 'Jesse Pinkman',
      image:
        'https://i.pinimg.com/564x/a1/ab/f3/a1abf323da1397097d4622e0723848d0.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700015000000,
    type: 'text',
    text: "I can't do this anymore, Mr. White.",
  },
  {
    id: 15,
    message: 'Take your time, Jesse. But remember, time is money.',
    from: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700014000000,
    type: 'text',
    text: 'Take your time, Jesse. But remember, time is money.',
  },
  {
    id: 14,
    message: 'I need some time to think, Mr. White.',
    from: {
      id: 2,
      name: 'Jesse Pinkman',
      image:
        'https://i.pinimg.com/564x/a1/ab/f3/a1abf323da1397097d4622e0723848d0.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700013000000,
    type: 'text',
    text: 'I need some time to think, Mr. White.',
  },
  {
    id: 13,
    message: "You're stronger than you think, Jesse. We're in this together.",
    from: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700012000000,
    type: 'text',
    text: "You're stronger than you think, Jesse. We're in this together.",
  },
  {
    id: 12,
    message: "I don't know if I can do this anymore, Mr. White.",
    from: {
      id: 2,
      name: 'Jesse Pinkman',
      image:
        'https://i.pinimg.com/564x/a1/ab/f3/a1abf323da1397097d4622e0723848d0.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700011000000,
    type: 'text',
    text: "I don't know if I can do this anymore, Mr. White.",
  },
  {
    id: 11,
    message: "You'll thank me later, Jesse. Trust me.",
    from: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700010000000,
    type: 'text',
    text: "You'll thank me later, Jesse. Trust me.",
  },
  {
    id: 10,
    message: "I don't know, Mr. White. This feels wrong.",
    from: {
      id: 2,
      name: 'Jesse Pinkman',
      image:
        'https://i.pinimg.com/564x/a1/ab/f3/a1abf323da1397097d4622e0723848d0.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700009000000,
    type: 'text',
    text: "I don't know, Mr. White. This feels wrong.",
  },
  {
    id: 9,
    message: "You're in this deep, Jesse. You can't just walk away.",
    from: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700008000000,
    type: 'text',
    text: "You're in this deep, Jesse. You can't just walk away.",
  },
  {
    id: 8,
    message: "I can't do this anymore, Mr. White.",
    from: {
      id: 2,
      name: 'Jesse Pinkman',
      image:
        'https://i.pinimg.com/564x/a1/ab/f3/a1abf323da1397097d4622e0723848d0.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700007000000,
    type: 'text',
    text: "I can't do this anymore, Mr. White.",
  },
  {
    id: 7,
    message: "Let's get this over with.",
    from: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700006000000,
    type: 'text',
    text: "Let's get this over with.",
  },
  {
    id: 6,
    message: 'Okay, if you say so.',
    from: {
      id: 2,
      name: 'Jesse Pinkman',
      image:
        'https://i.pinimg.com/564x/a1/ab/f3/a1abf323da1397097d4622e0723848d0.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700005000000,
    type: 'text',
    text: 'Okay, if you say so.',
  },
  {
    id: 5,
    message: "Trust me, Jesse. I know what I'm doing.",
    from: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700004000000,
    type: 'text',
    text: "Trust me, Jesse. I know what I'm doing.",
  },
  {
    id: 4,
    message: "I'm not so sure about this, Mr. White.",
    from: {
      id: 2,
      name: 'Jesse Pinkman',
      image:
        'https://i.pinimg.com/564x/a1/ab/f3/a1abf323da1397097d4622e0723848d0.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700003000000,
    type: 'text',
    text: "I'm not so sure about this, Mr. White.",
  },
  {
    id: 3,
    message: "Yeah, don't worry. Everything's under control.",
    from: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700002000000,
    type: 'text',
    text: "Yeah, don't worry. Everything's under control.",
  },
  {
    id: 2,
    message: "Are you sure it's safe?",
    from: {
      id: 2,
      name: 'Jesse Pinkman',
      image:
        'https://i.pinimg.com/564x/a1/ab/f3/a1abf323da1397097d4622e0723848d0.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700001000000,
    type: 'text',
    text: "Are you sure it's safe?",
  },
  {
    id: 1,
    message: 'We need to cook.',
    from: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    chat: {
      id: 1,
      name: 'Walter White',
      image:
        'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    },
    date: 1700000000000,
    type: 'text',
    text: 'We need to cook.',
  },
];

data[1] = {
  id: 20,
  message: "I don't know if I can do this anymore, Mr. White.",
  from: {
    id: 2,
    name: 'Jesse Pinkman',
    image:
      'https://i.pinimg.com/564x/a1/ab/f3/a1abf323da1397097d4622e0723848d0.jpg',
  },
  chat: {
    id: 1,
    name: 'Walter White',
    image:
      'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
  },
  date: 1700019000000,
  type: 'sticker',
  file_url: 'https://cdn-dqs.mogiio.com/dev/mogiDocs/31a03a2024a19a01a05eat.json',
  sticker: {
    width: 512,
    height: 512,
    emoji: '😮',
    set_name: 'Moteharrek_glgli2',
    is_animated: true,
    is_video: false,
    type: 'regular',
    thumbnail: {
      file_id:
        'AAMCAQADGQEAARky4mYJYoTLKe3NHXH0JV73DEXuT-IEAAKMAgACUSkNORt0alSLBgimAQAHbQADNAQ',
      file_unique_id: 'AQADjAIAAlEpDTly',
      file_size: 5640,
      width: 128,
      height: 128,
    },
    thumb: {
      file_id:
        'AAMCAQADGQEAARky4mYJYoTLKe3NHXH0JV73DEXuT-IEAAKMAgACUSkNORt0alSLBgimAQAHbQADNAQ',
      file_unique_id: 'AQADjAIAAlEpDTly',
      file_size: 5640,
      width: 128,
      height: 128,
    },
    file_id:
      'CAACAgEAAxkBAAEZMuJmCWKEyyntzR1x9CVe9wxF7k_iBAACjAIAAlEpDTkbdGpUiwYIpjQE',
    file_unique_id: 'AgADjAIAAlEpDTk',
    file_size: 48771,
  },
};
data[4] = {
  id: 20,
  message: "I don't know if I can do this anymore, Mr. White.",
  from: {
    id: 1,
    name: 'Walter White',
    image:
      'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
  },
  chat: {
    id: 1,
    name: 'Walter White',
    image:
      'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
  },
  date: 1700019000000,
  type: 'sticker',
  sticker: {
    width: 512,
    height: 512,
    emoji: '😮',
    set_name: 'Moteharrek_glgli2',
    is_animated: true,
    is_video: false,
    type: 'regular',
    file_url:
      'https://cdn-dqs.mogiio.com/dev/mogiDocs/31a03a2024a19a42a54TGHANGSEED.json',
    thumbnail: {
      file_id:
        'AAMCAQADGQEAARky4mYJYoTLKe3NHXH0JV73DEXuT-IEAAKMAgACUSkNORt0alSLBgimAQAHbQADNAQ',
      file_unique_id: 'AQADjAIAAlEpDTly',
      file_size: 5640,
      width: 128,
      height: 128,
    },
    thumb: {
      file_id:
        'AAMCAQADGQEAARky4mYJYoTLKe3NHXH0JV73DEXuT-IEAAKMAgACUSkNORt0alSLBgimAQAHbQADNAQ',
      file_unique_id: 'AQADjAIAAlEpDTly',
      file_size: 5640,
      width: 128,
      height: 128,
    },
    file_id:
      'CAACAgEAAxkBAAEZMuJmCWKEyyntzR1x9CVe9wxF7k_iBAACjAIAAlEpDTkbdGpUiwYIpjQE',
    file_unique_id: 'AgADjAIAAlEpDTk',
    file_size: 48771,
  },
};
const a = {
  update_id: 936225852,
  message: {
    message_id: 7904,
    from: {
      id: 680240877,
      is_bot: false,
      first_name: 'Sunny',
      last_name: '「ZoldyckFamily™」',
      username: 'Sunnyxdm',
      language_code: 'en',
    },
    chat: {
      id: -1001396985779,
      title: 'Tryit',
      username: 'papersgonnaburn',
      type: 'supergroup',
    },
    date: 1711872789,
    message_thread_id: 7902,
    reply_to_message: {
      message_id: 7902,
      from: {
        id: 680240877,
        is_bot: false,
        first_name: 'Sunny',
        last_name: '「ZoldyckFamily™」',
        username: 'Sunnyxdm',
        language_code: 'en',
      },
      chat: {
        id: -1001396985779,
        title: 'Tryit',
        username: 'papersgonnaburn',
        type: 'supergroup',
      },
      date: 1711868421,
      type: 'text',
      text: 'hello',
    },
    type: 'text',
    text: 'Hi',
  },
};
const as = {
  update_id: 936226306,
  message: {
    message_id: 1651426,
    from: {
      id: 680240877,
      is_bot: false,
      first_name: 'Sunny',
      last_name: '「ZoldyckFamily™」',
      username: 'Sunnyxdm',
      language_code: 'en',
    },
    chat: {
      id: 680240877,
      first_name: 'Sunny',
      last_name: '「ZoldyckFamily™」',
      username: 'Sunnyxdm',
      type: 'private',
    },
    date: 1711891076,
    sticker: {
      width: 512,
      height: 512,
      emoji: '😮',
      set_name: 'Moteharrek_glgli2',
      is_animated: true,
      is_video: false,
      type: 'regular',
      thumbnail: {
        file_id:
          'AAMCAQADGQEAARky4mYJYoTLKe3NHXH0JV73DEXuT-IEAAKMAgACUSkNORt0alSLBgimAQAHbQADNAQ',
        file_unique_id: 'AQADjAIAAlEpDTly',
        file_size: 5640,
        width: 128,
        height: 128,
      },
      thumb: {
        file_id:
          'AAMCAQADGQEAARky4mYJYoTLKe3NHXH0JV73DEXuT-IEAAKMAgACUSkNORt0alSLBgimAQAHbQADNAQ',
        file_unique_id: 'AQADjAIAAlEpDTly',
        file_size: 5640,
        width: 128,
        height: 128,
      },
      file_id:
        'CAACAgEAAxkBAAEZMuJmCWKEyyntzR1x9CVe9wxF7k_iBAACjAIAAlEpDTkbdGpUiwYIpjQE',
      file_unique_id: 'AgADjAIAAlEpDTk',
      file_size: 48771,
    },
  },
};

const Background = () => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        position: 'absolute',
        height: '100%',
        width: '100%',
      }}></View>
  );
};

const MessageTime = ({message}) => (
  <Text
    style={{
      position: 'absolute',
      bottom: 7,
      right: 7,
      color: 'grey',
      fontSize: 12,
    }}>
    {new Date(message.date).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    })}
  </Text>
);

const IncomingMessage = ({message, sender}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 5,
        marginTop: 0,
      }}>
      <Image
        source={{
          uri: message.from.image,
        }}
        style={{
          backgroundColor: 'grey',
          width: 30,
          height: 30,
          marginHorizontal: 5,
          borderRadius: 100,
          overflow: 'hidden',
        }}
      />
      <View
        style={{
          paddingTop: 2,
          paddingLeft: 7,
          paddingBottom: 10,
          paddingRight: 57,
          backgroundColor: '#212121',
          borderTopLeftRadius: 7,
          borderBottomLeftRadius: 7,
          borderTopRightRadius: 14,
          borderBottomRightRadius: 14,
          maxWidth: '80%',
          minWidth: '10%',
          alignSelf: 'flex-start',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginBottom: 2,
            color: 'purple',
          }}>
          {message.from.name}
        </Text>
        <Text
          style={{
            fontSize: 14,

            color: '#FCFCFC',
          }}>
          {message.text}
        </Text>
        <MessageTime message={message} />
      </View>
    </View>
  );
};

const OutgoingMessage = ({message}) => {
  return (
    <View
      style={{
        paddingTop: 7,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 57,
        margin: 5,
        marginTop: 0,
        backgroundColor: '#212121',
        borderTopLeftRadius: 14,
        borderBottomLeftRadius: 14,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        maxWidth: '80%',
        minWidth: '10%',
        alignSelf: 'flex-end',
      }}>
      <Text
        style={{
          fontSize: 14,

          color: '#FCFCFC',
        }}>
        {message.text}
      </Text>
      <Text
        style={{
          position: 'absolute',
          bottom: 7,
          right: 7,
          color: 'grey',
          fontSize: 12,
        }}>
        {new Date(message.date).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
        })}
      </Text>
    </View>
  );
};
const TextMessage = ({message}) => {
  if (message.from.id === 1) {
    return <OutgoingMessage message={message} />;
  } else {
    return <IncomingMessage message={message} />;
  }
};

const Input = ({onSubmit}) => {
  const [text, setText] = React.useState('');
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 4,
        paddingHorizontal: 14,
        backgroundColor: '#141414',
      }}>
      <TextInput
        style={{
          flex: 1,
          fontSize: 16,
          color: 'white',
        }}
        value={text}
        placeholderTextColor={'#999999'}
        placeholder="Message"
        returnKeyType="next"
        blurOnSubmit={false}
        clearButtonMode="always"
        onChangeText={setText}
        onSubmitEditing={() => {
          onSubmit(text);
          setText('');
        }}
      />

      <TouchableOpacity
        onPress={() => {
          onSubmit(text);
          setText('');
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          height={28}
          width={28}
          color="#999999">
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

const Header = () => {
  const user = {
    id: 1,
    name: 'Walter White',
    image:
      'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    status: 'last seen recently',
    // -------------------------
    id: 2,
    name: 'Jesse Pinkman',
    image:
      'https://i.pinimg.com/564x/a1/ab/f3/a1abf323da1397097d4622e0723848d0.jpg',
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#212121',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          paddingLeft: 10,
          paddingHorizontal: 16,
        }}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="white"
          strokeWidth={1.5}
          className="w-6 h-6"
          viewBox="0 0 24 24"
          height={20}
          width={20}>
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </Svg>
      </TouchableOpacity>
      <Image
        source={{
          uri: user.image,
        }}
        style={{
          backgroundColor: 'grey',
          width: 37,
          height: 37,
          borderRadius: 100,
          overflow: 'hidden',
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 10,
          }}>
          {user.name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'grey',
            marginLeft: 10,
          }}>
          {user.status}
        </Text>
      </View>
    </View>
  );
};

const IncomingSticker = ({message}) => {
  return (
    <View
      style={{
        height: 150,
        width: 150,
        aspectRatio: 1,
        // backgroundColor: 'red',
        marginHorizontal: 15,
        marginVertical: 5,
      }}>
      <LottieView
        // ref={animationRef}
        source={{
          uri: 'https://cdn-dqs.mogiio.com/dev/mogiDocs/31a03a2024a19a01a05eat.json',
        }}
        style={{width: '100%', height: '100%'}}
        loop={true}
        autoPlay={true}
      />
    </View>
  );
};

const OutgoingSticker = ({message}) => {
  return (
    <View
      style={{
        height: 150,
        width: 150,
        aspectRatio: 1,
        // backgroundColor: 'red',
        alignSelf: 'flex-end',
        marginHorizontal: 15,
        marginVertical: 5,
      }}>
      <LottieView
        // ref={animationRef}
        source={{
          uri: message.sticker.file_url,
        }}
        style={{width: '100%', height: '100%'}}
        loop={true}
        autoPlay={true}
      />
    </View>
  );
};

const StickerMessage = ({message}) => {
  if (message.from.id === 1) {
    return <OutgoingSticker message={message} />;
  } else {
    return <IncomingSticker message={message} />;
  }
};

const Chat = () => {
  const [messages, setMessages] = React.useState(data);

  const sendMessage = message => {
    setMessages([message, ...messages]);
  };

  const renderItem = ({item}) => {
    if (item.type === 'text') {
      return <TextMessage message={item} />;
    } else if (item.type === 'sticker') {
      console.log(item);
      return <StickerMessage message={item} />;
    }
  };

  const onSubmit = text => {
    // console.log(text);
    sendMessage({
      id: messages.length + 1,
      message: text,
      from: {
        id: 1,
        name: 'Walter White',
        image:
          'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
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
  const flatlistRef = React.useRef();
  return (
    <View style={{flex: 1}}>
      <Background />
      {/* <FlatList /> */}
      <Header />
      <FlashList
        ref={flatlistRef}
        renderItem={renderItem}
        estimatedItemSize={50}
        inverted
        data={messages}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 10}}
      />
      <Input onSubmit={onSubmit} />
    </View>
  );
};

export default Chat;
