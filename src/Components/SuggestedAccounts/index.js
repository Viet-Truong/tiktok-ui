import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import PropTypes from "prop-types";
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);
function SuggestedAccounts({ label, data = [], preview }) {
    return (
        <div className={cx("wrapper")}>
            <p className={cx("label")}>{label}</p>
            {data.map((account) => (
                <AccountItem
                    data={account}
                    key={account.id}
                    preview={preview}
                />
            ))}
            <p className={cx("see-all")}>See All</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};
export default SuggestedAccounts;
