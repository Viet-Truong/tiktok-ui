import { createSlice } from "@reduxjs/toolkit";
import { authRegister, authLogin, authLogout } from "./authAction";

const authJSON = localStorage.getItem("auth");
const auth = JSON.parse(authJSON)?.data || null;
const token = JSON.parse(authJSON)?.meta.token || null;

const initialState = {
    loading: false,
    auth: auth,
    token: token,
    error: null,
    success: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        // Register user
        [authRegister.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [authRegister.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.auth = payload;
            state.success = true;
            state.token = payload.token;
        },
        [authRegister.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        // Login user
        [authLogin.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [authLogin.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.auth = payload;
            state.token = payload.token;
        },
        [authLogin.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        //log out
        [authLogout.fulfilled]: (state) => {
            state.loading = false;
            state.auth = null;
            state.token = null;
            state.error = null;
        },
    },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
