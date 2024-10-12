import {Image, Text, View} from 'react-native';
import MessageTime from './MessageTime';
import {useShizu} from '@repo/sdk';

const OutgoingMessage = ({message}: any) => {
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
      <MessageTime message={message} />
    </View>
  );
};

const IncomingMessage = ({message}: any) => {
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

const TextMessage = ({message}: any) => {
  if (message.from.me) {
    return <OutgoingMessage message={message} />;
  } else {
    return <IncomingMessage message={message} />;
  }
};

export default TextMessage;
