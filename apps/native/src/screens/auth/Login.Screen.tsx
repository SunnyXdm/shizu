import React from 'react';
import {
  Button,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MobileInput from '../../components/MobileInput';
import CountryInput from '../../components/CountryInput';
import Input from '../../components/Input';
import {useShizu} from '@repo/sdk';
const {width, height} = Dimensions.get('window');
import Svg, {Path} from 'react-native-svg';

const LoginScreen = () => {
  const password = React.useRef('');

  const shizu = useShizu();
  const login = async () => {
    const user = await shizu.login(password.current);
    console.log('logged in', JSON.stringify(user, null, 2));
  };

  return (
    <View
      style={{
        gap: 20,
        // flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1b1b1b',
        width,
        // height,
        paddingTop: '50%',
      }}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 18}}>Enter your password</Text>
        <Text style={{fontSize: 16, color: 'rgba(255, 255, 255, 0.5)'}}>
          Please enter your password to log in
        </Text>
      </View>
      <Input
        onChange={e => (password.current = e)}
        placeholder="Password"
        secureTextEntry={true}
        onSubmit={login}
      />
      <View
        style={{
          width: '90%',
          alignItems: 'flex-end',
          paddingRight: 20,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#c0f7a6',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={login}>
          <Svg
            fill="none"
            color="black"
            viewBox="0 0 24 24"
            height={40}
            width={40}>
            <Path
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 6s6 4.419 6 6c0 1.581-6 6-6 6"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
