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

const cx = classNames.bind(styles);
const PER_PAGE = 5;

function SideBar() {
    const [suggestedUser, setSuggestedUser] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const result = await userService.getSuggested({
                page: 1,
                perPage: PER_PAGE,
            });
            setSuggestedUser(result);
        };
        fetch();
    }, []);

    return (
        <aside className={cx("wrapper")}>
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

            <SuggestedAccounts
                label="Suggested accounts"
                data={suggestedUser}
            />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default SideBar;
