import { reducer } from './reducer';
import { persistStore ,persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore,applyMiddleware} from  'redux';
import logger from'./middleware';

const persistConfig  = {
    key:'root',storage:AsyncStorage};
const persistedReducer = persistReducer(persistConfig, reducer);

export const store =createStore(persistedReducer,applyMiddleware(logger));
export const persistor = persistStore(store);

