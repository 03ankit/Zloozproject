import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';
import {IMAGES} from '../constants/images';

export default function CameraModal({ visible, onClose, onCamera, onGallery }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Select Option</Text>

          <View style={styles.containerrow}>
            <TouchableOpacity style={styles.btn} onPress={onCamera}>
              <Image
                style={styles.btnText}
                source={IMAGES.camera}
              />
              {/* <Text style={styles.btnText}>📷 Open Camera</Text> */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={onGallery}>
              <Image
                style={styles.btnText}
                source={IMAGES.gallery}
              />
              {/* <Text style={styles.btnText}>🖼 Open Gallery</Text> */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancel} onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.36)',
    justifyContent: 'center',
  },

  container: {
    flex: 0.25,
    backgroundColor: '#0f020279',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBlockStart:'auto'
  },
    containerrow: {
    flexDirection:'row',
    justifyContent:'space-evenly',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
    color:'white',
  },

  btn: {
    padding: 15,
    backgroundColor: '#99e39c',
    borderRadius: 10,
    marginVertical: 6,
  },

  btnText: {
    height: 30,
    width: 30,
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },

  cancel: {
    marginTop: 10,
    padding: 12,
  },

  cancelText: {
    textAlign: 'center',
    color: 'white',
  },
});
