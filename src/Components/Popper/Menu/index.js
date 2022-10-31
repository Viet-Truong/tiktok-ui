import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import { useState } from "react";

import MenuItem from "./MenuItem";
import { Wrapper as PopperWrapper } from "../../../Components/Popper";
import Header from "./Header";

const defaultFN = () => {};
const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange = defaultFN }) {
    // history ban dau` nhan vao` 1 mang gom 1 Object chinh la menu_items
    const [history, setHistory] = useState([{ data: items }]);

    // current se bang phan tu cuoi cung trong mang de render ra menu_item vi` khi click vao phan tu trong menu_items thi` se add them data vao` cuoi history
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            // ktra xem item cua menu_items co phan tu con k
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        // neu nhu co phan tu con thi` click se add data cua children vao history tu` do current nhan dc data la ptu cuoi cua history va` render ra menu_item con
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            delay={[0, 500]}
            offset={[12, 8]}
            placement="bottom-end"
            interactive
            // cho select vao` ket qua
            render={(attrs) => (
                <div className={cx("menu-items")} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx("menu-popper")}>
                        {/* ktra neu history co bao nhieu ptu de render ra header cua menu_item */}
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                // xu li khi nhan vao header se back ve lai bang cach setHistory lai bang cach xoa di ptu cuoi cua history
                                onBack={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, prev.length - 1)
                                    );
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
