import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPen } from '@fortawesome/free-solid-svg-icons';

import Button from './../../Components/Button';
import Image from '../../Components/Image';
import * as userServices from '../../API/userServices';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Profile() {
    const [isActive, setIsActive] = useState('Video');
    const location = useLocation();
    const [profile, setProfile] = useState('');
    const btnVideoRef = useRef();
    const btnLikedRef = useRef();
    const btnLikeRef = useRef();
    const lineRef = useRef();

    useEffect(() => {
        drawLine(btnVideoRef);
        const fetch = async () => {
            const result = await userServices.getProfile(location.pathname);
            console.log(result);
            setProfile(result);
        };
        fetch();
    }, [location]);

    const handleMouseEnter = (btn) => {
        drawLine(btn);
    };

    const handleMouseLeave = () => {
        if (isActive === 'Video') {
            drawLine(btnVideoRef);
        } else if (isActive === 'Like') {
            drawLine(btnLikeRef);
        } else if (isActive === 'Liked') {
            drawLine(btnLikedRef);
        }
    };

    const handleButtonClick = (btnName) => {
        setIsActive(btnName);
    };

    const drawLine = (btn) => {
        lineRef.current.style.left = btn.current.offsetLeft + 'px';
        lineRef.current.style.width = btn.current.offsetWidth + 'px';
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div className={cx('header__info')}>
                        <Image
                            src={profile?.avatar}
                            className={cx('header__info-avatar')}
                        />
                        <div className={cx('header__description')}>
                            <h1>.{profile?.nickname}</h1>
                            <h4>{`${profile?.first_name} ${profile?.last_name}`}</h4>
                            <Button
                                outline
                                leftIcon={<FontAwesomeIcon icon={faPen} />}
                                className={cx(
                                    'header__description--btn-update'
                                )}
                            >
                                Sửa hồ sơ
                            </Button>
                        </div>
                    </div>
                    <div className={cx('header__follow')}>
                        <span>
                            <strong>{profile?.followings_count}</strong> Đang
                            Follow
                        </span>
                        <span>
                            <strong>{profile?.followers_count}</strong> Follower
                        </span>
                        <span>
                            <strong>{profile?.likes_count}</strong> Thích
                        </span>
                    </div>
                    <div className={cx('header__story')}>{profile?.bio}</div>
                </div>
                <div className={cx('header__content')}>
                    <div className={cx('tab')}>
                        <button
                            ref={btnVideoRef}
                            onMouseEnter={() => handleMouseEnter(btnVideoRef)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleButtonClick('Video')}
                            className={cx('btn_tab')}
                        >
                            <p>Video</p>
                        </button>
                        <button
                            ref={btnLikeRef}
                            onMouseEnter={() => handleMouseEnter(btnLikeRef)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleButtonClick('Like')}
                            className={cx('btn_tab')}
                        >
                            <FontAwesomeIcon icon={faLock} />
                            <p>Yêu thích</p>
                        </button>
                        <button
                            ref={btnLikedRef}
                            onMouseEnter={() => handleMouseEnter(btnLikedRef)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleButtonClick('Liked')}
                            className={cx('btn_tab')}
                        >
                            <FontAwesomeIcon icon={faLock} />
                            <p>Đã thích</p>
                        </button>
                        <div className={cx('line')} ref={lineRef}></div>
                    </div>
                    <div className={cx('tab_content')}>
                        {isActive === 'Video' && profile.videos?.length > 0 ? (
                            <div className={cx('wrapper-video')}>
                                {profile.videos.map((video) => {
                                    return (
                                        <div className={cx('video')}>
                                            <a
                                                href={video.file_url}
                                                target='blank'
                                            >
                                                <Image
                                                    className={cx('thumb')}
                                                    src={video.thumb_url}
                                                />
                                                <div className={cx('des')}>
                                                    <FontAwesomeIcon
                                                        icon={faPlay}
                                                        className={cx(
                                                            'icon-play'
                                                        )}
                                                    />
                                                    <p
                                                        className={cx(
                                                            'liked_count'
                                                        )}
                                                    >
                                                        {video.likes_count}
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className={cx('wrapper-video')}>
                                Trang web hiện tại không hỗ trợ tính năng này!
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
