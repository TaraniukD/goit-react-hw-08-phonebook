import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
        }
    };

    export const register = createAsyncThunk('auth/register', async credentials => {
        try {
          const { data } = await axios.post('/users/signup', credentials);
          token.set(data.token);
          return data;
        } catch (error) {
        }
      });

      export const logIn = createAsyncThunk('auth/login', async credentials => {
        try {
          const { data } = await axios.post('users/login', credentials);
          token.set(data.token);
          return data;
        } catch (error) {
         
        }
      });

export const logOut = createAsyncThunk('auth/logout', async () => {
    try { 
         await axios.post('/users/logout');
         token.unset();
    } catch (error) {
        console.log(error);
    }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) return thunkAPI.rejectWithValue('Oops');
  
    token.set(token);
  
    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

const authOperations = {
    register,
    logIn,
    logOut
}

export default authOperations;