import classNames from "classnames/bind";
import styles from "./Video.module.scss";
import { useRef, useState, useEffect, memo } from "react";
import VisibilitySensor from "react-visibility-sensor";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Video({ src, time, width }) {
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

    const timeVideo = time < 45 ? "video_short" : "";
    const widthVideo = width > 900 ? "video_horizontal" : "";

    useEffect(() => {
        videoRef.current.volume = 0.2;
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

    // let toggleIcon = playing ? (
    //     <FontAwesomeIcon icon={faPause} className={cx("control-icon")} />
    // ) : (
    //     <FontAwesomeIcon icon={faPlay} className={cx("control-icon")} />
    // );
    return (
        <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
            <div className={cx("wrapper", `${widthVideo}`)}>
                <div className={cx("wrapper-video")}>
                    <video
                        className={cx("video", `${timeVideo}`)}
                        src={src}
                        ref={videoRef}
                        onClick={handleVideo}
                        controls={true}
                        controlsList={
                            "nofullscreen nodownload noremoteplayback noplaybackrate"
                        }
                        loop
                        playsInline
                        disablePictureInPicture
                    />
                    {/* <button className={cx("control")} onClick={handleVideo}>
                        {toggleIcon}
                    </button> */}
                </div>
            </div>
        </VisibilitySensor>
    );
}

export default memo(Video);
