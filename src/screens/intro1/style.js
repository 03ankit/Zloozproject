import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/colors';

const { height } = Dimensions.get('window');

export default StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
  },

  /* Skip */
  skipBtn: {
    position: 'absolute',
    top: 45,
    right: 20,
    zIndex: 10,
    height: 36,
    width: 70,
    backgroundColor: COLORS.white,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },

  skipText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.black,
  },

  /* Swiper */
  swiperContainer: {
    height: height * 0.6,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  slide: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '85%',
    height: '80%',
  },

  /* Card */
  card: {
    width: '90%',
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 22,
    alignItems: 'center',
    elevation: 10,
    marginBottom: 25,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
    color: COLORS.black,
  },

  desc: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
    color: COLORS.gray,
    marginBottom: 18,
  },

  /* Button */
  btnWrapper: {
    width: '100%',
    alignItems: 'center',
  },

  circleBtn: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  arrow: {
    fontSize: 26,
    color: COLORS.white,
    fontWeight: '700',
  },
  
  getStartedBtn: {  

    backgroundColor: COLORS.primary,
    width: 120,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center', 
  },

  getStartedText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '600',
  },



});
