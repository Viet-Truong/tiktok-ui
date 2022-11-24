import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Post.module.scss";
import { useState, useEffect } from "react";

import Video from "../Video";
import Image from "../Image";
import Button from "../Button";
import Menu from "../Popper/Menu";
import * as postServices from "../../API/postServices";

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
    const [heartState, setHeartState] = useState(false);
    // const [heartValue, setHeartValue] = useState(data.likes_count);
    const [followState, setFollowState] = useState(false);
    let toggleHeartCheck = heartState ? "active" : "";
    let toggleFollowCheck = followState ? "active" : "";

    useEffect(() => {
        const fetchHeart = async () => {
            if (heartState) {
                await postServices.likePost(data.id);
                setHeartState((heartState) => !heartState);
            } else {
                await postServices.unLikePost(data.id);
                setHeartState((heartState) => !heartState);
            }
        };
        fetchHeart();
    }, [heartState]);

    useEffect(() => {
        const fetchFollow = async () => {
            if (followState) {
                // await postServices.
            }
        };
    }, [followState]);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("avatar-img")}>
                <Image
                    className={cx("avatar")}
                    src={data.user.avatar}
                    alt={`${data.user.first_name} ${data.user.last_name}`}
                />
            </div>
            <div className={cx("wrapper-content")}>
                <div className={cx("title-content")}>
                    <div className={cx("title")}>
                        <h3 className={cx("user-name")}>
                            {data.user.nickname}
                            <span
                                className={cx("full-name")}
                            >{`${data.user.first_name} ${data.user.last_name}`}</span>
                        </h3>
                        <p className={cx("title-post")}>{data.description}</p>
                        <h4 className={cx("music")}>
                            <FontAwesomeIcon icon={faMusic} />
                            <p className={cx("music-title")}>{data.music}</p>
                        </h4>
                    </div>
                    <Button
                        outline
                        className={cx("follow-btn", `${toggleFollowCheck}`)}
                        onClick={() =>
                            setFollowState((followState) => !followState)
                        }
                    >
                        {data.user.isFollowed ? "Follow" : "Đang Follow"}
                    </Button>
                </div>
                <div className={cx("content")}>
                    <div className={cx("video-content")}>
                        <div className={cx("video")}>
                            <Video
                                src={data.file_url}
                                time={data.meta.playtime_seconds}
                                width={data.meta.video.resolution_x}
                            />
                        </div>
                        <div className={cx("action")}>
                            <div className={cx("heart", "action-item")}>
                                <div
                                    className={cx(
                                        "wrapper-icon",
                                        `${toggleHeartCheck}`
                                    )}
                                    onClick={() =>
                                        setHeartState(
                                            (heartState) => !heartState
                                        )
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx("icon")}
                                    />
                                </div>
                                <p className={cx("value")}>
                                    {data.likes_count}
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
                                    {data.comments_count}
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
                                        {data.shares_count}
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
