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

import {NavigationProp} from '@react-navigation/native';

const PhoneScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [config, setConfig] = React.useState({
    dialCode: null,
    phone: null,
  });
  const shizu = useShizu();

  const onSubmit = async () => {
    const isNewUser = await shizu.startUser(
      config.phone ?? '',
      config.dialCode ?? '',
    );
    if (isNewUser) {
      navigation.navigate('register', {
        phone: config.phone,
        country: config.dialCode,
      });
    } else {
      navigation.navigate('login', {
        phone: config.phone,
        country: config.dialCode,
      });
    }
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
        <Text style={{color: 'white', fontSize: 18}}>Your phone number</Text>
        <Text style={{fontSize: 16, color: 'rgba(255, 255, 255, 0.5)'}}>
          Please confirm your country code
        </Text>
        <Text style={{fontSize: 16, color: 'rgba(255, 255, 255, 0.5)'}}>
          and enter your phone number
        </Text>
      </View>
      <CountryInput dialCode={config.dialCode} />
      <MobileInput config={config} setConfig={setConfig} onSubmit={onSubmit} />
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
          onPress={onSubmit}>
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

export default PhoneScreen;
