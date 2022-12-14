import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./SignUp.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../../Components/Button";
import { authRegister } from "../../redux/authAction";
import config from "../../config";

const cx = classNames.bind(styles);
function SignUp() {
    const { auth } = useSelector((state) => state.auth);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (auth) {
            navigate(config.routes.home);
        }
    }, [navigate, auth]);

    const submit = (e) => {
        e.preventDefault();
        dispatch(authRegister({ email, password }));
    };
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner-login")}>
                <div className={cx("background")}></div>
                <div className={cx("wrapper-form")}>
                    <h2 className={cx("title")}>
                        WELCOME <span>TO TIKTOK</span>
                    </h2>
                    <form className={cx("form")}>
                        <div className={cx("input")}>
                            <label className={cx("label")}>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className={cx("input")}>
                            <label className={cx("label")}>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </div>
                        <button className={cx("btn-signup")} onClick={submit}>
                            Sign Up
                        </button>
                        <div className={cx("link-sign-in")}>
                            <div className={cx("no-account")}>
                                Have account?
                                <Button
                                    className={cx("sign-in")}
                                    to="/login"
                                    text
                                >
                                    Sign In
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
