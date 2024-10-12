/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Button, Otp, AuthScreen, MobileInput} from '@repo/ui';
import {ShizuProvider} from '@repo/sdk';
import {ShizuSdk} from './sdk';
import LoginScreen from './src/screens/auth/Login.Screen';
import {storage} from './src/utils/storage';
import Navigation from './src/navigation/Navigation';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode,
  };

  useEffect(() => {}, []);

  return (
    <ShizuProvider storage={storage}>
      <SafeAreaView
        style={{
          backgroundColor: '#1b1b1b',
          // backgroundColor: 'black',I
          flex: 1,
        }}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor="#1b1b1b"
        />
        {/* <ScrollView> */}
        {/* <Otp /> */}
        {/* <AuthScreen /> */}
        {/* <MobileInput /> */}
        {/* <LoginScreen /> */}
        {/* </ScrollView> */}
        <Navigation />
      </SafeAreaView>
    </ShizuProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
