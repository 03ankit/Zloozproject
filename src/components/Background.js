import React from "react";
import {View,ImageBackground,StyleSheet } from "react-native";
import { IMAGES } from "../constants/images";

 const Background = (props)=> {
    const { children, showBg } = props;

    if (showBg !== true) {
        return <View style={styles.container}>{children}</View>;
    }

     return (
         <ImageBackground
             source={IMAGES.bg_image}
             style={styles.background}
         >
         {children}
         </ImageBackground>
     );
 }

 export default Background;


 const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  background: {
    flex: 1,
  },

});