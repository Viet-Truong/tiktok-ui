import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { useState } from 'react';

import Image from '../../Image';
import Button from '../../Button';
import Modal from '../../Modal';
import handleFollowFunc from './../../Post/handleFollow';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);
function AccountPreview({ data }) {
    const { auth } = useSelector((state) => state.auth);
    const [dataAccountItem, setDataAccountItem] = useState(data);
    let toggleFollowCheck = dataAccountItem.isFollowed ? '' : 'isFollowed';

    const handleFollow = async () => {
        const isFollowed = await handleFollowFunc(data);
        setDataAccountItem((user) => ({ ...user, is_followed: isFollowed }));
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image
                    src={dataAccountItem.avatar}
                    alt={dataAccountItem.nickname}
                    className={cx('avatar')}
                />
                <div className={cx('follow-btn')} onClick={handleFollow}>
                    {auth ? (
                        dataAccountItem.is_followed ? (
                            <Button
                                outline
                                className={cx(`${toggleFollowCheck}`)}
                            >
                                Following
                            </Button>
                        ) : (
                            <Button outline>Follow</Button>
                        )
                    ) : (
                        <Button
                            outline
                            onClick={() => alert('Vui lòng đăng nhập')}
                        >
                            Follow
                        </Button>
                    )}
                </div>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{dataAccountItem.nickname}</strong>
                    {dataAccountItem.tick && (
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={cx('check')}
                        />
                    )}
                </p>
                <p
                    className={cx('name')}
                >{`${dataAccountItem.first_name} ${dataAccountItem.last_name}`}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>
                        {dataAccountItem.followers_count} M{' '}
                    </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>
                        {dataAccountItem.likes_count} M{' '}
                    </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountPreview;
