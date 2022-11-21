import * as request from "../utils/request";

export const login = async ({ email, password }) => {
    try {
        const res = await request.get(
            "https://tiktok.fullstack.edu.vn/api/auth/login",
            {
                params: {
                    email,
                    password,
                },
            }
        );
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const register = async ({ type = "email", email, password }) => {
    try {
        const res = await request.get(
            "https://tiktok.fullstack.edu.vn/api/auth/register",
            {
                params: {
                    type,
                    email,
                    password,
                },
            }
        );
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
