import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import Background from '../../components/Background';
import Header from '../../components/Header';
import CheckBox from '@react-native-community/checkbox';
import CustomTextInput from '../../components/CustomTextInput';
import CameraModal from '../../components/CameraModal';
import styles from './styles';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../redux/action';
import {IMAGES} from '../../constants/images';

export default function SetupProfile({ navigation }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [language, setLanguage] = useState('');
  const [photo, setPhoto] = useState(null);
  const [accept, setAccept] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const [height, setHeight] = useState(40);
  const MAX_HEIGHT = 120;

  const selectImage = () => {
    setModalVisible(true);
  };

  const [errors, setError] = useState({
    name: '',
    username: '',
    language: '',
    photo: '',
    accept: '',
  });

  const saveProfile = async () => {
    let newErrors = {
      username: '',
      name: '',
      language: '',
    };
    let isValid = true;
    if (!username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!language.trim()) {
      newErrors.language = 'Language is required';
      isValid = false;
    }

    if (!accept) {
      newErrors.accept = 'Please accept Terms & Conditions';
      isValid = false;
    }

    setError(newErrors);
    if (!isValid) return;

    const profile = {
      name,
      username,
      language,
      photo,
    };
    dispatch(setProfile(profile));
    navigation.replace('Bottomtab');
  };

  // Request Camera Permission
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

  // Request Gallery Permission
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

  // const handleCamera = async () => {
  //   const hasPermission = await requestCameraPermission();

  //   if (!hasPermission) {
  //     console.log(
  //       'Permission Denied',
  //       'Camera permission is required to take photos.',
  //     );
  //     return;
  //   }

  //   openCamera();
  // };

  // const handleGallery = async () => {
  //   const hasPermission = await requestGalleryPermission();

  //   if (!hasPermission) {
  //     console.log(
  //       'Permission Denied',
  //       'Gallery permission is required to select photos.',
  //     );
  //     return;
  //   }

  //   openGallery();
  // };

  const openCamera = async () => {
    try {
      const result = await launchCamera({
        mediaType: 'photo',
        cameraType: 'front',
        quality: 0.8,
        saveToPhotos: true,
      });

      if (result.didCancel) {
        console.log('User cancelled camera');
      } else if (result.errorCode) {
        console.log('Error', result.errorMessage || 'Failed to open camera');
      } else if (result.assets && result.assets.length > 0) {
        setPhoto({ uri: result.assets[0].uri });
      }
    } catch (error) {
      console.log('Error', 'An error occurred while opening camera');
      console.error(error);
    }
  };

  const openGallery = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.8,
        selectionLimit: 1,
      });

      if (result.didCancel) {
        console.log('User cancelled gallery');
      } else if (result.errorCode) {
        console.log('Error', result.errorMessage || 'Failed to open gallery');
      } else if (result.assets && result.assets.length > 0) {
        setPhoto({ uri: result.assets[0].uri });
      }
    } catch (error) {
      console.log('Error', 'An error occurred while opening gallery');
      console.error(error);
    }
  };

  return (
    <Background showBg>
      <Header showlogo />

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
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={styles.card}>
              <Text style={styles.title}>Set Up Your Profile</Text>

              <Text style={styles.subTitle}>
                Add your name and photo to get started.
              </Text>

              <TouchableOpacity style={styles.avatarBox} onPress={selectImage}>
                <Image
                  source={
                    photo ? photo : IMAGES.logo
                  }
                  style={styles.avatar}
                />
                <View style={styles.iconBox}>
                  <Image
                    style={styles.editIcon}
                    source={IMAGES.choosegallery}
                  />
                </View>
              </TouchableOpacity>

              <Text style={styles.label}>User name</Text>

              <CustomTextInput
                label="User Name"
                placeholder="Enter User name"
                value={username}
                onChangeText={text => {
                  setUsername(text);
                  setError(prev => ({ ...prev, username: '' }));
                }}
                error={errors.username}
              />

              <Text style={styles.label}>Your Name</Text>

              <CustomTextInput
                label="Name"
                placeholder="Enter name"
                value={name}
                onChangeText={text => {
                  setName(text);
                  setError(prev => ({ ...prev, name: '' }));
                }}
                error={errors.name}
              />

              <Text style={styles.label}>Native Language</Text>

              <CustomTextInput
                label="Name"
                placeholder="Enter native language"
                value={language}
                onChangeText={text => {
                  setLanguage(text);
                  setError(prev => ({ ...prev, language: '' }));
                }}
                error={errors.language}
              />
              <View style={styles.termsRow}>
                <CheckBox
                  value={accept}
                  onValueChange={setAccept}
                  onCheckColor="white"
                  onTintColor="blue"
                />

                <Text style={styles.termsText}>
                  I Accept Zlooz Terms and Conditions and Privacy Policy
                </Text>
              </View>
              {errors.accept ? (
                <Text style={styles.errorText}>{errors.accept}</Text>
              ) : null}

              <TouchableOpacity style={[styles.btn]} onPress={saveProfile}>
                <Text style={styles.btnText}>Continue</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Signin' }],
                })
              }
              style={{ marginBottom: 20 }}
            >
              <Text style={styles.back}>Back to Sign in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Background>
  );
}
