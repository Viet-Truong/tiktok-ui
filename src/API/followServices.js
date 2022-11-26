import * as request from "../utils/request";

export const follow = async (id) => {
    try {
        const res = await request.post(`users/${id}/follow`, id);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const unFollow = async (id) => {
    try {
        const res = await request.post(`users/${id}/unfollow`, id);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
