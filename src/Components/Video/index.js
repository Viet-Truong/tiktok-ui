import classNames from "classnames/bind";
import styles from "./Video.module.scss";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Video({ src }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef();
    let toggleIcon = playing ? (
        <FontAwesomeIcon icon={faPause} className={cx("control-icon")} />
    ) : (
        <FontAwesomeIcon icon={faPlay} className={cx("control-icon")} />
    );
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
                <button className={cx("control")} onClick={handleVideo}>
                    {toggleIcon}
                </button>
            </div>
        </div>
    );
}

export default Video;
