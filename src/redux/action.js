import { SET_PHONE,SET_SETUP_PROFILE,SET_PROFILE,LOG_OUT,MESSAGES,CLEAR_MESSAGES } from "./constant";



export const setPhone = (phone) => ({
    type: SET_PHONE,
    payload: phone,
});
export const setupprofile=(setupprofile) => ({
    type:SET_SETUP_PROFILE,
    payload:setupprofile,
});

export const setMessages=(messages) => ({
    type:MESSAGES,
    payload:messages,
});

export const clearMessages = () => ({
    type: CLEAR_MESSAGES,
});
export const addUser = (user) => ({
  type: 'ADD_USER',
  payload: user,
});

export const updateUser = (user) => ({
  type: 'UPDATE_USER',
  payload: user,
});

export const deleteUser = (id) => ({
  type: 'DELETE_USER',
  payload: id,
});

export const setProfile = (profile) => ({
    type: SET_PROFILE,
    payload: profile,
});
export const logOut = () => ({
    type: LOG_OUT,
}); 