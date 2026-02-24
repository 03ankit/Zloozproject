import React, { useRef } from 'react';
import { TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from 'react-native';

export default function CenterTabButton({ children, onPress }) {
  const scale = useRef(new Animated.Value(1)).current;

  const animateIn = () => {
    Animated.spring(scale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const animateOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={animateIn}
      onPressOut={animateOut}
      onPress={onPress}
    >
      <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
        <LinearGradient
          colors={['#43A7D1', '#47DED9']}
          style={styles.gradient}
        >
          <Image
            source={require('../assets/icons/speech-bubble.png')}
            style={{ width: 26, height: 26, tintColor: '#fff' }}
          />
        </LinearGradient>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    width: 65,
    height: 65,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
});
