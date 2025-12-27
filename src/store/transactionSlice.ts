import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../config/api';

export interface TransactionRecord {
  invoice_number: string;
  transaction_type: string;
  description: string;
  total_amount: number;
  created_on: string;
}

export interface TransactionData {
  offset: string;
  limit: string;
  records: TransactionRecord[];
}

export interface TransactionState {
  data: TransactionData;
  loading: boolean;
  error: string | null;
}

const initialState: TransactionState = {
  data: { offset: '0', limit: '0', records: [] },
  loading: false,
  error: null,
};

export const fetchTransactions = createAsyncThunk(
  'transactions/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}transaction`);
      return response.data; 
    } catch (err: any) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action: PayloadAction<TransactionData>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default transactionSlice.reducer;
