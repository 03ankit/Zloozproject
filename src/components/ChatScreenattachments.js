import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import { IMAGES } from "../constants/images";
import { COLORS } from "../constants/colors";

export default function ChatScreenattachments({
  visible,
  onClose,
  onCamera,
  onGallery,
  onFile,
  onLocation,
  onContact,
}) {
  const options = [
    { name: "Camera", icon: IMAGES.camera, onPress: onCamera },
    { name: "Media", icon: IMAGES.gallery, onPress: onGallery },
    { name: "File", icon: IMAGES.file, onPress: onFile },
    { name: "Location", icon: IMAGES.location, onPress: onLocation },
    { name: "Contact", icon: IMAGES.contact, onPress: onContact },
  ];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.box}>

          <View style={styles.row}>
            {options.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={item.onPress}
              >
                <View style={styles.iconBox}>
                  <Image source={item.icon} style={styles.icon} />
                </View>

                <Text style={styles.label}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
  },

  box: {
    backgroundColor: COLORS.white,
    paddingVertical: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  item: {
    alignItems: "center",
    width: 70,
  },

  iconBox: {
    width: 55,
    height: 55,
    borderRadius: 15,
    backgroundColor: COLORS.purpleLight,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },

  icon: {
    width: 26,
    height: 26,
    tintColor: COLORS.purple,
  },

  label: {
    fontSize: 13,
    color: COLORS.black,
  },
});