import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Background  from '../../components/Background';
import { COLORS } from '../../constants/colors';
import styles from './style';



export default function Introtwo({ navigation }) {
  return (
    <Background showBg={true}>
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skipBtn}
        onPress={() => navigation.replace('Signin')}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <Image
        source={require('../../assets/images/intro_2.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.card}>

        <Text style={styles.title}>
          Chat Freely , Instantly
        </Text>

        <Text style={styles.desc}>
          Connect with friends and family in real time Zlooz 
          makes messagning simple fast and seamless - wherver they are inn the world.
        </Text>
{/* 
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Intro2')}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity> */}
        <View style={styles.btnWrapper}>
         <TouchableOpacity
            style={styles.circleBtn}
              onPress={() => navigation.navigate('Intro3')}>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
    </Background>

  );
}