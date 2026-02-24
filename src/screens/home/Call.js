import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import Background from '../../components/Background';

export default function Call() {
  return (
    <Background showBg>
      <Header showlogo></Header>
        <View style={styles.container}>
            <Text style={styles.text}> call screen..........</Text>
        </View>
    </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
