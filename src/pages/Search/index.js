import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import Modal from "../../Components/Modal";

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx("wrapper")}>
            <Modal />
            <h2>Search Page</h2>
        </div>
    );
}

export default Search;
