import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authServices from "../API/authServices";

export const authRegister = createAsyncThunk(
    "auth/register",
    async ({ email, password, type }, { rejectWithValue }) => {
        try {
            const auth = await authServices.register(email, password, type);
            auth && localStorage.setItem("auth", JSON.stringify(auth));
            return auth.data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const authLogin = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const auth = await authServices.login(email, password);
            auth && localStorage.setItem("auth", JSON.stringify(auth));
            return auth.data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const authLogout = createAsyncThunk("auth/logout", async () => {
    await authServices.logout();
    localStorage.removeItem("auth");
});
