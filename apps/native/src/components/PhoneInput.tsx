import React, {useEffect} from 'react';
import {TextInput, View, Dimensions, Text, Keyboard} from 'react-native';
const {width, height} = Dimensions.get('window');
const inputWidth = width * 0.8;

const isNumeric = (str: string) => {
  if (typeof str != 'string') return false;
  return !isNaN(str as any) && !isNaN(parseInt(str));
};

interface PhoneInputProps {
  onDialCodeChange: (code: string) => void;
  dialCode: string;
  onPhoneChange: (phone: string) => void;
  phone: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  onDialCodeChange,
  dialCode,
  onPhoneChange,
  phone,
}) => {
  const dialCodeRef = React.useRef<TextInput>(null);
  const phoneRef = React.useRef<TextInput>(null);

  return (
    <View
      style={{
        width: inputWidth,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#c0f7a6',
        paddingHorizontal: 15,
        flexDirection: 'row',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
          }}>
          +
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            width: 50,
            alignItems: 'center',
            height: 50,
          }}>
          {dialCode}
        </Text>
      </View>
      <View
        style={{
          width: 1,
          height: '80%',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          marginRight: 10,
          marginLeft: 6,
          alignSelf: 'center',
        }}
      />
      <Text
        style={{
          fontSize: 16,
          color: 'white',
          width: inputWidth - 120,
        }}>
        {phone}
      </Text>
    </View>
  );
};

export default PhoneInput;
