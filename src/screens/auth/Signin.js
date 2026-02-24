import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Background from '../../components/Background';
import Header from '../../components/Header';
import { CountryPicker } from 'react-native-country-codes-picker';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { setPhone } from '../../redux/action';  

export default function SignIn({ navigation }) {
  const [flag, setFlag] = useState('🇺🇸'); 
  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('1');
  const [visible, setVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(''); 
  const dispatch = useDispatch();


  const verifyNumber = async () => {
    if (!phoneNumber.trim()) {
      setError('Phone number is required');
      return;
    }

    // Length check
    if (phoneNumber.length < 10 || phoneNumber.length > 15) {
      setError('Enter valid phone number');
      return;
    }

    // Clear error
    setError('');
    dispatch(setPhone(phoneNumber));
    console.log("ACTION =>", setPhone(phoneNumber));
    navigation.navigate('Otp');
  };

  return (
    <Background showBg>
      <Header showlogo />

      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Welcome to zlooz</Text>

          <Text style={styles.subTitle}>
            Sign in to chat faster, smarter, safer
          </Text>

          <Text style={styles.label}>Phone Number</Text>

          <View style={styles.inputBox}>
            <TouchableOpacity
              style={styles.countryBox}
              onPress={() => setVisible(true)}>
              <Text style={styles.flag}>{flag}</Text>
              <Text style={styles.code}>+{callingCode}</Text>
              <Text>▼</Text>
            </TouchableOpacity>

            <TextInput
              style={styles.inputone}
              placeholder="Enter phone number"
              placeholderTextColor={"grey"}
              keyboardType="phone-pad"
              maxLength={15}
              value={phoneNumber}
              onChangeText={(text) => {
                setPhoneNumber(text);
                if (error) {setError('')};
              }}
            />
           
          </View>
          <View style={styles.resendRow}>
           {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>

          <CountryPicker
            show={visible}
            pickerButtonOnPress={item => {
              setCountryCode(item.code);
              setCallingCode(item.dial_code.replace('+', ''));
              setFlag(item.flag);
              setVisible(false);
            }}
            onBackdropPress={() => setVisible(false)}
          />

          <TouchableOpacity style={styles.btn} onPress={verifyNumber}>
            <Text style={styles.btnText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
}