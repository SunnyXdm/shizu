import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useShizu} from '@repo/sdk';
import PhoneScreen from '../screens/auth/PhoneScreen';
import VerifyScreen from '../screens/auth/VerifyScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import LoginScreen from '../screens/auth/Login.Screen';
import HomeScreen from '../screens/home/HomeScreen';
import ChatScreen from '../screens/chat/ChatScreen';
const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="phone">
      <AuthStack.Screen name="phone" component={PhoneScreen} />
      <AuthStack.Screen name="login" component={LoginScreen} />
      <AuthStack.Screen name="register" component={RegisterScreen} />
      <AuthStack.Screen name="verify" component={VerifyScreen} />
    </AuthStack.Navigator>
  );
};

const AppStackNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home">
      <AppStack.Screen name="home" component={HomeScreen} />
      <AppStack.Screen name="chat" component={ChatScreen} />
    </AppStack.Navigator>
  );
};

const Navigation = () => {
  const {user} = useShizu();
  return (
    <NavigationContainer
      theme={{
        colors: {
          primary: 'white',
          background: '#1b1b1b',
          card: 'gray',
          text: 'white',
          border: 'gray',
          notification: 'red',
        },
        dark: true,
      }}>
      {user ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
