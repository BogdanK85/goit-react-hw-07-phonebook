import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6528e96e931d71583df2918a.mockapi.io';

export const getAllContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/add',
  async ({ name, phone }, thunkAPI) => {
    try {
      const response = await axios.post('contacts', {
        name: name,
        phone: phone,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/delete',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`contacts/${id}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
