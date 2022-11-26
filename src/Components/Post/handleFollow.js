import * as followServices from "../../API/followServices";

const handleFollowFunc = async (user) => {
    let newUser;
    if (user && user.is_followed) {
        newUser = await followServices.unFollow(user.id);
    } else {
        newUser = await followServices.follow(user.id);
    }

    return newUser && newUser.is_followed;
};

export default handleFollowFunc;
