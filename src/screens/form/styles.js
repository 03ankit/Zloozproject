import { StyleSheet } from 'react-native';
import {Fonts} from '../../constants/fonts';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontFamily: Fonts.bold,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',

  },

  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },

  btn: {
    backgroundColor: '#4da6ff',
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },

  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

  name: {
    fontSize: 18,
   fontFamily: Fonts.bold,
  },

  email: {
    color: '#666',
    marginTop: 5,
     fontFamily: Fonts.regular,
  },

  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  editBtn: {
    backgroundColor: '#4da6ff',
    padding: 8,
    borderRadius: 5,
  },

  deleteBtn: {
    backgroundColor: '#ff4d4d',
    padding: 8,
    borderRadius: 5,
  },

  btnText: {
    color: '#fff',
  },

  fab: {
  position: 'absolute',
  right: 20,
  bottom: 80, // Bottom tab se upar rahe
  backgroundColor: '#4da6ff',
  width: 60,
  height: 60,
  borderRadius: 30,
  justifyContent: 'center',
  alignItems: 'center',

  // Shadow (iOS)
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.3,
  shadowRadius: 4,

  // Shadow (Android)
  elevation: 8,
},

fabText: {
  color: '#fff',
  fontSize: 32,
  fontFamily: Fonts.bold,
  marginTop: -2, // center perfect
},


});
export default styles;

