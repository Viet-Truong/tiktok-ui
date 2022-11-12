import classNames from "classnames/bind";
import styles from "./Action.module.scss";

const cx = classNames.bind(styles);
function Action({ icon, value }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("icon")}>{icon}</div>
            <div className={cx("value")}>
                <p>{value}</p>
            </div>
        </div>
    );
}

export default Action;
