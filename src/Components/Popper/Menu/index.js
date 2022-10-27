import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import MenuItem from "./MenuItem";
import { Wrapper as PopperWrapper } from "../../../Components/Popper";

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            delay={[0, 700]}
            placement="bottom-end"
            interactive
            // cho select vao` ket qua
            render={(attrs) => (
                <div className={cx("menu-items")} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx("menu-popper")}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
