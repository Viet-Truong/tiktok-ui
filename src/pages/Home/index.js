import { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

import Post from "../../Components/Post";
import * as postServices from "../../API/postServices";

const FIRST_PAGE = 1;
const cx = classNames.bind(styles);
function Home() {
    const node = useRef();
    const bodyRef = useRef();
    const [page, setPage] = useState(FIRST_PAGE);
    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const result = await postServices.getPost({
                type: "for-you",
                page,
            });
            if (page === 1) {
                setPost(result);
            } else {
                setPost((prev) => [...prev, ...result]);
            }
        };
        fetchPost();
    }, [page]);
    console.log(bodyRef.current);

    // bodyRef.current.addEventListener("scroll", () => {
    //     console.log("toi dya r");
    // });

    return (
        <div className={cx("wrapper")} ref={bodyRef}>
            {post.map((item, index) => (
                <Post data={item} key={index} />
            ))}
        </div>
    );
}

export default Home;
