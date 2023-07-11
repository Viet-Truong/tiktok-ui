import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
import { useState, useRef } from 'react';

import Button from '../../Components/Button';

import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function Upload() {
    const [selectedVideo, setSelectedVideo] = useState();
    const [previewVideo, setPreviewVideo] = useState();
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef();

    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        setSelectedVideo(file);
        setPreviewVideo(URL.createObjectURL(file));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-content')}>
                <div className={cx('upload')}>
                    {selectedVideo === undefined ? (
                        <label
                            htmlFor={'upload'}
                            className={cx('upload-label')}
                        >
                            <input
                                type='file'
                                name=''
                                id='upload'
                                className={cx('upload-input')}
                                onChange={handleVideoChange}
                            />
                            <div className={cx('upload-description')}>
                                <FontAwesomeIcon
                                    icon={faCloudArrowUp}
                                    className={cx('upload-icon')}
                                />
                                <h4 className={cx('upload-title', 'mt16')}>
                                    Chọn video để tải lên
                                </h4>
                                <p>Hoặc kéo và thả tập tin</p>
                                <p>
                                    Có thể tách video dài thành nhiều phần để
                                    tăng khả năng hiển thị
                                </p>
                                <p className={cx('mt16')}>MP4 hoặc WebM</p>
                                <p>Độ phân giải 720x1280 trở lên</p>
                                <p>Tối đa 30 phút</p>
                                <p>Nhỏ hơn 2GB</p>
                                <Button primary className={cx('btn-upload')}>
                                    Chọn tập tin
                                    <label htmlFor={'upload'} />
                                </Button>
                            </div>
                        </label>
                    ) : (
                        <>
                            <div className={cx('wrapper_header_uploaded')}>
                                <h2 className={cx('header')}>Tải video lên</h2>
                                <p className={cx('header_description')}>
                                    Đăng video vào tài khoản của bạn
                                </p>
                            </div>
                            <div className={cx('wrapper_content_uploaded')}>
                                <div className={cx('video_preview')}>
                                    <video
                                        className={cx('video')}
                                        src={previewVideo}
                                        ref={videoRef}
                                        onClick={handleVideo}
                                        controls={true}
                                        controlsList={
                                            'nodownload noremoteplayback noplaybackrate'
                                        }
                                        loop
                                        playsInline
                                        disablePictureInPicture
                                    />
                                </div>
                                <div className={cx('wrapper_info-video')}>
                                    <div
                                        className={cx('title_video', 'option')}
                                    >
                                        <div>
                                            <h4>Chú thích</h4>
                                        </div>
                                        <div>
                                            <input
                                                type='text'
                                                className={cx(
                                                    'title_video-input'
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className={cx('thumb_video', 'option')}
                                    ></div>
                                    <div
                                        className={cx(
                                            'select_privacy_video',
                                            'option'
                                        )}
                                    >
                                        <div>
                                            <h4>Ai có thể xem video này</h4>
                                        </div>
                                        <select className={cx('select')}>
                                            <option value='global'>
                                                Công khai
                                            </option>
                                            <option value='friend'>
                                                Bạn bè
                                            </option>
                                            <option value='private'>
                                                Riêng tư
                                            </option>
                                        </select>
                                    </div>
                                    <div
                                        className={cx('allow_video', 'option')}
                                    >
                                        <div>
                                            <h4>Cho phép người dùng:</h4>
                                        </div>
                                        <div className={cx('wrap_check')}>
                                            <div className={cx('checkbox')}>
                                                <input
                                                    type='checkbox'
                                                    checked
                                                />
                                                <p>Bình luận</p>
                                            </div>
                                            <div className={cx('checkbox')}>
                                                <input type='checkbox' />
                                                <p>Duet</p>
                                            </div>
                                            <div className={cx('checkbox')}>
                                                <input type='checkbox' />
                                                <p>Ghép nối</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('action', 'option')}>
                                        <Button
                                            text
                                            className={cx('btn_cancel')}
                                        >
                                            Huỷ bỏ
                                        </Button>
                                        <Button primary>Đăng</Button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Upload;
