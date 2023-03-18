import { configureStore } from '@reduxjs/toolkit'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import filterSlice from './slice/filterSlice';
import logger from 'redux-logger';
import {contactReducer} from './slice/contactSlice';
import { authReducer } from './auth/auth-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactReducer,
    filter: filterSlice,
  }, 
  
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger)],
  })

export default store;

// export const persistor = persistStore(store);