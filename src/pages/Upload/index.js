import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../Components/Button';
import * as uploadServices from '../../API/uploadServices';

import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function Upload() {
    const [selectedVideo, setSelectedVideo] = useState();
    const [previewVideo, setPreviewVideo] = useState();
    const [playing, setPlaying] = useState(false);
    const [title, setTitle] = useState();
    const [thumbnailTime, setThumbnailTime] = useState();
    const [viewableVideo, setViewableVideo] = useState('public');
    const [allow, setAllow] = useState([]);
    const navigate = useNavigate();
    const videoRef = useRef();
    const formDataRef = useRef(new FormData());

    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setViewableVideo(selectedValue);
    };

    const handleAllowChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setAllow([...allow, value]); // Thêm giá trị vào mảng allow
        } else {
            setAllow(allow.filter((item) => item !== value)); // Xóa giá trị khỏi mảng allow
        }
    };

    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        setSelectedVideo(file);
        setPreviewVideo(URL.createObjectURL(file));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        formDataRef.current.append('description', title);
        formDataRef.current.append('upload_file', selectedVideo);
        formDataRef.current.append('thumbnail_time', thumbnailTime);
        formDataRef.current.append('viewable', viewableVideo);
        formDataRef.current.append('allows[]', allow);

        const fetch = async () => {
            const result = await uploadServices.uploadVideo(
                formDataRef.current
            );
            if (result) {
                navigate('/');
            } else {
                alert('Upload failed');
            }
        };

        fetch();
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
                                                placeholder={
                                                    'Điền tiêu đề video'
                                                }
                                                value={title}
                                                onChange={(e) =>
                                                    setTitle(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className={cx('thumb_video', 'option')}
                                    >
                                        <div>
                                            <h4>Thumbnails</h4>
                                        </div>
                                        <div>
                                            <input
                                                type='number'
                                                className={cx(
                                                    'title_video-input'
                                                )}
                                                placeholder={
                                                    'Điền số giây bạn muốn cap làm thumbnail'
                                                }
                                                value={thumbnailTime}
                                                onChange={(e) =>
                                                    setThumbnailTime(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className={cx(
                                            'select_privacy_video',
                                            'option'
                                        )}
                                    >
                                        <div>
                                            <h4>Ai có thể xem video này</h4>
                                        </div>
                                        <select
                                            className={cx('select')}
                                            onChange={handleChange}
                                        >
                                            <option value='public'>
                                                Công khai
                                            </option>
                                            <option value='friends'>
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
                                                    value={'comment'}
                                                    onChange={handleAllowChange}
                                                />
                                                <p>Bình luận</p>
                                            </div>
                                            <div className={cx('checkbox')}>
                                                <input
                                                    type='checkbox'
                                                    value={'duet'}
                                                    onChange={handleAllowChange}
                                                />
                                                <p>Duet</p>
                                            </div>
                                            <div className={cx('checkbox')}>
                                                <input
                                                    type='checkbox'
                                                    value={'stitch'}
                                                    onChange={handleAllowChange}
                                                />
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
                                        <Button primary onClick={handleSubmit}>
                                            Đăng
                                        </Button>
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
