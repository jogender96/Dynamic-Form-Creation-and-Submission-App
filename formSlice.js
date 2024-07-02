import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchForms = createAsyncThunk('form/fetchForms', async () => {
  const response = await axios.get('http://localhost:5000/api/forms');
  return response.data;
});

export const createForm = createAsyncThunk('form/createForm', async (form) => {
  const response = await axios.post('http://localhost:5000/api/forms', form);
  return response.data;
});

const formSlice = createSlice({
  name: 'form',
  initialState: {
    forms: [],
    status: null,
  },
  extraReducers: {
    [fetchForms.fulfilled]: (state, action) => {
      state.forms = action.payload;
      state.status = 'success';
    },
    [createForm.fulfilled]: (state, action) => {
      state.forms.push(action.payload);
      state.status = 'success';
    },
  },
});

export default formSlice.reducer;
