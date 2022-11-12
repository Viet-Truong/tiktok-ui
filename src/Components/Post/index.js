import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Post.module.scss";

import Video from "../Video";
import Action from "../Action";
import Image from "../Image";
import Button from "../Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Post({ data }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("avatar-img")}>
                <Image
                    className={cx("avatar")}
                    src={data.user.avatar}
                    alt={`${data.user.first_name} ${data.user.last_name}`}
                />
            </div>
            <div className={cx("content")}>
                <div className={cx("title")}>
                    <div>
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
                    <Button primary>Follow</Button>
                </div>
                <div className={cx("video-content")}>
                    <div className={cx("video")}>
                        <Video src={data.file_url} />
                    </div>
                    <div className={cx("action")}>
                        <Action value={data.likes_count} />
                        <Action value={data.comments_count} />
                        <Action value={data.shares_count} />
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
