// App.js

import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './src/navigation/StackNavigator';
import Bottomtab from './src/navigation/Bottomtab';

import SplashScreen from 'react-native-splash-screen';

import { store, persistor } from './src/redux/store';
import { navigationRef } from './src/navigation/NavigationService';



function RootApp() {

  const isLoggedIn = useSelector(state => state.isLoggedIn);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {isLoggedIn ? <Bottomtab /> : <StackNavigator />}
    </NavigationContainer>
  );
}


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator size="large" />}
        persistor={persistor}
      >
        <RootApp />
      </PersistGate>
    </Provider>
  );
}
