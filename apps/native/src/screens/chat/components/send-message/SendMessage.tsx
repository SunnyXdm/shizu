import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const SendMessage = ({onSubmit}: any) => {
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

export default SendMessage;
