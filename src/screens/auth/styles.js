import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';    
import {Fonts} from '../../constants/fonts';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
  },

  card: {
    width: '90%',
    marginTop: 40,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 25,
    elevation: 5,
    alignItems: 'center',
  },

  title: {
    alignSelf:'flex-start',
    fontSize: 22,
    fontFamily: Fonts?.bold,
    marginBottom: 5,
  },

  subTitle: {
    alignSelf:'flex-start',
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 20,
    fontFamily: Fonts.medium,

  },

   otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },

  otpBox: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: Fonts.bold,
  },

  timer: {
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.purple,
    marginBottom: 15,
  },


  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    marginBottom: 8,
    color: COLORS.black,
    fontFamily: Fonts.medium,
  },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 50,
    width: '100%',
  },

  code: {
    fontFamily: Fonts.light,
    marginRight: 10,
  },

  inputone: {
    flex: 1,
    fontSize: 16,
  },
  resendRow: {
     alignSelf: 'flex-start'
  },
  btn: {
    backgroundColor: COLORS.primary,
    height: 50,
    width: '80%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    elevation:5,
  },

  btnText: {
    color: COLORS.white,
    fontSize: 16,
     fontFamily: Fonts.semiBold,
  },

  logoutbtn: {
    backgroundColor: COLORS.red,
    height: 50,
    width: '80%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    elevation:5,
  },

 logoutbtnText: {
    color: COLORS.white,
    fontSize: 16,
     fontFamily: Fonts.semiBold,
  },

  countryBox: {
  flexDirection: 'row',
  alignItems: 'center',
  marginRight: 10,
},

code: {
  fontSize: 16,
  fontWeight: '500',
},


  checkBox: {
  width: 22,
  height: 22,
  borderWidth: 1,
  borderColor: '#999',
  borderRadius: 5,
  marginRight: 10,

  justifyContent: 'center',
  alignItems: 'center',
},

tick: {
  color: COLORS.primary,
  fontSize: 16,
  fontWeight: 'bold',
},

avatarBox: {
    position: 'relative',
    width: 100,
    height: 100,

    marginBottom: 20,
    borderRadius: 30,
    borderColor: '#f6f3f3',
    borderWidth: 2,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },

  iconBox:{
     width: 25,
    height: 25, 
    position: 'absolute',
    right: -5,
    bottom: -5,
    backgroundColor:COLORS.white,
     borderRadius: 10,
     

  },

  editIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 2,
    bottom: 2,
    tintColor:COLORS.purple,
    padding: 6,
    borderRadius: 15,
    fontSize: 12,
  },

  input: {
     width: '100%',
     height: 50,
     borderWidth: 1,
     borderColor: '#DDD',
     borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontFamily: Fonts.regular,
  },

   dropdown: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  langText: {
    color: '#555',
  },

  arrow: {
    fontSize: 14,
    color: '#555',
  },

  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
   termsText: {
    flex: 1,
    fontSize: 13,
  },
   back: {
    marginTop: 50,
    color: COLORS.primary,
  },

  errorText: {
    alignSelf: 'flex-end',
    color: 'red',
    fontSize: 12,
    marginLeft: 5,
    marginTop:-10,
    
  },
  resendRow:{
    flexDirection: 'row',
  },

  flag: {
  fontSize: 22,
  marginRight: 5,
},

arrow: {
  fontSize: 12,
  marginLeft: 5,
},


// multiInputWrapper: {
//   flexDirection: "row",
//   alignItems: "center",
//   //justifyContent: "center",
//   //backgroundColor: COLORS.white,
//   borderRadius: 10,
//   paddingHorizontal: 10,
//   //minHeight: 45,
//   borderWidth: 1,
//   borderColor: COLORS.gray,
//   marginTop: 10,
//   width: '90%',

// },

// multiInput: {F
  
//   flex: 0.85,
//   fontSize: 15,
//   color: COLORS.black,
//   marginLeft:-15

// },
// multiInputWrapper: {
//   flexDirection: "row",
//   alignItems: "center",
//   backgroundColor: COLORS.white,
//   borderRadius: 15,
//   paddingHorizontal: 12,
//   borderWidth: 1,
//   borderColor: COLORS.gray,
//   width: "100%",
// },

// multiInput: {
//   flex: 1,
//   fontSize: 15,
//   color: COLORS.black,
//   paddingVertical: 6,
//   marginLeft:-15
// },

// leftIconBox: {
//   padding: 0,
// },

// rightIconBox: {
//   padding: 5,
// },

// icon: {
//   width: 22,
//   height: 22,
//   tintColor: COLORS.purple,
// },



});
export default styles;