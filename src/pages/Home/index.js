import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

import Post from "../../Components/Post";
import * as postServices from "../../API/postServices";

const cx = classNames.bind(styles);
function Home() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const result = await postServices.getPost({
                type: "for-you",
                page: 2,
            });
            setPost(result);
        };
        fetchPost();
    }, []);
    return (
        <div className={cx("wrapper")}>
            {post.map((item, index) => (
                <Post data={item} key={index} />
            ))}
        </div>
    );
}

export default Home;
