import classNames from "classnames/bind";
import styles from "./Video.module.scss";
import { useRef, useState, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Video({ src }) {
    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };
    useEffect(() => {
        videoRef.current.volume = 0.1;
        if (isVisible) {
            videoRef.current.play();
            setPlaying(true);
        } else {
            if (videoRef.current.play) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
    }, [isVisible]);

    let toggleIcon = playing ? (
        <FontAwesomeIcon icon={faPause} className={cx("control-icon")} />
    ) : (
        <FontAwesomeIcon icon={faPlay} className={cx("control-icon")} />
    );
    return (
        <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
            <div className={cx("wrapper")}>
                <div className={cx("wrapper-video")}>
                    <video
                        className={cx("video")}
                        src={src}
                        loop
                        autoPlay
                        ref={videoRef}
                        onClick={handleVideo}
                    />
                    <button className={cx("control")} onClick={handleVideo}>
                        {toggleIcon}
                    </button>
                </div>
            </div>
        </VisibilitySensor>
    );
}

export default Video;
