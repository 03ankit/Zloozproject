import React, { useState, useEffect, useRef } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, View, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import { TabBackground } from '../components/TabBackground';
import { IMAGES } from '../constants/images';
//import { useNavigationState } from '@react-navigation/native';

import { Fonts } from '../constants/fonts';
import EmojiPicker from 'rn-emoji-keyboard';
//import CenterTabButton from '../components/CenterTabButton';
import {
  HomeNavigator,
  UserListNavigator,
  ProfileNavigator,
  StatusNavigator,
  CallNavigator,
} from './navigator';

const Tab = createBottomTabNavigator();

export default function Bottomtab() {

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
      <Tab.Navigator
        initialRouteName="My Chat"
        tabBarBackground={() => <TabBackground />}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarIcon: ({ focused }) => {
            let icon;

            switch (route.name) {
              case "My Chat":
                icon = IMAGES.chat;
                break;

              case "Status":
                icon = IMAGES.status;
                break;

              case "Call":
                icon = IMAGES.call;
                break;

              case "Profile":
                icon = IMAGES.profile;
                break;
            }


            return focused ? (
              // ✅ Active = Gradient Circle
              <LinearGradient
                colors={[COLORS.primary, COLORS.purple]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={icon}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.white,
                  }}
                  resizeMode="contain"
                />
              </LinearGradient>
            ) : (
              // ❌ Inactive = Normal Icon
              <Image
                source={icon}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: 'gray',
                }}
                resizeMode="contain"
              />
            );
          },
          tabBarItemStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },

          tabBarStyle: {
            backgroundColor: COLORS.white,
            height: 70,
            paddingBottom: 6,
            paddingTop: 6,
            borderTopWidth: 0,
            elevation: 12,
          },

          tabBarLabelStyle: {
            fontSize: 12,
            margin:3,
          },

          tabBarActiveTintColor: COLORS.purple,
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="My Chat" component={HomeNavigator} />
        <Tab.Screen name="Status" component={StatusNavigator} />
        <Tab.Screen name="Call" component={CallNavigator} />
        <Tab.Screen name="Profile" component={ProfileNavigator} />
        {/* <Tab.Screen  name="User_List" component={UserListNavigator} /> */}
      </Tab.Navigator>


      {/* {routeName === 'My Chat' && (
        <View style={styles.bottomcontainer}>
          <CustomTextInput
            placeholder="Type message..."
            value={message}
            onChangeText={setMessage}
            multiline
            onFocus={() => setShowEmoji(false)}

            leftIcons={[
              {
                icon: IMAGES.emoji,
                onPress: () => {
                  Keyboard.dismiss();
                  setShowEmoji(!showEmoji);
                },
              },
              {
                icon: IMAGES.attach,
              },
            ]}

            rightIcons={[
              {
                icon: IMAGES.attachment,
              },
              {
                icon: IMAGES.send,
                onPress: sendMessage,
              },
            ]}
          />
        </View>
      )} */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomcontainer: {
    flex: 0.10,
    //flexDirection:"row",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingBottom: 10,
    backgroundColor: COLORS.white,
  },
});

