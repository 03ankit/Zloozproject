import React ,{useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../screens/auth/styles';
import { COLORS } from '../constants/colors';

const CustomTextInput = props => {
  const {
    placeholder,
    value,
    onChangeText,
    keyboardType,
    placeholderTextColor,
    error,
    multiline = false,
    maxHeight = 120,
  } = props;

 
  const [height, setHeight] = useState(40);
  return (
    <View style={{ width: '100%' }}>

      {/* Input */}
      <TextInput
        multiline={multiline}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor || COLORS.black}
        style={[
          styles.input,
          error && styles.errorBorder,
          multiline && {
            height: Math.min( maxHeight, height),
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

      {/* Error */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};
export default CustomTextInput;

