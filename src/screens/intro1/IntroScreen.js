import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { IMAGES } from '../../constants/images';

import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Background from '../../components/Background';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Chat Freely, Instantly',
    description:
      'Connect with friends and family in real time. Zlooz makes messaging simple, fast, and seamless — wherever they are in the world.',
    image: IMAGES.intro_1,
  },
  {
    id: '2',
    title: 'Secure. Private. Yours.',
    description:
      'Every message is end-to-end encrypted, so only you and the person you are chatting with can read it.',
    image:IMAGES.intro_2,
  },
  {
    id: '3',
    title: 'More Than Just Text',
    description:
      'Share photos, voice notes, videos, stickers, and more all with a tap. Zlooz brings your conversations to life.',
    image: IMAGES.intro_3,
  },
];

export default function IntroScreen({ navigation }) {
  const [index, setIndex] = useState(0);

  const swiperRef = useRef(null);

  // Next Button Logic
  const handleNext = async () => {
    if (index < slides.length - 1) {
      swiperRef.current?.scrollToIndex({
        index: index + 1,
        animated: true,
      });
    } else {
      await AsyncStorage.setItem('introDone', 'true');
      navigation.navigate('AuthNavigator');
    }
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem('introDone', 'true');
    navigation.navigate('AuthNavigator');
  }

  // Render Slide
  const renderItem = ({ item }) => (
    <View style={[styles.slide, { width }]}>
      <Image
        source={item.image}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );

  return (
    <Background showBg={true}>
      <View style={styles.container}>

        {/* Skip Button */}
          {index < slides.length - 1 && (
            <TouchableOpacity
              style={styles.skipBtn}
              onPress={handleSkip}
            >
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          )} 
        {/* Swiper */}
        <View style={styles.swiperContainer}>
          <SwiperFlatList
            ref={swiperRef}
            data={slides}
            renderItem={renderItem}
            disableGesture     // Remove swipe (optional)
            onChangeIndex={({ index }) => setIndex(index)}
          />
        </View>

        {/* Bottom Card */}
        <View style={styles.card}>

          {/* Title */}
          <Text style={styles.title}>
            {slides[index].title}
          </Text>

          {/* Description */}
          <Text style={styles.desc}>
            {slides[index].description}
          </Text>

          {/* Button */}
          <View style={styles.btnWrapper}>
            <TouchableOpacity onPress={handleNext}>
              {index === slides.length - 1 ? (
              <View style={styles.getStartedBtn}>
                <Text style={styles.getStartedText}>
                  Get Started
                </Text>
              </View>
              ) : (
                <View style={styles.circleBtn}>
                  <Text style={styles.arrow}>→</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </Background>
  );
}
