import * as request from "../utils/request";

export const login = async ({ email, password }) => {
    try {
        const res = await request.post("auth/login", {
            email,
            password,
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const register = async ({ type = "email", email, password }) => {
    try {
        const res = await request.post("auth/register", {
            type,
            email,
            password,
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const logout = async () => {
    await request.post("auth/logout");
};
