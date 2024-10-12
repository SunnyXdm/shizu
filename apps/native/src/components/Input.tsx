import React from 'react';
import {Dimensions, TextInput, View} from 'react-native';
import {Text} from 'react-native-reanimated/lib/typescript/Animated';
const {width, height} = Dimensions.get('window');

const inputWidth = width * 0.8;
interface InputProps {
  reference?: React.RefObject<TextInput>;
  onChange?: (e: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  onSubmit?: () => void;
}

const Input: React.FC<InputProps> = ({
  reference,
  onChange,
  placeholder,
  secureTextEntry = false,
  onSubmit,
}) => {
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
      <TextInput
        ref={reference}
        style={{
          fontSize: 16,
          color: 'white',
          width: inputWidth - 120,
        }}
        //   keyboardType="numeric"
        maxLength={24}
        selectionHandleColor={'#c0f7a6'}
        selectionColor={'#c0f7a6'}
        cursorColor={'#c0f7a6'}
        onChangeText={onChange}
        //   inputMode="numeric"
        selectTextOnFocus={true}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
};

export default Input;
