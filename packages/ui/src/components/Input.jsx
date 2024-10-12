  import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { colors } from '../../colors';

const Input = ({
  width = null,
  onSubmit,
  styles = {},
  inputStyles = {},
  placeholder = '',
}) => {
  const [text, setText] = React.useState('');
  const [focus, setFocus] = React.useState(false);
  return (
    <View
      style={[
        {
          width: width ?? '100%',
          backgroundColor: text || focus ? 'black' : colors.inactiveBackground,
          padding: 10,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: colors.border,
        },
        styles,
      ]}>
      <TextInput
        style={[
          {
            color: 'white',
            fontSize: 16,
            width: '100%',
            padding: 10,
            fontWeight: text || focus ? 'bold' : '400',
          },
          inputStyles,
        ]}
        value={text}
        onChangeText={setText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        // passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;
