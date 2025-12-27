import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../config/api';

export interface AuthState {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  loading: false,
  error: null,
};

export const authRegister = createAsyncThunk('auth/register', async (payload: Partial<AuthState>, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}auth/register`, payload);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authRegister.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authRegister.fulfilled, (state, action: PayloadAction<AuthState>) => {
        state.loading = false;
        Object.assign(state, action.payload);
      })
      .addCase(authRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
