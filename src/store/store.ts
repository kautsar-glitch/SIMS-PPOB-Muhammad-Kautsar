import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userReducer from './profileSlice';
import dashboardReducer from './dashboardSlice';
import transactionReducer from './transactionSlice';


const store = configureStore({
  reducer: {
  auth: authReducer,
  users: userReducer,
  dashboard: dashboardReducer,
  transactions: transactionReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
