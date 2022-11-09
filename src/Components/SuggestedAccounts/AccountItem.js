import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import Tippy from "@tippyjs/react/headless";

import Image from "./../Image";
import { Wrapper as PopperWrapper } from "../Popper";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <Tippy
                interactive
                delay={[600, 0]}
                offset={[-20, 0]}
                render={renderPreview}
                placement="bottom"
            >
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
        </div>
    );
}

export default AccountItem;
