import classNames from "classnames/bind";
import Image from "../../Image";
import styles from "./AccountPreview.module.scss";
import Button from "../../Button";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx("wrapper")}>
            <header className={cx("header")}>
                <Image src="" alt="" className={cx("avatar")} />
                <Button primary small className={cx("follow-btn")}>
                    Follow
                </Button>
            </header>
            <div className={cx("body")}>
                <p className={cx("nickname")}>
                    <strong>buiviettruong</strong>
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={cx("check")}
                    />
                </p>
                <p className={cx("name")}>Bùi Viết Trường</p>
                <p className={cx("analytics")}>
                    <strong className={cx("value")}>1000M </strong>
                    <span className={cx("label")}>Followers</span>
                    <strong className={cx("value")}>1000M </strong>
                    <span className={cx("label")}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
