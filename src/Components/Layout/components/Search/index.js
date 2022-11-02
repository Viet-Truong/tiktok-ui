import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { useEffect, useState, useRef } from "react";
import { useDebounce } from "../../../../hooks";

import * as searchService from "../../../../API/searchServices";
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
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {
        // handle input = ''
        if (!debounced.trim()) {
            setSearchResults([]);
            return;
        }
        // call API
        const fetch = async () => {
            setLoading(true);
            const result = await searchService.search(debounced);
            setSearchResults(result);
            setLoading(false);
        };
        fetch();
    }, [debounced]);

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
                            {searchResults.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
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
                    {!!searchValue && !loading && (
                        <button className={cx("clear")} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <FontAwesomeIcon
                            className={cx("loading")}
                            icon={faSpinner}
                        />
                    )}
                    <button className={cx("search-btn")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </TippyHeadless>
        </>
    );
}

export default Search;
