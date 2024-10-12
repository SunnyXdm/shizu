import {NavigationProp} from '@react-navigation/native';
import {useShizu} from '@repo/sdk';
import {MobileInput, Otp, OtpInput} from '@repo/ui';
import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const VerifyScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const shizu = useShizu();
  const otp = React.useRef('');
  const verify = async (userOtp?: string) => {
    const isVerified = await shizu.verify(userOtp ?? otp.current);
    if (isVerified) {
      // navigation.navigate('Home');
    } else {
      console.log('not verified');
    }
  };

  return (
    <View
      style={{
        backgroundColor: '#1b1b1b',
        gap: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50%',
      }}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 18}}>Verify your number</Text>
        <Text style={{fontSize: 16, color: 'rgba(255, 255, 255, 0.5)'}}>
          Enter the OTP sent to your phone number
        </Text>
      </View>
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 0,
          paddingHorizontal: 20,
        }}>
        <OtpInput
          size={4}
          onSubmit={verify}
          onChange={(e: string) => console.log(e)}
        />
      </View>
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
          // onPress={onSubmit}
        >
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

export default VerifyScreen;
