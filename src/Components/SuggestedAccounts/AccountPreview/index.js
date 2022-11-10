import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Image from "../../Image";
import styles from "./AccountPreview.module.scss";
import Button from "../../Button";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);
function AccountPreview({ data }) {
    return (
        <div className={cx("wrapper")}>
            <header className={cx("header")}>
                <Image
                    src={data.avatar}
                    alt={data.nickname}
                    className={cx("avatar")}
                />
                <Button primary small className={cx("follow-btn")}>
                    Follow
                </Button>
            </header>
            <div className={cx("body")}>
                <p className={cx("nickname")}>
                    <strong>{data.nickname}</strong>
                    {data.tick && (
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={cx("check")}
                        />
                    )}
                </p>
                <p
                    className={cx("name")}
                >{`${data.first_name} ${data.last_name}`}</p>
                <p className={cx("analytics")}>
                    <strong className={cx("value")}>
                        {data.followers_count} M{" "}
                    </strong>
                    <span className={cx("label")}>Followers</span>
                    <strong className={cx("value")}>
                        {data.likes_count} M{" "}
                    </strong>
                    <span className={cx("label")}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountPreview;
