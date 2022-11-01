import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import styles from "./Header.module.scss";
import images from "../../../../assets/images";

import Button from "../../../../Components/Button";
import Menu from "../../../Popper/Menu";
import Image from "../../../Image";
import Search from "../Search";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEarthAsia,
    faEllipsisVertical,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { InboxIcon, MessageIcon, UploadIcon } from "../../../Icons";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "Tiếng việt",
        children: {
            title: "Language",
            data: [
                {
                    type: "Language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "Language",
                    code: "vie",
                    title: "Tiếng việt",
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and Help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View profile",
            to: "/profile",
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: "Get coins",
            to: "/coin",
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Settings",
            to: "/settings",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: "Log out",
            to: "/logout",
            separate: true,
        },
    ];

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img src={images.logo} alt="top top" />
                <Search />
                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <div className={cx("upload-btn")}>
                                <UploadIcon />
                                <span>Tải lên</span>
                            </div>
                            <Tippy
                                content="Message"
                                placement="bottom"
                                delay={[0, 100]}
                            >
                                <button className={cx("action-btn")}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                content="Inbox"
                                placement="bottom"
                                delay={[0, 100]}
                            >
                                <button className={cx("action-btn")}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    {/* OnChange dung de bat su kiẹn click vao dung item ma minh click */}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx("user-avatar")}
                                src="https://cdn.discordapp.com/attachments/951411070055104572/1036634358615912519/matcuoi.jpg"
                                alt="A"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
