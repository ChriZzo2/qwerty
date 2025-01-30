import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import {AuthState, LoginCredentials, RegisterCredentials} from '@/types/auth';
import {CONFIG} from '@/config';
import {authApi} from '@/api/auth';

const initialState: AuthState = {
    user: null,
    token: Cookies.get('token') || null,
    isLoading: false,
    error: null,
};

export const login = createAsyncThunk(
    'auth/login',
    async (credentials: LoginCredentials) => {
        const response = await authApi.login(credentials);
        return response.data;

    }
);

export const register = createAsyncThunk(
    'auth/register',
    async (credentials: RegisterCredentials) => {
        const response = await authApi.register(credentials);
        return response.data;
    }
);

export const userInfo = createAsyncThunk(
    'auth/userInfo',
    async () => {
        const response = await authApi.getUserInfo();
        console.log(response)
        return response.data;
    }
);

export const logout = createAsyncThunk('auth/logout', async () => {
    await authApi.logout();
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                Cookies.set('token', action.payload.token, {
                    domain: CONFIG.COOKIE_DOMAIN
                });
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Login failed';
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.token = null;
                Cookies.remove('token', {domain: CONFIG.COOKIE_DOMAIN});
            })
            .addCase(userInfo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
    },
});

export const {clearError} = authSlice.actions;
export default authSlice.reducer;