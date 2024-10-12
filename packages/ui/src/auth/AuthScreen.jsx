import React from 'react';
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';
import Input from '../components/Input';
import { colors } from '../../colors';
import MobileInput from '../components/MobileInput';

const AuthScreen = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        height: "100%",
      }}>
      <View
        style={{
          gap: 10,
          width: '100%',
          alignItems: 'center',
        }}>
        <Input
          width={'90%'}
          placeholder="Name: Sam Doe"
          inputStyles={
            {
              // fontWeight: 'bold',
            }
          }
        />
        {/* <Input
          width={'90%'}
          placeholder="Email: example@mail.com"
          inputStyles={
            {
              // fontWeight: 'bold',
            }
          }
        /> */}

        <MobileInput width={"90%"} />
        <Input
          width={'90%'}
          placeholder="Username: @sam_doe"
          inputStyles={
            {
              // fontWeight: 'bold',
            }
          }
        />
        <Input
          width={'90%'}
          placeholder="Password: *****"
          inputStyles={
            {
              // fontWeight: 'bold',
            }
          }
        />
        <TouchableOpacity
          style={{
            width: '90%',
            padding: 10,
            backgroundColor: colors.primary,
            borderColor: colors.border,
            borderRadius: 10,
            borderWidth: 1,
            marginTop: 20,
          }}
          onPress={() => console.log('Sign Up')}>
          <Text
            style={{
              color: 'white',
              padding: 10,
              fontSize: 16,
              textAlign: 'center',
              fontWeight: 'bold',
              marginHorizontal: 16,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '90%',
            padding: 10,
            backgroundColor: colors.inactiveBackground,
            borderColor: colors.border,
            borderRadius: 10,
            borderWidth: 1,
            marginTop: 20,
          }}
          onPress={() => console.log('Sign Up')}>
          <Text
            style={{
              color: 'white',
              padding: 10,
              fontSize: 16,
              textAlign: 'center',
              fontWeight: 'bold',
              marginHorizontal: 16,
            }}>
              Login instead
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
