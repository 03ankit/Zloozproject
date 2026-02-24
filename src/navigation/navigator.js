import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Introscreen from '../screens/intro1/IntroScreen';
import Signin from '../screens/auth/Signin';
import Otp from '../screens/auth/Otp';
import SetupProfile from '../screens/auth/SetupProfile';
import HomeScreen from '../screens/home/Home';
import ProfileScreen from '../screens/home/Profile';
import StatusScreen from '../screens/home/Status';
import CallScreen from '../screens/home/Call';
import UserListScreen from '../screens/form/UserList';
import Adduser from '../screens/form/Adduser';
import Message from '../screens/home/Message';

const AuthStack = createNativeStackNavigator();
const IntroStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const StatusStack = createNativeStackNavigator();
const CallStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const UserListStack = createNativeStackNavigator();
const MessageStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Signin" component={Signin} />
      <AuthStack.Screen name="Otp" component={Otp} />
      <AuthStack.Screen name="SetupProfile" component={SetupProfile} />
    </AuthStack.Navigator>
  );
};

const IntroScreen = () => {
  return (
    <IntroStack.Navigator screenOptions={{ headerShown: false }}>
      <IntroStack.Screen name="Introscreen" component={Introscreen} />
    </IntroStack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="Adduser" component={Adduser} />
      <HomeStack.Screen name="Message" component={Message} />
    </HomeStack.Navigator>
  );
};

const StatusNavigator = () => {
  return (
    <StatusStack.Navigator screenOptions={{ headerShown: false }}>
      <StatusStack.Screen name="StatusScreen" component={StatusScreen} />
    </StatusStack.Navigator>
  );
};



const CallNavigator = () => {
  return (
    <CallStack.Navigator screenOptions={{ headerShown: false }}>
      <CallStack.Screen name="CallScreen" component={CallScreen} />
    </CallStack.Navigator>
  );
};

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

const UserListNavigator = () => {
  return (
    <UserListStack.Navigator screenOptions={{ headerShown: false }}>
      <UserListStack.Screen name="UserListScreen" component={UserListScreen} />
      <UserListStack.Screen name="Adduser" component={Adduser} />
    </UserListStack.Navigator>
  );
};

export {
  HomeNavigator,
  StatusNavigator,
  CallNavigator,
  UserListNavigator,
  ProfileNavigator,
  IntroScreen,
  AuthNavigator,
};
