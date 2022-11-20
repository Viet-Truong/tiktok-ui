import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);
function Login({ login }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner-login")}>
                <div className={cx("background")}></div>
                <div className={cx("wrapper-form")}>
                    <h2 className={cx("title")}>
                        WELCOME <span>BACK</span>
                    </h2>
                    <from
                        onSubmit={() => login(username, password)}
                        className={cx("form")}
                    >
                        <div className={cx("input")}>
                            <label for={username} className={cx("label")}>
                                Username
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className={cx("input")}>
                            <label for={username} className={cx("label")}>
                                Password
                            </label>
                            <input
                                type="text"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className={cx("des-form")}>
                            <div className={cx("check-remember")}>
                                <input
                                    type="checkbox"
                                    className={cx("checkbox")}
                                />
                                <span className={cx("remember")}>
                                    Remember me
                                </span>
                            </div>
                            <div className={cx("forgot-pass")}>
                                Forgot your password?
                            </div>
                        </div>
                        <button className={cx("btn-login")}>Login</button>
                        <div className={cx("link-sign-up")}>
                            <div className={cx("no-account")}>
                                Haven't account
                            </div>
                            <div className={cx("sign-up")}>Sign Up</div>
                        </div>
                    </from>
                </div>
            </div>
        </div>
    );
}

export default Login;
