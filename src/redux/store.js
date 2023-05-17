import { configureStore } from '@reduxjs/toolkit';
import { initState } from './store.init-state';
import { usersReducer } from './users/users.slice';
import { subscriptionReducer } from './subscription/subscription.slice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {
    users: usersReducer,
    subscription: subscriptionReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
