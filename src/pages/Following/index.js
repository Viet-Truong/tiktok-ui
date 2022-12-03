import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Following.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";

import Post from "../../Components/Post";
import * as postServices from "../../API/postServices";
import Modal from "../../Components/Modal";

const cx = classNames.bind(styles);
function Following() {
    const { auth } = useSelector((state) => state.auth);
    const [close, setClose] = useState(false);
    const [post, setPost] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(2);

    useEffect(() => {
        if (auth) {
            const getListVideo = async () => {
                const result = await postServices.getPost({
                    type: "following",
                });
                setPost(result);
            };

            getListVideo();
        }
    }, [auth]);

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

    // CLOSE MODAL
    const handleClose = () => {
        setClose(true);
    };

    return (
        <div className={cx("wrapper")}>
            {auth ? (
                <InfiniteScroll
                    dataLength={post.length}
                    next={fetchData}
                    hasMore={hasMore}
                    endMessage={<h4 className={cx("end-content")}>End</h4>}
                >
                    {post.map((item, index) => (
                        <Post data={item} key={index} />
                    ))}
                </InfiniteScroll>
            ) : (
                <Modal isClose={close} handleClose={handleClose} />
            )}
        </div>
    );
}

export default Following;
