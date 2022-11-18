import * as request from "../utils/request";

export const getSuggested = async ({ page, perPage }) => {
    try {
        const res = await request.get(
            "https://tiktok.fullstack.edu.vn/api/users/suggested",
            {
                params: {
                    page,
                    per_page: perPage,
                },
            }
        );
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const getFollowed = async ({ page }) => {
    try {
        const res = await request.get(
            "https://tiktok.fullstack.edu.vn/api/me/followings",
            {
                params: {
                    page,
                },
            }
        );
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
