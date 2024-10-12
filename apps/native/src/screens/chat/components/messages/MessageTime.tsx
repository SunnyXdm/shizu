import {Text} from 'react-native';

const MessageTime = ({message}: any) => (
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

export default MessageTime;
