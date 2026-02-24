import { StyleSheet } from "react-native";
import{COLORS} from "../../constants/colors";
import IMAGES from "../../constants/images";


export default StyleSheet.create({

    header: {
    //flex: 0.05,
    height: 85,
    paddingHorizontal: 10,
    //backgroundColor: "red",
    //elevation: 8,
    // shadowColor: COLORS.white,
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    //borderWidth: 1,
    borderBottomWidth: 2,
    borderColor: COLORS.white,
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginTop: 30,
    resizeMode: "cover",
  },

  headerTop: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },


  box: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: COLORS.white,

    justifyContent: "center",
    alignItems: "center",
  },

  boxOne: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",

  },

  back: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 15,
    marginLeft: 10,
  },

  userInfo: {
    flex: 1,
    marginLeft: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.black,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "green",
    marginRight: 5,
  },

  status: {
    fontSize: 12,
    color: "gray",
  },

  rightIcons: {
    flexDirection: "row",

    width: 80,
    height: 40,

    backgroundColor: COLORS.white,
    borderRadius: 15,
    marginLeft: 20,
    justifyContent: "space-around",
    alignItems: "center",

    marginHorizontal: 10,
  },

  iconImg: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    tintColor: COLORS.purple,
  },


  bottomcontainer: {
    flex: 0.20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    //flexDirection:"row",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },


  messageBubble: {
    maxWidth: "75%",
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
  },

  myMsg: {
    backgroundColor: COLORS.purple,
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
  },

  otherMsg: {
    backgroundColor: "#eee",
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
  },

  msgText: {
    color: COLORS.white,
    fontSize: 15,
  },
  messageContent: {
    flexDirection: "column",
  },

  timeText: {
    fontSize: 10,
    color: "gray",
    alignSelf: "flex-end",
    marginTop: 4,
  },
  // sendIcon: {
  //   borderRadius: 5,
  //   backgroundColor:COLORS.purple,
  //   tintColor: COLORS.white,
  // },

  //   sendContainer: {
  //   backgroundColor: COLORS.purple,
  //   borderRadius: 20,
  //   padding: 6,
  // },

  // sendIcon: {
  //   tintColor: COLORS.white,
  // },

  sendContainer: {
    backgroundColor: COLORS.purple,
    width: 36,
    height: 36,
    borderRadius: 10, // half of width/height = perfect circle
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // 🔥 IMPORTANT
  },

  sendIcon: {
    width: 18,
    height: 18,
    tintColor: COLORS.white,
  },
chatImage: {
  width: 180,
  height: 220,
  borderRadius: 12,
  resizeMode: "cover",

  // ✅ White Border
  borderWidth: 2,
  borderColor: COLORS.white,
},
imageWrapper: {
  padding: 2,
  backgroundColor: COLORS.white,
  borderRadius: 14,
},

    
})