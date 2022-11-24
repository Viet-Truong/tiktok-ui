import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
import { useState, useEffect } from "react";
import Tippy from "@tippyjs/react/headless";
import { useSelector } from "react-redux";

import { Wrapper as PopperWrapper } from "../../../Components/Popper";
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
        text: "Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n",
    },
    {
        icon: <FontAwesomeIcon icon={faMusic} />,
        text: "Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng",
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
        text: "Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham",
    },
];

const footerItems = [
    {
        row: [
            {
                title: "Giới thiệu",
            },
            {
                title: "Bảng tin",
            },
            {
                title: "Liên Hệ",
            },
            {
                title: "Sự Nghiệp",
            },
            {
                title: "ByteDance",
            },
        ],
    },
    {
        row: [
            {
                title: "TikTok for Good",
            },
            {
                title: "Quảng cáo",
            },
            {
                title: "Developers",
            },
            {
                title: "Transparency",
            },
        ],
    },
    {
        row: [
            {
                title: "TikTok Rewards",
            },
            {
                title: "TikTok Browse",
            },
            {
                title: "TikTok Embeds",
            },
        ],
    },
    {
        row: [
            {
                title: "Trợ giúp",
            },
            {
                title: "An Toàn",
            },
            {
                title: "Điều khoản",
            },
            {
                title: "Quyền riêng tư",
            },
        ],
    },
    {
        row: [
            {
                title: "Creator Portal",
            },
            {
                title: "Hướng dẫn",
            },
            {
                title: "Cộng đồng",
            },
        ],
    },
];

function SideBar() {
    const { auth } = useSelector((state) => state.auth);
    const [followedUser, setFollowedUser] = useState([]);
    const [suggestedUser, setSuggestedUser] = useState([]);

    const renderPreview = () => {
        return (
            <PopperWrapper className={cx("popover-more")}>
                <p className={cx("popover-btn-text")}>
                    NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
                </p>
            </PopperWrapper>
        );
    };

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

                {!auth && (
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
                    data={auth && followedUser}
                />

                <section className={cx("wrapper-hashtag")}>
                    <p className={cx("title-wrapper-hashtag")}>Khám phá</p>
                    <div className={cx("dflex")}>
                        {hashtagItem.map((item, index) => (
                            <a
                                href={"#"}
                                className={cx("href-hashtag")}
                                key={index}
                            >
                                <div className={cx("hashtag")}>
                                    <Button
                                        text
                                        leftIcon={item.icon}
                                        className={cx("btn-hashtag")}
                                    >
                                        <p className={cx("hashtag-text")}>
                                            {item.text}
                                        </p>
                                    </Button>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                <section className={cx("wrapper-footer")}>
                    {footerItems.map((item, index) => (
                        <div className={cx("wrapper-row")} key={index}>
                            {item.row.map((item, index) => (
                                <a className={cx("item")} key={index}>
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    ))}
                    {/* Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.  */}
                    <div>
                        <Tippy
                            interactive
                            delay={[600, 0]}
                            offset={[0, 10]}
                            render={renderPreview}
                            placement="top"
                        >
                            <p className={cx("more-btn")}>Thêm</p>
                        </Tippy>
                    </div>

                    <p className={cx("copyright")}>
                        © {""} 2022 TikTok - Code by Viet Truong
                    </p>
                </section>
            </div>
        </aside>
    );
}

export default SideBar;
