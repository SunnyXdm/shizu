import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Button, Otp, AuthScreen, MobileInput} from '@repo/ui';
import {ShizuProvider, ShizuProvider2} from '@repo/sdk';
import {storage} from './src/utils/storage';
import Navigation from './src/navigation/Navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {MMKV} from 'react-native-mmkv';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const mmkv = new MMKV();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ShizuProvider mmkv={mmkv}>
        <ShizuProvider2 storage={storage}>
          <SafeAreaView
            style={{
              backgroundColor: '#1b1b1b',
              flex: 1,
            }}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor="#1b1b1b"
            />
            <Navigation />
          </SafeAreaView>
        </ShizuProvider2>
      </ShizuProvider>
    </GestureHandlerRootView>
  );
}

export default App;
