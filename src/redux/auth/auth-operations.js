import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Beaer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
        }
    };



const register = createAsyncThunk('auth/register', async (credentials) => {
    try { 
        const { data } = await axios.post('/users/signup', credentials);
        console.log(credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        
    }
})

const logIn = createAsyncThunk('auth/login', async credentials => {
    try { 
        const response = await axios.post('/users/login', credentials);
        console.log(response);
        token.set(response.data.token);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

const logOut = createAsyncThunk('auth/logout', async () => {
    try { 
         await axios.post('/users/logout');
         token.unset();
    } catch (error) {
        console.log(error);
    }
});

const authOperations = {
    register,
    logIn,
    logOut
}

export default authOperations;