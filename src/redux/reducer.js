import {
  SET_PHONE,
  SET_SETUP_PROFILE,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  SET_PROFILE,
  LOG_OUT,
  MESSAGES,
  CLEAR_MESSAGES,
} from './constant';

const initialState = {
  phone: '',
  profile: null,
  users: [],
  messages: [],
  isLoggedIn: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PHONE':
      return {
        ...state,
        phone: action.payload,
      };
    case 'SET_SETUP_PROFILE':
      return {
        ...state,
        profile: action.payload,
      };
    case 'MESSAGES':
      return {
        ...state,
        messages:[...state.messages, action.payload],
      };
      case 'CLEAR_MESSAGES':
        return {
          ...state,
          messages: [],
        };
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(u =>
          u.id === action.payload.id ? action.payload : u,
        ),
      };

    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(u => u.id !== action.payload),
      };
    case 'SET_PROFILE':
      return {
        ...state,
        profile: action.payload,
        isLoggedIn: true,
      };
    case 'LOG_OUT':
      return initialState;
    default:
      return state;
  }
};
