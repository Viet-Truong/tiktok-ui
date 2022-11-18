import { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

import Post from "../../Components/Post";
import * as postServices from "../../API/postServices";

const FIRST_PAGE = 1;
const cx = classNames.bind(styles);
function Home() {
    const bodyRef = useRef();
    const [page, setPage] = useState(FIRST_PAGE);
    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const result = await postServices.getPost({
                type: "for-you",
                page,
            });
            setPost((prev) => [...prev, ...result]);
        };
        fetchPost();
    }, [page]);

    const onScroll = () => {
        if (bodyRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = bodyRef.current;
            if (scrollTop + clientHeight === scrollHeight) {
                setPage(page + 1);
                console.log("bottom");
            }
        }
    };

    return (
        <div className={cx("wrapper")} ref={bodyRef} onScroll={onScroll}>
            {post.map((item, index) => (
                <Post data={item} key={index} />
            ))}
        </div>
    );
}

export default Home;
