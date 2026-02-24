import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../constants/colors';
import { Fonts } from '../constants/fonts';
import { IMAGES } from '../constants/images';

const Header = props => {
  const { children, showlogo, showNewChat, onNewChat } = props;

  if (showlogo !== true) {
    return <View style={styles.container}>{children}</View>;
  }

  return (
    <View style={styles.header}>
      <Image
        source={IMAGES.logo}
        style={styles.logo}
      />

      {showNewChat && (
        <TouchableOpacity style={styles.newChatBtn} onPress={onNewChat} activeOpacity={0.90}  >
          <LinearGradient
            colors={[COLORS.primary, COLORS.purple]}
            start={{ x: 0.25, y: 0.1 }}
            end={{ x: 0.5, y: 0.9 }}
            style={styles.button}
          >
            <Text style={styles.newChatText}>+ New Chat</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  header: {
    marginTop: 40,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    // paddingVertical:5
  },
  newChatBtn: {
    borderRadius: 15,
    marginRight: 10,
    overflow: 'hidden', 
  },
  newChatText: {
    color: '#fff',
    fontFamily: Fonts.extrabold,
    fontSize: 12,
  },

  background: {
    flex: 1,
    flexDirection: 'row',
  },
  logo: {
    width: 120,
    height: 90,
    // margin:20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingVertical: 13,
    borderRadius: 15,
    elevation: 5,
  },
});
