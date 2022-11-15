import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
import { useState, useEffect } from "react";

import Menu, { MenuItem } from "./Menu";
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from "./../../../Components/Icons";
import config from "../../../config";
import SuggestedAccounts from "../../../Components/SuggestedAccounts";
import * as userService from "../../../API/userServices";
import Button from "../../../Components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faMusic } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
const PER_PAGE = 5;
const hashtagItem = [
    {
        icon: <FontAwesomeIcon icon={faHashtag} />,
        text: "suthatla",
    },
    {
        icon: <FontAwesomeIcon icon={faHashtag} />,
        text: "mackedoi",
    },
    {
        icon: <FontAwesomeIcon icon={faHashtag} />,
        text: "sansangthaydoi",
    },
    {
        icon: <FontAwesomeIcon icon={faMusic} />,
        text: "Yêu Đơn Phương Là Gì(MEE Remix) - Mee ...",
    },
    {
        icon: <FontAwesomeIcon icon={faMusic} />,
        text: "Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa ...",
    },
    {
        icon: <FontAwesomeIcon icon={faMusic} />,
        text: "Thiên Thần Tình Yêu - RICKY STAR",
    },
    {
        icon: <FontAwesomeIcon icon={faHashtag} />,
        text: "7749hieuung",
    },
    {
        icon: <FontAwesomeIcon icon={faHashtag} />,
        text: "genzlife",
    },
    {
        icon: <FontAwesomeIcon icon={faMusic} />,
        text: "Tình Đã Đầy Một Tim - Huyền Tâm Môn",
    },
    {
        icon: <FontAwesomeIcon icon={faMusic} />,
        text: "Thằng Hầu (Thái Hoàng Remix) [Short Vers...",
    },
];

function SideBar() {
    const currentUser = true;
    const [followedUser, setFollowedUser] = useState([]);
    const [suggestedUser, setSuggestedUser] = useState([]);

    useEffect(() => {
        const fetchSuggest = async () => {
            const result = await userService.getSuggested({
                page: 1,
                perPage: PER_PAGE,
            });
            setSuggestedUser(result);
        };
        fetchSuggest();

        const fetchFollow = async () => {
            const result = await userService.getFollowed({
                page: 1,
            });
            setFollowedUser(result);
        };
        fetchFollow();
    }, []);

    return (
        <aside className={cx("wrapper")}>
            <div className={cx("wrapper-fix")}>
                <Menu>
                    <MenuItem
                        title="For you"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    />
                </Menu>

                {!currentUser && (
                    <div className={cx("login")}>
                        <p className={cx("login-text")}>
                            Đăng nhập để follow các tác giả, thích video và xem
                            bình luận.
                        </p>
                        <Button outline large className={cx("btn-login")}>
                            Login
                        </Button>
                    </div>
                )}
                <SuggestedAccounts
                    label="Suggested accounts"
                    data={suggestedUser}
                    preview={true}
                />

                <SuggestedAccounts
                    label="Following accounts"
                    data={followedUser}
                />

                <section className={cx("wrapper-hashtag")}>
                    <p className={cx("title-wrapper")}>Khám phá</p>
                    <div className={cx("dflex")}>
                        {hashtagItem.map((item) => (
                            <a href={"#"} className={cx("href-hashtag")}>
                                <div className={cx("hashtag")}>
                                    <Button
                                        text
                                        leftIcon={item.icon}
                                        className={cx("btn-hashtag")}
                                    >
                                        <span className={cx("hashtag-text")}>
                                            {item.text}
                                        </span>
                                    </Button>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </aside>
    );
}

export default SideBar;
