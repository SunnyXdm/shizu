import React from 'react';
import {
  Button,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Input from '../../components/Input';
import {useShizu} from '@repo/sdk';
const {width, height} = Dimensions.get('window');
import Svg, {Path} from 'react-native-svg';

const RegisterScreen = ({navigation}: any) => {
  const firstname = React.useRef('');
  const lastname = React.useRef('');
  const username = React.useRef('');
  const password = React.useRef('');
  const shizu = useShizu();

  const register = async () => {
    const startUser = await shizu.getStartUser();
    console.log(
      JSON.stringify({
        firstName: firstname.current,
        lastName: lastname.current,
        username: username.current,
        password: password.current,
        phone: startUser.phone,
        country: startUser.dialCode,
      }),
    );
    if (!startUser) {
      return;
    }
    const user = await shizu.register({
      firstName: firstname.current,
      lastName: lastname.current,
      username: username.current,
      password: password.current,
      phone: startUser?.phone,
      country: startUser?.country,
    });
    console.log('registered', JSON.stringify(user, null, 2));

    navigation.navigate('verify');

    // if (user) {
    //   navigation.navigate('Home');
    // }
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
        <Text style={{color: 'white', fontSize: 18}}>Create your account</Text>
        <Text style={{fontSize: 16, color: 'rgba(255, 255, 255, 0.5)'}}>
          Fill in your details to set up a new account.
        </Text>
      </View>
      <Input onChange={e => (firstname.current = e)} placeholder="First name" />
      <Input onChange={e => (lastname.current = e)} placeholder="Last name" />
      <Input onChange={e => (username.current = e)} placeholder="@Username" />
      <Input
        onChange={e => (password.current = e)}
        placeholder="Password"
        secureTextEntry={true}
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
          onPress={register}>
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

export default RegisterScreen;
