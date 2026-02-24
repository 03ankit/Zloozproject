import { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  PermissionsAndroid,
  Alert
} from 'react-native';

import Background from '../../components/Background';
import Header from '../../components/Header';
import CustomTextInput from '../../components/CustomTextInput';
import CameraModal from '../../components/CameraModal';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { setProfile, logOut } from '../../redux/action';
import styles from '../auth/styles';
import { useSelector, useDispatch } from 'react-redux';

export default function Profile() {
  // const [profile, setProfile] = useState(null);
  //  const [phone, setPhone] = useState('');

  // Local editable states
  const [name, setName] = useState('');
  const [username, setusername] = useState('');
  const [status, setStatus] = useState('');
  // const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const selectImage = () => {
    setModalVisible(true);
  };

  const profile = useSelector(state => state.profile);
  const phone = useSelector(state => state.phone);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

  const requestGalleryPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        // Android 13+ uses different permission
        const permission =
          Platform.Version >= 33
            ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
            : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

        const granted = await PermissionsAndroid.request(permission, {
          title: 'Gallery Permission',
          message: 'App needs access to your gallery to select photos.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        });
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true; // iOS handles permissions automatically
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs access to your camera to take photos.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true; // iOS handles permissions automatically
  };

  const handleCamera = async () => {
    setModalVisible(false);

    const hasPermission = await requestCameraPermission();

    if (!hasPermission) {
      console.log('Permission Denied', 'Camera permission required');
      return;
    }

    openCamera();
  };

  const handleGallery = async () => {
    setModalVisible(false);

    const hasPermission = await requestGalleryPermission();

    if (!hasPermission) {
      console.log('Permission Denied', 'Gallery permission required');
      return;
    }

    openGallery();
  };

  useEffect(() => {
    if (profile) {
      setName(profile.name || '');
      setusername(profile.username || '');
      setStatus(profile.status || '');
      // setPhone(profile.phone || '');
      setPhoto(profile.photo || null);
    }
  }, [profile]);

  const openCamera = async () => {
    const result = await launchCamera({ mediaType: 'photo' });

    if (!result.didCancel && result.assets) {
      setPhoto({ uri: result.assets[0].uri });
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });

    if (!result.didCancel && result.assets) {
      setPhoto({ uri: result.assets[0].uri });
    }
  };

  const handleSave = () => {
    dispatch(
      setProfile({
        name,
        username,
        status,
        phone,
        photo,
      }),
    );

    Alert.alert('Success', 'Profile Updated');
  };
  return (
    <Background showBg={true}>
      <Header showlogo={true} />
      <CameraModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onCamera={handleCamera}
        onGallery={handleGallery}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.card}>
              <Text style={styles.title}>Set Up Your Profile</Text>

              <TouchableOpacity style={styles.avatarBox} onPress={selectImage}>
                <Image
                  source={
                    photo ? photo : require('../../assets/images/logo.png')
                  }
                  style={styles.avatar}
                />

                <View style={styles.iconBox}>
                  <Image
                    source={require('../../assets/icons/gallery.png')}
                    style={styles.editIcon}
                  />
                </View>
              </TouchableOpacity>

              {/* Full Name */}

              <Text style={styles.label}>Full Name</Text>
              <CustomTextInput
                placeholder="Enter full name"
                value={name}
                onChangeText={setName}
              />

              {/* Email */}

              <Text style={styles.label}>User name</Text>
              <CustomTextInput
                placeholder="Enter username"
                value={username}
                onChangeText={setusername}
              />

              {/* Status */}

              <Text style={styles.label}>Status</Text>
              <CustomTextInput
                placeholder="Write something..."
                value={status}
                onChangeText={setStatus}
                multiline
                maxHeight={120}
              />

              {/* Phone */}

              <Text style={styles.label}>Phone number</Text>
              <CustomTextInput
                label="Phone Number"
                placeholder="Enter phone"
                value={phone}
                onChangeText={phone}
                keyboardType="phone-pad"
              />

              {/* Save Button */}
              <TouchableOpacity style={styles.btn} onPress={handleSave}>
                <Text style={styles.btnText}>Save</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.logoutbtn} onPress={handleLogout}>
                <Text style={styles.logoutbtnText}>LogOut</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Background>
  );
}
