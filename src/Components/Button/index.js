import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    rounded = false,
    disabled = false,
    text = false,
    small = false,
    large = false,
    primary = false,
    outline = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    // mac dinh se la` button
    let Component = "button";
    const props = {
        // mac dinh nut nao` cung se co onClick
        onClick,
        // cac props da dang nhu target, ...
        ...passProps,
    };

    if (disabled) {
        // cach 1
        // delete props.onClick;
        // cach 2
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        });
    }

    if (to) {
        // neu la to thi` no la` link noi bo nen se dung react-router-dom
        props.to = to;
        Component = Link;
    } else if (href) {
        // k phai link noi bo, chuyen huong sang 1 trang khac
        props.href = href;
        Component = "a";
    }
    const classes = cx("wrapper", {
        primary,
        outline,
        text,
        small,
        large,
        disabled,
        rounded,
        [className]: className,
    });
    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("text-btn")}>{children}</span>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;
