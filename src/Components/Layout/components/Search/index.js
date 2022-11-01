import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { useEffect, useState, useRef } from "react";

import { Wrapper as PopperWrapper } from "../../../../Components/Popper";
import AccountItem from "../../../AccountItem";
import TippyHeadless from "@tippyjs/react/headless";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        // gia su qua trinh` fetchAPI de lay ra cac ket qua search va
        // setSeachResult de hien thi ra
        setTimeout(() => {
            //call API is here
            setSearchResults([1, 2, 3]);
        }, 0);
    }, []);

    const handleClear = () => {
        setSearchValue("");
        setSearchResults([]);
        inputRef.current.focus();
    };
    const handleHideResults = () => {
        setShowResults(false);
    };
    return (
        <>
            <TippyHeadless
                interactive
                // visible de kta xem searchResults co phan tu k neu co thi moi hien
                visible={showResults && searchResults.length > 0}
                // cho select vao` ket qua
                render={(attrs) => (
                    <div
                        className={cx("search-result")}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx("search-label")}>Accounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResults}
            >
                <div className={cx("search")}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search account and videos"
                        spellCheck={false}
                        type="text"
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResults(true)}
                    />
                    {!!searchValue && (
                        <button className={cx("clear")} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {/* <FontAwesomeIcon
                        className={cx("loading")}
                        icon={faSpinner}
                    /> */}
                    <button className={cx("search-btn")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </TippyHeadless>
        </>
    );
}

export default Search;
