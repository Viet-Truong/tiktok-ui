import classNames from "classnames/bind";
import styles from "./Modal.module.scss";

import { SOCIAL_MENU_ITEMS_LOGIN as items } from "../../data/menuItemData";
import config from "../../config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

const cx = classNames.bind(styles);
function Modal({ handleClose, isClose }) {
    const toggleClose = isClose ? "close" : "";
    return (
        <div className={cx("modal", `${toggleClose}`)}>
            <div className={cx("wrapper-modal")}>
                <div className={cx("inner-modal")}>
                    <FontAwesomeIcon
                        icon={faXmark}
                        className={cx("icon-close")}
                        onClick={handleClose}
                    />
                    <h2 className={cx("modal-title")}>LOGIN TIKTOK</h2>
                    <div className={cx("content")}>
                        {items.map((item, index) => (
                            <Button
                                color={item.color}
                                leftIcon={item.icon}
                                key={index}
                                disabled={index !== 1}
                                to={config.routes.login}
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
