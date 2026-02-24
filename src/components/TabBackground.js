import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

export default function TabBarBackground() {
  return (
    <View style={styles.container}>

      {/* Main White Box */}
      <View style={styles.box} />

      {/* Outer White Circle */}
      <View style={styles.outerCircle} />

      {/* Gradient Circle */}
      <LinearGradient
        colors={['#43A7D1', '#47DED9']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.gradientCircle}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: 120,
    bottom: 0,
  },

  /* Subtract / Rectangle */
  box: {
    position: 'absolute',
    width: width - 40,
    height: 70,
    left: 20,
    bottom: 10,

    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderRadius: 60,
  },

  /* Ellipse 3 */
  outerCircle: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 45,

    backgroundColor: '#fff',
    alignSelf: 'center',
    top: -25,
  },

  /* Ellipse 4 */
  gradientCircle: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 35,

    alignSelf: 'center',
    top: -15,
  },
});
