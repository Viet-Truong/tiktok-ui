import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img src="" alt="" className={cx("avatar")} />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Bui Viet Truong</span>
                    <FontAwesomeIcon
                        className={cx("check")}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx("username")}>bvtruong</span>
            </div>
        </div>
    );
}

export default AccountItem;
