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
import { hashtagItem, footerItems } from "../../../data/sidebarData";

const cx = classNames.bind(styles);
const PER_PAGE = 5;

function SideBar() {
    const { auth } = useSelector((state) => state.auth);
    const [isFirst, setIsFirst] = useState(true);
    const [isSeeAll, setIsSeeAll] = useState(true);
    const [isSeeMore, setIsSeeMore] = useState(true);
    const [pageSuggested, setPageSuggested] = useState(1);
    const [pageFollow, setPageFollow] = useState(1);
    const [followedUser, setFollowedUser] = useState([]);
    const [suggestedUser, setSuggestedUser] = useState([]);
    const [suggestedUserMore, setSuggestedUserMore] = useState([]);
    const suggestedUserCut = suggestedUser.slice(0, 5);

    const renderPreview = () => {
        return (
            <PopperWrapper className={cx("popover-more")}>
                <p className={cx("popover-btn-text")}>
                    NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
                </p>
            </PopperWrapper>
        );
    };

    // SUGGEST USER
    useEffect(() => {
        const fetchSuggest = async () => {
            const result = await userService.getSuggested({
                page: pageSuggested,
                perPage: PER_PAGE,
            });
            setSuggestedUser(result);
        };
        fetchSuggest();
    }, [pageSuggested]);

    const fetchUserSuggest = async () => {
        const result = await userService.getSuggested({
            page: 2,
            perPage: 15,
        });
        return result;
    };

    const handleSeeAll = async () => {
        if (isSeeAll) {
            if (isFirst) {
                const listUserNext = await fetchUserSuggest();
                setSuggestedUser([...suggestedUser, ...listUserNext]);
                setSuggestedUserMore([...suggestedUser, ...listUserNext]);
                setIsSeeAll(false);
                setIsFirst(false);
            } else {
                setSuggestedUser(suggestedUserMore);
                setIsSeeAll(false);
            }
        } else {
            setSuggestedUser(suggestedUserCut);
            setIsSeeAll(true);
        }
    };

    // FOLLOWED USER

    useEffect(() => {
        const fetchFollow = async () => {
            const result = await userService.getFollowed({
                page: pageFollow,
            });
            if (result.length === 0) {
                setIsSeeMore(false);
            }
            setFollowedUser((prev) => [...prev, ...result]);
        };
        fetchFollow();
    }, [pageFollow]);

    const handleSeeMore = async () => {
        setPageFollow(pageFollow + 1);
    };

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
                        <Button
                            outline
                            large
                            className={cx("btn-login")}
                            to={config.routes.login}
                        >
                            Login
                        </Button>
                    </div>
                )}
                <SuggestedAccounts
                    label="Suggested accounts"
                    data={suggestedUser}
                    preview={true}
                    onSeeAll={handleSeeAll}
                    isSeeAll={isSeeAll}
                />

                <SuggestedAccounts
                    label="Following accounts"
                    data={auth ? followedUser : []}
                    onSeeMore={handleSeeMore}
                    isSeeMore={isSeeMore}
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
