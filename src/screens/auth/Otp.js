import React, { useEffect, useState, useRef } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Background from '../../components/Background';
import styles from './styles';
import Header from '../../components/Header';
import { COLORS } from '../../constants/colors';


export default function OtpScreen({ navigation }) {
  const OTP_TIME = 60;
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(OTP_TIME);
  const [endTime, setEndTime] = useState(
    Date.now() + OTP_TIME * 1000
  );

  useEffect(() => {
  const interval = setInterval(() => {

    const remaining =
      Math.max(
        0,
        Math.floor((endTime - Date.now()) / 1000)
      );

    setTimer(remaining);

    if (remaining === 0) {
      clearInterval(interval);
    }

  }, 1000);

  return () => clearInterval(interval);

}, [endTime]);



  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);


  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

   const handleChange = (text, index) => {

    if (isNaN(text)) return;

    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
  if (e.nativeEvent.key === 'Backspace') {

    if (otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    let newOtp = [...otp];
    newOtp[index] = '';
    setOtp(newOtp);
  }
};

const handleResend = () => {
  const newEnd = Date.now() + 60 * 1000;

  setEndTime(newEnd);
  setTimer(OTP_TIME);
  setOtp(['', '', '', '']);
};

  /* Verify OTP */
  const handleVerify = () => {
    const code = otp.join('');
    console.log('OTP:', code);
    navigation.navigate('SetupProfile');

  };

  return (
    <Background showBg>
        <Header showlogo />

      <View style={styles.container}>
        {/* Card */}
        <View style={styles.card}>

          <Text style={styles.title}>
            OTP Verification
          </Text>

          <Text style={styles.subTitle}>
            We’ve sent you a code – Let’s confirm it!
          </Text>

          {/* OTP Boxes */}
          <View style={styles.otpRow}>

            {otp.map((item, index) => (
              <TextInput
                key={index}
                ref={ref => inputRefs.current[index] = ref}

                style={styles.otpBox}
                maxLength={1}
                keyboardType="number-pad"

                value={item}

                onChangeText={(text) =>
                  handleChange(text, index)
                }
                onKeyPress={(e) =>
                  handleKeyPress(e, index)
                }
              />
            ))}

          </View>

          <Text style={styles.timer}>
            {timer} Second
          </Text>

          {/* Resend */}
          <View style={styles.resendRow}>
            <Text style={{color:COLORS.lightgrey}}>Didn't get any code? </Text>

            <TouchableOpacity
              disabled={timer > 0}
              onPress={handleResend}
            >
              <Text
                style={[
                  styles.resend,
                  { color: timer > 0 ? COLORS.lightgrey : COLORS.purple }
                ]}
              >
                Resend
              </Text>
            </TouchableOpacity>
          </View>

          {/* Verify Button */}
          <TouchableOpacity
            style={styles.btn}
            onPress={handleVerify}
          >
            <Text style={styles.btnText}>
              Verify
            </Text>
          </TouchableOpacity>

        </View>
      </View>

    </Background>
  );
}
