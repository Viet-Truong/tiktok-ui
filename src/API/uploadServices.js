import * as request from '../utils/request';

export const uploadVideo = async (formData) => {
    try {
        const res = await request.post('videos', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
