import * as request from '../utils/request';

export const getSuggested = async ({ page, perPage }) => {
    try {
        const res = await request.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const getFollowed = async ({ page }) => {
    try {
        const res = await request.get('me/followings', {
            params: {
                page,
            },
        });
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const getProfile = async (uid) => {
    try {
        const res = await request.get(`/users${uid}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
