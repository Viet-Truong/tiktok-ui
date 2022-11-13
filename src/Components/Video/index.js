import classNames from "classnames/bind";
import styles from "./Video.module.scss";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Video({ src }) {
    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);
    const handleVideo = () => {
        if (!playing) {
            videoRef.current.play();
            setPlaying(true);
        } else {
            videoRef.current.pause();
            setPlaying(false);
        }
    };
    return (
        <div className={cx("wrapper")}>
            <div className={cx("wrapper-video")}>
                <video
                    className={cx("video")}
                    src={src}
                    loop
                    ref={videoRef}
                    onClick={handleVideo}
                />
            </div>
        </div>
    );
}

export default Video;
