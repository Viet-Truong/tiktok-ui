import * as request from "../utils/request";

export const getPost = async ({ type, page = 1 }) => {
    try {
        const res = await request.get(
            "https://tiktok.fullstack.edu.vn/api/videos",
            {
                params: {
                    type,
                    page,
                },
            }
        );
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
