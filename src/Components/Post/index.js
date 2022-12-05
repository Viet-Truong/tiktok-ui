import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Post.module.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Video from "../Video";
import Image from "../Image";
import Button from "../Button";
import Menu from "../Popper/Menu";
import Modal from "../Modal";
import handleLikeFunc from "./handleLike";
import handleFollowFunc from "./handleFollow";
import { SOCIAL_MENU_ITEMS as item } from "../../data/menuItemData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment,
    faHeart,
    faMusic,
    faShare,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Post({ data }) {
    const [close, setClose] = useState(true);
    const { auth } = useSelector((state) => state.auth);
    const [content, setContent] = useState(data);
    const [user, setUser] = useState(content.user);
    let toggleHeartCheck = content.is_liked ? "active" : "";
    let toggleFollowCheck = user.isFollowed ? "" : "isFollowed";

    useEffect(() => {
        setUser(content.user);
        setContent(content);
    }, [content]);

    const handleFollow = async () => {
        const isFollowed = await handleFollowFunc(user);
        setUser((user) => ({ ...user, is_followed: isFollowed }));
    };

    const handleLike = async () => {
        const newContent = await handleLikeFunc(content);
        setContent((content) => ({
            ...content,
            ...newContent,
        }));
    };

    // CLOSE MODAL
    const handleClose = () => {
        setClose(true);
    };

    // HANDLE CHECK AUTH TO SHOW MODAL WHEN AUTH IS NULL
    const handleCheckAuth = () => {
        if (!auth) {
            setClose(false);
        }
    };
    return (
        <div className={cx("wrapper")}>
            <div className={cx("avatar-img")}>
                <Image
                    className={cx("avatar")}
                    src={user.avatar}
                    alt={`${user.first_name} ${user.last_name}`}
                />
            </div>
            <div className={cx("wrapper-content")}>
                <div className={cx("title-content")}>
                    <div className={cx("title")}>
                        <h3 className={cx("user-name")}>
                            {user.nickname}
                            <span
                                className={cx("full-name")}
                            >{`${user.first_name} ${user.last_name}`}</span>
                        </h3>
                        <p className={cx("title-post")}>
                            {content.description}
                        </p>
                        <h4 className={cx("music")}>
                            <FontAwesomeIcon icon={faMusic} />
                            <p className={cx("music-title")}>{content.music}</p>
                        </h4>
                    </div>
                    <div className={cx("follow-btn")} onClick={handleFollow}>
                        {auth ? (
                            user.is_followed ? (
                                <Button
                                    outline
                                    className={cx(`${toggleFollowCheck}`)}
                                >
                                    Following
                                </Button>
                            ) : (
                                <Button outline>Follow</Button>
                            )
                        ) : (
                            <Button outline onClick={() => setClose(false)}>
                                Follow
                            </Button>
                        )}
                    </div>
                </div>
                <div className={cx("content")}>
                    <div className={cx("video-content")}>
                        <div className={cx("video")}>
                            <Video
                                src={content.file_url}
                                time={content.meta.playtime_seconds}
                                width={content.meta.video.resolution_x}
                            />
                        </div>
                        <div className={cx("action")}>
                            <div className={cx("heart", "action-item")}>
                                {auth ? (
                                    <div
                                        className={cx(
                                            "wrapper-icon",
                                            `${toggleHeartCheck}`
                                        )}
                                        onClick={() => handleLike(content)}
                                    >
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className={cx("icon")}
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className={cx("wrapper-icon")}
                                        onClick={() => setClose(false)}
                                    >
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className={cx("icon")}
                                        />
                                    </div>
                                )}
                                <p className={cx("value")}>
                                    {content.likes_count}
                                </p>
                            </div>
                            <div className={cx("comment", "action-item")}>
                                <div
                                    className={cx("wrapper-icon")}
                                    onClick={handleCheckAuth}
                                >
                                    <FontAwesomeIcon
                                        icon={faComment}
                                        className={cx("icon")}
                                    />
                                </div>
                                <p className={cx("value")}>
                                    {content.comments_count}
                                </p>
                            </div>
                            <Menu
                                items={item}
                                className={cx("menu")}
                                handleCheckAuth={handleCheckAuth}
                            >
                                <div className={cx("share", "action-item")}>
                                    <div className={cx("wrapper-icon")}>
                                        <FontAwesomeIcon
                                            icon={faShare}
                                            className={cx("icon")}
                                        />
                                    </div>
                                    <p className={cx("value")}>
                                        {content.shares_count}
                                    </p>
                                </div>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isClose={close} handleClose={handleClose} />
        </div>
    );
}

Post.propTypes = {
    data: PropTypes.object.isRequired,
};
export default Post;
