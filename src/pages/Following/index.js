import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Following.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";

import Post from "../../Components/Post";
import * as postServices from "../../API/postServices";

const cx = classNames.bind(styles);
function Following() {
    const { user } = useSelector((state) => state.auth);
    const [post, setPost] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(2);

    useEffect(() => {
        const getListVideo = async () => {
            const result = await postServices.getPost({
                type: "following",
            });
            setPost(result);
        };

        getListVideo();
    }, []);

    const fetchListVideo = async () => {
        const result = await postServices.getPost({
            type: "following",
            page,
        });
        return result;
    };

    const fetchData = async () => {
        const listVideoNext = await fetchListVideo();

        setPost([...post, ...listVideoNext]);
        if (listVideoNext.length === 0) {
            setHasMore(false);
        }
        setPage((prev) => prev + 1);
    };

    return (
        <div className={cx("wrapper")}>
            <InfiniteScroll
                dataLength={post.length}
                next={fetchData}
                hasMore={hasMore}
                endMessage={<h4>End</h4>}
            >
                {user &&
                    post.map((item, index) => <Post data={item} key={index} />)}
            </InfiniteScroll>
        </div>
    );
}

export default Following;
