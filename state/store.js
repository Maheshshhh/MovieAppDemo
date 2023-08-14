import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistedState = AsyncStorage.getItem('userState').then((storedState)=>{
  if(storedState){
    return JSON.parse(storedState)
  }
  return {}
}).catch((error)=> ({}));

const store = configureStore({
  reducer: {
    userDetails: userReducer,
  },
  preloadedState: persistedState
});

store.subscribe(()=>{
  const state = store.getState()
  AsyncStorage.setItem('userState',JSON.stringify(state))
})
export default store;
