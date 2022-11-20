import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SignUp.module.scss";

const cx = classNames.bind(styles);
function SignUp({ SignUp }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner-login")}>
                <div className={cx("background")}></div>
                <div className={cx("wrapper-form")}>
                    <h2 className={cx("title")}>
                        WELCOME <span>TO TIKTOK</span>
                    </h2>
                    <from
                        onSubmit={() => SignUp(username, password)}
                        className={cx("form")}
                    >
                        <div className={cx("input")}>
                            <label for={username} className={cx("label")}>
                                Email
                            </label>
                            <input
                                type="email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your email"
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
                        <button className={cx("btn-signup")}>Sign Up</button>
                        <div className={cx("link-sign-in")}>
                            <div className={cx("no-account")}>
                                Have account?
                            </div>
                            <div className={cx("sign-in")}>Sign In</div>
                        </div>
                    </from>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
