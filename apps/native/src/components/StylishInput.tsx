import React, {useEffect} from 'react';
import {TextInput, View, Dimensions, Text, Keyboard} from 'react-native';
const {width, height} = Dimensions.get('window');
const inputWidth = width * 0.8;

const isNumeric = (str: string) => {
  if (typeof str != 'string') return false;
  return !isNaN(str as any) && !isNaN(parseInt(str));
};

interface StylishInputProps {
  onDialCodeChange: (code: string) => void;
  dialCode: string;
  onPhoneChange: (phone: string) => void;
  phone: string;
  onSubmit: () => void;
}

const StylishInput: React.FC<StylishInputProps> = ({
  onDialCodeChange,
  dialCode,
  onPhoneChange,
  phone,
  onSubmit,
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
        <TextInput
          ref={dialCodeRef}
          style={{
            fontSize: 16,
            color: 'white',
            width: 50,
            alignItems: 'center',
          }}
          spellCheck={false}
          selectionHandleColor={'#c0f7a6'}
          selectionColor={'#c0f7a6'}
          cursorColor={'#c0f7a6'}
          keyboardType="number-pad"
          maxLength={4}
          onChange={e => {
            if (e.nativeEvent.text && !isNumeric(e.nativeEvent.text)) {
              return;
            }
            e.preventDefault();
            onDialCodeChange(e.nativeEvent.text);
            if (e.nativeEvent.text.length === 4) {
              phoneRef?.current?.focus();
            }
          }}
          value={dialCode}
          selectTextOnFocus={true}
          onEndEditing={() => {
            phoneRef?.current?.focus();
          }}
        />
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
      <TextInput
        ref={phoneRef}
        style={{
          fontSize: 16,
          color: 'white',
          width: inputWidth - 120,
        }}
        keyboardType="numeric"
        maxLength={24}
        selectionHandleColor={'#c0f7a6'}
        selectionColor={'#c0f7a6'}
        cursorColor={'#c0f7a6'}
        onChange={e => {
          onPhoneChange(e.nativeEvent.text);
        }}
        inputMode='numeric'
        value={phone}
        selectTextOnFocus={true}
        onKeyPress={e => {
          if (e.nativeEvent.key === 'Backspace' && phone?.length === 0) {
            dialCodeRef?.current?.focus();
          }
        }}
        onSubmitEditing={onSubmit}
        // onFocus={Keyboard.dismiss}
      />
    </View>
  );
};

export default StylishInput;
