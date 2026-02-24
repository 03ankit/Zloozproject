import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform, Keyboard, PermissionsAndroid,
} from "react-native";

import EmojiPicker from 'rn-emoji-keyboard';
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import Background from "../../components/Background";
import { IMAGES } from "../../constants/images";
import { COLORS } from "../../constants/colors";
import CustomTextInput from "../../components/MessageCustomText";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../../redux/action";
import ChatScreenattachments from "../../components/ChatScreenattachments";
import styles from "./messageStyles";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Contacts from 'react-native-contacts';
// import DocumentPicker from 'react-native-document-picker';

export default function Message({ navigation, route }) {
  const { image, name, status } = route.params || {};
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState('');   // input text
  //const [messages, setMessages] = useState([]); // chat list
  const flatListRef = React.useRef(null);
  const [showCamera, setShowCamera] = useState(false);
  const [flexToggle, setFlexToggle] = useState(false);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const messages = useSelector(state => state.messages);
  const [showAttach, setShowAttach] = useState(false);

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);



  const requestPermission = async (type) => {
  if (Platform.OS !== "android") return true;

  try {
    let permission;

    if (type === "camera") {
      permission = PermissionsAndroid.PERMISSIONS.CAMERA;
    }

    if (type === "gallery") {
      permission =
        Platform.Version >= 33
          ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
          : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
    }

    if (type === "file") {
      permission =
        Platform.Version >= 33
          ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
          : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
    }

    if (type === "contact") {
      permission = PermissionsAndroid.PERMISSIONS.READ_CONTACTS;
    }

    const granted = await PermissionsAndroid.request(permission);

    return granted === PermissionsAndroid.RESULTS.GRANTED;

  } catch (e) {
    console.log("Permission error:", e);
    return false;
  }
};
const openCamera = async () => {
  const ok = await requestPermission("camera");
  if (!ok) return;

  launchCamera({ mediaType: "photo" }, res => {
    if (res.didCancel) return;

    if (res.assets?.length) {
      sendImage(res.assets[0].uri);
    }
  });
};

const openGallery = async () => {
  const ok = await requestPermission("gallery");
  if (!ok) return;

  launchImageLibrary({ mediaType: "photo" }, res => {
    if (res.didCancel) return;

     if (res.assets?.length) {
      sendImage(res.assets[0].uri);
    }
  });
};
// const openFile = async () => {
//   try {
//     const res = await DocumentPicker.pick({
//       type: [DocumentPicker.types.allFiles],
//     });

//     const file = res[0];

//     dispatch(setMessages({
//       id: Date.now().toString(),
//       type: "file",
//       name: file.name,
//       uri: file.uri,
//       sender: "me",
//       time: getCurrentTime(),
//     }));

//   } catch (e) {
//     if (DocumentPicker.isCancel(e)) {
//       console.log("User cancelled file picker");
//     } else {
//       console.log("File error:", e);
//     }
//   }
// };
const openContact = async () => {
  const permission = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_CONTACTS
  );

  if (permission !== PermissionsAndroid.RESULTS.GRANTED) {
    console.log("Contact permission denied");
    return;
  }

  const contacts = await Contacts.getAll() ;

  if (!contacts.length) return;

  const c = contacts[0];

  dispatch(setMessages({
    id: Date.now().toString(),
    type: "contact",
    name: c.displayName,
    phone: c.phoneNumbers[0]?.number || "",
    sender: "me",
    time: getCurrentTime(),
  }));
};
//   const ok = await requestPermission("contact");
//   if (!ok) return;

//   const contacts = await Contacts.getAll();

//   if (contacts.length === 0) return;

//   const c = contacts[0];

//   dispatch(setMessages({
//     id: Date.now().toString(),
//     type: "contact",
//     name: c.displayName,
//     phone: c.phoneNumbers[0]?.number || "",
//     sender: "me",
//     time: getCurrentTime(),
//   }));
// };


 



    useFocusEffect(
      useCallback(() => {
        navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" } });
        return () => {
          navigation.getParent()?.setOptions({
            tabBarStyle: {
              backgroundColor: COLORS.white,
              height: 70,
              paddingBottom: 6,
              paddingTop: 6,
              borderTopWidth: 0,
              elevation: 12, display: "flex"
            }
          });
        };
      }, [navigation])
    );
    useEffect(() => {
      const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
        setFlexToggle(false);
      });

      const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
        setFlexToggle(true);
      });

      return () => {
        keyboardShowListener.remove();
        keyboardHideListener.remove();
      };
    }, []);



    const getCurrentTime = () => {
      const now = new Date();

      let hours = now.getHours();
      let minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12; // convert 0 to 12
      minutes = minutes < 10 ? "0" + minutes : minutes;

      return `${hours}:${minutes} ${ampm}`;
    };

    const sendMessage = async () => {
      if (!message.trim()) return;

      const messages = {
        id: Date.now().toString(),
        text: message,
        sender: "me",
        time: getCurrentTime(),
      };

      dispatch(setMessages(messages));
      setMessage('');

      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    };

    const sendImage = async (uri) => {
      const imgMsg = {
        id: Date.now().toString(),
        type: 'image',
        uri,
        sender: 'me',
        time: getCurrentTime(),
      };

      dispatch(setMessages(imgMsg));
    };





    return (

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
        style={
          flexToggle
            ? [{ flexGrow: 1 }, styles.container]
            : [{ flex: 1 }, styles.container]
        }
        enabled={!flexToggle}
      >
        <EmojiPicker
          open={showEmoji}
          onClose={() => setShowEmoji(false)}
          onEmojiSelected={(emoji) => {
            setMessage(prev => prev + emoji.emoji);
          }}
          enableSearchBar
          enableRecentlyUsed
        />

        {/* <CameraModal
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              onCamera={handleCamera}
              onGallery={handleGallery}
            /> */}

        <View style={{ flex: 1 }}>
          <Background showBg>

            {/* header */}
            <View style={styles.header}>
              <View style={styles.headerTop}>
                {/* Back Button */}
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.box}>
                  <Image source={IMAGES.back} style={styles.back} />
                </TouchableOpacity>
                {/* Profile */}
                <Image source={{ uri: image }} style={styles.avatar} />
                {/* Name + Status */}
                <View style={styles.userInfo}>
                  <Text style={styles.name}>{name}</Text>
                  <View style={styles.statusRow}>
                    {status === "Online" && <View style={styles.dot} />}
                    <Text style={styles.status}>{status}</Text>
                  </View>
                </View>
                {/* Call Icons */}
                <View style={styles.rightIcons}>
                  <TouchableOpacity>
                    <Image source={IMAGES.videoCall} style={styles.iconImg} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={IMAGES.phone} style={styles.iconImg} />
                  </TouchableOpacity>
                </View>
                {/* More */}
                <TouchableOpacity style={styles.boxOne}>
                  <Image source={IMAGES.more} style={styles.iconImg} />
                </TouchableOpacity>
              </View>
            </View>


            {/* message list */}
            <View style={{ flex: 0.89 }}>
              <FlatList
                ref={flatListRef}
                data={messages}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                  const isMe = item.sender === "me";

                  return (
                    <>
                      <View
                        style={[
                          styles.messageBubble,
                          isMe ? styles.myMsg : styles.otherMsg,
                        ]}
                      >
                        {item.type === "image" ? (
                          // ✅ Image inside colored box
                          <View style={styles.imageBubble}>
                            <Image
                              source={{ uri: item.uri }}
                              style={styles.chatImage}
                            />
                          </View>
                        ) : (
                          <Text style={styles.msgText}>{item.text}</Text>
                        )}
                      </View>
                      <View style={styles.messageContent}>
                        <Text style={styles.timeText}>
                          {item.time}
                        </Text>
                      </View>
                    </>
                  );
                }}
                contentContainerStyle={{
                  padding: 15,
                  paddingBottom: 90, // space for input
                }}
                onContentSizeChange={() =>
                  flatListRef.current?.scrollToEnd({ animated: true })
                }
              />
            </View>

            {/* bottomtab message */}
            <View style={styles.bottomcontainer}>
              <CustomTextInput
                placeholder="Type message..."
                value={message}
                onChangeText={setMessage}
                multiline
                onFocus={() => setShowEmoji(false)}
                keyboardType={"default"}


                leftIcons={[
                  {
                    icon: IMAGES.emoji,
                    onPress: () => {

                      Keyboard.dismiss();
                      setShowEmoji(prev => !prev);
                    }
                  },
                  {
                    icon: IMAGES.attach,
                    //   onPress: openFile,
                  },
                ]}

                rightIcons={[
                  {
                    icon: IMAGES.attachment,
                    onPress: () => {
                      Keyboard.dismiss();
                      setShowAttach(true);
                    }
                  },
                  {
                    icon: IMAGES.send,
                    onPress: sendMessage,
                    containerStyle: styles.sendContainer,
                    iconStyle: styles.sendIcon,
                    gradient: [COLORS.primary, COLORS.purple],
                  },

                ]}
              />
            </View>
          </Background>
        </View>


        <ChatScreenattachments
          visible={showAttach}
          onClose={() => setShowAttach(false)}

          onCamera={() => {
            setShowAttach(false);
            //handleCamera();
            openCamera();
          }}

          onGallery={() => {
            setShowAttach(false);
           // handleGallery();
           openGallery();
          }}

          onFile={() => {
              console.log("File button pressed");
            setShowAttach(false);
           // handleFile();
           //openFile();
          }}

          onLocation={() => {
            setShowAttach(false);
            console.log("Open Map");
          }}

          onContact={() => {
             console.log("Contact button pressed");
 setShowAttach(false);
            // handleContact();
            openContact();
          }}
        />
      </KeyboardAvoidingView>
    );
  }
