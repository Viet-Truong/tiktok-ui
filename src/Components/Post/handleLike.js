import * as postServices from "../../API/postServices";

const handleLikeFunc = async (video) => {
    let newVideo;
    if (video && video.is_liked) {
        newVideo = await postServices.unLikePost(video.id);
    } else {
        newVideo = await postServices.likePost(video.id);
    }

    return newVideo;
};

export default handleLikeFunc;
