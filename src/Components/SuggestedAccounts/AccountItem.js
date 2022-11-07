import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import Image from "./../Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <Tippy>
            <div className={cx("account-item")}>
                <Image className={cx("avatar")} alt="A" src="" />
                <div className={cx("item-info")}>
                    <h4 className={cx("nick-name")}>
                        <strong>Viet Truong</strong>
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={cx("check")}
                        />
                    </h4>
                    <p className={cx("name")}>Bùi Viết Trường</p>
                </div>
            </div>
        </Tippy>
    );
}

export default AccountItem;
