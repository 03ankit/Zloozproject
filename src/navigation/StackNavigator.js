import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IntroScreen, AuthNavigator } from './navigator';
import Bottomtab from './Bottomtab';
const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('introDone').then(value => {
      if (value == null) {
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
      <Stack.Navigator
        initialRouteName={isFirstLaunch ? 'IntroScreen' : 'AuthNavigator'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        <Stack.Screen name="Bottomtab" component={Bottomtab} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
