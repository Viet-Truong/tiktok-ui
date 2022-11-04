import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";

const cx = classNames.bind(styles);
function SideBar() {
    return <h2 className={cx("wrapper")}>SideBar</h2>;
}

export default SideBar;
