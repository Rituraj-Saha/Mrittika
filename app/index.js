import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from './rootreducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Use AsyncStorage for React Native
  // whitelist: ['user'], // Reducers to persist (e.g., 'user')
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});
const persistor = persistStore(store);

export {store, persistor};
