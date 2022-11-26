import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Post.module.scss";
import { useState, useEffect } from "react";

import Video from "../Video";
import Image from "../Image";
import Button from "../Button";
import Menu from "../Popper/Menu";
import handleLikeFunc from "./handleLike";
import handleFollowFunc from "./handleFollow";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faComment,
    faEnvelope,
    faHeart,
    faLinkSlash,
    faMusic,
    faPaperPlane,
    faShare,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faLine,
    faLinkedinIn,
    faPinterest,
    faReddit,
    faTelegram,
    faTwitter,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const cx = classNames.bind(styles);

const item = [
    {
        icon: <FontAwesomeIcon icon={faCode} />,
        title: "Nhúng",
    },
    {
        icon: <FontAwesomeIcon icon={faPaperPlane} />,
        title: "Gửi đến bạn bè",
    },
    {
        icon: <FontAwesomeIcon icon={faFacebook} />,
        title: "Chia sẻ với Facebook",
    },
    {
        icon: <FontAwesomeIcon icon={faWhatsapp} />,
        title: "Chia sẻ với WhatsApp",
    },
    {
        icon: <FontAwesomeIcon icon={faLinkSlash} />,
        title: "Sao chép liên kết",
    },
    // {
    //     icon: <FontAwesomeIcon icon={faTwitter} />,
    //     title: "Chia sẻ với Twitter",
    // },
    // {
    //     icon: <FontAwesomeIcon icon={faLinkedinIn} />,
    //     title: "Chia sẻ với LinkedIn",
    // },
    // {
    //     icon: <FontAwesomeIcon icon={faReddit} />,
    //     title: "Chia sẻ với Reddit",
    // },
    // {
    //     icon: <FontAwesomeIcon icon={faTelegram} />,
    //     title: "Chia sẻ với Telegram",
    // },
    // {
    //     icon: <FontAwesomeIcon icon={faEnvelope} />,
    //     title: "Chia sẻ với Email",
    // },
    // {
    //     icon: <FontAwesomeIcon icon={faLine} />,
    //     title: "Chia sẻ với Line",
    // },
    // {
    //     icon: <FontAwesomeIcon icon={faPinterest} />,
    //     title: "Chia sẻ với Pinterest",
    // },
];

function Post({ data }) {
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
                        {user.is_followed ? (
                            <Button
                                outline
                                className={cx(`${toggleFollowCheck}`)}
                            >
                                Following
                            </Button>
                        ) : (
                            <Button outline>Follow</Button>
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
                                <p className={cx("value")}>
                                    {content.likes_count}
                                </p>
                            </div>
                            <div className={cx("comment", "action-item")}>
                                <div className={cx("wrapper-icon")}>
                                    <FontAwesomeIcon
                                        icon={faComment}
                                        className={cx("icon")}
                                    />
                                </div>
                                <p className={cx("value")}>
                                    {content.comments_count}
                                </p>
                            </div>
                            <Menu items={item} className={cx("menu")}>
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
        </div>
    );
}

Post.propTypes = {
    data: PropTypes.object.isRequired,
};
export default Post;
