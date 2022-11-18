import * as request from "../utils/request";

export const search = async (q, type = "less") => {
    try {
        const res = await request.get(
            "https://tiktok.fullstack.edu.vn/api/users/search",
            {
                params: {
                    q,
                    type,
                },
            }
        );
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
