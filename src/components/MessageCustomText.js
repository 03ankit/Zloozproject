import React, { useState, forwardRef } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { IMAGES } from '../../constants/images';
import LinearGradient from "react-native-linear-gradient";
const MessageCustomText = forwardRef((props, ref) => {
  const {
    placeholder,
    value,
    onChangeText,
    keyboardType,
    placeholderTextColor,
    error,
    multiline = false,
    maxHeight = 60,
    leftIcons = [],
    rightIcons = [],

  } = props;


  const [height, setHeight] = useState(40);
  return (
    <View style={{ width: '100%' }}>

      <View style={styles.multiInputWrapper}>

        {/* Left Icons */}
        {leftIcons.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={item.onPress}
            style={styles.leftIconBox}
          >
            <Image source={item.icon} style={styles.icon} />
          </TouchableOpacity>
        ))}

        {/* Input */}
        <TextInput
          ref={ref}
          multiline={multiline}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor || COLORS.black}
          style={[
            styles.multiInput,
            error && styles.errorBorder,
            multiline && {
              height: Math.min(maxHeight, height),
              textAlignVertical: 'top',
            },
          ]}
          scrollEnabled={height >= maxHeight}
          onContentSizeChange={e => {
            if (multiline) {
              setHeight(e.nativeEvent.contentSize.height);
            }
          }}
        />

        {Array.isArray(rightIcons) &&
          rightIcons.map((item, index) => {

            // 👉 If gradient exists → use LinearGradient
            if (item.gradient) {
              return (
                <TouchableOpacity key={index} onPress={item.onPress}>
                  <LinearGradient
                    colors={item.gradient}
                    style={[styles.rightIconBox, item.containerStyle]}
                  >
                    <Image
                      source={item.icon}
                      style={[styles.icon, item.iconStyle]}
                    />
                  </LinearGradient>
                </TouchableOpacity>
              );
            }

            // 👉 Normal icon (no gradient)
            return (
              <TouchableOpacity
                key={index}
                onPress={item.onPress}
                style={[styles.rightIconBox, item.containerStyle]}
              >
                <Image
                  source={item.icon}
                  style={[styles.icon, item.iconStyle]}
                />
              </TouchableOpacity>
            );
          })}

      </View>

      {/* Error */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
});
export default MessageCustomText;

const styles = StyleSheet.create({


  multiInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderWidth: 0.5,
    borderColor: COLORS.gray,
    width: "100%",
  },

  multiInput: {
    flex: 1,
    fontSize: 15,
    color: COLORS.black,
    paddingVertical: 6,
    marginLeft: -15
  },

  leftIconBox: {
    padding: 0,
  },

  rightIconBox: {
    padding: 5,
  },
  sendContainer: {
    backgroundColor: COLORS.purple,
    borderRadius: 0,
    //padding: 6,
    overflow: "hidden",
  },

  sendIcon: {
    width: 18,
    height: 18,
    tintColor: COLORS.white,
  },

  icon: {
    width: 22,
    height: 22,
    tintColor: COLORS.purple,
  },


})