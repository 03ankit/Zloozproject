import { StyleSheet } from "react-native";
import {Fonts} from '../../constants/fonts';


export default StyleSheet.create({

  container: {
    flex: 1,    
    backgroundColor:'white',
  },


  /* Search Bar */
searchBox: {
  padding: 12,
  alignItems: 'center',
},

searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: 14,
  paddingHorizontal: 10,
  paddingVertical: 2,
  width: '90%',
  elevation: 2,
},

searchIcon: {
  width: 18,
  height: 18,
},

searchInput: {
  flex: 1,
  marginLeft: 8,
  fontSize: 15,
  color: '#222',
},



  /* Chat Card */

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 12,
    borderRadius: 14,
    elevation: 2,
  },


  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },


  textBox: {
    flex: 1,
    marginLeft: 10,
  },


  name: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: '#222',
  },


  msg: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },


  time: {
    fontSize: 12,
    color: '#999',
  },

  /* Tabs */

tabs: {
  flexDirection: 'row',
  marginHorizontal: 20,
  marginTop:20,
  marginBottom: 10,
},

tab: {
  marginRight: 20,
  alignItems: 'center',
},

tabText: {
  fontSize: 14,
  color: '#999',
  fontWeight: '500',
},

activeTabText: {
  color: '#8F67FF',
  fontWeight: '600',
},

activeLine: {
  marginTop: 6,
  height: 3,
  width: '100%',
  backgroundColor: '#8F67FF',
  borderRadius: 2,
},

name: {
  fontFamily: Fonts.semiBold, // your font
  fontSize: 16,
  color: '#222',
},

msg: {
  fontFamily: Fonts.regular,
  fontSize: 13,
  color: '#777',
  marginTop: 2,
},

time: {
  fontFamily:Fonts.regular,
  fontSize: 11,
  color: '#999',
},



});
