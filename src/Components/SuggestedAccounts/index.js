import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import PropTypes from "prop-types";
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);
function SuggestedAccounts({
    label,
    data = [],
    preview,
    isSeeAll = true,
    onSeeAll,
    isSeeMore = true,
    onSeeMore,
}) {
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
            {preview ? (
                <p className={cx("see-all")} onClick={onSeeAll}>
                    {isSeeAll ? "See All" : "See Less"}
                </p>
            ) : (
                <p className={cx("see-all")} onClick={onSeeMore}>
                    {isSeeMore ? "See More" : ""}
                </p>
            )}
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};
export default SuggestedAccounts;
