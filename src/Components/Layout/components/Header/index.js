import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";

import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import { Wrapper as PopperWrapper } from "../../../../Components/Popper";
import AccountItem from "../../../AccountItem";
import Button from "../../../../Components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
    // sau nay` se co ket qua tra ve`
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        // gia su qua trinh` fetchAPI de lay ra cac ket qua search va
        // setSeachResult de hien thi ra
        setTimeout(() => {
            //call API is here
            setSearchResults([]);
        }, 0);
    }, []);

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img src={images.logo} alt="top top" />
                <>
                    <Tippy
                        interactive
                        // visible de kta xem searchResults co phan tu k neu co thi moi hien
                        visible={searchResults.length > 0}
                        // cho select vao` ket qua
                        render={(attrs) => (
                            <div
                                className={cx("search-result")}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <PopperWrapper>
                                    <h4 className={cx("search-label")}>
                                        Accounts
                                    </h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx("search")}>
                            <input
                                placeholder="Search account and videos"
                                spellCheck={false}
                                type="text"
                            />
                            <button className={cx("clear")}>
                                {/* Clear */}
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            {/* Loading */}
                            <FontAwesomeIcon
                                className={cx("loading")}
                                icon={faSpinner}
                            />
                            <button className={cx("search-btn")}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>
                </>
                <div className={cx("actions")}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
