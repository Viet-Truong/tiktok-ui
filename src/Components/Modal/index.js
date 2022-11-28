import classNames from "classnames/bind";
import styles from "./Modal.module.scss";

import { SOCIAL_MENU_ITEMS_LOGIN as items } from "../../data/menuItemData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

const cx = classNames.bind(styles);
function Modal() {
    return (
        <div className={cx("modal")}>
            <div className={cx("wrapper-modal")}>
                <div className={cx("inner-modal")}>
                    <FontAwesomeIcon
                        icon={faXmark}
                        className={cx("icon-close")}
                    />
                    <h2 className={cx("modal-title")}>LOGIN TIKTOK</h2>
                    <div className={cx("content")}>
                        {items.map((item, index) => (
                            <Button
                                leftIcon={item.icon}
                                key={index}
                                disabled={index !== 1}
                                className={cx("item")}
                            >
                                {item.title}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
