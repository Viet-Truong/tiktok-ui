import classNames from "classnames/bind";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx("wrapper")}>
            <h2>Search Page</h2>
        </div>
    );
}

export default Search;
